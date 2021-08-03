const express = require('express');
const app = express();
const nodemailer = require('nodemailer');

const PORT = process.env.PORT || 5000;

app.use(express.static(__dirname));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/html/index.html')
})

app.post('/', (req, res) => {
    console.log(req.body);

    const transporter = nodemailer.createTransport({
        //host: ''
        //port: 
        //pentru un alt serviciu inafara de gmail
        service: 'gmail',
        auth: {
            user: 'contact.dragossandu@gmail.com',
            pass: process.env.ADMIN_PASSWORD
        }
    });

    const mailOptions = {
        from: req.body.email,
        to: 'contact.dragossandu@gmail.com',
        subject: `Message from ${req.body.email}: ${req.body.subject}`,
        text: req.body.message
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if ( error ){
            console.log(error);
            res.send('error');
        } else {
            console.log('email sent: ' + info.response);
            res.send('success');
        }
    })
})

app.listen(PORT, ()=>{
    console.log('server running on port ' + PORT);
})