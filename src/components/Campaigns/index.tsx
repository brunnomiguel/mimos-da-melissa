export function Campaigns() {
  return (
    <section className="mt-10 w-full pr-4 pl-4">
      <div className="w-full max-w-1380 mr-auto ml-auto flex flex-col md:flex-row md:h-350 items-center gap-5">
        <div className="flex flex-col-reverse md:flex-col gap-5 w-full md:h-full">
          <div className="w-full h-40 md:h-full bg-gray-300 rounded-lg shadow-default">
            Campanha 1
          </div>
          <div className="w-full h-40 md:h-full bg-pink-500 rounded-lg shadow-default">
            Campanha 2
          </div>
        </div>
        <div className="w-full h-40 md:h-full bg-pink-500 rounded-lg shadow-default">
          Campanha 3
        </div>
      </div>
    </section>
  );
}
