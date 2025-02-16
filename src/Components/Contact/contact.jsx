import { useState,useEffect } from "react";
import "./contact.css";
import { SiGmail, SiWhatsapp } from "react-icons/si";
import { IoCall } from "react-icons/io5";
import axios from "axios";
import Loader from "../Loader/loader";
import Toaster from "../Toaster/toaster";
import { useNav } from "../../Contexts/navContext";
export default function Contact() {
  const { setnavValue } = useNav();
  useEffect(() => {
    setnavValue("contact");
  }, []);
  const [isLoading, setLoading] = useState(false);
  const [resObj, setResObj] = useState({
    isSent: false,
    msg: "",
  });
  const [isErr, setErrObj] = useState({
    isError: false,
    msg: "",
  });

  function CloseToaster() {
    setErrObj({
      isError: false,
      msg: "",
    });
    setResObj({
      isSent: false,
      msg: "",
    });
  }

  async function FormSubmit(e) {
    setLoading(true);
    e.preventDefault();
    const formdata = new FormData(e.target);
    formdata.append("access_key", process.env.REACT_APP_WEB3FORM_PUBLIC_KEY);
    try {
      let res = await axios.post("https://api.web3forms.com/submit", formdata);
      if (!res) {
        throw new Error("Error occured");
      }
      if (res.data.success) {
        setResObj({
          isSent: true,
          msg: res.data.message || "Mail Sent Successfully",
        });
        setErrObj({
          isError: false,
          msg: "",
        });
      }
    } catch (e) {
      let errMsg = e.message || "Error occured";
      if (e.response) {
        errMsg = e.response.data;
      }
      setErrObj({
        isError: true,
        msg: errMsg,
      });
      setResObj({ isSent: false, msg: "" });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div id="contact-container">
      <div className="contact-wrapper">
        <div>
          <p>contact</p>
          <p>
            Have a question or want to work together ? Leave your details and
            I'll get back to you as soon as possible.
          </p>
          <div className="mail-div">

          <a
              href="tel:+916382409401"
              rel="noopener noreferrer"
            >
              <button>
                <IoCall size={20} />
              </button>
            </a>
            <a
              href="mailto:vigneshselvam504@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>
                <SiGmail size={20} />
              </button>
            </a>
            <a
              href="https://wa.me/916382409401?text=Hello%20There!"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>
                <SiWhatsapp size={20} />
              </button>
            </a>
          </div>
        </div>
        <div>
          <form onSubmit={FormSubmit}>
            <input type="text" name="name" placeholder="Name" required autoComplete="off" />
            <input type="email" name="email" required placeholder="E-mail" autoComplete="off" />
            <textarea
              name="message"
              required
              placeholder="Your Message"
              rows={5}
            ></textarea>
            <button type="submit" disabled={isLoading}>
              {isLoading ? <Loader size={20} color="black" /> : "Submit"}
            </button>
          </form>
          {resObj.isSent && (
            <Toaster
              AutoHideDuration={8000}
              message={resObj.msg}
              onClose={CloseToaster}
              type="success"
              width="100%"
              fontColor="white"
              iconColor="white"
            />
          )}
          {isErr.isError && (
            <Toaster
              AutoHideDuration={8000}
              message={isErr.msg}
              onClose={CloseToaster}
              type="error"
              width="100%"
              fontColor="white"
              iconColor="white"
            />
          )}
        </div>
      </div>
    </div>
  );
}
