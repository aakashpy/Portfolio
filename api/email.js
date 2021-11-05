const Router = require("express").Router();
const EmailModel = require("../schema/email")
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.EMAIL_KEY);

Router.get("/",async (req,res)=>{
    const getAllEmail = await EmailModel.find();
    return res.json(getAllEmail);
})

// Get email of current user if present
Router.get("/:email",async(req, res)=>{
  const getemail = await EmailModel.findOne({
    email: req.params.email,
});
console.log(req.params.email)
if (!getemail) {
    return res.json({
      error: `No user found named ${req.params.name}`
    });
}
return res.json(getemail);
})

//post method to send otp

Router.post("/sendOtp/",async(req, res)=>{
  const newemailotp = await req.body;
    sgMail.send(newemailotp)
    .then(() => {
        return res.json({message:"email sent successfully"})
    }, error => {
    console.error(error);
    if (error.response) {
      console.error(error.response.body)
    }
  });
})

// Post email to mongo
Router.post("/add",async(req, res)=>{
  const addemail = await req.body;
  console.log(addemail)
  EmailModel.create(addemail);
  return res.json({message:"Subscribed"})
})

module.exports = Router;