import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components/macro";
import Loader from "../Images/loader.svg";

import * as GlobalVariables from "../Styles/GlobalVariables";

const FormStyled = styled.div`
  width: 100%; //change this to your liking
  @media ${GlobalVariables.device.laptop} {
    /* width: 50vh; //change this to your liking */
  }
  input,
  textarea {
    border-radius: 4px;
    border: 1px solid black;
    background: transparent;
    padding: 10px;
    resize: none;
    width: 100%;
  }

  .button-loader-container {
    position: relative;
  }
  button {
    border-radius: 4px;
    border: 1px solid black;
    background: black;
    color: white;
    padding: 10px;
    resize: none;
    width: 100%;
    z-index: 2;
    position: relative;
    cursor: pointer;
    opacity: 1;
    transition: all 0.25s;
    &.loading {
      opacity: 0;
      visibility: hidden;
    }
  }

  .loader-container {
    top: 0;
    position: absolute;
    width: 100%;
    text-align: center;
  }
  .loader {
    opacity: 0;
    transition: opacity 0.5s;
    &.loading {
      opacity: 1;
    }
  }

  .submission-message-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    text-align: center;
  }

  .input-container {
    margin-bottom: 1.8rem;
  }
`;

/*
A React component that displays a contact form.
Uses useForm hook from react-hook-form library to manage form state and validation.
Uses useState hook to manage state of form submission and success/error messages.
Submits form data to web3forms API endpoint.
*/
export default function ContactForm() {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm({
    mode: "onTouched",
  });

  //Declares state variables for form submission success and error messages.
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [Message, setMessage] = React.useState("");

  /*
Handles form submission.
Sets subject field value to "{name} sent a message from your website".
Submits form data to web3forms API endpoint.
Sets success and error messages based on API response.
Resets form on successful submission.
*/
  const onSubmit = async (data, e) => {
    console.log(data);
    setValue("subject", `${data.name} sent a message from your website`);
    await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data, null, 2),
    })
      .then(async (response) => {
        let json = await response.json();
        if (json.success) {
          setIsSuccess(true);
          setMessage(json.message);
          e.target.reset();
          reset();
        } else {
          setIsSuccess(false);
          setMessage(json.message);
        }
      })
      .catch((error) => {
        setIsSuccess(false);
        setMessage("Client Error. Please check the console.log for more info");
        console.log(error);
      });
  };

  return (
    <>
      <div id="contact-form">
        <h1>Contact Us</h1>
        <FormStyled>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/*Various hidden inputs*/}
            <input
              type="hidden"
              value="5dc80ba7-d9d1-43bd-9e92-7826a36d3490"
              {...register("access_key")}
            />
            <input type="hidden" {...register("subject")} />
            <input
              type="hidden"
              value="Contact Form Submission"
              {...register("from_name")}
            />
            <input
              type="checkbox"
              id=""
              style={{ display: "none" }}
              {...register("botcheck")}
            />

            {/*Input field for Name*/}
            <div className="input-container">
              <input
                type="text"
                placeholder="Name"
                autoComplete="false"
                required
                {...register("name")}
              />
            </div>

            {/*Input field for Email*/}
            <div className="input-container">
              <input
                id="email_address"
                type="email"
                placeholder="Email Address"
                name="email"
                autoComplete="false"
                required
                {...register("email")}
              />
            </div>

            {/*Input field for Message*/}
            <div className="input-container">
              <textarea
                name="message"
                placeholder="Your Message"
                required
                {...register("message", { required: "Enter your Message" })}
              />
            </div>

            {/*Submit Button and loader*/}
            <div className="button-loader-container">
              <button
                type="submit"
                className={`${
                  isSubmitting || isSubmitSuccessful ? "loading" : ""
                } `}
              >
                Submit
              </button>
              {/*Loader*/}
              <div className="loader-container">
                <img
                  className={`loader ${isSubmitting ? "loading" : ""}`}
                  src={Loader}
                  alt="Loading Icon"
                />
              </div>
              {/*Submission message*/}
              <div className="submission-message-container">
                {/*Successful Submission message*/}
                {isSubmitSuccessful && isSuccess && (
                  <>
                    <div className="successful-submission">
                      <h3>Success</h3>
                      <p>{Message}</p>
                    </div>
                  </>
                )}

                {/*Unsuccessful Submission message*/}
                {isSubmitSuccessful && !isSuccess && (
                  <div className="error-submission">
                    <h3>Error, something odd happened</h3>
                    <p>
                      Please e-mail us directly as contact@vssbox.com, sorry!
                    </p>
                  </div>
                )}
              </div>
            </div>
          </form>
        </FormStyled>
      </div>
    </>
  );
}
