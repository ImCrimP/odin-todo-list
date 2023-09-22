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
        taskEditContainer.classList.add("task-btns-container");
        taskElement.appendChild(taskEditContainer);

        const delBtn = document.createElement("button");
        delBtn.classList.add("del-task");
        delBtn.textContent = "Delete";

        const importantBtn = document.createElement("button");
        importantBtn.classList.add("important-toggle");
        importantBtn.textContent = "Important";

        const complete = document.createElement("button");
        complete.classList.add("incomplete");
        complete.textContent = "Incomplete";

        const cloneComplete = document.createElement("button");
        cloneComplete.classList.add("incomplete");
        cloneComplete.textContent = "Incomplete";

        const impComplete = document.createElement("button");
        impComplete.classList.add("incomplete");
        impComplete.textContent = "Incomplete";

        taskEditContainer.appendChild(importantBtn);
        taskEditContainer.appendChild(complete);
        taskEditContainer.appendChild(delBtn);

        addTask.parentNode.insertBefore(taskElement, addTask);

        const cloneToAll = document.createElement("button");
        cloneToAll.classList.add("task");

        cloneToAll.textContent = taskName;

        const cloneTaskEditContainer = document.createElement("div");
        cloneTaskEditContainer.classList.add("task-btns-container");
        cloneToAll.appendChild(cloneTaskEditContainer);

        const allTasksPageBtn = document.querySelector("#all-page-header");

        allTasksPageBtn.parentNode.appendChild(cloneToAll);

        const impPage = document.querySelector("#importatn-tab-page");
        const impTask = document.createElement("button");
        impTask.classList.add("task");
        impTask.textContent = taskName;

        const impContainer = document.createElement("div");
        impContainer.classList.add("task-btns-container");
        impTask.appendChild(impContainer);

        const impDel = document.createElement("button");
        impDel.classList.add("del-task");
        impDel.textContent = "Delete";

        const impImpBtn = document.createElement("button");
        impImpBtn.classList.add("important-toggle");
        impImpBtn.textContent = "Important";
        impContainer.appendChild(impImpBtn);
        impContainer.appendChild(impComplete);
        impContainer.appendChild(impDel);

        const cloneDelBtn = document.createElement("button");
        cloneDelBtn.classList.add("del-task");
        cloneDelBtn.textContent = "Delete";

        const cloneImportantBtn = document.createElement("button");
        cloneImportantBtn.classList.add("important-toggle");

        cloneImportantBtn.textContent = "Important";

        cloneTaskEditContainer.appendChild(cloneImportantBtn);
        cloneTaskEditContainer.appendChild(cloneComplete);
        cloneTaskEditContainer.appendChild(cloneDelBtn);

        const impHeader = document.querySelector("#important-header");

        //TODO: create stuff for compelted page (task, buttons, etc.)
        const compPageTask = document.createElement("button");
        compPageTask.classList.add("task");
        compPageTask.textContent = taskName;

        const compPageContainer = document.createElement("div");
        compPageContainer.classList.add("task-btns-container");
        compPageTask.appendChild(compPageContainer);

        const compPageDel = document.createElement("button");
        compPageDel.classList.add("del-task");
        compPageDel.textContent = "Delete";

        const compPageComplete = document.createElement("button");
        compPageComplete.classList.add("incomplete");
        compPageComplete.textContent = "Incomplete";

        const compPageImportant = document.createElement("button");
        compPageImportant.classList.add("important-toggle");
        compPageImportant.textContent = "Important";
        compPageContainer.appendChild(compPageImportant);
        compPageContainer.appendChild(compPageComplete);
        compPageContainer.appendChild(compPageDel);

        const compHeader = document.querySelector("#comp-header");

        //complete buttons
        complete.addEventListener("click", () => {
          if (complete.classList.contains("complete")) {
            complete.classList.remove("complete");
            complete.textContent = "Incomplete";
            cloneComplete.classList.remove("complete");
            cloneComplete.textContent = "Incomplete";
            impComplete.classList.remove("complete");
            impComplete.textContent = "Incomplete";

            if (compHeader.parentNode.contains(compPageTask)) {
              compHeader.parentElement.removeChild(compPageTask);
            }
          } else {
            complete.classList.add("complete");
            complete.textContent = "Complete";
            cloneComplete.classList.add("complete");
            cloneComplete.textContent = "Complete";
            impComplete.classList.add("complete");
            impComplete.textContent = "Complete";

            compPageComplete.classList.add("complete");
            compPageComplete.textContent = "Complete";
            compHeader.parentElement.appendChild(compPageTask);
          }
        });

        cloneComplete.addEventListener("click", () => {
          if (complete.classList.contains("complete")) {
            complete.classList.remove("complete");
            complete.textContent = "Incomplete";
            cloneComplete.classList.remove("complete");
            cloneComplete.textContent = "Incomplete";
            impComplete.classList.remove("complete");
            impComplete.textContent = "Incomplete";
            if (compHeader.parentNode.contains(compPageTask)) {
              compHeader.parentElement.removeChild(compPageTask);
            }
          } else {
            complete.classList.add("complete");
            complete.textContent = "Complete";
            cloneComplete.classList.add("complete");
            cloneComplete.textContent = "Complete";
            impComplete.classList.add("complete");
            impComplete.textContent = "Complete";

            compPageComplete.classList.add("complete");
            compPageComplete.textContent = "Complete";
            compHeader.parentElement.appendChild(compPageTask);
          }
        });

        impComplete.addEventListener("click", () => {
          if (complete.classList.contains("complete")) {
            complete.classList.remove("complete");
            complete.textContent = "Incomplete";
            cloneComplete.classList.remove("complete");
            cloneComplete.textContent = "Incomplete";
            impComplete.classList.remove("complete");
            impComplete.textContent = "Incomplete";
            if (compHeader.parentNode.contains(compPageTask)) {
              compHeader.parentElement.removeChild(compPageTask);
            }
          } else {
            complete.classList.add("complete");
            complete.textContent = "Complete";
            cloneComplete.classList.add("complete");
            cloneComplete.textContent = "Complete";
            impComplete.classList.add("complete");
            impComplete.textContent = "Complete";

            compPageComplete.classList.add("complete");
            compPageComplete.textContent = "Complete";
            compHeader.parentElement.appendChild(compPageTask);
          }
        });

        compPageComplete.addEventListener("click", () => {
          if (complete.classList.contains("complete")) {
            complete.classList.remove("complete");
            complete.textContent = "Incomplete";
            cloneComplete.classList.remove("complete");
            cloneComplete.textContent = "Incomplete";
            impComplete.classList.remove("complete");
            impComplete.textContent = "Incomplete";
            if (compHeader.parentNode.contains(compPageTask)) {
              compHeader.parentElement.removeChild(compPageTask);
            }
          } else {
            complete.classList.add("complete");
            complete.textContent = "Complete";
            cloneComplete.classList.add("complete");
            cloneComplete.textContent = "Complete";
            impComplete.classList.add("complete");
            impComplete.textContent = "Complete";

            compPageComplete.classList.add("complete");
            compPageComplete.textContent = "Complete";
            compHeader.parentElement.appendChild(compPageTask);
          }
        });

        //important buttons
        importantBtn.addEventListener("click", () => {
          if (importantBtn.classList.contains("toggle-on")) {
            importantBtn.classList.remove("toggle-on");
            cloneImportantBtn.classList.remove("toggle-on");
            impHeader.parentNode.removeChild(impTask);

            compPageImportant.classList.remove("toggle-on");
          } else {
            importantBtn.classList.add("toggle-on");
            cloneImportantBtn.classList.add("toggle-on");

            impHeader.parentNode.appendChild(impTask);
            impImpBtn.classList.add("toggle-on");

            compPageImportant.classList.add("toggle-on");
          }
        });

        cloneImportantBtn.addEventListener("click", () => {
          if (importantBtn.classList.contains("toggle-on")) {
            importantBtn.classList.remove("toggle-on");
            cloneImportantBtn.classList.remove("toggle-on");
            impHeader.parentNode.removeChild(impTask);

            compPageImportant.classList.remove("toggle-on");
          } else {
            importantBtn.classList.add("toggle-on");
            cloneImportantBtn.classList.add("toggle-on");

            impHeader.parentNode.appendChild(impTask);
            impImpBtn.classList.add("toggle-on");

            compPageImportant.classList.add("toggle-on");
          }
        });

        impImpBtn.addEventListener("click", () => {
          if (importantBtn.classList.contains("toggle-on")) {
            importantBtn.classList.remove("toggle-on");
            cloneImportantBtn.classList.remove("toggle-on");
            impHeader.parentNode.removeChild(impTask);

            compPageImportant.classList.remove("toggle-on");
          } else {
            importantBtn.classList.add("toggle-on");
            cloneImportantBtn.classList.add("toggle-on");

            impHeader.parentNode.appendChild(impTask);
            impImpBtn.classList.add("toggle-on");

            compPageImportant.classList.add("toggle-on");
          }
        });

        compPageImportant.addEventListener("click", () => {
          if (importantBtn.classList.contains("toggle-on")) {
            importantBtn.classList.remove("toggle-on");
            cloneImportantBtn.classList.remove("toggle-on");
            impHeader.parentNode.removeChild(impTask);

            compPageImportant.classList.remove("toggle-on");
          } else {
            importantBtn.classList.add("toggle-on");
            cloneImportantBtn.classList.add("toggle-on");

            impHeader.parentNode.appendChild(impTask);
            impImpBtn.classList.add("toggle-on");

            compPageImportant.classList.add("toggle-on");
          }
        });

        //Delete buttons
        delBtn.addEventListener("click", () => {
          addTask.parentNode.removeChild(taskElement);
          cloneToAll.removeChild(cloneTaskEditContainer);
          allTasksPageBtn.parentNode.removeChild(cloneToAll);
          if (impHeader.parentNode.contains(impTask)) {
            impHeader.parentNode.removeChild(impTask);
          }

          if (compHeader.parentNode.contains(compPageTask)) {
            compHeader.parentElement.removeChild(compPageTask);
          }
        });

        cloneDelBtn.addEventListener("click", () => {
          addTask.parentNode.removeChild(taskElement);
          cloneToAll.removeChild(cloneTaskEditContainer);
          allTasksPageBtn.parentNode.removeChild(cloneToAll);
          if (impHeader.parentNode.contains(impTask)) {
            impHeader.parentNode.removeChild(impTask);
          }

          if (compHeader.parentNode.contains(compPageTask)) {
            compHeader.parentElement.removeChild(compPageTask);
          }
        });

        impDel.addEventListener("click", () => {
          addTask.parentNode.removeChild(taskElement);
          cloneToAll.removeChild(cloneTaskEditContainer);
          allTasksPageBtn.parentNode.removeChild(cloneToAll);
          impHeader.parentNode.removeChild(impTask);

          if (compHeader.parentNode.contains(compPageTask)) {
            compHeader.parentElement.removeChild(compPageTask);
          }
        });

        compPageDel.addEventListener("click", () => {
          addTask.parentNode.removeChild(taskElement);
          cloneToAll.removeChild(cloneTaskEditContainer);
          allTasksPageBtn.parentNode.removeChild(cloneToAll);
          if (impHeader.parentNode.contains(impTask)) {
            impHeader.parentNode.removeChild(impTask);
          }
          compHeader.parentElement.removeChild(compPageTask);
        });
      }
    });
  }
}

export default unassignedPage;
