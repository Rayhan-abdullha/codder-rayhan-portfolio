import React, { useEffect, useState } from "react";
import { FaArrowAltCircleUp } from "react-icons/fa";

import styled from "styled-components";

const ScrollNav = ({ showBelow }) => {
  const [show, setShow] = useState(false);
  const handleScroll = () => {
    if (window.pageYOffset > showBelow) {
      if (!show) setShow(true);
    } else {
      if (show) setShow(false);
    }
  };
  useEffect(() => {
    if (showBelow) {
      window.addEventListener(`scroll`, handleScroll);
      return () => window.addEventListener(`scroll`, handleScroll);
    }
  });
  const handleClick = () => {
    window[`scrollTo`]({ top: 0, behavior: "smooth" });
  };

  return (
    <ScrollBar>
      {show && (
        <Scroll onClick={handleClick}>
          <FaArrowAltCircleUp className="scroll" />
        </Scroll>
      )}
    </ScrollBar>
  );
};
const ScrollBar = styled.div``;
const Scroll = styled.div`
  transition: 0.5s;
  background: #009e66;
  width: 50px;
  height: 50px;
  padding: 17px;
  border-radius: 30px;
  z-index: 2;
  bottom: 5%;
  position: fixed;
  &:hover {
    transition: 0.3s;
    transform: scale(1.1);
  }
  right: 5%;
`;
export default ScrollNav;
