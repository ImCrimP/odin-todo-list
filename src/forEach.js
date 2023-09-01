function forEachBtn() {
  document.addEventListener("DOMContentLoaded", function () {
    const btns = document.querySelectorAll(".sidebar-tab");
    const mainContentContainer = document.querySelectorAll(
      ".main-content-container"
    );

    //let containID;
    /*
        btns.forEach((button) => {
          //console.log(button.classList);
          //console.log(button.id);
      
          button.addEventListener("click", () => {
            const page = document.querySelector(`#${button.id}-page`);
            console.log(page.id);
            btns.forEach((btn) => {
              btn.classList.remove("active");
              page.classList.add("hide");
            });
            mainContentContainer.forEach((nonSelected) => {
              nonSelected.classList.add("hide");
            });
            button.classList.add("active");
            page.classList.remove("hide");
          });
        });
        */

    btns.forEach((button) => {
      button.addEventListener("click", () => {
        const pageId = `${button.id}-page`;
        const page = document.querySelector(`#${pageId}`);

        if (!page) {
          return; // Exit if there is no corresponding page element
        }

        // Hide all main content containers
        // mainContentContainer.forEach((container) => {
        //   if (container !== page) {
        //     container.classList.add("hide");
        //   }
        // });

        // Remove "active" class from all buttons
        btns.forEach((btn) => {
          btn.classList.remove("active");
        });

        // Show the selected page and mark the button as active
        //page.classList.remove("hide");
        button.classList.add("active");
      });
    });

    const pageTabs = document.querySelectorAll(".page-tab");

    pageTabs.forEach((tab) => {});

    pageTabs.forEach((button) => {
      button.addEventListener("click", () => {
        const pageId = `${button.id}-page`;
        const page = document.querySelector(`#${pageId}`);

        if (!page) {
          return; // Exit if there is no corresponding page element
        }

        // Hide all main content containers
        mainContentContainer.forEach((container) => {
          if (container !== page) {
            container.classList.add("hide");
          }
        });

        // Show the selected page and mark the button as active
        page.classList.remove("hide");
      });
    });
  });
}

export default forEachBtn;
