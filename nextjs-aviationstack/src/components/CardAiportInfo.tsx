import Image from "next/image";
import airportStore from "@/stores/airport";
import ClockGMT from "./ClockGMT";

export default function CardAiportInfo({ svg = "info", title = "" }) {
  const airport = airportStore((state:any) => state.airport);
  return (
    <div
      className="relative rounded rounded-2 border border-gray-300"
      style={{
        background: "linear-gradient(90deg, #3F495F 0%, #0E1934 74%)",
      }}
    >
      <div
        className="absolute right-0 top-0 bottom-0 w-full md:w-1/2 bg-cover bg-right"
        style={{
          backgroundImage: "url(/images/7c78e1d0156f4699377860d98f71475d.jpg)",
          opacity: "0.1",
        }}
      />
      <div className="flex items-center p-6">
        <Image src={`/svg/${svg}.svg`} alt="Icon" width={30} height={30} />
        <span className="text-2xl font-semibold titleA pl-2">{title}</span>
      </div>
      <div className="pb-6 pl-6 text-white">
        {svg === "info" && (
          <>
            <p>
              <span className="font-bold">Código IATA:</span> {airport?.iata_code}
            </p>
            <p>
              <span className="font-bold">Código ICAO:</span> {airport?.icao_code}
            </p>
            <p>
              <span className="font-bold">País:</span> {airport?.country_name} ({airport?.country_iso2})
            </p>
            <p>
              <span className="font-bold">Ciudad IATA:</span> {airport?.city_iata_code}
            </p>
            <p>
              <span className="font-bold">Teléfono:</span> {airport?.phone_number}
            </p>
          </>
        )}
        {svg === "pointer" && (
          <>
            <p>
              <span className="font-bold">Latitud:</span> {airport?.latitude}
            </p>
            <p>
              <span className="font-bold">Longitud:</span> {airport?.longitude}
            </p>
            <p>
              <span className="font-bold">ID Geoname:</span> {airport?.geoname_id}
            </p>
          </>
        )}
        {svg === "world" && (
          <>
            <p>
              <span className="font-bold">Zona Horaria:</span> {airport?.timezone}
            </p>
            <p>
              <span className="font-bold">GMT:</span> {airport?.gmt}
            </p>
          </>
        )}
        {svg === "clock" && (
          <>
            <p>
              <ClockGMT gmtOffset={airport?.gmt} />
            </p>
          </>
        )}
      </div>
    </div>
  );
}
