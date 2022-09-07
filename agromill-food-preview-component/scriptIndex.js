var navigationItem = document.querySelectorAll(".navigationItemName");

navigationItem.forEach((item) => {
  item.addEventListener("click", (clickEvent) => {
    const clickedItem = clickEvent.target;

    navigationItem.forEach((item) => {
      if (item == clickedItem) {
        item.nextElementSibling.style.visibility = "visible";
        item.parentElement.style.color = "hsl(195, 11%, 14%)";
      } else {
        item.nextElementSibling.style.visibility = "hidden";
        item.parentElement.style.color = "hsl(60, 1%, 53%)";
      }
    });
  });
});
