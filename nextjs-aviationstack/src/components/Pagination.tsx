import { useRouter } from "next/navigation";

const Pagination = ({ total = 100, limit = 5, offset = 0 }) => {
  const router = useRouter();
  const totalPages = Math.ceil(total / limit);

  const handleNext = () => {
    const nextOffset = offset + limit;
    router.push(`/airports?limit=${limit}&offset=${nextOffset}`);
  };

  const handlePrevious = () => {
    const prevOffset = offset - limit;
    if (prevOffset >= 0) {
      router.push(`/airports?limit=${limit}&offset=${prevOffset}`);
    }
  };

  return (
    <div>
      <button onClick={handlePrevious} disabled={offset <= 0} className="bg-[#0060FF] text-white text-sm font-bold py-2 px-4 rounded-md">
        Anterior
      </button>
      <span className="bg-[#555] text-white text-sm font-bold py-2 px-4 rounded-md">{`Página ${Math.floor(offset / limit) + 1} de ${totalPages}`}</span>
      <button onClick={handleNext} disabled={offset + limit >= total} className="bg-[#0060FF] text-white text-sm font-bold py-2 px-4 rounded-md">
        Siguiente
      </button>
    </div>
  );
};

export default Pagination;
