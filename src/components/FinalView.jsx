import React from "react";

export default function FinalView({ setLast, last, setInform }) {
  return (
    <div className="last-view">
      <header>
        <button onClick={() =>{
            setInform(false)
            setLast({src:"",tags:[]})
        }}>×</button>
      </header>
      <img className="last-view-image" src={last.src} />
      <div className="card-final-tag">
        {last.tags.map((tg, i) => (
          <p className="tags-image-view" key={i}>
            {tg}
          </p>
        ))}
      </div>
    </div>
  );
}
