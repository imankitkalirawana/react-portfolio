import AvatarImg from "/imankitkalirawana.jpg";
function About() {
  return (
    <div className="section about" id="about">
      <div className="about-up">
        {/* <img className="about-img" src="/assets/imankitkalirawana.jpg" alt="Bhuneshvar"> */}
        <img className="about-img" src={AvatarImg} alt="" />
        <p className="about-pitch">
          <i>"</i> Technology and AI have the power to change our world, but
          it's up to us to ensure it's for the betterment of humanity.<i>"</i>
        </p>
        <h4 className="about-name">Bhuneshvar</h4>
      </div>
    </div>
  );
}

export default About;
