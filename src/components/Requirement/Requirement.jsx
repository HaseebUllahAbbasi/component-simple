import { Checkmark } from "../CheckMark";
import React, { useEffect, useState } from "react";
import { Xmark } from "../Xmark";

export const Requirement = ({ value, requirement }) => {
  const [isValid, setIsValid] = useState();

  useEffect(() => {
    setIsValid(requirement.validator(value));
  }, [value, requirement]);

  return (
    <div className="requirement">
      {isValid ? <Checkmark /> : <Xmark />}

      <p className={isValid ? "valid" : "invalid"}>{requirement.text}</p>
    </div>
  );
};
