import React from "react";
import { NotFoundWrapper, Img } from "../NotFound/NotFoundElements";
import notfound from "../../assest/notFound.svg";

const NotFound = () => {
  return (
    <>
      <NotFoundWrapper>
        <Img src={notfound} alt="Opps Page Not Found!!" />
      </NotFoundWrapper>
    </>
  );
};

export default NotFound;
