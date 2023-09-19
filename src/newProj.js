import createSidebar from "./sidebar";
import forEachBtn from "./forEach";
import addTask from "./createTask";
import importantPage from "./important";
function createNewProj() {
  let projArr = [];

  const sidebar = document.querySelector(".sidebar");

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
    console.log(tabName);

    let tabNameDash;

    if (tabName.includes(" ")) {
      tabNameDash = tabName.replace(/\s+/g, "-");
    } else {
      tabNameDash = tabName;
    }

    console.log(tabNameDash);

    if (tabName == "" || tabName.charAt(0) == " ") {
      alert("Enter a valid name");
      return;
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

    sidebar.removeChild(projContainer);

    newProj.parentNode.insertBefore(newTab, newProj);
    addToArray();
    console.log(projArr);

    const addTaskBtn = document.createElement("button");
    const allTasksPageBtn = document.querySelector("#all-tasks-add-btn");
    addTaskBtn.textContent = "+ Add Task";
    addTaskBtn.setAttribute("id", `${tabNameDash}-add-task`);
    addTaskBtn.classList.add("add-task");
    mainContentContainer.appendChild(addTaskBtn);

    addTaskBtn.addEventListener("click", () => {
      // When the "Add Task" button is clicked within a project page,
      // you can add your logic to create a new task element.
      const taskName = prompt("Enter task name:");
      if (taskName) {
        const allPage = document.querySelector("#all-tab-page");
        const taskElement = document.createElement("button");
        taskElement.classList.add("task");
        const cloneToAll = document.createElement("button");
        cloneToAll.classList.add("task");

        taskElement.textContent = taskName;
        cloneToAll.textContent = taskName;

        const taskEditContainer = document.createElement("div");
        taskElement.appendChild(taskEditContainer);

        const cloneTaskEditContainer = document.createElement("div");
        cloneToAll.appendChild(cloneTaskEditContainer);

        const delBtn = document.createElement("button");
        delBtn.classList.add("del-task");
        delBtn.textContent = "Delete";

        const cloneDelBtn = document.createElement("button");
        cloneDelBtn.classList.add("del-task");
        cloneDelBtn.textContent = "Delete";

        cloneTaskEditContainer.appendChild(cloneDelBtn);
        taskEditContainer.appendChild(delBtn);

        const importantBtn = document.createElement("button");
        importantBtn.classList.add("important-toggle");
        importantBtn.textContent = "Important";

        const cloneImportantBtn = document.createElement("button");
        cloneImportantBtn.classList.add("important-toggle");

        cloneImportantBtn.textContent = "Important";

        cloneTaskEditContainer.appendChild(cloneImportantBtn);
        taskEditContainer.appendChild(importantBtn);

        addTaskBtn.parentNode.insertBefore(taskElement, addTaskBtn);
        allTasksPageBtn.parentNode.insertBefore(cloneToAll, allTasksPageBtn);

        delBtn.addEventListener("click", () => {
          taskElement.removeChild(taskEditContainer);
          addTaskBtn.parentNode.removeChild(taskElement);
          cloneToAll.removeChild(cloneTaskEditContainer);
          allTasksPageBtn.parentNode.removeChild(cloneToAll);
        });

        cloneDelBtn.addEventListener("click", () => {
          taskElement.removeChild(taskEditContainer);
          addTaskBtn.parentNode.removeChild(taskElement);
          cloneToAll.removeChild(cloneTaskEditContainer);
          allTasksPageBtn.parentNode.removeChild(cloneToAll);
        });

        const impPage = document.querySelector("#importatn-tab-page");
        const impTask = document.createElement("button");
        impTask.classList.add("task");
        impTask.textContent = taskName;

        const impContainer = document.createElement("div");
        impTask.appendChild(impContainer);

        const impDel = document.createElement("button");
        impDel.classList.add("del-task");
        impDel.textContent = "Delete";

        impContainer.appendChild(impDel);
        const impImpBtn = document.createElement("button");
        impImpBtn.classList.add("important-toggle");
        impImpBtn.textContent = "Important";
        impContainer.appendChild(impImpBtn);

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
      }
    });
  });

  cancelBtn.addEventListener("click", () => {
    sidebar.removeChild(projContainer);
  });

  function addToArray() {
    const tabs = document.querySelectorAll(".new-tab");

    tabs.forEach((tab) => {
      projArr.push(tab);
    });
  }

  forEachBtn();
}

export default createNewProj;
