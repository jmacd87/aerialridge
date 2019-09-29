var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'jmacd87@gmail.com',
    pass: 'Macd1987'
  }
});

var mailOpts = {
  from: req.body.name + ' &lt;' + req.body.email + '&gt;',
  to: GMAIL_USER,
  subject: 'New message from contact form at tylerkrys.ca',
  text: `${req.body.name} (${req.body.email}) says: ${req.body.message}`
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});