import React, { createContext, useState } from "react";
export const Data4 = createContext();
const Tourapi = (props) => {
  const [tourisum, setTourisum] = useState([
    {
      Title:
        "Fitness coach shares five benefits ‘men can enjoy in the long run if they practise Pilates’ regularly",
      CategoryName: "Fitness",
      PublishedDate: "May 15 2022",
      ImageAsset:
        "https://res.cloudinary.com/dlawbbgbn/image/upload/v1647245647/c3a9f051-bd6c-4b39-b5b9-38244deec783-GettyImages-932651818_qgsuho.jpg",
      BlogContent:
        "Practice Pilates on a regular basis. No matter what age fitness coach Neelam Mangat said on Instagram",
      Likes: "1000K",
      id: "1",
    },
    {
      Title: "Expert shares some weight loss mistakes you might be making",
      CategoryName: "Fitness",
      PublishedDate: "May 15 2022",
      ImageAsset:
        "https://res.cloudinary.com/dlawbbgbn/image/upload/v1653508958/image_gjv3rc.jpg",
      BlogContent:
        "Do you ever feel like you’re continuously eating healthy, following a strict diet , and yet not going anywhere? certified nutritionist Aanchal Sogani wrote on Instagram",
      Likes: "700",
      id: "2",
    },
    {
      Title:
        "Celeb fitness: Sooraj Pancholi is ‘back to the game’; watch video",
      CategoryName: "Fitness",
      PublishedDate: "May 15 2022",
      ImageAsset:
        "https://res.cloudinary.com/dlawbbgbn/image/upload/v1653568304/india-national-tourism-day_kbblda.jpg",
      BlogContent:
        "If there has been a gap in your gymming routine, it’s reasonable to see a decline in strength, endurance, and overall muscle,said Bala Krishna Reddy Dabbedi, a fitness expert",
      Likes: "5000K",
      id: "3",
    },
    {
      Title:
        " Here’s an easy way to asses your exercise intensity without fitness trackers",
      CategoryName: "Fitness",
      PublishedDate: "May 8 2022",
      ImageAsset:
        "https://res.cloudinary.com/dlawbbgbn/image/upload/v1653557424/wipogreen_2020_news0034_1200_afat8s.jpg",
      BlogContent:
        "The 'talk test' relies on understanding the effects of physical activity on your heart rate and breathing",
      Likes: "600",
      id: "4",
    },
    {
      Title: "Feeling lazy on a vacation? Try doing these simple exercises",
      CategoryName: "Fitness",
      PublishedDate: "MAy 15 2022",
      ImageAsset:
        "https://res.cloudinary.com/dlawbbgbn/image/upload/v1618638938/ocean_ytmfao.jpg",
      BlogContent:
        "The Uri actor, who is in Indore for his work commitments, recently took to his Instagram Story section to share a glimpse of him enjoying sweets before the festivities.",
      Likes: "800",
      id: "5",
    },
  ]);

  return (
    <Data4.Provider value={[tourisum, setTourisum]}>
      {props.children}
    </Data4.Provider>
  );
};

export default Tourapi;
