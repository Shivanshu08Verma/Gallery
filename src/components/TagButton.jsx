import React from "react";

export default function TagButton({
  tagname,
  setFilterTag,
  tagLight,
  setTagLight,
}) {
  return (
    <button
      className={`buttons ${tagLight === tagname ? "dark-tag" : " "}`}
      onClick={() => {
        setFilterTag(tagname);
        setTagLight(tagname);
      }}
    >
      {tagname}
    </button>
  );
}
