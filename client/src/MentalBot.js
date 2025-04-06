import { useState } from "react";
import { useNavigate } from "react-router-dom";

function MentalBot() {
  const [chatHistory, setChatHistory] = useState([]);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSend = async () => {
    if (!message.trim()) return;

    const userMsg = { sender: "user", text: message };
    setChatHistory((prev) => [...prev, userMsg]);
    setMessage(""); // Clear input
    setIsLoading(true); // ⏳ Start loading

    try {
      const response = await fetch(
        "http://localhost:5000/get_mental_feedback",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message }),
        }
      );

      const data = await response.json();
      const botMsg = { sender: "bot", text: data.reply };
      setChatHistory((prev) => [...prev, botMsg]);
    } catch (error) {
      const errorMsg = {
        sender: "bot",
        text: "I'm here to listen, but something went wrong.",
      };
      setChatHistory((prev) => [...prev, errorMsg]);
    } finally {
      setIsLoading(false); // ✅ Done loading
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom right, #A9D8B8, #DFF5E1)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center", // ✅ centers horizontally
        justifyContent: "center", // ✅ centers vertically
        padding: "40px",
        fontFamily: "Oswald, sans-serif",
      }}
    >{/*Screen gradient and set font*/}
      <h2
        style={{
          fontSize: "3rem",
          color: "#4c9c83", // Soft green accent (from our palette)
          fontWeight: 600,
          marginBottom: "20px",
          letterSpacing: "0.5px",
          fontFamily: "Oswald, sans-serif",
        }}
      >{/*Title*/}
        Mental Insight Assistant
      </h2>
      {/* Back to Home button */}
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

        {/*Box holding chat log*/}
      <div
        style={{
          maxHeight: "400px",
          overflowY: "auto",
          margin: "20px auto",
          width: "90%",
          padding: "10px",
          background: "#f7f7f7",
          border: "1px solid #ccc",
          borderRadius: "12px",
        }}
      >
        {chatHistory.map((msg, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              justifyContent: msg.sender === "user" ? "flex-end" : "flex-start",
              marginBottom: "12px",
            }}
          >
            {/*Text boxes*/}
            <div
              style={{
                backgroundColor: msg.sender === "user" ? "#bbdefb" : "#fff9c4",
                padding: "10px 16px",
                borderRadius: "18px",
                maxWidth: "70%",
                boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
                whiteSpace: "pre-wrap",
              }}
            >
              <strong>{msg.sender === "user" ? "You" : "Gemini"}:</strong>
              <div>{msg.text}</div>
            </div>
          </div>
        ))}
        {/*"Loading message"*/}
      </div>
      {isLoading && (
        <p style={{ fontStyle: "italic", color: "#888" }}>
          Gemini is thinking...
        </p>
      )}

      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <textarea
          rows="4"
          cols="50"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="How are you feeling?"
          style={{
            width: "80%",
            maxWidth: "500px",
            padding: "11px",
            fontSize: "1rem",
            textAlign: "center",
            lineHeight: "2",
            borderRadius: "10px",
            border: "1px solid #ccc",
            resize: "none",
          }}
        ></textarea> {/*User text box ^*/}
        <br />
        {/*Send button*/}
        <button
          onClick={handleSend}
          style={{
            marginTop: "10px",
            backgroundColor: "#2a76d2",
            color: "#fff",
            border: "none",
            padding: "10px 20px",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Send
        </button>
    {/*Disclaimer*/}
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

export default MentalBot;
