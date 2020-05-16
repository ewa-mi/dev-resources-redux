import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";

const selectNumberOfResources = (initialState) => {
  return initialState.resources.length;
};

const selectResources = (initialState) => {
  return initialState.resources;
};

const selectNumberOfDevelopers = (initialState) => {
  return initialState.developers.developers.length;
};

const selectDevelopersWithFavorite = (initialState) => {
  return initialState.developers.developers.filter((dev) =>
    dev.favorites.includes(initialState.developers.selectedResourceId)
  );
};

function App() {
  const dispatch = useDispatch();
  const numberOfResources = useSelector(selectNumberOfResources);
  const resources = useSelector(selectResources);
  const numberOfDevelopers = useSelector(selectNumberOfDevelopers);
  const developersWithFavorite = useSelector(selectDevelopersWithFavorite);

  const setSelectedResourceId = (value) => {
    const result = resources.filter((resource) => value === resource.name);

    dispatch({
      type: "SET_SELECTED_RESOURCE_ID",
      payload: result[0].id,
    });
  };

  return (
    <div className="App">
      <h1>Development resources</h1>
      <div>Number of resources: {numberOfResources}</div>
      <br></br>
      <div>Number of developers: {numberOfDevelopers}</div>
      <br></br>
      <h3>Select resource to check who liked it:</h3>
      <select onChange={(event) => setSelectedResourceId(event.target.value)}>
        {resources.map((resource) => (
          <option key={resource.id}>{resource.name}</option>
        ))}
      </select>

      <ul className="uls">
        {developersWithFavorite.map((devs) => (
          <li key={devs.id}>{devs.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
