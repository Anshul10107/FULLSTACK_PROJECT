import { useEffect, useState } from "react";
import API from "../services/api";

export default function ViewSubscribers() {
  const [subs, setSubs] = useState([]);

  useEffect(() => {
    API.get("/subscribe").then(res => setSubs(res.data));
  }, []);

  return (
    <div style={{ padding: "40px", background: "#f8fafc", minHeight: "100vh" }}>
      <h2 style={{ marginBottom: "20px" }}>Newsletter Subscribers</h2>

      {subs.length === 0 ? (
        <div style={{ background: "white", padding: "20px", borderRadius: "8px" }}>
          <p>No subscribers yet.</p>
        </div>
      ) : (
        subs.map(s => (
          <div
            key={s._id}
            style={{
              background: "white",
              padding: "15px",
              borderRadius: "8px",
              marginBottom: "10px",
              boxShadow: "0 2px 6px rgba(0,0,0,0.05)"
            }}
          >
            {s.email}
          </div>
        ))
      )}
    </div>
  );
}
