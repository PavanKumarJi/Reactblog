import React, { useContext } from "react";
import "./home.css";
import { Data5 } from "./Latestapi";
import { Data6 } from "./Topapi";
import { Data7 } from "./Articalapi";
const Home = () => {
  const [Home, setHome] = useContext(Data5);
  const [topapi, setTopapi] = useContext(Data6);
  const [artical, setartical] = useContext(Data7);
  return (
    <div>
      <h1 className="home">Home</h1>
      <div className="home-card">
        <div className="home-1">
          <div>
            <h2 className="h2">Kerala:God's Own Country</h2>
            <h3 className="h3">Torisum / May 15,2022</h3>
            <img
              className="card-11"
              src="https://res.cloudinary.com/dlawbbgbn/image/upload/v1653568304/india-national-tourism-day_kbblda.jpg"
            />
          </div>
          <div>
            <img
              className="card-12"
              src="https://res.cloudinary.com/dlawbbgbn/image/upload/v1653508958/What_is_Information_Technology_r0i5ji.webp"
            />
            <br />
            <br />
            <img
              className="card-12"
              src="https://res.cloudinary.com/dlawbbgbn/image/upload/v1653553370/images_3_umvvlm.jpg"
            />
          </div>
        </div>
      </div>
      <h3 style={{ marginLeft: "2rem", fontSize: "30px" }}>The Latest</h3>
      <div className="card-31">
        {Home.map((data) => (
          <div>
            <img className="card-16" src={data.ImageAsset} alt="BollyImg" />
            <h4 style={{ marginLeft: "1rem" }}>{data.Title}</h4>
            <p style={{ marginLeft: "0.5rem" }}>{data.BlogContent}</p>
            <p style={{ marginLeft: "0.5rem" }}>
              <span style={{ fontWeight: "bold", padding: "0 10px 0 10px" }}>
                {data.CategoryName} /
              </span>
              {data.PublishedDate}
            </p>
          </div>
        ))}
      </div>
      <h3 style={{ marginLeft: "2rem", marginTop: "-3rem", fontSize: "30px" }}>
        The Latest Articals
      </h3>
      <div className="card-32">
        {artical.map((data) => (
          <div>
            <div>
              <img className="cards11" src={data.ImageAsset} alt="Img" />
            </div>
            <h3
              className="title9"
              style={{ marginLeft: "18rem", marginTop: "-11rem" }}
            >
              {data.Title}
            </h3>{" "}
            <p style={{ marginLeft: "18rem" }}>{data.BlogContent}</p>
            <div>
              <p style={{ marginLeft: "17rem", marginTop: "1rem" }}>
                <span style={{ fontWeight: "bold", padding: "0 20px 0 20px" }}>
                  {data.CategoryName} /
                </span>
                {data.PublishedDate}
              </p>
            </div>
            <hr />{" "}
          </div>
        ))}
      </div>
      <h3 className="top12">Top Post</h3>
      <div className="top-post">
        {topapi.map((data) => (
          <div>
            <img className="cards10" src={data.ImageAsset} alt="Img" />
            <div>
              <hr />{" "}
              <h3
                className="title9"
                style={{ marginLeft: "15rem", marginTop: "-11rem" }}
              >
                {data.Title}
              </h3>{" "}
              <div>
                <p style={{ marginLeft: "14.5rem", marginTop: "-1.5rem" }}>
                  <span
                    style={{ fontWeight: "bold", padding: "0 10px 0 10px" }}
                  >
                    {data.CategoryName} /
                  </span>
                  {data.PublishedDate}
                </p>
              </div>
            </div>
          </div>
        ))}
        <div className="add">
          <img
            src="https://res.cloudinary.com/dlawbbgbn/image/upload/v1653560887/advertisement-designing-services-500x500_h6igrm.jpg"
            alt="Advartisment"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
