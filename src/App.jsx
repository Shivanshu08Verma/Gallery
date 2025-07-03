import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import UploadImages from "./components/UploadImages";
import FilterTag from "./components/FilterTag";
import Image from "./components/Image";
import { useLocalStorage } from "./hooks/useLocalStorage";
import Data from "./Data";
import FinalView from "./components/FinalView";

function App() {
  const [data, setData] = useLocalStorage("image-data", { src: "", tags: [] });
  const [datas, setDatas] = useLocalStorage("images-data", Data);
  const [filtertag, setFilterTag] = useState("");
  const [inform, setInform] = useState(false);
  const [last, setLast] = useState({ src: "", tags: [] });
  const [tagLight, setTagLight] = useState("All");
  return (
    <>
      <h1 className="Title">Image Gallery</h1>
      <UploadImages data={data} setData={setData} setDatas={setDatas} />
      <FilterTag datas={datas} setFilterTag={setFilterTag} tagLight={tagLight} setTagLight={setTagLight} />
      <Image
        datas={datas}
        filtertag={filtertag}
        setInform={setInform}
        setLast={setLast}
      />
      {inform ? (
        <FinalView setInform={setInform} last={last} setLast={setLast} />
      ) : (
        ""
      )}
    </>
  );
}

export default App;
