import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AdminPanel from "./pages/AdminPanel";
import AddProject from "./pages/AddProject";
import AddClient from "./pages/AddClient";
import ViewContacts from "./pages/ViewContacts";
import ViewSubscribers from "./pages/ViewSubscribers";
import "./styles/global.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/admin/project" element={<AddProject />} />
        <Route path="/admin/client" element={<AddClient />} />
        <Route path="/admin/contacts" element={<ViewContacts />} />
        <Route path="/admin/subscribers" element={<ViewSubscribers />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
