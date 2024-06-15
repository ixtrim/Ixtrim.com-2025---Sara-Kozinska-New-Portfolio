import React from "react";
import { CubeButtonWrapper } from "./styles";

const CubeButton = ({
  variant = "outlined",
  textOne = "Label One",
  textTwo = "Label One",
  linkValue = "http://ixtrim.com",
  linkTarget = "_self",
}) => {
  return (
    <CubeButtonWrapper href={linkValue} target={linkTarget} className={variant}>
      <div>
        <span>{textOne}</span>
        <span>{textTwo}</span>
      </div>
    </CubeButtonWrapper>
  );
};

export default CubeButton;