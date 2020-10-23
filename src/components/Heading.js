import React from "react";
import CityStyles from "./CityStyles";
import useGetUrl from "./useGetUrl";

function Heading() {
  const cities = [
    {
      CityID: "BangkogOne",
      CityName: "Bangkog",
      CityImage: "bangkog1.jpg",
    },
    {
      CityID: "LimaOne",
      CityName: "Lima",
      CityImage: "lima1.jpg",
    },
    {
      CityID: "LimaTwo",
      CityName: "Lima",
      CityImage: "lima2.jpg",
    },
    {
      CityID: "LimaThird",
      CityName: "Lima",
      CityImage: "lima3.jpg",
    },
    {
      CityID: "NewYork",
      CityName: "New York",
      CityImage: "newyork.jpg",
    },
    {
      CityID: "NewYorkTwo",
      CityName: "New York",
      CityImage: "newyork2.jpg",
    },
    {
      CityID: "Toronto",
      CityName: "Toronto",
      CityImage: "toronto.jpg",
    },
    {
      CityID: "SanFrancisco",
      CityName: "San Francisco",
      CityImage: "sanfrancisco.jpg",
    },
  ];

  const urldata = useGetUrl(cities);

  return <CityStyles {...urldata} />;
}

export default Heading;
