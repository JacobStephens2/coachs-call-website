import * as React from "react"

const ContactForm = () => {
  return (
    <form action="/api/sendgrid" method="POST">
      <h2 style={{ marginBottom: `16px` }}>Contact John</h2>

      <div style={{ marginBottom: `8px` }}>
        <label
          style={{ display: `block`, marginBottom: `4px` }}
          htmlFor="email"
        >
          Your Email
        </label>
        <input name="email" id="email" type="email" required />
      </div>

      <div style={{ marginBottom: `8px` }}>
        <label
          style={{ display: `block`, marginBottom: `4px` }}
          htmlFor="interest"
        >
          What aspect of Coach's Call are you most interested in?:
        </label>
        <input name="interest" id="interest" type="text" />
      </div>

      <div style={{ marginBottom: `8px` }}>
        <label style={{ display: `block`, marginBottom: `4px` }} htmlFor="name">
          Your Name
        </label>
        <input name="name" id="name" type="text" />
      </div>

      <div style={{ marginBottom: `8px` }}>
        <label style={{ display: `block`, marginBottom: `4px` }} htmlFor="role">
          Role
        </label>
        <input name="role" id="role" type="text" />
      </div>

      <div style={{ marginBottom: `8px` }}>
        <label
          style={{ display: `block`, marginBottom: `4px` }}
          htmlFor="organization"
        >
          Organization / College or University
        </label>
        <input name="organization" id="organization" type="text" />
      </div>

      <div style={{ marginBottom: `24px` }}>
        <label
          style={{ display: `block`, marginBottom: `4px` }}
          htmlFor="other"
        >
          Other
        </label>
        <textarea name="other" id="other" type="text" rows="10" cols="30" />
      </div>

      <div>
        <button>Send message</button>
      </div>
    </form>
  )
}

export default ContactForm
