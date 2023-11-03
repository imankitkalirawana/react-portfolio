import { motion } from "framer-motion";
import { useInView } from "react-hook-inview";

type Props = {
  abouts: {
    id: number;
    name: string;
    codeName: string;
    image: string;
    tagline: string;
    quote: string;
  }[];
};

function About({ abouts }: Props) {
  const [ref, isInView] = useInView();
  return (
    <>
      {abouts.map((about) => (
        <div ref={ref} className="section about" id="about" key={about.id}>
          <div className="about-up">
            <motion.img
              initial={{ opacity: 0, scale: 0.5 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }
              }
              transition={{ duration: 0 }}
              className="about-img animation-transition"
              src={about.image}
              alt=""
            />
            <motion.p
              initial={{ opacity: 0, scale: 0.5 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }
              }
              transition={{ duration: 0, delay: 0.2 }}
              className="about-pitch animation-transition"
            >
              <span className="color">"</span>
              {about.quote}
            </motion.p>
            <motion.h4
              initial={{ opacity: 0, scale: 0.5 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }
              }
              transition={{ duration: 0, delay: 0.4 }}
              className="about-name animation-transition"
            >
              {about.name}
            </motion.h4>
          </div>
        </div>
      ))}
    </>
  );
}

export default About;
