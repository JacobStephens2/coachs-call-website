const sendgrid = require("@sendgrid/mail")
//Your API Key from Sendgrid
sendgrid.setApiKey(process.env.SENDGRID_API_KEY)
const message = {
  //Your authorized email from SendGrid
  from: process.env.SENDGRID_AUTHORIZED_EMAIL,
}

const handler = (req, res) => {
  try {
    if (req.method !== "POST") {
      res.json({ message: "Try a POST!" })
    }

    if (req.body) {
      content = `
        Interest: ${req.body.interest},
        Name: ${req.body.name},
        Organization: ${req.body.organization},
        Role: ${req.body.role},
        Email: ${req.body.email}
        Other: ${req.body.other},
      `;
      message.to = process.env.SENDGRID_TARGET_EMAIL
      message.subject = "Inquiry"
      message.reply_to = req.body.email
      message.text = content
      message.html = content
    }

    return sendgrid.send(message).then(
      () => {
        res.status(200).json({
          message: "Your message was sent",
        })
      },
      error => {
        console.error(error)
        if (error.response) {
          return res.status(500).json({
            error: error.response,
          })
        }
      }
    )
  } catch (err) {
    console.log(err)
    return res.status(500).json({ message: "There was an error", error: err })
  }
}

module.exports = handler
