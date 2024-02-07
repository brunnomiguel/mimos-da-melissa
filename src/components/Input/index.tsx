"use client";

import { useInput } from "./useInput";
import { InputProps } from "@/@types/input";
import { forwardRef, ForwardRefRenderFunction } from "react";

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { icon: Icon, label, error, ...rest },
  ref
) => {
  const {
    value,
    setValue,
    handleInputBlur,
    handleInputFocus,
    inputVariationColor,
  } = useInput(error);

  return (
    <div
      className={`h-12 flex items-center rounded-md border-2 border-solid bg-gray-50 ${
        inputVariationColor === "focus"
          ? "border-focus"
          : inputVariationColor === "error"
          ? "border-error"
          : inputVariationColor === "filled"
          ? "border-filled"
          : "border-default"
      }`}
    >
      <div className={`ml-2 mr-2`}>
        <Icon color="#000" size="1.5rem" />
      </div>

      <input
        className={`outline-none w-full h-full bg-transparent text-black placeholder:text-black`}
        ref={ref}
        {...rest}
        onFocus={handleInputFocus}
        onBlurCapture={handleInputBlur}
        onChangeCapture={(ev) => setValue(ev.currentTarget.value)}
      />
    </div>
  );
};

export const Input = forwardRef(InputBase);
