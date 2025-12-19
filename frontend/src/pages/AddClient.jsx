import { useState } from "react";
import API from "../services/api";

export default function AddClient() {
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("designation", designation);
    formData.append("description", description);
    formData.append("image", image);

    await API.post("/clients", formData);
    alert("Client added successfully");
  };

  return (
    <div className="container">
      <form className="card" onSubmit={submitHandler} style={{ maxWidth: "500px" }}>
        <h2>Add Client</h2>
        <input placeholder="Client Name" onChange={e => setName(e.target.value)} required />
        <input placeholder="Designation" onChange={e => setDesignation(e.target.value)} required />
        <textarea placeholder="Description" onChange={e => setDescription(e.target.value)} required />
        <input type="file" onChange={e => setImage(e.target.files[0])} required />
        <button className="btn">Add Client</button>
      </form>
    </div>
  );
}
