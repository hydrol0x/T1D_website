import DiabetesLogo from "../components/DiabetesLogo";
import "../css/home.css";

function Home() {
  return (
    <div className="homeContentDiv">
      <h1 className="mainHeading"> What is Type 1 Diabetes?</h1>
      <p className="infoPara">
        {" "}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.{" "}
      </p>
      <DiabetesLogo />
    </div>
  );
}

export default Home;
