import AllTasksPage from "./allTasks";
import createSidebar from "./sidebar";
import completedPage from "./completed";
import todayPage from "./today";
import weekPage from "./week";
import unassignedPage from "./unassigned";
import loadDataFromLocalStorage from "./loadDataFromStorage";
import {
  saveDataToLocalStorage,
  loadTasksFromLocalStorage,
} from "./taskLocalStorage";
import importantPage from "./important";
import createTabsFromLocalStorage from "./createFromStorage";
import createTaskFromStorage from "./createTaskFromStorage";

function intialLoad() {
  //localStorage.clear();

  let projArr = loadDataFromLocalStorage();

  const existingUnassignedTab = document.querySelector("#Unassigned-tab-page");
  const unassignedExists = projArr.some(
    (project) => project.tabName === "Unassigned"
  );
  if (!existingUnassignedTab && !unassignedExists) {
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
    //loadTasksFromLocalStorage();
    //window.location.reload();
  }

  createTabsFromLocalStorage();
  createTaskFromStorage();
  createSidebar();

  //window.location.reload();
  AllTasksPage();
  completedPage();
  todayPage();
  weekPage();
  //unassignedPage();
  importantPage();
}

export default intialLoad;
