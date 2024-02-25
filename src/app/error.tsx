"use client";

import { useEffect } from "react";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div>
      <h3>Algo deu errado!</h3>

      <pre>{error.message}</pre>

      <button onClick={() => reset()}>Tente novamente</button>
    </div>
  );
}
