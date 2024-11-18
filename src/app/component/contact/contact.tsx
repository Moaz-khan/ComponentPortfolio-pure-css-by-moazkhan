import React from "react";
import styles from './contact.module.css';  // Import the CSS module

const Contact = () => {
  return (
    <div id="Contact" className={styles.Contact}>
      <section className={styles.contactSection}>
        <div className={styles.contactContainer}>
          {/* Map and Address Section */}
          <div className={styles.contactMap}>
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0"
              frameBorder={0}
              title="map"
              marginHeight={0}
              marginWidth={0}
              scrolling="no"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7237.003739182247!2d67.04160870000004!3d24.91496749999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1731185462372!5m2!1sen!2s"
              style={{ filter: "contrast(1.2) opacity(0.4)" }}
            />
            <div className={styles.contactInfo}>
              <div className={styles.contactInfoItem}>
                <h2>ADDRESS</h2>
                <p>Federal Capital Area Liaquatabad Karachi, Pakistan</p>
              </div>
              <div className={styles.contactInfoItem}>
                <h2>EMAIL</h2>
                <a className="text-blue-500" href="mailto:kmoaz614@gmail.com">kmoaz614@gmail.com</a>
                <h2 className="mt-4">PHONE</h2>
                <p>0313-2061298</p>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className={styles.contactForm}>
            <h2>Contact</h2>
            <p>Feel Free to Contact</p>
            <form action="https://formspree.io/f/xgveyvra" method="POST">
              <div className="relative mb-4">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                />
              </div>
              <div className="relative mb-4">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                />
              </div>
              <div className="relative mb-4">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                />
              </div>
              <div className="relative mb-4">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  defaultValue={""}
                  required
                />
              </div>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
