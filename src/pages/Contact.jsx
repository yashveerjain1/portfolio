import { useRef, useState } from "react";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import emailjs from "emailjs-com";
import ContactImg from "../assets/img2.png";
function Contact() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          setLoading(false);
          formRef.current.reset();
          toast.success("Message sent successfully!");
        },
        (error) => {
          setLoading(false);
          toast.error("Something went wrong!");
          console.error(error);
        },
      );
  };

  return (
    <div>
      <div className="relative bg-zinc-950 min-h-screen  py-24 text-white overflow-hidden ">
        <Toaster />

        {/* Animated Blobs */}
        {/* <div className="absolute w-96 h-96 bg-[#00BFFF] opacity-30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#00BFFF] opacity-20 rounded-full blur-3xl animate-pulse" /> */}
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-gradient-to-r from-blue-500 via-green-400 to-indigo-500 opacity-20 rounded-full blur-[120px] animate-pulse" />

        <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-gradient-to-r from-purple-500 via-green-400 to-blue-500 opacity-20 rounded-full blur-[120px] animate-pulse" />

        <div className="max-w-7xl gap-8 p-4 mx-auto flex flex-col md:flex-row items-center justify-between z-10 relative">
          {/* Left: Contact Form */}

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2 mt-10 md:mt-0 flex justify-center"
          >
            <img
              src={ContactImg}
              alt="Wireframe Man"
              className="w-80 md:w-[400px] opacity-80 rounded-2xl rounded-b-full"
            />
          </motion.div>
          {/* Right: Illustration */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2"
          >
            <h2 className="sm:text-3xl text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00BFFF] to-red-300 mb-4">
              Contact Me
            </h2>
            <p className="sm:text-lg text-sm text-gray-300 mb-8 leading-relaxed">
              Have a project in mind, an opportunity to discuss, or just want to
              connect? I’d love to hear from you. Feel free to reach out!
            </p>

            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="backdrop-blur bg-white/5 border border-[#00BFFF] rounded-lg p-6 space-y-4 shadow-xl"
            >
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                className="w-full px-4 py-2 bg-black/40 border border-gray-600 rounded text-white focus:outline-none"
              />
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-2 bg-black/40 border border-gray-600 rounded text-white focus:outline-none"
              />
              <input
                type="text"
                name="user_phone"
                placeholder="Phone Number"
                required
                className="w-full px-4 py-2 bg-black/40 border border-gray-600 rounded text-white focus:outline-none"
              />
              <textarea
                name="message"
                rows="4"
                placeholder="Message"
                required
                className="w-full px-4 py-2 bg-black/40 border border-gray-600 rounded text-white focus:outline-none"
              ></textarea>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-2 bg-[#00BFFF] hover:bg-sky-600 transition text-white  cursor-pointer font-semibold rounded"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
