import React, { createContext, useState } from "react";
export const data3 = createContext();
const Foodapi = (props) => {
  const [food, setFood] = useState([
    {
      Title:
        " Revealed: 7 Dining Etiquette Protocols Followed By The Royal Family",
      CategoryName: "Food",
      PublishedDate: "May 15 2022",
      ImageAsset:
        "https://res.cloudinary.com/dlawbbgbn/image/upload/v1653570378/valentines-food-deals-2_nwczsb.jpg",
      BlogContent:
        "Royal etiquette expert William Hanson dished out some important protocols that are supposed to be followed while dining with the Queen",
      Likes: "1000K",
      id: "1",
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
        " Wondering Where To Go This Weekend? Check Out These 7 Insta-Worthy Cafes In Noida",
      CategoryName: "Food",
      PublishedDate: "May 8 2022",
      ImageAsset:
        "https://res.cloudinary.com/dlawbbgbn/image/upload/v1653570376/dih4ifhg_pasta_625x300_22_April_20_ddv54n.webp",
      BlogContent:
        "n our hunt for such picturesque places, we have found some beautiful cafes that are right here in Noida.",
      Likes: "600",
      id: "4",
    },
    {
      Title:
        "High-Protein Diet: How To Make Egg And Potato Salad For A Quick Meal (Recipe Inside)",
      CategoryName: "Food",
      PublishedDate: "MAy 15 2022",
      ImageAsset:
        "https://res.cloudinary.com/dlawbbgbn/image/upload/v1653570376/belgian-waffles-cover-image_kch5lm.webp",
      BlogContent:
        "This egg-potato salad recipe is light, wholesome and takes less than 30 minutes for preparation. Find the recipe inside.",
      Likes: "800",
      id: "5",
    },
  ]);

  return (
    <data3.Provider value={[food, setFood]}>{props.children}</data3.Provider>
  );
};

export default Foodapi;
