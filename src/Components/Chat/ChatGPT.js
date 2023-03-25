import React, { useState } from "react";
import axios from "axios";
import "./chatGPT.css";

const ChatGPT = () => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const SERVER = process.env.REACT_APP_SERVER_URL;
  const ROUTE_CHAT = process.env.REACT_APP_ROUTES_CHAT;

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${SERVER}${ROUTE_CHAT}/`, { prompt })
      .then((res) => {
        setResponse(res.data);
        console.log(prompt);
      })
      .catch((error) => {
        console.log(error);
      });

    setPrompt("");
  };

  const handlePrompt = (e) => {
    setPrompt(e.target.value);
  };

  return (
    <div className="container container-sm p-1">
      {" "}
      <h1 className="title text-center text-darkGray">Virtual advisor</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          {/* <a href="">Link</a> */}
          <label htmlFor="">Ask questions</label>
          <input className="shadow-sm" type="text" placeholder="Enter text" value={prompt} onChange={handlePrompt} />
        </div>{" "}
        {/* <button className="btn btn-accept w-100" type="submit">
          Go
        </button> */}
      </form>
      <div className="bg-darkGray  mt-2 p-1 border-5">
        <p className="text-light">{response ? response : "Ask me anything..."}</p>
      </div>
    </div>
  );
};

export default ChatGPT;
