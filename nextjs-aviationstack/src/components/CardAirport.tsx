import Image from "next/image";
import { redirect } from "next/navigation";

export default function CardAirport({
  title = "",
  subTitle = "",
  city = "",
}) {
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
      <div className="absolute top-2 right-0">
        <Image
          src="/svg/fligth.svg"
          alt="Icon"
          width={30}
          height={30}
          className="mr-2"
        />
      </div>
      <div className="p-5 text-white text-xs">
        <p className="font-bold">{title}</p>
        <p className="pt-1">{subTitle}</p>
        <p className="pt-7 text-2xl font-semibold titleA">{city}</p>
      </div>
    </div>
  );
}
