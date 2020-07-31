import React from "react";
import { TextAreaProps } from "../types";
import { Label, TextAreaStyles, ValidationError } from "./styles";

export const TextArea = ({
  label,
  name,
  onChange,
  validationError,
  value,
}: TextAreaProps) => (
  <div>
    <Label htmlFor={name}>{label}</Label>
    <TextAreaStyles name={name} id={name} value={value} onChange={onChange} />
    <ValidationError>{validationError}</ValidationError>
  </div>
);
