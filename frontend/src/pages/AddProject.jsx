import { useState } from "react";
import API from "../services/api";

export default function AddProject() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("image", image);

    await API.post("/projects", formData);
    alert("Project added successfully");
  };

  return (
    <div className="container">
      <form className="card" onSubmit={submitHandler} style={{ maxWidth: "500px" }}>
        <h2>Add Project</h2>
        <input placeholder="Project Name" onChange={e => setName(e.target.value)} required />
        <textarea placeholder="Description" onChange={e => setDescription(e.target.value)} required />
        <input type="file" onChange={e => setImage(e.target.files[0])} required />
        <button className="btn">Add Project</button>
      </form>
    </div>
  );
}
