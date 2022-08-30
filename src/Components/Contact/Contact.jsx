import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <button class="btn ">
        <span class="text-muted">
          <a
            className="twitter"
            href="https://twitter.com/BilalMohmand58"
            target="_blank"
          >
            <i class="fab fa-twitter fa-2x"></i>
          </a>

          <a
            className="github"
            href="https://github.com/BilalMohmand58"
            target="_blank"
          >
            <i class="fab fa-github fa-2x"></i>
          </a>
        </span>
      </button>
    </div>
  );
};

export default Contact;
