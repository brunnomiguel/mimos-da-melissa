"use client";

import { useEffect, useState } from "react";

export const useLoading = () => {
  const [loading, setLoading] = useState<boolean>(false);

  // Simula o carregamento
  const carregarPagina = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  // Chama a função de carregamento
  useEffect(() => {
    carregarPagina();
  }, []);

  return {
    loading,
  };
};
