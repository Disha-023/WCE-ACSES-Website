import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

import useAlert from '../hooks/useAlert.js';
import Alert from '../components/Alert.jsx';

const Contact = () => {
  const formRef = useRef();

  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: 'WCE ACSES',
          from_email: form.email,
          to_email: 'wceacses1995@gmail.com',
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          setLoading(false);
          showAlert({
            show: true,
            text: 'Thank you for your message 😃',
            type: 'success',
          });

          setTimeout(() => {
            hideAlert(false);
            setForm({ name: '', email: '', message: '' });
          }, 3000);
        },
        (error) => {
          setLoading(false);
          console.error(error);

          showAlert({
            show: true,
            text: "I didn't receive your message 😢",
            type: 'danger',
          });
        },
      );
  };

  return (
    <section className="c-space py-12 px-4 sm:px-6 flex flex-col" id="contact">
      {alert.show && <Alert {...alert} />}

      {/* Title */}
      <p
        className="text-2xl sm:text-3xl md:text-[2.8rem] font-extrabold text-center text-[#c0d8ff] mb-8 sm:mb-12
         [text-shadow:0_0_10px_#7f5af0,0_0_20px_#00dfff,0_0_30px_#7f5af0]">
        Contact Us
      </p>

      {/* Card */}
      <div className="w-full sm:w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2 border border-[#48387f] mx-auto rounded-2xl bg-[#221944] shadow-lg shadow-black/40 p-6 sm:p-8 md:p-10">
        <h3 className="text-2xl sm:text-3xl font-bold text-white text-center">Let's Talk</h3>
        <p className="text-center text-[#b3b3cc] mt-2 text-sm sm:text-base">
          Fill out the form below and I’ll get back to you as soon as possible.
        </p>

        {/* Form */}
        <form ref={formRef} onSubmit={handleSubmit} className="mt-8 sm:mt-10 flex flex-col gap-6">
          <div className="flex flex-col">
            <label className="text-[#b3b3cc] font-medium mb-2 text-sm sm:text-base">Full Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-[#221944] text-white border border-[#3a3a4d] placeholder-[#777799] focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/40 outline-none transition text-sm sm:text-base"
              placeholder="ex., John Doe"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-[#b3b3cc] font-medium mb-2 text-sm sm:text-base">Email Address</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-[#221944] text-white border border-[#3a3a4d] placeholder-[#777799] focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/40 outline-none transition text-sm sm:text-base"
              placeholder="ex., johndoe@gmail.com"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-[#b3b3cc] font-medium mb-2 text-sm sm:text-base">Your Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-[#221944] text-white border border-[#3a3a4d] placeholder-[#777799] focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/40 outline-none transition text-sm sm:text-base"
              placeholder="Share your thoughts or inquiries..."
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 sm:py-3 rounded-lg disabled:opacity-60 transition-all text-sm sm:text-base">
            {loading ? 'Sending...' : 'Send Message'}
            <img src="/assets/arrow-up.png" alt="arrow-up" className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
