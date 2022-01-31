import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700;800&display=swap');
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Poppins', sans-serif;
    }
    
    h1, h2,h3,h4,h5,h6 {
      letter-spacing: .25px;
      color: #f0f0f0;
    }
    p, span {
      color: #9f9f9f;
      letter-spacing: .25px;
    }
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;

  @media screen and (max-width: 992px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

export const Button = styled.button`
  border-radius: 4px;
  background: ${({ primary }) => (primary ? "#101010" : "#009e66")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "12px 64px" : "10px 20px")};
  color: #fff;
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  border: 1px solid ${({ primary }) => (primary ? "#009e66" : "#009e66")};
  &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background-color: ${({ primary }) => (primary ? "#009e66" : "#101010")};
  }
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export const Underline = styled.div`
  width: 5rem;
    height: .25rem;
    margin-bottom: 1.25rem;
    background: #009e66; 
    margin-left: auto;
    margin-right: auto;
}`;

export default GlobalStyle;
