import { useFormik } from "formik";
import * as Yup from "yup";
import Prism from "prismjs";
import "prismjs/plugins/line-numbers/prism-line-numbers";
import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { sendEmail, formatedDate } from "../../../utils";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactMeForm = () => {
  const [sent, setSent] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .max(30, "Must be 30 characters or less")
        .required("Required"),

      email: Yup.string().email("Invalid email address").required("Required"),

      message: Yup.string()
        .min(50, "Must be 50 characters or more")
        .required("Required"),
    }),

    onSubmit: async (values, { resetForm, setSubmitting }) => {
      setSubmitting(true);
      toast.info("Submitting.. Please wait");

      try {
        await sendEmail(emailjs, values);
        toast.dismiss();
        setTimeout(() => {
          toast.success("Message sent");
          setSent(true);
          resetForm();
        }, 600);
      } catch (err) {
        toast.dismiss();
        setTimeout(
          () =>
            toast.error("Message failed to send.. Please try again shortly!"),
          600
        );
      } finally {
        setSubmitting(false);
      }
    },
  });

  useEffect(() => {
    if (window) {
      Prism.highlightAll();
    }
  }, [formik.values]);
  useEffect(() => emailjs.init("T1BhyrQyBegwOZnEZ"), []);

  return (
    <div className="flex flex-1 w-full overflow-hidden items-stretch">
      <form
        onSubmit={formik.handleSubmit}
        className="mx-auto lg:mx-0 lg:w-5/12 py-14 lg:py-20 overflow-y-auto "
      >
        {!sent ? (
          <div className="form-container">
            <label htmlFor="name" className="w-full block mb-1">
              _name:
            </label>
            <input
              id="name"
              className="w-full block mb-1 h-9 p-2 bg-black border border-gray rounded-md"
              type="text"
              {...formik.getFieldProps("name")}
            />

            {formik.touched.name && formik.errors.name ? (
              <div className="text-orange text-xxs">{formik.errors.name}</div>
            ) : null}

            <label htmlFor="email" className="w-full block mt-2 mb-1">
              _email:
            </label>
            <input
              id="email"
              className="w-full block mb-1 h-9 p-2 bg-black border border-gray rounded-md"
              type="text"
              {...formik.getFieldProps("email")}
            />

            {formik.touched.email && formik.errors.email ? (
              <div className="text-orange text-xxs">{formik.errors.email}</div>
            ) : null}

            <label htmlFor="message" className="w-full block mt-2 mb-1">
              _message:
            </label>
            <textarea
              id="message"
              className="w-full block mb-1 h-28 p-2 bg-black border border-gray rounded-md"
              {...formik.getFieldProps("message")}
            ></textarea>

            {formik.touched.message && formik.errors.message ? (
              <div className="text-orange text-xxs">
                {formik.errors.message}
              </div>
            ) : null}

            <div className="btn-container mt-2">
              <button type="submit" className="custom-btn">
                submit-message
              </button>{" "}
            </div>
          </div>
        ) : (
          <div className="form-container text-center">
            <p className="text-white text-2xl mb-4">Thank you! 🤘</p>
            <p>
              Your message has been accepted. You will get a response really
              soon!
            </p>
            <div className="btn-container mt-2">
              <button
                type="reset"
                onClick={() => setSent(false)}
                className="custom-btn"
              >
                send-new-message
              </button>{" "}
            </div>
          </div>
        )}
        <ToastContainer />
      </form>
      <div className="form-ide hidden lg:block w-7/12 border-l border-gray py-20 overflow-y-auto">
        <div className="ide-container">
          <pre className="line-numbers">
            <code className="language-js">
              {`const button = document.querySelector('#sendBtn');

const message = {
  name: "${formik.values.name.trim()}",
  email: "${formik.values.email.trim()}",
  message: "${formik.values.message.trim()}",
  date: "${formatedDate()}",
}

button.addEventListener('click', () => {
  form.send(message);
})`}
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default ContactMeForm;
