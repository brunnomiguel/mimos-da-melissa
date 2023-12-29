"use client";

export default function Details({ params }: { params: { id: number } }) {
  return <div>Produto nº {params.id}</div>;
}
