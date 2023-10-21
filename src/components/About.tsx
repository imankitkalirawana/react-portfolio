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
  return (
    <>
      {abouts.map((about) => (
        <div className="section about" id="about" key={about.id}>
          <div className="about-up">
            <img className="about-img" src={about.image} alt="" />
            <p className="about-pitch">
              <i>" {about.quote}"</i>
            </p>
            <h4 className="about-name">{about.name}</h4>
          </div>
        </div>
      ))}
    </>
  );
}

export default About;
