import createSidebar from "./sidebar";
import forEachBtn from "./forEach";
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

    const tabNameDash = tabName.replace(/\s+/g, "-");
    console.log(tabName);

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
