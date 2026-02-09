// Import React and useState hook from React
import React, { useState } from "react";

// Import CSS file for styling
import "./App.css";

const App = () => {
  // State to store form input values
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  // State to store error messages for each field
  const [formError, setFormError] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  // This function runs whenever any input field changes
  const handleOnChange = (event) => {
    // Destructure name and value from input field
    const { name, value } = event.target;

    // 1️⃣ Update form data dynamically based on input name
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // 2️⃣ Validation logic for each field

    // Name validation
    if (name === "name") {
      if (value.length > 15) {
        setFormError((prev) => ({
          ...prev,
          name: "Name must be less than 15 characters",
        }));
      } else {
        setFormError((prev) => ({
          ...prev,
          name: "",
        }));
      }
    }

    // Email validation
    if (name === "email") {
      if (!value.includes("@") || !value.includes(".")) {
        setFormError((prev) => ({
          ...prev,
          email: "Please enter a valid email",
        }));
      } else {
        setFormError((prev) => ({
          ...prev,
          email: "",
        }));
      }
    }

    // Phone number validation
    if (name === "phoneNumber") {
      if (value.length !== 10) {
        setFormError((prev) => ({
          ...prev,
          phoneNumber: "Phone number must be 10 digits",
        }));
      } else {
        setFormError((prev) => ({
          ...prev,
          phoneNumber: "",
        }));
      }
    }

    // Password validation
    if (name === "password") {
      if (
        value.length < 8 ||
        !(
          value.includes("@") ||
          value.includes("#") ||
          value.includes("$") ||
          value.includes("&")
        )
      ) {
        setFormError((prev) => ({
          ...prev,
          password:
            "Password must be at least 8 characters and include @, #, $, or &",
        }));
      } else {
        setFormError((prev) => ({
          ...prev,
          password: "",
        }));
      }
    }

    // Confirm password validation
    if (name === "confirmPassword") {
      if (value !== formData.password) {
        setFormError((prev) => ({
          ...prev,
          confirmPassword: "Password does not match",
        }));
      } else {
        setFormError((prev) => ({
          ...prev,
          confirmPassword: "",
        }));
      }
    }
  };

  // Function runs when form is submitted
  const handleOnSubmit = (event) => {
    // Prevent page refresh
    event.preventDefault();

    // Log final form data
    console.log(formData);

    // Show success message
    alert("Form Submitted Successfully");
  };

  return (
    <div className="app">
      <div className="main">
        {/* Form title */}
        <h1 className="title">React Form</h1>

        {/* Form element */}
        <form className="form" onSubmit={handleOnSubmit}>
          {/* Name field */}
          <label>Name</label>
          <div className="inp-error">
            <input
              type="text"
              placeholder="John Doe"
              value={formData.name}
              name="name"
              onChange={handleOnChange}
              style={{ borderColor: formError.name ? "red" : "#000" }}
              required
            />
            {formError.name && <p className="error">{formError.name}</p>}
          </div>

          {/* Email field */}
          <div className="inp-error">
            <label>Email</label>
            <input
              type="email"
              placeholder="johndoe@gmail.com"
              value={formData.email}
              name="email"
              onChange={handleOnChange}
              style={{ borderColor: formError.email ? "red" : "#000" }}
              required
            />
            {formError.email && <p className="error">{formError.email}</p>}
          </div>

          {/* Phone number field */}
          <div className="inp-error">
            <label>Phone No.</label>
            <input
              type="text"
              placeholder="987654321"
              value={formData.phoneNumber}
              name="phoneNumber"
              onChange={handleOnChange}
              style={{ borderColor: formError.phoneNumber ? "red" : "#000" }}
              required
            />
            {formError.phoneNumber && (
              <p className="error">{formError.phoneNumber}</p>
            )}
          </div>

          {/* Password field */}
          <div className="inp-error">
            <label>Password</label>
            <input
              type="password"
              placeholder="Ab123456@#"
              value={formData.password}
              name="password"
              onChange={handleOnChange}
              style={{ borderColor: formError.password ? "red" : "#000" }}
              required
            />
            {formError.password && (
              <p className="error">{formError.password}</p>
            )}
          </div>

          {/* Confirm password field */}
          <div className="inp-error">
            <label>Confirm Password</label>
            <input
              type="password"
              placeholder="Ab123456@#"
              value={formData.confirmPassword}
              name="confirmPassword"
              onChange={handleOnChange}
              style={{
                borderColor: formError.confirmPassword ? "red" : "#000",
              }}
              required
            />
            {formError.confirmPassword && (
              <p className="error">{formError.confirmPassword}</p>
            )}
          </div>

          {/* Submit button */}
          <button className="btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;
