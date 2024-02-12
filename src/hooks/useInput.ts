import { FieldError } from "react-hook-form";
import { useCallback, useEffect, useState } from "react";

export const useInput = (error: FieldError | undefined) => {
  const [value, setValue] = useState("");
  const [inputVariationColor, setInputVariationColor] =
    useState<string>("default");

  useEffect(() => {
    if (error) {
      setInputVariationColor("error");
    }
  }, [error]);

  const handleInputFocus = useCallback(() => {
    if (!error) {
      setInputVariationColor("focus");
    }
  }, [error]);

  const handleInputBlur = useCallback(() => {
    if (value && value.length > 1 && !error) {
      setInputVariationColor("filled");
    }
  }, [error, value]);

  return {
    value,
    setValue,
    handleInputBlur,
    handleInputFocus,
    inputVariationColor,
  };
};
