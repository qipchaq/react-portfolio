import AnimatedLetters from "../AnimatedLetters";
import {
  useEffect,
  // useRef,
  useState,
} from "react";
import Loader from "react-loaders";
import "./index.scss";
// import emailjs from "@emailjs/browser";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const Contact = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const [isActiveBtn, setIsActiveBtn] = useState(false);
  //   const refForm = useRef();

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 2000);
  });

  const sendEmail = (e) => {
    e.preventDefault();
    // emailjs
    //   .sendForm(
    //     process.env.REACT_APP_EMAILJS_SERVICE_ID,
    //     process.env.REACT_APP_EMAILJS_EMAIL_TEMPLATE_ID,
    //     refForm.current,
    //     process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    //   )
    //   .then(
    //     () => {
    //       alert("Message successfully sent!");
    //       window.location.reload(false);
    //     },
    //     (error) => {
    //       alert(error);
    //       console.log(error.text);
    //     }
    //   );
    setIsActiveBtn(true);

    setTimeout(() => {
      alert("Message successfully sent!");
      setIsActiveBtn(false);
    }, 2000);
  };

  const activeBtnClass = isActiveBtn ? "flat-button active" : "flat-button";

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["C", "o", "n", "t", "a", "c", "t", " ", "m", "e"]}
              idx={15}
            />
          </h1>
          <p>
            If you have some requests or questions, don't hesitate to contact me
            using below form either.
          </p>
          <div className="contact-form">
            <form
              // ref={refForm}
              onSubmit={sendEmail}
            >
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input
                    type="submit"
                    className={activeBtnClass}
                    value="SEND"
                  />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="map-wrap">
          <MapContainer center={[50.0754, 14.4142]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[50.0754, 14.4142]}>
              <Popup>I'm living here, come over for a cup of tea :)</Popup>
            </Marker>
            <div className="info-map">
              Adil Nurkali
              <br />
              Czech Republic
              <br />
              Prague
              <br />
              <span>nurkali.adil@gmail.com</span>
            </div>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Contact;
