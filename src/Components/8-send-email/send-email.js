var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'jmacd87@gmail.com',
    pass: 'Macd1987'
  }
});

var mailOptions = {
  from: 'jmacd_87@hotmail.com',
  to: 'jmacd87@gmail.com',
  subject: 'hello',
  text: `what`
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});