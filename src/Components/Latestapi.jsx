import React, { createContext, useState } from "react";
export const Data5 = createContext();
const Latestapi = (props) => {
  const [home, setHome] = useState([
    {
      Title:
        "What The Fork: Kunal Vijayakar on the Perfect Summer Food to Beat the Heat",
      CategoryName: "Food",
      PublishedDate: "May 25 2022",
      ImageAsset:
        "https://res.cloudinary.com/dlawbbgbn/image/upload/v1653604286/curd-rice-1-16519277623x2_g9xewo.webp",
      BlogContent:
        "How soon we renounce age-old traditions in the praxis of food, and succumb to the allure of convenience, short cuts, and finished good-looking products. I’m talking about age old dahi or curd. In my grandmother’s home where I lived for the first 15 years of my life and even when we moved lock stock and tapeli to where my parents made their new home, dahi was always made in the kitchen.",
      Likes: "700",
      id: "1",
    },
    {
      Title:
        "Southwest's Latest Sale Has Flights to Las Vegas, Puerto Rico, and More As Low As $45 Each Way — but You'll Have to Act Fast",
      CategoryName: "Tourism",
      PublishedDate: "May 25 2022",
      ImageAsset:
        "https://res.cloudinary.com/dlawbbgbn/image/upload/v1647245647/c3a9f051-bd6c-4b39-b5b9-38244deec783-GettyImages-932651818_qgsuho.jpg",
      BlogContent:
        "Southwest Airlines wants to help travelers plan ahead for an end-of-summer vacation with fares on sale for as low as $45 one way.The sale, which must be booked by 11:59 p.m. CT on May 26, is valid on flights within the United States, to and from Hawaii, inter-island travel within Hawaii, travel to and from Puerto Rico, and international travel from Aug. 16 through Nov. 5, according to the carrier.",
      Likes: "5000K",
      id: "2",
    },
    {
      Title:
        " Hrithik Roshan Announces New Look After Making It Red Carpet Official With Saba Azad At Karan Johar's Party",
      CategoryName: "Bollywood",
      PublishedDate: "May 26 2022",
      ImageAsset:
        "https://res.cloudinary.com/dlawbbgbn/image/upload/v1653603371/4o4m1vo8_hrithiksussanneembed_625x300_26_May_22_pnbwwv.webp",
      BlogContent:
        "The party was for Karan Johar but the top trend today is Hrithik Roshan. Hrithik was among the extensive list of celebrities invited to a grand celebration of Karan Johar who turned 50 yesterday; he attended with his girlfriend, actress and musician Saba Azad. It was their first official appearance at an event as a couple – Hrithik and Saba have previously been pictured together out and about in Mumbai and also at the airport, flying back from Goa (more on that later).",
      Likes: "600",
      id: "3",
    },
  ]);

  return (
    <Data5.Provider value={[home, setHome]}>{props.children}</Data5.Provider>
  );
};

export default Latestapi;
