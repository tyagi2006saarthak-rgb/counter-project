import { useState } from "react";

function App() {
  const [text, setText] = useState("");

  const words = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
  const characters = text.length;

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>✨ Character Counter</h1>

        <textarea
          style={styles.textarea}
          placeholder="Start typing something amazing..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <div style={styles.counterBox}>
          <div style={styles.counter}>
            <span>🔤 Characters</span>
            <h2>{characters}</h2>
          </div>

          <div style={styles.counter}>
            <span>📝 Words</span>
            <h2>{words}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
  height: "100vh",
  width: "100vw",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "#ffe4ec", // light pink background
  fontFamily: "Arial",
},

  card: {
    background: "white",
    padding: "40px",
    borderRadius: "15px",
    width: "500px",
    textAlign: "center",
    boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
  },

  title: {
    marginBottom: "20px",
    color: "#444",
  },

  textarea: {
    width: "100%",
    height: "120px",
    borderRadius: "10px",
    border: "2px solid #ddd",
    padding: "10px",
    fontSize: "16px",
    outline: "none",
    resize: "none",
  },

  counterBox: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: "20px",
  },

  counter: {
    background: "pink",
    padding: "10px 20px",
    borderRadius: "10px",
    color: "#333",
    width: "120px",
  },
};

export default App;