import { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_l1240n9",
        "template_mia23lp",
        form.current,
        "YpNGo6nYz5JkfaLhU"
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          alert(" Message Sent successfully")
          form.current.reset();
        },
        (error) => {
          console.error("FAILED...", error.text);
        }
      );
  };

  return (
    <>
      <br />
      <br />
      <br />
      <div className="container py-5">
        <h1 className="text-center">Contact Me</h1>

        <div className="row mt-5">
          <div className="col-md-12">
            <p className="text-muted">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              iure, dolore aut necessitatibus consequatur alias excepturi id
              ducimus, molestias sit voluptate, recusandae odit sint
              repellendus! Nihil quae quod aperiam officiis. Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Odio autem necessitatibus,
              ut quibusdam vel quod tempora adipisci iusto placeat doloremque
              eum qui officia voluptates iste tempore? Ipsum veritatis earum
              esse. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quisquam consequatur esse doloremque, optio aut voluptatem earum!
              Ullam, quod? Omnis rerum nihil aliquid ipsum deleniti porro
              inventore labore in velit perferendis.
            </p>
          </div>
        </div>

        <div>
          <form ref={form} onSubmit={sendEmail} className="form-group">
            <label htmlFor="user_name">Name</label>
            <input
              type="text"
              className="form-control"
              name="user_name"
              id="user_name"
            />
            <label htmlFor="user_email">Email</label>
            <input
              type="email"
              className="form-control"
              name="user_email"
              id="user_email"
            />
            <label htmlFor="message">Message</label>
            <textarea
              className="form-control"
              name="message"
              id="message"
            ></textarea>
            <input type="submit" value="Send" className="btn btn-primary" />
          </form>
        </div>

        <p className="text-center mt-5 copyright">Made with ❤️</p>
      </div>
    </>
  );
}

export { Contact };
