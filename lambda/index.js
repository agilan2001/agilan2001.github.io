
const nodemailer = require('nodemailer');

var admin = require("firebase-admin");

var serviceAccount = {
    "type": "service_account",
    "project_id": "agilan-pro",
    "private_key_id": "15379ae851e0100291108e2654f45567944ec77b",
    "client_email": "firebase-adminsdk-cbg0u@agilan-pro.iam.gserviceaccount.com",
    "client_id": "102111879254827594874",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-cbg0u%40agilan-pro.iam.gserviceaccount.com"
};

serviceAccount["private_key"] = process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://agilan-pro.firebaseio.com"
});

var db = admin.database();



exports.handler = async (event) => {
    var body = JSON.parse(event.body);

    var ret_val;

    if (body.job == "msg") {
        db.ref("messages").push(body);

        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'agilanvlr2001@gmail.com',
                pass: 'tlbehdowmlmiqsda'
            }
        });


        var mailOptions = {
            from: 'agilanvlr2001@gmail.com',
            to: 'agilanvlr2001@gmail.com',
            subject: 'Agilan Pro MESSAGE NOTIFICATION',
            html: `${body.name || 'Someone'} has sent a Message.<br><br>
        Phone: ${body.tel}<br>
        Mail: ${body.mail}<br>
        Message: ${body.msg}`
        };
        await transporter.sendMail(mailOptions);
        ret_val = "DONE";
    }
    else if (body.job == "view_cnt") {
        await db.ref("view_cnt").transaction((data)=>{
            ret_val = data+1;
            return ret_val;
        })
    }
    return ({
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Headers": "Content-Type",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "POST"
        },
        body: JSON.stringify(ret_val),
    })

};
