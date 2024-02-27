export default function Product({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1>Produto {params.id}</h1>
    </div>
  );
}
