"use client";

import { useEffect, useState } from "react";

export const useLoading = () => {
  const [loading, setLoading] = useState<boolean>(true);

  // Simula o carregamento
  const carregarPagina = () => {
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
