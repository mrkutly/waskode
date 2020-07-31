import React from "react";
import { InputProps } from "../types";
import { Label, Input, ValidationError } from "./styles";

export const EmailInput = ({
  label,
  name,
  onChange,
  validationError,
  value,
}: InputProps) => (
  <div>
    <Label htmlFor={name || "email"}>{label || "Email:"}</Label>
    <Input
      type="email"
      id={name || "email"}
      name={name || "email"}
      value={value}
      onChange={onChange}
    />
    <ValidationError>{validationError}</ValidationError>
  </div>
);
