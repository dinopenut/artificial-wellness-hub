import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SymptomChecker() {
  const [symptoms, setSymptoms] = useState("");
  const [feedback, setFeedback] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const getFeedback = async () => {
    setIsLoading(true);
    setFeedback("");

    try {
      const response = await fetch("http://localhost:5000/get_feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ symptoms }),
      });

      const data = await response.json();
      setFeedback(data.feedback);
    } catch (error) {
      setFeedback("Something went wrong.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom right, #3A8DDF, #A6D0F2)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px",
        fontFamily: "Oswald, sans-serif",
      }}
    >{/*Somatic Assesment Title*/}
      <h2 style={{ fontSize: "3rem", color: "#0b3d91", marginBottom: "20px" }}>
        Somatic Assessment
      </h2>

{/*Return Home Button*/}
      <button
        onClick={() => navigate("/")}
        style={{
          marginBottom: "20px",
          backgroundColor: "#2a76d2",
          color: "#fff",
          border: "none",
          padding: "10px 20px",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        ⬅ Back to Home
      </button>

{/*Enter your symptoms box*/}
      <input
        type="text"
        value={symptoms}
        onChange={(e) => setSymptoms(e.target.value)}
        placeholder="Please provide physical symptoms for assessment"
        style={{
          padding: "12px",
          width: "90%",
          maxWidth: "400px",
          marginBottom: "15px",
          borderRadius: "8px",
          border: "1px solid #ccc",
        }}
      />

{/*Check Symptoms Button*/}
      <button
        onClick={getFeedback}
        style={{
          padding: "12px 24px",
          backgroundColor: "#2a76d2",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          marginBottom: "30px",
        }}
      >
        Check Symptoms
      </button>

{/*Feedback Results*/}
      <div
        style={{
          maxWidth: "600px",
          background: "#ffffffdd",
          padding: "20px",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          whiteSpace: "pre-wrap",
          textAlign: "left",
          fontSize: "1rem",
          color: "#333",
        }}>
        {isLoading ? (
          <p>Analyzing your symptoms...</p>
        ) : feedback ? (
          <div>{feedback}</div>
        ) : null}
        
{/*Disclaimer Regarding Medical Advice*/}
        <div
          style={{
            textAlign: "center",
            fontSize: "0.75rem",
            color: "#444",
            padding: "10px",
            backgroundColor: "#fff)",
            backdropFilter: "blur(4px)",
          }}
        >
          Disclaimer: This information is for general purposes only and is not
          medical advice. Always consult a healthcare professional for medical
          concerns.
        </div>
      </div>
    </div>
  );
}
export default SymptomChecker;
