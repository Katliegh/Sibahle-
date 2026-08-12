import "./Contact.css";

function Contact() {
  return (
    <main className="contact-page">

      <section className="page-hero">
        <div>
          <p className="section-label">CONTACT US</p>
          <h1>Get in Touch</h1>
          <p>
            Contact Sibahle Day Care for more information.
          </p>
        </div>
      </section>

      <section className="contact-section">
        <div className="content-container">

          <div className="contact-grid">

            <div className="contact-information">

              <p className="section-label">CONTACT DETAILS</p>

              <h2>We'd Love to Hear From You</h2>

              <div className="contact-item">
                <span>📍</span>
                <div>
                  <h3>Address</h3>
                  <p>
                    3871 Monde Str, Lawley 2 Ext 9,
                    Johannesburg, 1824
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <span>📞</span>
                <div>
                  <h3>Phone</h3>
                  <a href="tel:0714882967">
                    071 488 2967
                  </a>
                  <a href="tel:0672505299">
                    067 250 5299
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <span>✉️</span>
                <div>
                  <h3>Email</h3>
                  <a href="mailto:VioletMoroko99@gmail.com">
                    VioletMoroko99@gmail.com
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <span>🕐</span>
                <div>
                  <h3>Operating Hours</h3>
                  <p>Monday - Thursday: 07:00 - 16:00</p>
                  <p>Friday: 07:00 - 15:00</p>
                </div>
              </div>

            </div>

            <div className="contact-form-container">
              <h2>Send Us a Message</h2>

              <form className="contact-form">

                <label htmlFor="name">
                  Your Name
                </label>

                <input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                />

                <label htmlFor="email">
                  Email Address
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                />

                <label htmlFor="phone">
                  Phone Number
                </label>

                <input
                  id="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                />

                <label htmlFor="message">
                  Message
                </label>

                <textarea
                  id="message"
                  rows="5"
                  placeholder="Enter your message"
                />

                <button type="submit">
                  Send Message
                </button>

              </form>

            </div>

          </div>

        </div>
      </section>

    </main>
  );
}

export default Contact;