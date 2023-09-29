import AllTasksPage from "./allTasks";
import createSidebar from "./sidebar";
import completedPage from "./completed";
import todayPage from "./today";
import weekPage from "./week";
import unassignedPage from "./unassigned";
import importantPage from "./important";
import createTabsFromLocalStorage from "./createFromStorage";
import createTaskFromStorage from "./createTaskFromStorage";

function intialLoad() {
  //localStorage.clear();
  createTabsFromLocalStorage();
  createTaskFromStorage();
  createSidebar();
  AllTasksPage();
  completedPage();
  todayPage();
  weekPage();
  unassignedPage();
  importantPage();
}

export default intialLoad;
