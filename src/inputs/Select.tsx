import React, { ChangeEvent } from "react";
import { SelectProps } from "../types";
import { Label, SelectStyles, ValidationError } from "./styles";

export const Select = ({
  label,
  name,
  onChange,
  options,
  validationError,
  value,
  ...rest
}: SelectProps) => {
  const shouldUseData = options.some((opt) => !!opt.data);

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    if (!shouldUseData) return onChange(e);

    const option = options.find((opt) => {
      return opt.value === e.target.value;
    });

    return onChange(e, option?.data);
  };

  return (
    <div>
      <Label htmlFor={name}>{label}</Label>
      <SelectStyles
        name={name}
        id={name}
        value={value}
        onChange={handleChange}
        {...rest}
      >
        <option />
        {options.map((option, idx) => (
          <option
            key={`select-option-${idx}`}
            value={option.value}
            data-key={option.value}
          >
            {option.label}
          </option>
        ))}
      </SelectStyles>
      <ValidationError>{validationError}</ValidationError>
    </div>
  );
};
