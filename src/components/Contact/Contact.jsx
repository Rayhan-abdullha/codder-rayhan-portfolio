import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Button, Container, Underline } from "../../globalStyles"
import {
  Form,
  FormInput,
  ContactWrapper,
  TextInput,
  SectionArea,
  Heading,
} from "./ContactElements";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1ibh5cq",
        "template_gbtr92o",
        form.current,
        "user_ZolwYIVUoOatUHmZjVVDB"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    form.current.reset();
  };

  return (
    <ContactWrapper>
      <SectionArea>
        <Heading>Contact Form</Heading>
        <Underline />
      </SectionArea>
      <Container>
        <Form ref={form} onSubmit={sendEmail}>
          <FormInput name="name" type="text" placeholder="Enter your name"/>
          <FormInput name="email" type="email" placeholder="Enter your email" />
          <TextInput
            name="message"
            placeholder="Enter your message"
            rows="4"
            cols="50"
          />
          <Button>Send</Button>
        </Form>
      </Container>
    </ContactWrapper>
  );
};

export default Contact;
