  /**
         * Handles the click event on a category button.
         * Removes the 'active-category' class from all buttons and adds it to the clicked button.
         * @param {Event} event - The click event object.
         */
  // function handleCategoryClick(event) {
  //   const categoryButtons = document.querySelectorAll(".category-item");
  //   categoryButtons.forEach((button) => {
  //     button.classList.remove("active-category");
  //     button.classList.remove("fw-bold");
  //   });
  //   event.target.classList.add("active-category");
  //   event.target.classList.add("fw-bold");
  // }



  function handleCategoryClick(category) {
    // Hide all category content divs
    const categoryContents = document.querySelectorAll(".category-content");
    categoryContents.forEach((content) => {
      content.style.display = "none";
    });

    // Show the corresponding category content div
    const categoryContent = document.getElementById(category + "Content");
    if (categoryContent) {
      categoryContent.style.display = "block";
    }
    
    // Update active class in navigation buttons
    const categoryButtons = document.querySelectorAll(".category-item");
    categoryButtons.forEach((button) => {
      button.classList.remove("active-category", "fw-bold");
    });
    event.target.classList.add("active-category", "fw-bold");
  }








