import { add } from "lodash";
import createSidebar from "./sidebar";

function AllTasksPage() {
  //append sidebar for flex so that on left side
  //createSidebar();

  //add main content container so that is is to the right of sidebar
  const bodyContainer = document.querySelector("#body-container");
  const mainContentContainer = document.createElement("div");
  mainContentContainer.classList.add("main-content-container");
  bodyContainer.appendChild(mainContentContainer);

  //create header for all tasks page
  const pageHeader = document.createElement("h1");
  pageHeader.classList.add("page-header");
  pageHeader.textContent = "All Tasks";
  mainContentContainer.appendChild(pageHeader);

  const addTask = document.createElement("button");
  addTask.classList.add("page-button");
  addTask.textContent = "+ Add Task";
  mainContentContainer.appendChild(addTask);

  const allTasks = document.querySelector("#all-tab");
  allTasks.style.backgroundColor = "rgb(65, 72, 120)";
  allTasks.style.color = "white";

  //add task event listener
  addTask.addEventListener("click", () => {});
}

export default AllTasksPage;
