"use client";

import CardAirport from "@/components/CardAirport";
import Pagination from "@/components/Pagination";
import airportStore from "@/stores/airport";
import useStore from "@/stores/getAirports";
import Image from "next/image";
import { redirect, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Airports() {
  const { data, isLoading, error, fetchData } = useStore();
  const searchParams = useSearchParams();
  const search = searchParams.get("search");
  const offset = searchParams.get("offset");
  const limit = searchParams.get("limit");
  const [inputValue, setInputValue] = useState<String | null>(search || "");
  const setAirport = airportStore((state:any) => state.setAirport);
  const handleInputChange = (event: any) => {
    setInputValue(event.target.value);
  };
  const onSearch = (event: React.FormEvent) => {
    event.preventDefault();
    searching();
  };
  const searching = async () => {
    await fetchData(limit, offset);
  };
  const handleClick = (item: any): void => {
    setAirport(item);
    redirect(`/airport`);
  };
  useEffect(() => {
    searching();
  }, [limit, offset]);
  return (
    <div className="min-h-screen justify-center items-center">
      <form>
        <div className="flex items-center space-x-4 p-6 rounded-lg shadow-lg">
          <a href="/">
            <h1 className="text-2xl font-semibold titleA">
              SkyConnect Explorer
            </h1>
          </a>
          <input
            type="text"
            placeholder="Buscar aeropuertos..."
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-3/6 inputA"
            value={inputValue?.toString()}
            onChange={handleInputChange}
          />
          <button
            className="flex py-2 px-6 text-white bg-gradient-to-r from-blue-500 via-teal-300 to-teal-200 border-[1.3px] border-white rounded-[10.4px] cursor-pointer hover:bg-blue-700 transform hover:scale-105 transition duration-200"
            onClick={onSearch}
            type="submit"
          >
            <Image
              src="/svg/search.svg"
              alt="Icon"
              width={20}
              height={20}
              className="mr-2"
            />
            Buscar
          </button>
        </div>
      </form>

      <div className="mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-8 gap-4">
          {data?.data?.length > 0 &&
            data.data.map((item: any, key: number) => (
              <span onClick={() => handleClick(item)} key={key}>
                <CardAirport
                  key={key}
                  title={item.airport_name}
                  subTitle={item.country_name}
                  city={item.city_iata_code}
                />
              </span>
            ))}
        </div>
      </div>

      <div className="flex space-x-4 justify-center items-center">
        <Pagination limit={Number(limit)} offset={Number(offset)} />
      </div>
    </div>
  );
}
