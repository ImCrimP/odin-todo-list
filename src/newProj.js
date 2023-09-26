import createSidebar from "./sidebar";
import forEachBtn from "./forEach";
import addTask from "./createTask";
import importantPage from "./important";
import createTabsFromLocalStorage from "./createFromStorage";
import loadDataFromLocalStorage from "./loadDataFromStorage";
import createTask from "./createTask";
import AllTasksPage from "./allTasks";
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
  // Function to load projects and tasks from localStorage
  /*
  function loadDataFromLocalStorage() {
    const projectsData = localStorage.getItem("projects");
    if (projectsData) {
      //console.log(projectsData);
      const parsedData = JSON.parse(projectsData);
      console.log("Loaded data from Local Storage:", parsedData);
      return parsedData;
    } else {
      console.log("Local Storage is empty or data is missing.");
      return [];
    }
  }*/

  //window.addEventListener("load", () => {

  createTabsFromLocalStorage();
  // You can also handle other initialization tasks here if needed.
  //});

  let projArr = loadDataFromLocalStorage();

  //console.log(projArr);
  //console.log(projArr.length);
  // if (projArr.length >= 0) {
  const sidebar = document.querySelector(".sidebar");

  //sidebar.innerHTML = "";

  //projArr.forEach((projectData) => {
  //  const tabName = projectData.name;
  //  const tabNameDash = projectsData.tabNameDash;

  // Create a new button for the project
  //const newTab = document.createElement("button");
  //newTab.classList.add("sidebar-tab", "new-tab");
  //newTab.setAttribute("id", `${tabName}-tab`);
  //newTab.textContent = tabName;

  // Append the button to the sidebar
  //sidebar.appendChild(newTab);

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

    deleteProject.addEventListener("click", () => {
      const tabNameDash = projectData.tabNameDash;

      localStorage.removeItem(tabNameDash);

      removeProjectFromLocalStorage(tabNameDash);

      const tabPage = document.querySelector(`#${tabNameDash}-tab-page`);
      if (tabPage) {
        tabPage.remove();
      }

      // Remove the project tab from the sidebar
      newTab.remove();

      // Update projArr to reflect the removal
      projArr = loadDataFromLocalStorage();

      const allPage = document.querySelector("#all-tab-page");
      const allTab = document.querySelector("#all-tab");
      allPage.classList.remove("hide");
      allTab.classList.add("active");
    });

    function removeProjectFromLocalStorage() {
      localStorage.removeItem(tabNameDash);
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
