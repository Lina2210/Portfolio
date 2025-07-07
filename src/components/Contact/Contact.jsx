import './Contact.css';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_cw4w9nf', 'template_nzdrz8f', form.current, {
      publicKey: '_3Lwq1GV0S6Qdtjn_'})
      .then(
        (result) => {
          console.log(result.text);
          alert("Mensaje enviado con éxito");
          form.current.reset();
      }, (error) => {
          console.log(error.text);
          alert("Error al enviar el mensaje");
      });
  };

  return (
    <div id="contact" className="contact-area section-padding">
      <div className="container">
        <div className="section-title text-center">
          <h1>Contáctame</h1>
          <p>
          No dudes en escribirme si te interesa trabajar conmigo o saber más sobre mi perfil.
          </p>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="contact">
              <form
                className="form"
                ref={form} onSubmit={sendEmail}
              >
                <div className="row justify-content-center" >
                  <div className="form-group col-md-6 mb-3">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                  <div className="form-group col-md-12 mb-3">
                    <input
                      type="text"
                      name="title"
                      className="form-control"
                      placeholder="Subject"
                      required
                    />
                  </div>
                  <div className="form-group col-md-12 mb-4">
                    <textarea
                      rows="6"
                      name="message"
                      className="form-control"
                      placeholder="Your Message"
                      required
                    ></textarea>
                  </div>
                  <div className="col-md-6 text-center">
                    <button
                      type="submit"
                      value="Send message"
                      name="submit"
                      id="submitButton"
                      className="btn btn-contact-bg"
                      title="Submit Your Message!"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          
        </div>
      </div>
    </div>
  );
}

export default Contact;
