import AllTasksPage from "./allTasks";
import todayPage from "./today";
import weekPage from "./week";
import importantPage from "./important";
import unassignedPage from "./unassigned";
import completedPage from "./completed";
import createNewProj from "./newProj";
//import { ContextExclusionPlugin } from "webpack";

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
  allTab.classList.add("sidebar-tab");
  allTab.setAttribute("id", "all-tab");
  todayTab.classList.add("sidebar-tab");
  weekTab.classList.add("sidebar-tab");
  importantTab.classList.add("sidebar-tab");

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
  unassigned.classList.add("sidebar-tab");
  unassigned.textContent = "Unassigned";
  sidebar.appendChild(unassigned);

  //5.
  const newProj = document.createElement("button");
  newProj.classList.add("new-proj");
  newProj.classList.add("sidebar-tab");
  newProj.textContent = "+ New Project";
  sidebar.appendChild(newProj);

  //6.
  const completed = document.createElement("div");
  completed.classList.add("sidebar-header");
  completed.textContent = "Completed";
  sidebar.appendChild(completed);

  //7.
  const allCompleted = document.createElement("button");
  allCompleted.classList.add("sidebar-tab");
  allCompleted.textContent = "All";
  sidebar.appendChild(allCompleted);

  //8.
  allTab.addEventListener("click", () => {
    clearContent();
    AllTasksPage();
  });

  todayTab.addEventListener("click", () => {
    clearContent();
    todayPage();
  });

  weekTab.addEventListener("click", () => {
    clearContent();
    weekPage();
  });

  importantTab.addEventListener("click", () => {
    clearContent();
    importantPage();
  });

  unassigned.addEventListener("click", () => {
    clearContent();
    unassignedPage();
  });

  newProj.addEventListener("click", () => {
    const projContainer = document.querySelector(".proj-container");
    if (!projContainer) {
      createNewProj();
    }
  });

  allCompleted.addEventListener("click", () => {
    clearContent();
    completedPage();
  });
}

function clearContent() {
  const bodyContainer = document.querySelector("#body-container");
  const sidebar = document.querySelector(".sidebar");
  const mainContentContainer = document.querySelector(
    ".main-content-container"
  );
  if (sidebar) {
    bodyContainer.removeChild(sidebar);
  }

  if (mainContentContainer) {
    bodyContainer.removeChild(mainContentContainer);
  }
}

export default createSidebar;
