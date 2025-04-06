import { useNavigate } from "react-router-dom";
import "./HomePage.css";
import health from "./assets/health.svg";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom, #3A8DDF, #A9D8B8)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px",
      }}
    >
      {/*Screen gradient ^*/}

      {/*Title*/}
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <h1
          style={{ fontSize: "2.5rem", marginBottom: "30px", color: "#222349" }}
        >
          Artificial Wellness Hub
        </h1>
        {/*"Logo"*/}
        <img src={health} alt="health" style={{ height: "60px" }} />
      </div>

      {/*Space between buttons; organized in a row*/}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "20px",
          width: "100%",
          maxWidth: "500px",
        }}
      >
        <button onClick={() => navigate("/symptoms")} className="button">
          Somatic Assessment
        </button>

        <button onClick={() => navigate("/mental")} className="button">
          Mental Insight Assistant
        </button>
      </div>
    </div>
  );
}

export default HomePage;
