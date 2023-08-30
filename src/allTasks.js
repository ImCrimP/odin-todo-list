import createSidebar from "./sidebar";

function AllTasksPage() {
  //append sidebar for flex so that on left side
  createSidebar();
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
  addTask.textContent = "Add Task";
  mainContentContainer.appendChild(addTask);
}

export default AllTasksPage;
