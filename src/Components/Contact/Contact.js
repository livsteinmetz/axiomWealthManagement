import React, { useState } from 'react'
import Input from '../Input/Input'
import './Contact.scss'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    const form = document.getElementById('ContactForm')
    const data = new FormData(form)
    const req = new XMLHttpRequest()
    req.open(form.method, form.action)
    req.setRequestHeader('Accept', 'application/json')
    req.onreadystatechange = () => {
      if (req.readyState !== XMLHttpRequest.DONE) return
      if (req.status === 200) {
        setName('')
        setEmail('')
        setMessage('')
        setStatus('Thanks for reaching out!')
      } else {
        const e = JSON.parse(req.response).error
        setStatus(
          `whoops - ${e.includes('email') ? 'invalid email.' : 'gotta fill out the form.'
          }`
        )
      }
    }
    req.send(data)
  }

  return (
    <div id="Contact">
      <div id="Form">
        <Input
          type="text"
          label="Your name..."
          onChange={setName}
          value={name}
        />
        <Input
          type="email"
          label="Your email..."
          onChange={setEmail}
          value={email}
        />
        <Input
          type="textarea"
          label="How can we help?"
          onChange={setMessage}
          value={message}
        />
        <div id="FormSubmit">
          <button disabled={!(name && email && message)} onClick={handleSubmit}>
            Submit
          </button>
          <div id="FormStatus">{status}</div>
        </div>
      </div>

      <form
        id="ContactForm"
        action="https://formspree.io/xjvaplje"
        method="POST"
      >
        <input value={name} type="hidden" name="name" />
        <input value={email} type="hidden" name="_replyto" />
        <input value={message} type="hidden" name="message" />
      </form>
      <div id="ContactContent">
        <h3>Let's talk.</h3>
        <p>
          The best way to learn more about what Axiom can do for you is to get
          in touch.
        </p>
        <p>
          Reach Seth through the secure form, or feel free to use any of the
          following forms of contact.
        </p>
        <p>
          1155 Quarry Commons Drive
          <br />
          Yardley PA 19067
        </p>
        <p id="Phones">
          Office: <a href="tel:2153214300">(215) 321-4300</a>
          <br />
          Mobile: <a href="tel:2152341317">(215) 234-1317</a>
          <br />
          Email: <a href="mailto:sethmchenry@lpl.com">sethmchenry@lpl.com</a>
        </p>
        <div id="Social">
          <a href="tel:2153214300">
            <img src="/phone.png" alt="Phone" />
          </a>
          <a
            href="mailto:sethmchenry@lpl.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/email.png" alt="Email" />
          </a>
          <a
            href="https://www.linkedin.com/company/axiomwealthmgmt"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/linkedin.png" alt="LinkedIn" />
          </a>
          <a
            href="https://twitter.com/AxiomWealthMgmt"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/twitter.png" alt="Twitter" />
          </a>
        </div>
      </div>
    </div>
  )
}
