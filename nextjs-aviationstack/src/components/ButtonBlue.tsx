export default function ButtonBlue({label = ""}) {
  return (
    <button className="bg-[#0060FF] text-white text-sm font-bold py-2 px-4 rounded-md">
      {label}
    </button>
  );
}
