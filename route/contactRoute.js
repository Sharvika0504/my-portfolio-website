const router = require('express').Router()
const nodemailer = require('nodemailer')
const { error } = require('console');


router.post('/contact', (req,res) => {
    let data = req.body;
    if (data.name.length === 0 || data.email.length === 0 || data.message.length === 0){
        return res.json({msg: "Please Fill All The Fields"})
}
        let smtpTransporter = nodemailer.createTransport({
            service:'Gmail',
            port: 465,
            auth:{
                user: 'sharvika.kulkarni05@gmail.com',
                pass: 'iwpz wwfo ifex exlm'
            }
        })
        let mailOptions = {
            from:data.email,
            to: `sharvika.kulkarni05@gmail.com`,
            subject: `message from $(data.name)`,
            html:`
            <h3>Information<h3/>
            <ul>
            <li>Name: ${data.name}<li/>
            <li>Email: ${data.email}<li/>
            <ul/>
            <h3>Message<h3/>
            <p>${data.message}<p/>
            `,
        };
       smtpTransporter.sendMail(mailOptions, (error) => {
            try{
                if(error) return res.status(400).json({msg: "Please Fill all the Fields"})
                res.status(200).json({msg: "Thank you for Contacting Me. I will reach Out to you as soon as I can."})
            }catch(error){
                if(error) return res.status(500).json({msg:"Server Error"})
            }
        });

});
module.exports = router;