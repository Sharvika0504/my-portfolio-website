import { Object } from "prop-types";
import { Subject } from 'rxjs';
import { TOTAL_SCREENS } from "./commonUtils";

export default class scrollService{
    static scrollHandler = new scrollService();
    static currentScreenBroadCaster = new Subject()
    static currentScreenFadeIn = new Subject()

    constructor(){
        window.addEventListener('scroll', this.currentScreenUnderViewPort);
    } 
    scrollToHireMe = () =>{
        let contactMeScreen =  document.getElementById("CONTACT ME")
        if(!contactMeScreen) return;
        contactMeScreen.scrollIntoView({behavior: "smooth"});
    }
    scrollToHome = () =>{
        let HomeScreen =  document.getElementById("HOME")
        if(!HomeScreen) return;
        HomeScreen.scrollIntoView({behavior: "smooth"});
    }
    isElementInView=(elem, type)=>{
        let rec = elem.getBoundingClientRect();
        let elementTop = rec.top;
        let elementBottom = rec.bottom;
        let partiallyVisible = elementTop < window.innerHeight && elementBottom >= 0;
        let completelyVisible = elementTop >=0 && elementBottom <= window.innerHeight;
        switch(type){
            case "partial":
                return partiallyVisible;
            case "complete":
                return completelyVisible;
            default:
                return false;
        }
    }
    checkCurrentScreenUnderViewPort = (event) =>{
        if(!event || Object.keys(event).length < 1) return;
        for(let screen of TOTAL_SCREENS){
            let screenFromDOM = document.getElementById(screen.screen_name);
            if(!screenFromDOM) continue;

            let fullyVisible = document.isElementInView(screenFromDOM, "complete");
            let partiallyVisible = document.isElementInView(screenFromDOM, "partial");

           
                if(fullyVisible || partiallyVisible){
                    scrollService.currentScreenBroadCaster.next({
                        screenInView: screen.screen_name,
                    });
                    break;
                }

            
        }
    }
}