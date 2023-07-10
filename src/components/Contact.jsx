import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { toast } from "react-toastify";
import Validation from "./Validation";

const Contact = () => {
  const [values, setValues] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  // const [errors, setErrors] = useState({})

  function handleInput(e) {
    const newObj = { ...values, [e.target.name]: e.target.value };
    setValues(newObj);
  }
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    // setErrors(Validation(values))
    emailjs
      .sendForm(
        import.meta.env.VITE_YOUR_SERVICE_ID,
        import.meta.env.VITE_YOUR_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_YOUR_PUBLIC_KEY
      )
      .then(
        (result) => {
          e.target.reset();
          toast("Message sent successfully!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        },
        (error) => {
          console.log(error.text);
          toast("Error! Kindly resend your message.", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        }
      );
  };

  return (
    <section className=" py-16 lg:section " id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex justify-start items-center"
          >
            <div>
              <h4 className="text-xl uppercase text-accent font-medium mb-2 tracking-wide">
                Get in touch
              </h4>
              <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
                Let's work <br /> together!
              </h2>
            </div>
          </motion.div>
          <motion.form
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            ref={form}
            onSubmit={sendEmail}
            className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start"
          >
            <input
              className="bg-transparent border-b py-3 outline-none w-full focus:border-accent transition-all"
              placeholder="Your name"
              type="text"
              name="user_name"
              onChange={handleInput}
              required
            />
            {/* {errors.name && <p>{errors.name }</p>} */}

            <input
              required
              className="bg-transparent border-b py-3 outline-none w-full focus:border-accent transition-all"
              placeholder="Your email"
              name="user_email"
              type="email"
              onChange={handleInput}
            />
            {/* {errors.email && <p>{errors.email }</p>} */}
            <textarea
              required
              name="message"
              className="bg-transparent border-b py-12 outline-none w-full focus:border-accent transition-all resize-none mb-12"
              placeholder="Your message"
              onChange={handleInput}
            ></textarea>
            {/* {errors.message && <p>{errors.message }</p>} */}

            <button type="submit" value="Send" className="btn btn-lg">
              Send message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
