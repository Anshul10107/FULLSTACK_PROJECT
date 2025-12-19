import { useEffect, useState } from "react";
import API from "../services/api";

export default function ViewContacts() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    API.get("/contact").then(res => setContacts(res.data));
  }, []);

  return (
    <div style={{ padding: "40px", background: "#f8fafc", minHeight: "100vh" }}>
      <h2 style={{ marginBottom: "20px" }}>Contact Form Submissions</h2>

      {contacts.length === 0 ? (
        <div style={{ background: "white", padding: "20px", borderRadius: "8px" }}>
          <p>No contact submissions yet.</p>
        </div>
      ) : (
        contacts.map(c => (
          <div
            key={c._id}
            style={{
              background: "white",
              padding: "20px",
              borderRadius: "8px",
              marginBottom: "15px",
              boxShadow: "0 2px 6px rgba(0,0,0,0.05)"
            }}
          >
            <p><strong>Name:</strong> {c.fullName}</p>
            <p><strong>Email:</strong> {c.email}</p>
            <p><strong>Mobile:</strong> {c.mobile}</p>
            <p><strong>City:</strong> {c.city}</p>
          </div>
        ))
      )}
    </div>
  );
}
