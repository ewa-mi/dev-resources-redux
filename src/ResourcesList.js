import React from "react";
import { useSelector } from "react-redux";
import "./ResourcesList.css";

const selectResources = (initialState) => {
  return initialState.resources.resources;
};

export default function ResourcesList() {
  const resources = useSelector(selectResources);

  return (
    <div className="list">
      {resources.map((res) => (
        <div className="oneRes" key={res.id}>
          <p>
            <span className="name"> {res.name} </span>({res.type}) | visit:{" "}
            <a className="anchor" href={res.url}>
              {res.url}
            </a>
          </p>
          {res.tags.map((tag, index) => (
            <span className="tag" key={index}>
              {tag}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}
