import AllTasksPage from "./allTasks";
import todayPage from "./today";
import weekPage from "./week";
import importantPage from "./important";
import unassignedPage from "./unassigned";
import completedPage from "./completed";
import createNewProj from "./newProj";
import forEachBtn from "./forEach";
import { saveDataToLocalStorage } from "./taskLocalStorage";
import loadDataFromLocalStorage from "./loadDataFromStorage";
//import { ContextExclusionPlugin } from "webpack";
let projArr = [];

console.log(projArr);

class Project {
  constructor(name) {
    this.name = name;
  }
  printName() {
    console.log(this.name, "is my name");
  }
}

function createSidebar() {
  const bodyContainer = document.querySelector("#body-container");
  const sidebar = document.createElement("div");
  sidebar.classList.add("sidebar");
  bodyContainer.appendChild(sidebar);

  //TODO:
  //1. create sidebar home header
  //2. create tabs under home (all, today, week, important)
  //3. create project header
  //4. create unassigned tab
  //5. create new project button
  //6. create completed header
  //7. create all tab
  //8. add event listener for each tab

  //1.
  const home = document.createElement("div");
  home.classList.add("sidebar-header");
  home.setAttribute("id", "home");
  home.textContent = "Home";
  sidebar.appendChild(home);

  //2.
  //create buttons for tabs
  const allTab = document.createElement("button");
  const todayTab = document.createElement("button");
  const weekTab = document.createElement("button");
  const importantTab = document.createElement("button");

  //add class name for home tabs
  allTab.classList.add("sidebar-tab", "active", "page-tab");
  allTab.setAttribute("id", "all-tab");
  todayTab.classList.add("sidebar-tab", "page-tab");
  todayTab.setAttribute("id", "today-tab");
  weekTab.classList.add("sidebar-tab", "page-tab");
  weekTab.setAttribute("id", "week-tab");
  importantTab.classList.add("sidebar-tab", "page-tab");
  importantTab.setAttribute("id", "important-tab");

  //add textContent for home tabs
  allTab.textContent = "All Tasks";
  todayTab.textContent = "Today";
  weekTab.textContent = "Week";
  importantTab.textContent = "Important";

  //append to sidebar
  sidebar.appendChild(allTab);
  sidebar.appendChild(todayTab);
  sidebar.appendChild(weekTab);
  sidebar.appendChild(importantTab);

  //3.
  const projects = document.createElement("div");
  projects.classList.add("sidebar-header");
  projects.setAttribute("id", "projects");
  projects.textContent = "Projects";
  sidebar.appendChild(projects);

  //4.
  const unassigned = document.createElement("button");
  unassigned.classList.add("sidebar-tab", "page-tab");
  unassigned.setAttribute("id", "unassigned-tab");
  unassigned.textContent = "Unassigned";
  //sidebar.appendChild(unassigned);
  // Check if the "Unassigned" tab already exists

  /*
  const existingUnassignedTab = document.querySelector("#Unassigned-tab-page");

  if (!existingUnassignedTab) {
    // "Unassigned" tab doesn't exist, so create it
    const unassigned = document.createElement("button");
    unassigned.classList.add("sidebar-tab", "page-tab");
    unassigned.setAttribute("id", "Unassigned-tab");
    unassigned.textContent = "Unassigned";
    sidebar.appendChild(unassigned);

    // Create the main content container for the "Unassigned" tab
    const bodyContainer = document.querySelector("#body-container");
    const mainContentContainer = document.createElement("div");
    mainContentContainer.setAttribute("id", "Unassigned-tab-page");
    mainContentContainer.classList.add(
      "main-content-container",
      "show-hide",
      "hide"
    );
    const showHideContainer = document.createElement("div");
    showHideContainer.classList.add("show-hide");
    mainContentContainer.appendChild(showHideContainer);
    bodyContainer.appendChild(mainContentContainer);

    // Load and update projArr
    let projArr = loadDataFromLocalStorage();

    if (!Array.isArray(projArr)) {
      projArr = [];
    }

    const projectData = {
      tabName: "Unassigned",
      tabNameDash: "Unassigned",
    };

    // Save the updated projArr to localStorage
    saveDataToLocalStorage(projArr);

    // Push the "Unassigned" project data to projArr
    projArr.push(projectData);
  }*/

  //5.
  const newProj = document.createElement("button");
  newProj.classList.add("new-proj");
  newProj.classList.add("sidebar-tab");
  //newProj.setAttribute("id", "new-proj-tab");
  newProj.textContent = "+ New Project";
  sidebar.appendChild(newProj);

  //6.
  const completed = document.createElement("div");
  completed.classList.add("sidebar-header");
  completed.textContent = "Completed";
  sidebar.appendChild(completed);

  //7.
  const allCompleted = document.createElement("button");
  allCompleted.classList.add("sidebar-tab", "page-tab");
  allCompleted.setAttribute("id", "all-completed-tab");
  allCompleted.textContent = "All";
  sidebar.appendChild(allCompleted);

  //8.
  newProj.addEventListener("click", () => {
    const projContainer = document.querySelector(".proj-container");
    if (!projContainer) {
      createNewProj();
    }
  });

  sidebar.addEventListener("click", (event) => {
    const target = event.target;
    if (target.classList.contains("sidebar-tab")) {
      handleTabClick(target);
    }
  });

  const newProjSelect = document.querySelector(".new-proj");
  newProjSelect.addEventListener("click", () => {
    const projContainer = document.querySelector(".proj-container");
    if (!projContainer) {
      createNewProj();
    }
  });

  forEachBtn();
}

function handleTabClick(button) {
  const pageId = `${button.id}-page`;
  const page = document.querySelector(`#${pageId}`);

  if (!page) {
    return; // Exit if there is no corresponding page element
  }

  // Remove "active" class from all tab buttons
  const tabButtons = document.querySelectorAll(".sidebar-tab");
  tabButtons.forEach((btn) => {
    btn.classList.remove("active");
  });

  // Show the selected page and mark the clicked tab as active
  button.classList.add("active");

  // Hide all main content containers
  const mainContentContainers = document.querySelectorAll(
    ".main-content-container"
  );
  mainContentContainers.forEach((container) => {
    container.classList.add("hide");
  });

  // Show the selected page
  page.classList.remove("hide");
}

export default createSidebar;
