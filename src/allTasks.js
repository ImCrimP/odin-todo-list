import { add } from "lodash";
import createSidebar from "./sidebar";

function AllTasksPage() {
  //append sidebar for flex so that on left side
  //createSidebar();

  //add main content container so that is is to the right of sidebar
  const bodyContainer = document.querySelector("#body-container");
  const mainContentContainer = document.createElement("div");
  mainContentContainer.setAttribute("id", "all-tab-page");
  mainContentContainer.classList.add("main-content-container", "show-hide");
  const showHideContainer = document.createElement("div");
  showHideContainer.classList.add("show-hide");
  mainContentContainer.appendChild(showHideContainer);
  bodyContainer.appendChild(mainContentContainer);

  //create header for all tasks page
  const pageHeader = document.createElement("h1");
  pageHeader.classList.add("page-header");
  pageHeader.textContent = "All Tasks";
  mainContentContainer.appendChild(pageHeader);

  const addTask = document.createElement("button");
  addTask.classList.add("add-task");
  addTask.setAttribute("id", "all-tasks-add-btn");
  addTask.textContent = "+ Add Task";
  mainContentContainer.appendChild(addTask);

  // Check if the event listener is already attached before adding it

  if (!addTask.hasEventListener) {
    addTask.hasEventListener = true;

    addTask.addEventListener("click", () => {
      const taskName = prompt("Enter task name:");
      if (taskName) {
        const taskElement = document.createElement("button");
        taskElement.classList.add("task");
        taskElement.textContent = taskName;

        const delBtn = document.createElement("button");
        delBtn.classList.add("del-task");
        delBtn.textContent = "Delete";

        taskElement.appendChild(delBtn);

        addTask.parentNode.insertBefore(taskElement, addTask);
        delBtn.addEventListener("click", () => {
          taskElement.removeChild(delBtn);
          addTask.parentNode.removeChild(taskElement);
        });
      }
    });
  }
}

export default AllTasksPage;
