import React from "react";
import TagButton from "./TagButton";

export default function FilterTag({
  datas,
  setFilterTag,
  setTagLight,
  tagLight,
}) {
  const uniqueTags = [...new Set(datas.flatMap((ele) => ele.tags))];
  const uniquetags = []
  const seen =new Set()
  for (let word of uniqueTags) {
  const lower = word.toLowerCase();
  if (!seen.has(lower)) {
    seen.add(lower);
    const formatted = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    uniquetags.push(formatted);
  }
}
    // console.log(uniquetags)
  return (
    <div className="main-filter-tag">
      <h3 className="text-filter">Filter By Tag:</h3>
      <div className="filter-button">
        <button
          className={`buttons ${tagLight === "All" ? "dark-tag" : " "}`}
          onClick={() => {
            setFilterTag("");
            setTagLight("All");
          }}
        >
          All
        </button>
        {uniquetags.map((tag, i) => (
          <TagButton key={i} tagname={tag} setFilterTag={setFilterTag} tagLight={tagLight} setTagLight={setTagLight} />
        ))}
      </div>
    </div>
  );
}
