export function ProductSkeleton() {
  return (
    <div className="w-full max-w-60 flex flex-col p-2 animate-pulse space-y-3 bg-white shadow-default rounded-lg">
      <div className="w-full max-w-60 bg-gray-300 h-52 rounded-md" />
      <div className="flex flex-col gap-4">
        <div className="w-3/4 h-4 bg-gray-300" />
        <div className="w-2/4 h-7 bg-gray-300" />
        <div className="flex items-center gap-2 w-full">
          <div className="w-3/4 h-9 bg-gray-300 rounded-md" />
          <div className="w-1/4 h-9 bg-gray-300 rounded-md" />
        </div>
      </div>
    </div>
  );
}
