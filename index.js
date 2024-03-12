window.addEventListener("scroll", function () {
  var leftColumn = document.querySelector(".left-column");
  var rightColumn = document.querySelector("#scrolling-section");

  var rect = leftColumn.getBoundingClientRect();
  var scrollPosition = window.scrollY || window.pageYOffset;

  if (rect.top <= 0) {
    rightColumn.style.marginTop = -rect.top + "px";
  } else {
    rightColumn.style.marginTop = 0;
  }
});

const accordionItemHeaders = document.querySelectorAll(
  ".accordion-item-header"
);

accordionItemHeaders.forEach((accordionItemHeader) => {
  accordionItemHeader.addEventListener("click", (event) => {
    // Uncomment in case you only want to allow for the display of only one collapsed item at a time!

    //     const currentlyActiveAccordionItemHeader = document.querySelector(".accordion-item-header.active");
    //     if(currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader!==accordionItemHeader) {
    //        currentlyActiveAccordionItemHeader.classList.toggle("active");
    //        currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
    //      }

    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if (accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    } else {
      accordionItemBody.style.maxHeight = 0;
    }
  });
});

//cursor animation
document.addEventListener("DOMContentLoaded", function () {
  const cursor = document.querySelector(".custom-cursor");

  document.addEventListener("mousemove", function (e) {
    cursor.style.left = `${e.pageX}px`;
    cursor.style.top = `${e.pageY}px`;
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Get the heading element
  var heading = document.getElementById("myHeading");

  // Trigger the fade-in animation when the DOM is loaded
  heading.style.opacity = 1;
});
