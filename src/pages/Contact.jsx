import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import ContactBanner from "./ContactBanner";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// MUI Icons
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";

const PhotoshootContact = () => {
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;

    emailjs
      .sendForm(
        "service_oe2x5k9",
        "template_l1n4ria",
        form,
        "oXzMfpyoC20qyjnMp"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("✅ Your request has been sent successfully!", {
            position: "top-right",
            autoClose: 3000,
          });
          form.reset();
          setLoading(false);
        },
        (error) => {
          console.log(error.text);
          toast.error("❌ Something went wrong! Please try again.", {
            position: "top-right",
            autoClose: 3000,
          });
          setLoading(false);
        }
      );
  };

  return (
    <div className="bg-white text-black min-h-screen">
      {/* SEO Helmet */}
      <Helmet>
        <title>
          Book Your Photoshoot | The Picture Town -Alipur - Best Pre-Wedding Location in Delhi
        </title>
        <meta
          name="description"
          content="Book your pre-wedding, maternity, baby, or fashion photoshoot at The Picture Town -Alipur – Delhi's top-rated photoshoot location. Contact us today!"
        />
        <meta
          name="keywords"
          content="Best Pre-Wedding Shoot Delhi, Maternity Photoshoot Delhi, Baby Shoot Delhi, Fashion Shoot Delhi, The Picture Town -Alipur, Photoshoot Location Delhi"
        />
        <meta property="og:title" content="The Picture Town -Alipur – Best Photoshoot Location in Delhi NCR" />
        <meta
          property="og:description"
          content="Capture your special moments with The Picture Town -Alipur – Book pre-wedding, maternity, baby, or fashion shoots in Delhi’s best studio & outdoor location."
        />
        <meta property="og:url" content="https://thepicturetown.com/contact" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <ContactBanner />

      <div className="max-w-7xl mx-auto p-6">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* Left info */}
          <div className="md:w-1/2 space-y-4">
            <h2 className="text-3xl font-playfair font-bold">Get In Touch</h2>
            <p className="text-gray-700">
              Book your magical photoshoot moment with us. Fill the form and our
              team will contact you.
            </p>

            {/* Contact Details */}
            <div className="space-y-3 text-gray-800">
              {/* Phone */}
              <div>
                <PhoneIcon className="text-red-500 inline-block mr-1" />{" "}
                <strong>Phone:</strong>{" "}
                <a href="tel:+918287211620" className="hover:text-red-500">
                 8287211620
                </a>
              </div>
               <div>
                <PhoneIcon className="text-red-500 inline-block mr-1" />{" "}
                <strong>Phone:</strong>{" "}
                <a href="tel:+918287211620" className="hover:text-red-500">
                  8287589910
                </a>
              </div>
               <div>
                <PhoneIcon className="text-red-500 inline-block mr-1" />{" "}
                <strong>Phone:</strong>{" "}
                <a href="tel:+918287211620" className="hover:text-red-500">
                  9899939355
                </a>
              </div>

              {/* WhatsApp */}
              <div>
                <WhatsAppIcon className="text-green-500 inline-block mr-1" />{" "}
                <strong>WhatsApp:</strong>{" "}
                <a
                  href="https://wa.me/918287211620"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-red-500"
                >
                  Chat with us
                </a>
              </div>

              {/* Address */}
              <div>
                <LocationOnIcon className="text-red-500 inline-block mr-1" />{" "}
                <strong>Address:</strong>{" "}
                <a
                  href="https://www.google.com/maps?q=Alipur-Narela+road,+Alipur+opposite+Jeet+Farm,+New+Delhi+110082"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-red-500"
                >
                  Alipur-Narela road , Alipur opposite Jeet Farm <br /> New
                  Delhi-110082
                </a>
              </div>

              {/* Email */}
              <div>
                <EmailIcon className="text-red-500 inline-block mr-1" />{" "}
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:Thepicturetown@gmail.com"
                  className="hover:text-red-500"
                >
                  Thepicturetown@gmail.com
                </a>
              </div>

              {/* Instagram */}
              <div>
                <InstagramIcon className="text-pink-500 inline-block mr-2" />
                <a
                  href="https://www.instagram.com/thepicturetown"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-red-500"
                >
                  @thepicturetown
                </a>
              </div>

              {/* Facebook */}
              <div>
                <FacebookIcon className="text-blue-600 inline-block mr-2" />
                <a
                  href="https://www.facebook.com/thepicturetown"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-red-500"
                >
                  thepicturetown
                </a>
              </div>

              {/* YouTube */}
              <div>
                <YouTubeIcon className="text-red-600 inline-block mr-2" />
                <a
                  href="https://www.youtube.com/@ThePictureTown"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-red-500"
                >
                  The Picture Town
                </a>
              </div>
            </div>
          </div>

          {/* Right side form */}
          <div className="md:w-1/2 bg-white p-6 rounded-lg shadow-md border border-gray-300">
            <form className="space-y-4" onSubmit={sendEmail}>
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="text"
                  name="user_name"
                  placeholder="Name"
                  className="w-full p-2 border border-gray-400 rounded"
                  required
                />
                <input
                  type="email"
                  name="user_email"
                  placeholder="Email"
                  className="w-full p-2 border border-gray-400 rounded"
                  required
                />
              </div>
              <input
                type="tel"
                name="user_phone"
                placeholder="Phone Number"
                className="w-full p-2 border border-gray-400 rounded"
                required
              />
              <input
                type="date"
                name="shoot_date"
                className="w-full p-2 border border-gray-400 rounded"
                required
              />
              <input
                type="text"
                name="shoot_type"
                placeholder="Which type of photoshoot you want?"
                className="w-full p-2 border border-gray-400 rounded"
                required
              />
              <textarea
                name="message"
                rows="4"
                placeholder="Message"
                className="w-full p-2 border border-gray-400 rounded"
              />
              <button
                type="submit"
                disabled={loading}
                className="bg-black text-white py-2 px-6 rounded hover:bg-gray-800"
              >
                {loading ? "Sending..." : "Submit"}
              </button>
            </form>
          </div>
        </div>

        {/* Google Map */}
        <div className="mt-10">
          <iframe
            title="The Picture Town -Alipur - Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.228484820522!2d77.11024841508366!3d28.80081198255113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390dab9c5d0e4f51%3A0xaf8e7b4d88c69258!2sThe%20Picture%20Town%20-%20Best%20Pre%20Wedding%20Location%20in%20Delhi!5e0!3m2!1sen!2sin!4v1691234567890"
            className="w-full h-80 border-0 rounded-md"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
};

export default PhotoshootContact;
