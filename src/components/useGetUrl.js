import { useEffect, useState } from "react";

function useGetUrl(cities) {
  const [urldata, setUrlData] = useState(cities[0]);

  useEffect(() => {
    const len = cities.length;
    const selected_city = cities[Math.floor(Math.random() * len)];
    const timer = setTimeout(() => {
      setUrlData(selected_city);
    }, 10000);

    return () => {
      console.log("unmount");
      clearTimeout(timer);
    };
  }, [urldata]);

  return urldata;
}

export default useGetUrl;
