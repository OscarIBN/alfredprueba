import { useEffect, useState } from "react";

const ClockGMT = ({ gmtOffset = 0 }) => {
  const [dateTime, setDateTime] = useState("");

  useEffect(() => {
    const updateDateTime = () => {
      const currentDate = new Date();
      const gmtDate = new Date(
        currentDate.getTime() + gmtOffset * 60 * 60 * 1000
      );
      const day = gmtDate.getDate();
      const month = gmtDate.getMonth() + 1;
      const year = gmtDate.getFullYear();
      const hours = gmtDate.getHours();
      const minutes = gmtDate.getMinutes();
      const seconds = gmtDate.getSeconds();
      const formattedDateTime = `${day}/${month}/${year}, ${hours}:${minutes}:${seconds}`;
      setDateTime(formattedDateTime);
    };
    const intervalId = setInterval(updateDateTime, 1000);
    return () => clearInterval(intervalId);
  }, [gmtOffset]);

  return (
    <div>
      {dateTime}
    </div>
  );
};

export default ClockGMT;
