import { FaSearch } from "react-icons/fa";

export default function Input() {
  return (
    <div className="relative p-2 flex items-center border-b-2 text-text_color border-solid border-text_color rounded-b-xl">
      <div className="absolute">
        <FaSearch size="2rem" color="#451E12" />
      </div>
      <input
        className="w-full pl-11 h-11 bg-transparent placeholder:text-text_color placeholder:text-lg placeholder:font-semibold border-none focus:outline-none"
        type="text"
        placeholder="Buscar produto"
      />
    </div>
  );
}
