import "./index.css";
import Dog from "../../assets/dog.jpg";

const Home = () => {
  return (
    <section>
      <div className="container">
        <div className="hero">
          <div className="hero-text">
            <h1>Your #1 place of work, stress-free</h1>
            <h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              hic itaque praesentium dolorum, deserunt dolores repudiandae
              aperiam at quam porro.
            </h3>
            <div className="buttons">
              <button className="cta">Learn More</button>
              <button>Get Started</button>
            </div>
          </div>
          <div>
            <img src={Dog} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
