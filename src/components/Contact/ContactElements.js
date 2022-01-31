import styled from "styled-components";

export const ContactWrapper = styled.div`
  background: #101010;
  padding: 80px 0;
  height: 500px;
`;

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const FormInput = styled.input`
  padding: 10px 20px;
  border-radius: 2px;
  outline: none;
  border: none;
  font-size: 16px;
  border: 1px solid #fff;
  width: 100%;
  &::placeholder {
    color: #444;
    font-size: 14px;
  }
`;

export const TextInput = styled.textarea`
  padding: 10px 20px;
  border-radius: 2px;
  outline: none;
  border: none;
  font-size: 16px;
  border: 1px solid #fff;
  width: 100%;
  &::placeholder {
    color: #444;
    font-size: 14px;
  }
`;

export const SectionArea = styled.div`
  text-align: center;
  margin-bottom: 50px;
`;
export const Heading = styled.h2`
  font-size: 38px;
  margin-bottom: 25px;
`;
