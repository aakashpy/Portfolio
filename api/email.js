const Router = require("express").Router();
const EmailModel = require("../schema/email")
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.EMAIL_KEY);
// Route - /
// Method - GET
const msg = {
    to: 'aakashghole-cmpn@atharvacoe.ac.in',
    from: 'gholeaakash03@gmail.com', // Use the email address or domain you verified above
    subject: 'Sending with Twilio SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  };

// Get all emails subscribed

Router.get("/",async (req,res)=>{
    const getAllEmail = await EmailModel.find();
    return res.json(getAllEmail);
  //   sgMail.send(msg)
  //   .then(() => {
  //       return res.json({message:"email sent successfully"})
  //   }, error => {
  //   console.error(error);

  //   if (error.response) {
  //     console.error(error.response.body)
  //   }
  // });
  //   return res.json({message:"email server working"});
})

// Get email of current user if present
Router.get("/:email",async(req, res)=>{
  const getemail = await EmailModel.findOne({
    email: req.params.email,
});
if (!getemail) {
    return res.json({
        error: `No email found named ${req.params.email}`,
    });
}
return res.json(getemail);
})

// Post email to mongo

module.exports = Router;