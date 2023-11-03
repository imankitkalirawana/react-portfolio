import { motion } from "framer-motion";
import { useInView } from "react-hook-inview";

type Props = {
  contact: {
    id: number;
    email: string;
    contact: string;
    address: string;
  }[];
};

function Contact({ contact }: Props) {
  const [ref, isInView] = useInView();
  const displayContact = contact[0];
  return (
    <>
      <div ref={ref} className="section contact" id="contact">
        <h2 className="topic-heading contact-heading">Stay Connected</h2>
        <div className="contact-pre">
          <motion.div
            initial={{ opacity: 0, x: -150 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -150 }}
            transition={{ duration: 0 }}
            className="contact-left animation-transition"
          >
            <div className="contact-left-up">
              <h3>Got a project? Let's Talk</h3>
              <p>
                {displayContact.address} <br /> {displayContact.contact}
              </p>
            </div>
            <a
              href={`mailto:${displayContact.email}`}
              className="contact-left-down"
            >
              <p>
                {displayContact.email}
                {"  "}
                <i className="fa-solid fa-arrow-right"></i>
              </p>
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 150 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 150 }}
            transition={{ duration: 0 }}
            className="skills-divider animation-transition"
          ></motion.div>
          <motion.div
            initial={{ opacity: 0, x: 150 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 150 }}
            transition={{ duration: 0 }}
            className="contact-right animation-transition"
          >
            <div className="contact-left-up">
              <h3>Estimate your project? Let me know here</h3>
              <form
                action="https://formsubmit.co/0594c436b1545a8c5681447979831a68"
                method="POST"
                id="form"
              >
                <div className="input">
                  <div className="label">What's your name?</div>
                  <input
                    type="text"
                    placeholder="John Doe"
                    name="name"
                    required
                  />
                </div>
                <div className="input">
                  <div className="label">What's your email?</div>
                  <input
                    type="mail"
                    name="email"
                    placeholder="johndoe@mail.com"
                    required
                  />
                </div>
                <div className="input" hidden>
                  <input type="mail" name="_subject" value="Want a project!" />
                </div>
                <div className="input">
                  <div className="label">Tell me about your project</div>
                  <textarea
                    placeholder="Explain it breifly"
                    name="message"
                    id="ProjectText"
                    required
                  ></textarea>
                </div>
                <button className="btn btn-submit">
                  Send it <i className="fa-regular fa-arrow-up-right"></i>
                </button>
                <input
                  type="hidden"
                  name="_next"
                  value="https://imankitkalirawana.online/about"
                />
                <input type="hidden" name="_captcha" value="false" />
                <input
                  type="hidden"
                  name="_autoresponse"
                  value="Thank you for submission imankitkalirawana team will reach you soon... Stay updated !"
                />
                <input type="hidden" name="_template" value="box" />
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Contact;
