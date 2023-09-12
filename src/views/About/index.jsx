import "./index.css";
import Dog from "../../assets/dog.jpg";

const About = () => {
  return (
    <section>
      <div className="container">
        <div className="about">
          <h1>About Me</h1>
          <img src={Dog} alt="" />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla aut
            hic molestiae accusamus consequatur totam possimus provident cum
            numquam quo.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quam
            explicabo veniam, blanditiis dolorem porro! Atque, similique ipsum
            consequatur corrupti perferendis enim quisquam recusandae deserunt
            sapiente, nihil, numquam quam quae!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
