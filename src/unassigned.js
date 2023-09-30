import loadDataFromLocalStorage from "./loadDataFromStorage";
import createTask from "./createTask";
import {
  loadTasksFromLocalStorage,
  saveDataToLocalStorage,
} from "./taskLocalStorage";

function unassignedPage() {
  let projArr = loadDataFromLocalStorage();

  const existingUnassignedTab = document.querySelector("#Unassigned-tab-page");
  const unassignedExists = projArr.some(
    (project) => project.tabName === "Unassigned"
  );
  if (!existingUnassignedTab || !unassignedExists) {
    // If "Unassigned" tab doesn't exist, add it to projArr
    const unassignedProjectData = {
      tabName: "Unassigned",
      tabNameDash: "Unassigned",
    };
    //create header for all tasks page
    const mainContentContainer = document.createElement("div");
    mainContentContainer.setAttribute("id", `Unassigned-tab-page`);
    mainContentContainer.classList.add(
      "main-content-container",
      "show-hide",
      "hide"
    );
    const pageHeader = document.createElement("h1");
    pageHeader.classList.add("page-header");
    pageHeader.textContent = `Unassigned`;
    mainContentContainer.appendChild(pageHeader);
    projArr.push(unassignedProjectData);
    saveDataToLocalStorage(projArr);
    loadTasksFromLocalStorage();
  }

  loadTasksFromLocalStorage();

  if (!Array.isArray(projArr)) {
    projArr = [];
  }

  const projectData = {
    tabName: "Unassigned",
    tabNameDash: "Unassigned",
  };

  // Check if the event listener is already attached before adding it

  if (!addTask.hasEventListener) {
    addTask.hasEventListener = true;

    //addTask.addEventListener("click", () => {
    createTask(projectData.tabNameDash);
  }
}

export default unassignedPage;
