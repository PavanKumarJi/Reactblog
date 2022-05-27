import React, { createContext, useState } from "react";
export const Data2 = createContext();
const FApi = (props) => {
  const [fitness, setFitness] = useState([
    {
      Title: "Expert shares some weight loss mistakes you might be making",
      CategoryName: "Fitness",
      PublishedDate: "May 15 2022",
      ImageAsset:
        "https://res.cloudinary.com/dlawbbgbn/image/upload/v1653553369/images_4_meom6j.jpg",
      BlogContent:
        "Do you ever feel like you’re continuously eating healthy, following a strict diet , and yet not going anywhere? certified nutritionist Aanchal Sogani wrote on Instagram",
      Likes: "700",
      id: "1",
    },
    {
      Title:
        "Celeb fitness: Sooraj Pancholi is ‘back to the game’; watch video",
      CategoryName: "Fitness",
      PublishedDate: "May 15 2022",
      ImageAsset:
        "https://res.cloudinary.com/dlawbbgbn/image/upload/v1653553370/images_2_kmqk5u.jpg",
      BlogContent:
        "If there has been a gap in your gymming routine, it’s reasonable to see a decline in strength, endurance, and overall muscle,said Bala Krishna Reddy Dabbedi, a fitness expert",
      Likes: "5000K",
      id: "2",
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
      id: "3",
    },
    {
      Title: "Feeling lazy on a vacation? Try doing these simple exercises",
      CategoryName: "Fitness",
      PublishedDate: "MAy 15 2022",
      ImageAsset:
        "https://res.cloudinary.com/dlawbbgbn/image/upload/v1653553369/images_5_kmgcpc.jpg",
      BlogContent:
        "The Uri actor, who is in Indore for his work commitments, recently took to his Instagram Story section to share a glimpse of him enjoying sweets before the festivities.",
      Likes: "800",
      id: "4",
    },
  ]);

  return (
    <Data2.Provider value={[fitness, setFitness]}>
      {props.children}
    </Data2.Provider>
  );
};

export default FApi;
