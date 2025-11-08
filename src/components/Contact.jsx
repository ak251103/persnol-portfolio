import React from "react";
import Reveal from "./Reveal";

const Contact = () => {
  return (
    <div className="px-6 max-w-[1000px] mx-auto md:my-12" id="contact">
      <Reveal>
        <div className="grid md:grid-cols-2 place-items-center">
          {/* Left Side - About Me */}
          <div>
            <div className="text-gray-300 my-3">
              <h3 className="text-4xl font-semibold mb-5">
                About <span>Me</span>
              </h3>
              <p className="text-justify leading-7 w-11/12 mx-auto">
                I’m Ayush Kumar, a B-Tech IT graduate from KIIT, skilled in
                Python, SQL, JavaScript, and Java. I’ve built projects like
                data analysis dashboards and dynamic web apps, applying skills
                in Python, React, and MySQL. With certifications in Python, Web
                Development, Data Analytics, and AI/ML, I focus on creating
                efficient, real-world tech solutions.
              </p>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <form
            action="https://formsubmit.co/el/hexive"
            method="POST"
            className="max-w-6xl p-5 md:p-12"
          >
            <p className="text-gray-100 font-bold text-xl mb-2">
              Let’s connect!
            </p>

            <input
              type="text"
              name="name"
              placeholder="Your Name ..."
              required
              className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email ..."
              required
              className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4"
            />

            <textarea
              name="message"
              rows="4"
              placeholder="Your Message ..."
              required
              className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4"
            ></textarea>

            <input type="hidden" name="_captcha" value="false" />
            <input
              type="hidden"
              name="_autoresponse"
              value="Thanks for reaching out! I’ll reply soon."
            />

            <button
              type="submit"
              className="w-full py-3 rounded-md text-gray-100 font-semibold text-xl bg-primary-color hover:bg-purple-700"
            >
              Send Message
            </button>
          </form>
        </div>
      </Reveal>
    </div>
  );
};

export default Contact;
