import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import ContactBanner from "./ContactBanner";

const PhotoshootContact = () => {
  const [shootType, setShootType] = useState("");
  const [otherText, setOtherText] = useState("");

  return (
    <div className="bg-white text-black">
      <Helmet>
        <title>Book Your Photoshoot | The Picture Town - Best Pre-Wedding Location in Delhi</title>
        <meta
          name="description"
          content="Book your pre-wedding, maternity, baby, or fashion photoshoot at The Picture Town – Delhi's top-rated photoshoot location. Contact us today!"
        />
        <meta
          name="keywords"
          content="Best Pre-Wedding Shoot Delhi, Maternity Photoshoot Delhi, Baby Shoot Delhi, Fashion Shoot Delhi, The Picture Town, Photoshoot Location Delhi"
        />
        <meta property="og:title" content="The Picture Town – Best Photoshoot Location in Delhi NCR" />
        <meta
          property="og:description"
          content="Capture your special moments with The Picture Town – Book pre-wedding, maternity, baby, or fashion shoots in Delhi’s best studio & outdoor location."
        />
        <meta property="og:url" content="https://thepicturetown.com/contact" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <ContactBanner />
      <div className="max-w-7xl mx-auto p-6">
        {/* Contact section */}
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* Left side */}
          <div className="md:w-1/2 space-y-4">
            <h2 className="text-3xl font-playfair font-bold">Get In Touch</h2>
            <p className="text-gray-700">
              Book your magical photoshoot moment with us. Fill the form and our
              team will contact you.
            </p>
            <div className="space-y-3 text-gray-800">
              <div>
                <strong>📞 Phone:</strong> +91 8287211620
                
              </div>
              <div>
                <strong>📍 Address:</strong> Alipur - Narela Rd, opposite Jeet Farm,
Delhi, 110082
              </div>
              <div>
                <strong>📧 Email:</strong> Thepicturetown@gmail.com
              </div>
              <div>
                <strong>📸 Instagram:</strong> thepicturetown
              </div>
            </div>
            <div className="flex space-x-4 pt-4 text-2xl text-black">
              <i className="fab fa-facebook"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-twitter"></i>
            </div>
          </div>

          {/* Right side form */}
          <div className="md:w-1/2 bg-white p-6 rounded-lg shadow-md border border-gray-300">
            <form className="space-y-4">
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full p-2 border border-gray-400 rounded"
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-2 border border-gray-400 rounded"
                  required
                />
              </div>
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full p-2 border border-gray-400 rounded"
                required
              />
              <input
                type="date"
                className="w-full p-2 border border-gray-400 rounded"
                required
              />
              <select
                className="w-full p-2 border border-gray-400 rounded"
                value={shootType}
                onChange={(e) => setShootType(e.target.value)}
                required
              >
                <option value="">Select Photoshoot Type</option>
                <option value="Pre Wedding">Pre Wedding</option>
                <option value="Maternity">Maternity</option>
                <option value="Baby Shoot">Baby Shoot</option>
                <option value="Fashion">Fashion</option>
                <option value="Other">Other</option>
              </select>
              {shootType === "Other" && (
                <input
                  type="text"
                  placeholder="Please specify"
                  value={otherText}
                  onChange={(e) => setOtherText(e.target.value)}
                  className="w-full p-2 border border-gray-400 rounded"
                />
              )}
              <textarea
                rows="4"
                placeholder="Message"
                className="w-full p-2 border border-gray-400 rounded"
              />
              <button
                type="submit"
                className="bg-black text-white py-2 px-6 rounded hover:bg-gray-800"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* Google Map */}
      <div className="mt-10">
  <iframe
    title="The Picture Town - Map"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.228484820522!2d77.11024841508366!3d28.80081198255113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390dab9c5d0e4f51%3A0xaf8e7b4d88c69258!2sThe%20Picture%20Town%20-%20Best%20Pre%20Wedding%20Location%20in%20Delhi!5e0!3m2!1sen!2sin!4v1691234567890"
    className="w-full h-80 border-0 rounded-md"
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>

      </div>
    </div>
  );
};

export default PhotoshootContact;
