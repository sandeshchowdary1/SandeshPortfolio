import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import confetti from "canvas-confetti";
import "../styles/Contact.css";

const Contact = () => {
  const formRef = useRef(null);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState(""); // 'sent' or 'error'
  const [isSending, setIsSending] = useState(false);

  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: ""
  });

  // Panda eyes movement
  useEffect(() => {
    const handleMouseMove = (event) => {
      const dw = window.innerWidth / 15;
      const dh = window.innerHeight / 15;
      const x = event.pageX / dw;
      const y = event.pageY / dh;

      document.querySelectorAll(".eye-ball").forEach((ball) => {
        ball.style.width = `${x}px`; // ✅ FIXED: added template literals
        ball.style.height = `${y}px`;
      });
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Panda hands animation on focus
  useEffect(() => {
    const messageField = document.getElementById("message_field");
    const form = document.querySelector("form");

    const handleFocusIn = () => form.classList.add("up");
    const handleFocusOut = () => form.classList.remove("up");

    if (messageField) {
      messageField.addEventListener("focus", handleFocusIn);
      messageField.addEventListener("blur", handleFocusOut);
    }

    return () => {
      if (messageField) {
        messageField.removeEventListener("focus", handleFocusIn);
        messageField.removeEventListener("blur", handleFocusOut);
      }
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCombinedSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    try {
      await emailjs.sendForm(
        "service_qw1duhq",
        "template_m8fr60g",
        formRef.current,
        "NwPEuCR8G9jdnGK28"
      );

      console.log("Email sent to palleharsha455@gmail.com with:", formData);

      setAlertMessage("Message sent successfully! I will contact you soon.");
      confetti({
  particleCount: 100,
  spread: 70,
  origin: { y: 0.6 },
});
      setAlertType("sent");

      setFormData({
        user_name: "",
        user_email: "",
        message: ""
      });

      setTimeout(() => {
        setAlertMessage("");
        setAlertType("");
      }, 5000);
    } catch (error) {
      console.error("Email sending failed:", error);
      setAlertMessage("Error sending message. Please try again later.");
      setAlertType("error");

      setTimeout(() => {
        setAlertMessage("");
        setAlertType("");
      }, 5000);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="Openingpage-container">
      <div className="panda">
        <div className="ear"></div>
        <div className="face">
          <div className="eye-shade"></div>
          <div className="eye-white">
            <div className="eye-ball"></div>
          </div>
          <div className="eye-shade rgt"></div>
          <div className="eye-white rgt">
            <div className="eye-ball"></div>
          </div>
          <div className="nose"></div>
          <div className="mouth"></div>
        </div>
        <div className="body"></div>
        <div className="foot">
          <div className="finger"></div>
        </div>
        <div className="foot rgt">
          <div className="finger"></div>
        </div>
      </div>

      <form id="contact-form" ref={formRef} onSubmit={handleCombinedSubmit}>
        <div className="hand"></div>
        <div className="hand rgt"></div>
        <h1>Get in Touch</h1>

        <div className="form-group">
          <input
            name="user_name"
            type="text"
            id="name_field"
            required
            className="form-control"
            value={formData.user_name}
            onChange={handleChange}
          />
          <label className="form-label">Your Name</label>
        </div>

        <div className="form-group">
          <input
            name="user_email"
            type="email"
            id="email_field"
            required
            className="form-control"
            value={formData.user_email}
            onChange={handleChange}
          />
          <label className="form-label">Email Address</label>
        </div>

        <div className="form-group">
          <textarea
            name="message"
            id="message_field"
            required
            className="form-control"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <label className="form-label">Your Message</label>
        </div>

        {/* ✅ FIXED CLASSNAME interpolation */}
        <p id="form-message" className={`alert ${alertType}`}>
          {alertMessage}
        </p>

    {/* ✅ Button wrapper added */}
<div className="btn-wrap">
  <button type="submit" className="btn" disabled={isSending}>
    {isSending ? "Sending..." : "Send Message"}
  </button>
</div>

      </form>
    </div>
  );
};

export default Contact;
