import React from "react";
import ImageCard from "./ImageCard";
export default function Image({ datas, filtertag,setInform,setLast }) {
  return (
    <div className="image-main">
      {filtertag
        ? datas
            .filter((img) =>
              img.tags.some(
                (tag) => tag.toLowerCase() === filtertag.toLowerCase()
              )
            )
            .map((img, i) => <ImageCard key={i} src={img.src} tag={img.tags} setInform={setInform} setLast={setLast} />)
        : datas.map((img, i) => (
            <ImageCard key={i} src={img.src} tag={img.tags} setInform={setInform} setLast={setLast}/>
          ))}
    </div>
  );
}
