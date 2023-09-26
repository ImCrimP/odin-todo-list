function loadDataFromLocalStorage(tabNameDash) {
  const projectsData = localStorage.getItem("projects");
  if (projectsData) {
    console.log(projectsData);
    const parsedData = JSON.parse(projectsData);
    console.log("Loaded data from Local Storage:", parsedData);
    return parsedData;
  } else {
    console.log("Local Storage is empty or data is missing.");
    return [];
  }
}

export default loadDataFromLocalStorage;
