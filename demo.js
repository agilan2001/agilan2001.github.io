var http = require('http');
var nodemailer = require('nodemailer');
var url = require('url');

http.createServer(function (req, res) {
  var q = url.parse(req.url, true)
  var mail = q.query.mail;
  if(mail){
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'agilanvlr2001@gmail.com',
        pass: 'Ikaa@2001'
      }
    });

    var mailOptions = {
      from: 'agilanvlr2001@gmail.com',
      to: mail,
      subject: 'hi '+ Date.now(),
      text: 'hello everyone!'
    };

    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        res.end(error);
      } else {
        res.end('Email sent: ' + info.response);
        console.log("sent");
      }
    });
  }
}).listen(process.env.PORT || 3000, function () {
  console.log("SERVER STARTED PORT: 3000");
});