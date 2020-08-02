import React from "react";
import { InputProps } from "../types";
import { Label, Input, ValidationError } from "./styles";

export const TextInput = ({
  label,
  name,
  onChange,
  validationError,
  value,
  ...rest
}: InputProps) => (
  <div>
    <Label htmlFor={name}>{label}</Label>
    <Input
      type="text"
      name={name}
      id={name}
      value={value}
      onChange={onChange}
      {...rest}
    />
    <ValidationError>{validationError}</ValidationError>
  </div>
);
