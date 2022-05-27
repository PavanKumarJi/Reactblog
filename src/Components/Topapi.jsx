import React, { createContext, useState } from "react";
export const Data6 = createContext();
const Topapi = (props) => {
  const [topapi, setTopapi] = useState([
    {
      Title:
        " Tabu to star in Ajay Devgn's 'Bholaa' - the remake of Tamil blockbuster 'Kaithi' - Exclusive! - Times of India",
      CategoryName: "Bollywood",
      PublishedDate: "May 14 2022",
      ImageAsset:
        "https://static.toiimg.com/thumb/msid-88872893,width-1070,height-580,overlay-toi_sw,pt-32,y_pad-40,resizemode-75,imgsize-46584/88872893.jpg",
      BlogContent:
        "The Hindi remake of Tamil blockbuster movie ‘Kaithi’ starring Ajay Devgn has gone on floors with the title ‘Bholaa’",
      Likes: "700",
      id: "1",
    },
    {
      Title: "Expert shares some weight loss mistakes you might be making",
      CategoryName: "Fitness",
      PublishedDate: "May 15 2022",
      ImageAsset:
        "https://res.cloudinary.com/dlawbbgbn/image/upload/v1653553369/images_4_meom6j.jpg",
      BlogContent:
        "Do you ever feel like you’re continuously eating healthy, following a strict diet , and yet not going anywhere? certified nutritionist Aanchal Sogani wrote on Instagram",
      Likes: "700",
      id: "2",
    },
    {
      Title:
        "How To Make KFC-Style Fried Chicken - KFC Worker Spills The 'Secret' Recipeo",
      CategoryName: "Food",
      PublishedDate: "May 15 2022",
      ImageAsset:
        "https://res.cloudinary.com/dlawbbgbn/image/upload/v1653570376/nachossupreme-1643819188_ysefwd.jpg",
      BlogContent:
        "The KFC worker said that they use two different spice blenders - one factory does one blend and the second one adds more to the blend and packs it.",
      Likes: "5000K",
      id: "3",
    },
    {
      Title:
        " Here’s an easy way to asses your exercise intensity without fitness trackers",
      CategoryName: "Fitness",
      PublishedDate: "May 8 2022",
      ImageAsset:
        "https://res.cloudinary.com/dlawbbgbn/image/upload/v1653553370/Fitness_Running_is_not_enough_1653410091809_1653410100551_yttalp.webp",
      BlogContent:
        "The 'talk test' relies on understanding the effects of physical activity on your heart rate and breathing",
      Likes: "600",
      id: "4",
    },
  ]);

  return (
    <Data6.Provider value={[topapi, setTopapi]}>
      {props.children}
    </Data6.Provider>
  );
};

export default Topapi;
