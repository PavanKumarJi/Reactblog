import React, { createContext, useState } from "react";
export const Data7 = createContext();
const Articalapi = (props) => {
  const [artical, setartical] = useState([
    {
      Title: " Powerplant technology",
      CategoryName: "Tecnology",
      PublishedDate: "May 24 2022",
      ImageAsset:
        "https://res.cloudinary.com/dlawbbgbn/image/upload/v1653605356/Thermal_power_plant_zzkcn2.png",
      BlogContent:
        "This book covers the treatment and synthesis of electric-generating power plant technology and engineering, with a balance between the analytical and technological aspects of powerplant design, systems and effects. The chapters are on the following topics: thermodynamics; the Rankine cycle; fossil-fuel steam generators; fuels and combustion; turbines; the condensate-feedwater system; the circulating water system; .",
      Likes: "700",
      id: "1",
    },
    {
      Title: " 9 things to do after eating oily food",
      CategoryName: "Food",
      PublishedDate: "May 25 2022",
      ImageAsset:
        "https://res.cloudinary.com/dlawbbgbn/image/upload/v1653570376/chinese-buffet_bquumn.jpg",
      BlogContent:
        "Greasy and oily treats are often called soul-satiating foods, and no foodie can help indulging in them once in a while. Another truth that follows post such meals is indigestion, heaviness and burning sensation in the throat and stomach, which is caused due to excessive oil and spices. The question of concern is, what to do after consuming oily food? This piece of information explores some simple and effective solutions that can help you recover from the uneasiness faster.",
      Likes: "5000K",
      id: "2",
    },
    {
      Title:
        " Samantha says she ‘looks possessed’ as she shares yet another intense workout video; WATCH - PINKVILLA",
      CategoryName: "Bollywood",
      PublishedDate: "May 23 2022",
      ImageAsset:
        "https://www.pinkvilla.com/files/styles/fbimagesection/public/samantha_workout_video_social.jpg?itok=MlF-0DMX",
      BlogContent:
        "Samantha Ruth Prabhu has shared yet another intense workout video on her Instagram handle.The question of concern is, what to do after consuming oily food? This piece of information explores some simple and effective solutions that can help you recover from the uneasiness faster",
      Likes: "600",
      id: "3",
    },
    {
      Title: " Hotel Review: Tylney Hall Hotel, Hook, Hampshire, England",
      CategoryName: "Torisum",
      PublishedDate: "May 25 2022",
      ImageAsset:
        "https://res.cloudinary.com/dlawbbgbn/image/upload/v1653605665/tylney_hall_swimming_pool_oblique_large-1170x780_uu5zqh.jpg",
      BlogContent:
        "It’s a longish, well-manicured, tree-lined winding driveway leading to the imposing Victorian, Grade II listed Tylney Hall hotel. The former stately home of Lord Windlesham and then Lord Rotherwick once served as the HQ of a shipping line, after which Tylney Hall became a school.The question of concern is, what to do after consuming oily food? This piece of information explores some simple and effective solutions that can help you recover from the uneasiness faster",
      Likes: "800",
      id: "4",
    },
    {
      Title: " Another benefit of exercise: Eye comfort",
      CategoryName: "fitness",
      PublishedDate: "May 25 2022",
      ImageAsset:
        "https://res.cloudinary.com/dlawbbgbn/image/upload/v1653607532/336a0dbf-ab09-4b78-b460-8c1ed8dc8bcd_x11huv.jpg",
      BlogContent:
        "In addition to many other health benefits, vigorous exercise may potentially help with dry, itchy eyes by boosting tear production and quality, a new study suggests.The study included 52 adults, whom investigators categorized as either athletes or non-­athletes. Participants in the athlete group exercised at least five times a week, while non-athletes exercised no more than once a week.",
      Likes: "800",
      id: "5",
    },
  ]);

  return (
    <Data7.Provider value={[artical, setartical]}>
      {props.children}
    </Data7.Provider>
  );
};

export default Articalapi;
