const tabContainer = document.getElementById("tabsection");
const onOpenButton = document.getElementById("opentab");
const closeTabButton = document.getElementById("closetab");
onOpenButton.addEventListener("click", function () {
  tabContainer.classList.add("opentab");
  onOpenButton.style.visibility = "hidden";
  tabContainer.classList.remove("closetab");
});
closeTabButton.addEventListener("click", function () {
  tabContainer.classList.add("closetab");

  setTimeout(() => {
    tabContainer.classList.remove("opentab");
  }, 100);
  onOpenButton.style.visibility = "visible";

  onOpenButton.style.display = "block";
});
