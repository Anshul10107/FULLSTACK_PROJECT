import { Link } from "react-router-dom";

export default function AdminPanel() {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <aside style={{ width: "220px", background: "#0f172a", color: "white", padding: "2rem" }}>
        <h3>Admin Panel</h3>
        <Link to="/admin/project" style={{ color: "white" }}>Add Project</Link><br/>
        <Link to="/admin/client" style={{ color: "white" }}>Add Client</Link><br/>
        <Link to="/admin/contacts" style={{ color: "white" }}>Contacts</Link><br/>
        <Link to="/admin/subscribers" style={{ color: "white" }}>Subscribers</Link>
      </aside>
    </div>
  );
}
