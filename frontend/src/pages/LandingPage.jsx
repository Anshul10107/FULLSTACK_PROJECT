import { useEffect, useState } from "react";
import API from "../services/api";
import "../styles/global.css";

export default function LandingPage() {
  const [projects, setProjects] = useState([]);
  const [clients, setClients] = useState([]);

  // Contact form state
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [city, setCity] = useState("");

  // Subscribe state
  const [subscriberEmail, setSubscriberEmail] = useState("");

  useEffect(() => {
    API.get("/projects").then(res => setProjects(res.data));
    API.get("/clients").then(res => setClients(res.data));
  }, []);

  // Contact submit
  const handleContactSubmit = async (e) => {
    e.preventDefault();

    await API.post("/contact", {
      fullName,
      email,
      mobile,
      city
    });

    alert("Contact submitted successfully");

    setFullName("");
    setEmail("");
    setMobile("");
    setCity("");
  };

  // Subscribe submit
  const handleSubscribe = async (e) => {
    e.preventDefault();

    await API.post("/subscribe", { email: subscriberEmail });

    alert("Subscribed successfully");
    setSubscriberEmail("");
  };

  return (
    <>
      {/* PROJECTS */}
      <div className="section container">
        <h2 className="section-title">Our Projects</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "20px" }}>
          {projects.map(p => (
            <div className="card" key={p._id}>
              <img src={p.image} alt="" style={{ width: "100%", borderRadius: "8px" }} />
              <h3>{p.name}</h3>
              <p style={{ color: "#64748b" }}>{p.description}</p>
              <button className="btn">Read More</button>
            </div>
          ))}
        </div>
      </div>

      {/* CLIENTS */}
      <div className="section container">
        <h2 className="section-title">Happy Clients</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))", gap: "20px" }}>
          {clients.map(c => (
            <div className="card" key={c._id}>
              <img src={c.image} alt="" width="60" style={{ borderRadius: "50%" }} />
              <p style={{ fontStyle: "italic" }}>{c.description}</p>
              <h4>{c.name}</h4>
              <span style={{ color: "#64748b" }}>{c.designation}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CONTACT (UI UNCHANGED) */}
      <div className="section container">
        <h2 className="section-title">Contact Us</h2>
        <form
          className="card"
          style={{ maxWidth: "500px", margin: "auto" }}
          onSubmit={handleContactSubmit}
        >
          <input placeholder="Full Name" value={fullName} onChange={e => setFullName(e.target.value)} required />
          <input placeholder="Email Address" value={email} onChange={e => setEmail(e.target.value)} required />
          <input placeholder="Mobile Number" value={mobile} onChange={e => setMobile(e.target.value)} required />
          <input placeholder="City" value={city} onChange={e => setCity(e.target.value)} required />
          <button type="submit" className="btn">Submit</button>
        </form>
      </div>

      {/* NEWSLETTER (UI UNCHANGED) */}
      <div className="section" style={{ background: "#0f172a", color: "white", padding: "3rem 1rem" }}>
        <h2 className="section-title">Subscribe to our Newsletter</h2>
        <form onSubmit={handleSubscribe} style={{ maxWidth: "400px", margin: "auto" }}>
          <input
            placeholder="Enter your email"
            value={subscriberEmail}
            onChange={e => setSubscriberEmail(e.target.value)}
            required
          />
          <button type="submit" className="btn" style={{ width: "100%" }}>
            Subscribe
          </button>
        </form>
      </div>
    </>
  );
}
