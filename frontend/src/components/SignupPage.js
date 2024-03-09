import React, { useState } from "react";

const SignupPage = () => {

  
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmedPassword: "",
    channetname: "",
    contentType: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmedPassword) {
      console.log("Password Not Matched");
    } else {
      try {
        const response = await fetch("http://localhost:4000/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        });
        if (response.ok) {
          console.log("Signup successful!");
        } else {
          console.error("Signup failed");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="confirmedPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmedPassword"
            name="confirmedPassword"
            value={formData.confirmedPassword}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="channetname">Channet Name:</label>
          <input
            type="text"
            id="channetname"
            name="channetname"
            value={formData.channetname}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="contentType">Content Type:</label>
          <input
            type="text"
            id="contentType"
            name="contentType"
            value={formData.contentType}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignupPage;
