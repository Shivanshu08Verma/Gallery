import React from "react";
import FinalView from "./FinalView";

export default function ImageCard({ src, tag, setInform, setLast }) {
  return (
    <div
      className="main-image-card"
      onClick={() => {
        setInform(true);
        setLast({ src, tags: tag });
      }}
    >
      <img className="image-card" src={src} />
      <div className="card-tags">
        {tag.map((tg, i) => (
          <p className="tags-image-card" key={i}>
            { tg.charAt(0).toUpperCase() + tg.slice(1).toLowerCase()}
          </p>
        ))}
      </div>
    </div>
  );
}
