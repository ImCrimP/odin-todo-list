import loadDataFromLocalStorage from "./loadDataFromStorage";
import createTask from "./createTask";
import removeProjectFromLocalStorage from "./removeFromLocalStorage";
import { clearAllTasks } from "./taskLocalStorage";
import { loadTasksFromLocalStorage } from "./taskLocalStorage";
import createTaskFromStorage from "./createTaskFromStorage";
import weekPage from "./week";
import { clone } from "lodash";
import { saveTasksToLocalStorage } from "./taskLocalStorage";
import { removeTask } from "./taskLocalStorage";

function createTabsFromLocalStorage() {
  document.addEventListener("DOMContentLoaded", () => {
    let projectsData = loadDataFromLocalStorage(); // Parse the data here

    if (!Array.isArray(projectsData)) {
      // Handle the case where projectsData is not an array (e.g., set it to an empty array)
      projectsData = [];
    }

    //console.log(projectsData);
    projectsData.forEach((projectData) => {
      //console.log("PROJECT DATA", projectData);
      const newProj = document.querySelector(".new-proj");
      const tabName = projectData.tabName;
      const tabNameDash = projectData.tabNameDash;

      // Create a new button for the project tab
      const newTab = document.createElement("button");
      newTab.classList.add("sidebar-tab", "new-tab");
      newTab.setAttribute("id", `${tabNameDash}-tab`);
      newTab.textContent = tabName;

      // Append the button to the sidebar
      //sidebar.appendChild(newTab);
      newProj.parentNode.insertBefore(newTab, newProj);

      // Create a new main content container for the tab's content
      const bodyContainer = document.querySelector("#body-container");
      const mainContentContainer = document.createElement("div");
      mainContentContainer.setAttribute("id", `${tabNameDash}-tab-page`);
      mainContentContainer.classList.add(
        "main-content-container",
        "show-hide",
        "hide"
      );

      bodyContainer.appendChild(mainContentContainer);

      // Create a header for the tab's content
      const pageHeader = document.createElement("h1");
      pageHeader.classList.add("page-header");
      pageHeader.textContent = `${tabName}`;
      mainContentContainer.appendChild(pageHeader);

      createTaskFromStorage();

      const addTaskBtn = document.createElement("button");
      const allTasksPageBtn = document.querySelector("#all-page-header");
      addTaskBtn.textContent = "+ Add Task";
      addTaskBtn.setAttribute("id", `${tabNameDash}-add-task`);
      addTaskBtn.classList.add("add-task");

      const mainPage = document.querySelector(`#${tabNameDash}-tab-page`);

      if (projectData.tabNameDash != "Unassigned") {
        const deleteProject = document.createElement("button");
        deleteProject.classList.add("delete-project");
        deleteProject.textContent = "Delete Project";
        pageHeader.appendChild(deleteProject);
        const sidebar = document.querySelector(".sidebar");

        newProj.parentNode.insertBefore(newTab, newProj);
        deleteProject.addEventListener("click", () => {
          const tabNameDash = projectData.tabNameDash;

          const tasks = loadTasksFromLocalStorage(tabNameDash);

          removeProjectFromLocalStorage(tabNameDash);
          clearAllTasks(tabNameDash);

          const tabPage = document.querySelector(`#${tabNameDash}-tab-page`);
          if (tabPage) {
            tabPage.remove();
          }

          newTab.remove();
          tasks.forEach((taskData) => {
            const taskElement = document.querySelector(
              `#${taskData.taskName}-task-all`
            );
            const today = document.querySelector(
              `#${taskData.taskName}-task-today`
            );
            const week = document.querySelector(
              `#${taskData.taskName}-task-week`
            );
            const imp = document.querySelector(
              `#${taskData.taskName}-task-important`
            );
            const comp = document.querySelector(
              `#${taskData.taskName}-task-complete`
            );

            if (taskElement) {
              taskElement.remove();
            }
            if (today) {
              today.remove();
            }
            if (week) {
              week.remove();
            }
            if (imp) {
              imp.remove();
            }
            if (comp) {
              comp.remove();
            }
          });

          // Update projArr to reflect the removal

          loadDataFromLocalStorage();

          /*
          const allPage = document.querySelector("#all-tab-page");
          const allTab = document.querySelector("#all-tab");
          allPage.classList.remove("hide");
          allTab.classList.add("active");
          console.log("projects", projArr);*/
          window.location.reload();
        });
      }

      if (!mainPage.contains(addTaskBtn)) {
        mainPage.appendChild(addTaskBtn);
      }

      ///////////////////////////

      // ... (add any other content you need for the tab here)

      // Add event listeners to the tab button to switch to the corresponding content

      newTab.addEventListener("click", () => {
        createTask(tabNameDash);
      });
    });
  });
}

export default createTabsFromLocalStorage;
