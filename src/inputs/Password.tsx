import React from "react";
import { InputProps } from "../types";
import { Label, Input, ValidationError } from "./styles";

export const PasswordInput = ({
  label,
  name,
  onChange,
  validationError,
  value,
}: InputProps) => (
  <div>
    <Label htmlFor={name || "password"}>{label || "Password:"}</Label>
    <Input
      type="password"
      id={name || "password"}
      value={value}
      onChange={onChange}
    />
    <ValidationError>{validationError}</ValidationError>
  </div>
);
