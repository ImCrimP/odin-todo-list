import AllTasksPage from "./allTasks";
import importantPage from "./important";
import createSidebar from "./sidebar";

function unassignedPage() {
  //create sidebar
  //createSidebar();

  //add main content container so that is is to the right of sidebar
  const bodyContainer = document.querySelector("#body-container");
  const mainContentContainer = document.createElement("div");
  mainContentContainer.setAttribute("id", "unassigned-tab-page");
  mainContentContainer.classList.add(
    "main-content-container",
    "show-hide",
    "hide"
  );
  const showHideContainer = document.createElement("div");
  showHideContainer.classList.add("show-hide");
  mainContentContainer.appendChild(showHideContainer);
  bodyContainer.appendChild(mainContentContainer);

  //create header for all tasks page
  const pageHeader = document.createElement("h1");
  pageHeader.classList.add("page-header");
  pageHeader.textContent = "Unassigned Tasks";
  mainContentContainer.appendChild(pageHeader);

  const addTask = document.createElement("button");
  addTask.classList.add("add-task");
  addTask.setAttribute("id", "unassigned-tasks-add-btn");
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

        const taskEditContainer = document.createElement("div");
        taskElement.appendChild(taskEditContainer);

        const delBtn = document.createElement("button");
        delBtn.classList.add("del-task");
        delBtn.textContent = "Delete";

        const importantBtn = document.createElement("button");
        importantBtn.classList.add("important-toggle");
        importantBtn.textContent = "Important";

        taskEditContainer.appendChild(importantBtn);
        taskEditContainer.appendChild(delBtn);

        addTask.parentNode.insertBefore(taskElement, addTask);
        delBtn.addEventListener("click", () => {
          addTask.parentNode.removeChild(taskElement);
          cloneToAll.removeChild(cloneTaskEditContainer);
          allTasksPageBtn.parentNode.removeChild(cloneToAll);
          if (impHeader.parentNode.contains(impTask)) {
            impHeader.parentNode.removeChild(impTask);
          }
        });

        const cloneToAll = document.createElement("button");
        cloneToAll.classList.add("task");

        cloneToAll.textContent = taskName;

        const cloneTaskEditContainer = document.createElement("div");
        cloneToAll.appendChild(cloneTaskEditContainer);

        const allTasksPageBtn = document.querySelector("#all-page-header");

        allTasksPageBtn.parentNode.appendChild(cloneToAll);

        const impPage = document.querySelector("#importatn-tab-page");
        const impTask = document.createElement("button");
        impTask.classList.add("task");
        impTask.textContent = taskName;

        const impContainer = document.createElement("div");
        impTask.appendChild(impContainer);

        const impDel = document.createElement("button");
        impDel.classList.add("del-task");
        impDel.textContent = "Delete";

        const impImpBtn = document.createElement("button");
        impImpBtn.classList.add("important-toggle");
        impImpBtn.textContent = "Important";
        impContainer.appendChild(impImpBtn);
        impContainer.appendChild(impDel);

        const cloneDelBtn = document.createElement("button");
        cloneDelBtn.classList.add("del-task");
        cloneDelBtn.textContent = "Delete";

        const cloneImportantBtn = document.createElement("button");
        cloneImportantBtn.classList.add("important-toggle");

        cloneImportantBtn.textContent = "Important";

        cloneTaskEditContainer.appendChild(cloneImportantBtn);
        cloneTaskEditContainer.appendChild(cloneDelBtn);

        const impHeader = document.querySelector("#important-header");

        importantBtn.addEventListener("click", () => {
          if (importantBtn.classList.contains("toggle-on")) {
            importantBtn.classList.remove("toggle-on");
            cloneImportantBtn.classList.remove("toggle-on");
            impHeader.parentNode.removeChild(impTask);
          } else {
            importantBtn.classList.add("toggle-on");
            cloneImportantBtn.classList.add("toggle-on");

            impHeader.parentNode.appendChild(impTask);
            impImpBtn.classList.add("toggle-on");
          }
        });

        cloneImportantBtn.addEventListener("click", () => {
          if (importantBtn.classList.contains("toggle-on")) {
            importantBtn.classList.remove("toggle-on");
            cloneImportantBtn.classList.remove("toggle-on");
            impHeader.parentNode.removeChild(impTask);
          } else {
            importantBtn.classList.add("toggle-on");
            cloneImportantBtn.classList.add("toggle-on");

            impHeader.parentNode.appendChild(impTask);
            impImpBtn.classList.add("toggle-on");
          }
        });

        impImpBtn.addEventListener("click", () => {
          if (importantBtn.classList.contains("toggle-on")) {
            importantBtn.classList.remove("toggle-on");
            cloneImportantBtn.classList.remove("toggle-on");
            impHeader.parentNode.removeChild(impTask);
          } else {
            importantBtn.classList.add("toggle-on");
            cloneImportantBtn.classList.add("toggle-on");

            impHeader.parentNode.appendChild(impTask);
            impImpBtn.classList.add("toggle-on");
          }
        });

        cloneDelBtn.addEventListener("click", () => {
          addTask.parentNode.removeChild(taskElement);
          cloneToAll.removeChild(cloneTaskEditContainer);
          allTasksPageBtn.parentNode.removeChild(cloneToAll);
          if (impHeader.parentNode.contains(impTask)) {
            impHeader.parentNode.removeChild(impTask);
          }
        });

        impDel.addEventListener("click", () => {
          addTask.parentNode.removeChild(taskElement);
          cloneToAll.removeChild(cloneTaskEditContainer);
          allTasksPageBtn.parentNode.removeChild(cloneToAll);
          impHeader.parentNode.removeChild(impTask);
        });
      }
    });
  }
}

export default unassignedPage;
