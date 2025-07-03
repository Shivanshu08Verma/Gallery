import React, { useState } from "react";

export default function UploadImages({ data, setData, setDatas }) {
  const [fileName, setFileName] = useState("");
  const [inputValue, setInputValue] = useState("");

  // const [tags, setTags] = useState([]);
  const [errors, setErrors] = useState({});
  const validConfig = {
    src: [{ required: true, message: "Image is required" }],
    tags: [{ required: true, message: "Tags are required" }],
  };
  const valid = (imageData) => {
    const errorsData = {};
    Object.entries(imageData).forEach(([key, value]) => {
      validConfig[key].some((rule) => {
        if (
          rule.required &&
          (value === "" || (Array.isArray(value) && value.length === 0))
        ) {
          errorsData[key] = rule.message;
          return true;
        }
      });
    });
    // console.log(errorsData[tags])
    // console.log(errorsData)
    setErrors(errorsData);
    return errorsData;
  };
  const handleUpload = (e) => {
    e.preventDefault();
    console.log(inputValue);
    const seen = new Set();
    const leftoverTags = inputValue
      .split(/[,\s]+/)
      .map((tag) => tag.trim())
      .filter(
        (tag) =>
          tag && !seen.has(tag.toLowerCase()) && seen.add(tag.toLowerCase())
      );
    // setInputValue("");
    // if (fileName.length === 0) {
    //   setData({ src: "", tags: [...data.tags] });
    // }
    console.log(leftoverTags);
    const allTags = [...leftoverTags];
    console.log(allTags);
    let finalData = {
      ...data,
      tags: allTags,
    };
    if (fileName.length === 0) {
      finalData = { src: "", tags: [...finalData.tags] };
    }
    console.log(finalData);
    const validateResult = valid(finalData);
    if (Object.keys(validateResult).length) {
      // allTags = [];
      // finalData.src = "";
      console.log("hello");
      // setData((gg) => [...gg, { tags: [] }]);
      return;
    }
    setDatas((prev) => [...prev, { ...finalData, id: crypto.randomUUID() }]);
    setData({ src: "", tags: [] });
    setFileName("");
    setInputValue("");
  };

  function handleFileChange(event) {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      const base64data = reader.result;
      // console.log(base64data);
      setFileName(file.name);
      setData((prev) => ({
        ...prev,
        src: base64data,
      }));
      setErrors({});
    };
  }

  return (
    <div className="main-upload-image">
      <h2 className="text-upload-image">Upload New Image</h2>
      <div className="upload-select-image">
        <div className="text-select-image">
          <div className="later-image">
            <label
              className="custom-upload"
              htmlFor="fileInput"
              id="fileName"
              title={fileName ? fileName : "Choose Image"}
            >
              {fileName ? fileName : "Choose Image"}
            </label>
            <p className="error">{errors.src}</p>
          </div>
          <input
            type="file"
            id="fileInput"
            accept="image/*"
            onChange={(e) => handleFileChange(e)}
          />
          <div className="later-tags">
            <input
              type="text"
              id="tagInput"
              placeholder="Enter Tags"
              value={inputValue}
              onChange={(e) => {
                const value = e.target.value;
                // console.log(value);
                setInputValue(value);
                const lastChar = value[value.length - 1];
                if (lastChar === " " || lastChar === ",") {
                  const tag = value.slice(0, -1).trim();

                  if (
                    tag &&
                    !data.tags.some(
                      (existing) => existing.toLowerCase() === tag.toLowerCase()
                    )
                  ) {
                    setData((prev) => ({
                      ...prev,
                      tags: [...prev.tags, tag],
                    }));
                  }
                }

                setErrors({});
              }}
            ></input>
            <p className="error">{errors.tags}</p>
          </div>
        </div>
        <button className="upload-button" onClick={handleUpload}>
          Upload
        </button>
      </div>
    </div>
  );
}
