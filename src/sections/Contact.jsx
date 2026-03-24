import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Toast from "../components/Toast";

export default function Contact() {

  const form = useRef();
  const [toast, setToast] = useState(null);

  const showToast = (message, type) => {
    setToast({ message, type });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_z61frhh",
        "template_us44qw5",
        form.current,
        "az78FiRyhPX9s6szstbyk"
      )
      .then(
        () => {
          showToast(
            "Message sent successfully!",
            "success"
          );
          form.current.reset();
        },
        (error) => {
          console.error(error);

          showToast(
            "Failed to send message.",
            "error"
          );
        }
      );
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-5xl mx-auto text-center about-content">
        <h2 className="text-3xl md:text-5xl mb-8">
          Send Us{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
            An Email
          </span>
        </h2></div>

      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}

      <form
        ref={form}
        onSubmit={sendEmail}
        className="grid gap-6 max-w-3xl mx-auto"
      >
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
          className="p-4 bg-white/5 border border-white/10 rounded"
        />

        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
          className="p-4 bg-white/5 border border-white/10 rounded"
        />

        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          required
          className="p-4 bg-white/5 border border-white/10 rounded"
        />

        <button
          type="submit"
          className="px-8 py-3 border border-yellow-400 text-yellow-400 rounded hover:bg-yellow-400 hover:text-black transition"
        >
          Send Message
        </button>
      </form>

    </section>
  );
}