import React from "react";
import Button from "react-bootstrap/Button";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";

function FormContacto() {
  const navigate = useNavigate();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.init("8FBVW-xfYDvAPkBul");
    emailjs
      .sendForm(
        "service_ari3tzm",
        "template_wfao6vg",
        form.current,
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("mensaje enviado");
          navigate("/");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <form ref={form} onSubmit={sendEmail}>
        <div className="mb-3">
          <label className="form-label">
            Contact Name
          </label>
          <input
            type="text"
            className="form-control"
            name="user_name"
            id=""
            aria-describedby="helpId"
            placeholder=""
            required
          />
          <label className="form-label">
            Email
          </label>
          <input
            type="text"
            className="form-control"
            name="user_email"
            id=""
            aria-describedby="helpId"
            placeholder=""
            required
          />
          <label className="form-label">
            Question
          </label>
          <textarea
            type="text"
            className="form-control"
            name="message"
            id=""
            aria-describedby="helpId"
            placeholder=""
          />
          <div className="m-2">
            <Button variant="primary" type="submit" value="Send">
              Send
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default FormContacto;

FormContacto;
