import React, { useContext } from "react";
import { Data } from "./Api";
import "./style.css";

const Bollywood = () => {
  const [bollywood, setBollywood] = useContext(Data);
  return (
    <>
      <h2 className="bolly">Bollywood</h2>

      <h2 className="right-title">Top Most</h2>
      {bollywood.map((data) => (
        <div className="main-card" key={data.id}>
          <div className="cards">
            <div>
              <img className="card-1" src={data.ImageAsset} alt="BollyImg" />
            </div>
            <div className="card-2">
              <div>
                <h4 style={{ marginLeft: "1rem" }}>{data.Title}</h4>
              </div>
              <div>
                <p style={{ marginLeft: "0.5rem" }}>{data.BlogContent}</p>
              </div>
              <div>
                <p style={{ marginLeft: "0.5rem" }}>
                  <span
                    style={{ fontWeight: "bold", padding: "0 10px 0 10px" }}
                  >
                    {data.CategoryName} /
                  </span>
                  {data.PublishedDate}
                </p>
              </div>
            </div>
            <hr />
          </div>

          <div className="top-most">
            <div>
              <img
                className="right-card"
                src={data.ImageAsset}
                alt="BollyImg"
              />
              <div>
                <h3 className="title2" style={{ marginLeft: "1rem" }}>
                  {data.Title}
                </h3>
              </div>
              <div className="title3">
                <p>
                  <span style={{ fontWeight: "bold" }}>
                    {data.CategoryName} /
                  </span>
                  {data.PublishedDate}
                </p>
              </div>
              <hr className="hr" />
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
    </>
  );
};

export default Bollywood;
