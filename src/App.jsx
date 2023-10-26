import "./App.css";
import ilustration from "../../assets/images/illustration-sign-up-desktop.svg";

function App() {
  return (
    <div className="container-body">
      <div className="container-newslatter">
        <div className="container-text">
          Stay updated! Join 60,000+ product managers receiving monthly updates
          on: Product discovery and building what matters Measuring to ensure
          updates are a success And much more! Email address email@company.com
          Subscribe to monthly newsletter
        </div>
        <img className="ilustration" src={ilustration} alt="ilustration" />
      </div>
    </div>
  );
}

export default App;
