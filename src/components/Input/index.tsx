"use client";

import { useInput } from "../../hooks/useInput";
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
      className={`h-12 flex items-center rounded-md bg-gray-50 ${
        inputVariationColor === "focus"
          ? "drop-shadow-input-focus"
          : inputVariationColor === "error"
          ? "drop-shadow-input-error"
          : inputVariationColor === "filled"
          ? "drop-shadow-input-filled"
          : "drop-shadow-input-default"
      }`}
    >
      <div className="ml-3 mr-3">
        <Icon
          color={
            inputVariationColor === "focus"
              ? "rgb(13, 8, 163)"
              : inputVariationColor === "error"
              ? "rgb(241,12,95)"
              : inputVariationColor === "filled"
              ? "rgb(11,165,44)"
              : "rgb(69,30,18)"
          }
          size="1.5rem"
        />
      </div>

      <input
        className={`outline-none w-full h-full bg-transparent ${
          inputVariationColor === "focus"
            ? "text-focus-color placeholder:text-focus-color"
            : inputVariationColor === "error"
            ? "text-error-color placeholder:text-error-color"
            : inputVariationColor === "filled"
            ? "text-filled-color placeholder:text-filled-color"
            : "text-default-color placeholder:text-default-color"
        }`}
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
