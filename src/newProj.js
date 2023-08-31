function createNewProj() {
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
  const deleteBtn = document.createElement("button");
  addBtn.textContent = "Add";
  deleteBtn.textContent = "Delete";
  addBtn.classList.add("proj-btn");
  deleteBtn.classList.add("proj-btn");

  projContainer.appendChild(projName);
  projContainer.appendChild(addBtn);
  projContainer.appendChild(deleteBtn);

  newProj.parentNode.insertBefore(projContainer, newProj);
}

export default createNewProj;
