import ReactTyped from "react-typed";
import Popup from "reactjs-popup";
import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

type Props = {
  abouts: {
    id: number;
    name: string;
    image: string;
    tagline: string;
    professions: string[];
  }[];
};

function Banner({ abouts }: Props) {
  const typingText = abouts[0].professions;

  const ref = useRef(null);
  const isInView = useInView(ref);
  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    } else {
      mainControls.start("hidden");
    }
  }, [isInView, mainControls]);

  return (
    <>
      {abouts.map((about) => (
        <div className="banner" ref={ref} key={about.id}>
          <div className="banner-top">
            <div className="banner-1">
              <div className="textarea">
                <motion.h2
                  variants={{
                    hidden: { opacity: 0, x: -75 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  initial="hidden"
                  animate={mainControls}
                  transition={{ duration: 0.8 }}
                  className="text-1"
                >
                  Hello, I'm
                </motion.h2>
                <motion.h1
                  variants={{
                    hidden: { opacity: 0, x: -150 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  initial="hidden"
                  animate={mainControls}
                  transition={{ duration: 0.8 }}
                  className="text-2"
                >
                  {about.name}
                </motion.h1>
                <motion.h4
                  variants={{
                    hidden: { opacity: 0, x: -225 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  initial="hidden"
                  animate={mainControls}
                  transition={{ duration: 0.8 }}
                  className="text-3"
                >
                  I'm a{" "}
                  <span className="typing">
                    <ReactTyped
                      strings={typingText}
                      typeSpeed={100}
                      backSpeed={60}
                      loop
                    />
                  </span>
                </motion.h4>
                <motion.p
                  variants={{
                    hidden: { opacity: 0, x: -300 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  initial="hidden"
                  animate={mainControls}
                  transition={{ duration: 0.8 }}
                  className="text-4"
                >
                  {about.tagline}
                </motion.p>
                <motion.div
                  variants={{
                    hidden: { opacity: 0, x: -375 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  initial="hidden"
                  animate={mainControls}
                  transition={{ duration: 0.8 }}
                  className="btns"
                >
                  <Popup
                    trigger={
                      <button className="btn btn-primary">Hire Me</button>
                    }
                  >
                    <div className="popup">
                      <div className="popup-heading">
                        <h2>Hire Me</h2>
                      </div>
                      <form
                        action="https://formsubmit.co/0594c436b1545a8c5681447979831a68"
                        method="POST"
                      >
                        <div className="form-group">
                          <label htmlFor="name" className="label">
                            Name
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            placeholder="Enter your name"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="email" className="label">
                            Email
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="message" className="label">
                            Message
                          </label>
                          <textarea
                            className="form-control"
                            id="message"
                            name="message"
                            placeholder="Let's create together..."
                            rows={3}
                          ></textarea>
                        </div>
                        <button type="submit" className="btn">
                          Submit
                        </button>
                        <input
                          type="hidden"
                          name="_next"
                          value="https://divinelydeveloper.me/success"
                        />
                        <input type="hidden" name="_captcha" value="false" />
                        <input
                          type="hidden"
                          name="_autoresponse"
                          value="Thank you for considering my application. I'm excited about the opportunity and look forward to discussing my qualifications further."
                        />
                        <input type="hidden" name="_template" value="box" />
                      </form>
                    </div>
                  </Popup>
                  <a href="#specilize" className="btn">
                    Explore!
                  </a>
                </motion.div>
              </div>
              <div className="avatar">
                <motion.img
                  variants={{
                    hidden: { opacity: 0, x: 375 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  initial="hidden"
                  animate={mainControls}
                  transition={{ duration: 0.8 }}
                  className="avatar-img"
                  src={about.image}
                  alt={about.name}
                />
              </div>
            </div>
          </div>
          <div className="banner-bottom">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fillOpacity="1"
                d="M0,224L48,229.3C96,235,192,245,288,234.7C384,224,480,192,576,154.7C672,117,768,75,864,64C960,53,1056,75,1152,69.3C1248,64,1344,32,1392,16L1440,0L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
              ></path>
            </svg>
          </div>
        </div>
      ))}
    </>
  );
}

export default Banner;
