import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import React from "react";
import "./featured.scss";

const Featured = ({ type }) => {
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movie" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img
        src="https://th.bing.com/th/id/R.9d194017281d72d4c21e621637b1b147?rik=Qaq1iXH1h3OBhw&pid=ImgRaw&r=0"
        alt=""
      />
      <div className="info">
        <img
          src="https://th.bing.com/th/id/R.7e378b1a9d5301eccfa226978f278749?rik=Kw3KVDdQlgtMfg&riu=http%3a%2f%2fofficialpsds.com%2fimageview%2f78%2f42%2f7842qp_large.png%3f1521316521&ehk=Wlkr0OIQxYDMe4KX3WpRPbU8UyaigTL5P2eyeILYONo%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1"
          alt=""
          width={"100px"}
        />
        <span className="desc"></span>
        <div className="buttons">
          <button className="play">
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
