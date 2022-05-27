import React, { createContext, useState } from "react";
export const Data = createContext();
const Api = (props) => {
  const [bollywood, setBollywood] = useState([
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
      Title:
        " Naga Chaitanya BREAKS silence on divorce with Samantha Ruth Prabhu; explains how it impacted their family, an - Bollywood Life",
      CategoryName: "Bollywood",
      PublishedDate: "May 15 2022",
      ImageAsset:
        "https://st1.bollywoodlife.com/wp-content/uploads/2022/01/Samantha-35-600x315.png",
      BlogContent:
        "Naga Chaitanya BREAKS silence on divorce with Samantha Ruth Prabhu; explains how it impacted their family, and both of them professionally Also get bollywood actors, actress, movie, parties & event photos at Bollywoodlife.com",
      Likes: "5000K",
      id: "2",
    },
    {
      Title:
        " Samantha says she ‘looks possessed’ as she shares yet another intense workout video; WATCH - PINKVILLA",
      CategoryName: "Bollywood",
      PublishedDate: "May 13 2022",
      ImageAsset:
        "https://www.pinkvilla.com/files/styles/fbimagesection/public/samantha_workout_video_social.jpg?itok=MlF-0DMX",
      BlogContent:
        "Samantha Ruth Prabhu has shared yet another intense workout video on her Instagram handle.",
      Likes: "600",
      id: "3",
    },
    {
      Title:
        " Vicky Kaushal and Katrina Kaif to Celebrate First Lohri After Marriage",
      CategoryName: "Bollywood",
      PublishedDate: "May 15 2022",
      ImageAsset:
        "https://images.news18.com/ibnlive/uploads/2021/12/katrina-and-vicky-pic-163999921816x9.jpg",
      BlogContent:
        "The Uri actor, who is in Indore for his work commitments, recently took to his Instagram Story section to share a glimpse of him enjoying sweets before the festivities.",
      Likes: "800",
      id: "4",
    },
  ]);

  return (
    <Data.Provider value={[bollywood, setBollywood]}>
      {props.children}
    </Data.Provider>
  );
};

export default Api;
