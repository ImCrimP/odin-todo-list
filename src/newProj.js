import createSidebar from "./sidebar";
import forEachBtn from "./forEach";
import addTask from "./createTask";
import importantPage from "./important";
import createTabsFromLocalStorage from "./createFromStorage";
import loadDataFromLocalStorage from "./loadDataFromStorage";
import createTask from "./createTask";
import AllTasksPage from "./allTasks";
import createTaskFromStorage from "./createTaskFromStorage";
import {
  saveTasksToLocalStorage,
  clearAllTasks,
  loadTasksFromLocalStorage,
} from "./taskLocalStorage";
import {
  addDays,
  isBefore,
  parseISO,
  isWithinInterval,
  format,
  isToday,
  startOfDay,
} from "date-fns";

function createNewProj() {
  // Function to save projects and tasks to localStorage

  function saveDataToLocalStorage(projArr) {
    localStorage.setItem("projects", JSON.stringify(projArr));
    console.log("Data saved", projArr);
  }

  loadDataFromLocalStorage();
  loadTasksFromLocalStorage();
  createTaskFromStorage();

  createTabsFromLocalStorage();

  let projArr = loadDataFromLocalStorage();

  const sidebar = document.querySelector(".sidebar");

  if (!Array.isArray(projArr)) {
    projArr = [];
  }

  //const sidebar = document.querySelector(".sidebar");

  //get new project element
  const newProj = document.querySelector(".new-proj");

  //create a new element for input
  const projContainer = document.createElement("div");
  projContainer.classList.add("proj-container");
  const projName = document.createElement("input");
  projName.classList.add("proj-name");
  projContainer.classList.add("sidebar-tab");
  projName.placeholder = "Project Name";

  //create add and delete buttons
  const addBtn = document.createElement("button");
  const cancelBtn = document.createElement("button");
  addBtn.textContent = "Add";
  addBtn.type = "submit";
  cancelBtn.textContent = "Cancel";
  addBtn.classList.add("proj-btn");
  cancelBtn.classList.add("proj-btn");

  projContainer.appendChild(projName);
  projContainer.appendChild(addBtn);
  projContainer.appendChild(cancelBtn);

  newProj.parentNode.insertBefore(projContainer, newProj);

  const projInput = projContainer.querySelector(".proj-name");

  //let projInstance = new Project();

  addBtn.addEventListener("click", () => {
    const tabName = projInput.value;
    //console.log(tabName);

    let tabNameDash;

    if (tabName.includes(" ")) {
      tabNameDash = tabName.replace(/\s+/g, "-");
    } else {
      tabNameDash = tabName;
    }

    tabNameDash = sanitizeForId(tabNameDash);

    //console.log(tabNameDash);

    if (tabName == "" || tabName.charAt(0) == " ") {
      alert("Enter a valid name");
      return;
    }
    const projectData = {
      tabName: tabName,
      tabNameDash: tabNameDash,
    };

    projArr.push(projectData);
    saveDataToLocalStorage(projArr);
    //console.log(projArr);

    const loadedProjects = loadDataFromLocalStorage(tabNameDash);
    if (loadedProjects) {
      console.log("loaded projects data: ", loadedProjects);
    } else {
      console.log("Project data ot found in local storage");
    }

    const newTab = document.createElement("button");
    newTab.classList.add("sidebar-tab", "new-tab");
    newTab.setAttribute("id", `${tabNameDash}-tab`);
    newTab.textContent = tabName;

    const bodyContainer = document.querySelector("#body-container");
    const mainContentContainer = document.createElement("div");
    mainContentContainer.setAttribute("id", `${tabNameDash}-tab-page`);
    mainContentContainer.classList.add(
      "main-content-container",
      "show-hide",
      "hide"
    );

    bodyContainer.appendChild(mainContentContainer);

    //create header for all tasks page
    const pageHeader = document.createElement("h1");
    pageHeader.classList.add("page-header");
    pageHeader.textContent = `${tabName}`;
    mainContentContainer.appendChild(pageHeader);

    const deleteProject = document.createElement("button");
    deleteProject.classList.add("delete-project");
    deleteProject.textContent = "Delete Project";
    pageHeader.appendChild(deleteProject);

    sidebar.removeChild(projContainer);

    newProj.parentNode.insertBefore(newTab, newProj);

    const addTaskBtn = document.createElement("button");
    const allTasksPageBtn = document.querySelector("#all-page-header");
    addTaskBtn.textContent = "+ Add Task";
    addTaskBtn.setAttribute("id", `${tabNameDash}-add-task`);
    addTaskBtn.classList.add("add-task");

    const mainPage = document.querySelector(`#${tabNameDash}-tab-page`);

    if (!mainPage.contains(addTaskBtn)) {
      mainPage.appendChild(addTaskBtn);
    }

    createTask(tabNameDash);

    //console.log(tasks);

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
        const week = document.querySelector(`#${taskData.taskName}-task-week`);
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

      let projArr = loadDataFromLocalStorage();

      window.location.reload();
    });

    //function removeProjectFromLocalStorage() {
    //  localStorage.removeItem(tabNameDash);
    //}

    function removeProjectFromLocalStorage(tabNameDash) {
      const projects = JSON.parse(localStorage.getItem("projects")) || [];

      // Find the index of the project with the specified tabNameDash
      const index = projects.findIndex(
        (project) => project.tabNameDash === tabNameDash
      );

      if (index !== -1) {
        // Remove the project from the array
        projects.splice(index, 1);

        // Update local storage with the modified projects array
        localStorage.setItem("projects", JSON.stringify(projects));
      }
    }
  });

  cancelBtn.addEventListener("click", () => {
    sidebar.removeChild(projContainer);
  });

  forEachBtn();

  function sanitizeForId(input) {
    // Remove any characters that are not letters, digits, hyphens, or underscores
    const sanitizedInput = input.replace(/[^A-Za-z0-9-_]/g, "");

    // Ensure the ID starts with a letter or underscore
    if (/^[^A-Za-z_]/.test(sanitizedInput)) {
      // Prefix the ID with an underscore if it doesn't start with a valid character
      return "_" + sanitizedInput;
    }

    return sanitizedInput;
  }
}

export default createNewProj;
//export { createNewProj, createTabsFromLocalStorage };
