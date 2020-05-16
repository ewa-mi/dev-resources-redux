import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";

const selectNumberOfResources = (initialState) => {
  return initialState.resources.resources.length;
};

const selectResources = (initialState) => {
  return initialState.resources.resources;
};

const selectDevelopers = (initialState) => {
  return initialState.developers.developers;
};

const selectNumberOfDevelopers = (initialState) => {
  return initialState.developers.developers.length;
};

const selectDevelopersWithFavorite = (initialState) => {
  return initialState.developers.developers.filter((dev) =>
    dev.favorites.includes(initialState.resources.selectedResourceId)
  );
};

const selectResourcesWithDev = (initialState) => {
  const selectedDev = initialState.developers.developers.filter(
    (dev) => dev.id === initialState.developers.selectedDeveloperId
  );

  return initialState.resources.resources.filter((res) =>
    selectedDev[0]?.favorites.includes(res.id)
  );
};

function App() {
  const dispatch = useDispatch();
  const numberOfResources = useSelector(selectNumberOfResources);
  const resources = useSelector(selectResources);
  const numberOfDevelopers = useSelector(selectNumberOfDevelopers);
  const developersWithFavorite = useSelector(selectDevelopersWithFavorite);
  const developers = useSelector(selectDevelopers);
  const resourcesWithDev = useSelector(selectResourcesWithDev);

  const setSelectedResourceId = (value) => {
    const result = resources.filter((resource) => value === resource.name);

    dispatch({
      type: "SET_SELECTED_RESOURCE_ID",
      payload: result[0].id,
    });
  };

  const setSelectedDeveloperId = (value) => {
    const result = developers.filter((developer) => value === developer.name);

    dispatch({
      type: "SET_SELECTED_DEVELOPER_ID",
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
        <option defaultValue hidden>
          select
        </option>
        {resources.map((resource) => (
          <option key={resource.id}>{resource.name}</option>
        ))}
      </select>

      <ul className="uls">
        {developersWithFavorite.map((devs) => (
          <li key={devs.id}>{devs.name}</li>
        ))}
      </ul>
      <br></br>
      <h3>Select developer to check her/his favorite resource:</h3>
      <select onChange={(event) => setSelectedDeveloperId(event.target.value)}>
        <option defaultValue hidden>
          select
        </option>
        {developers.map((developer) => (
          <option key={developer.id}>{developer.name}</option>
        ))}
      </select>
      <ul className="uls">
        {resourcesWithDev.map((res) => (
          <li key={res.id}>{res.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
