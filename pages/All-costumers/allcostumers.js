const tabContainer = document.getElementById("tabsection");
const onOpenButton = document.getElementById("opentab");
const closeTabButton = document.getElementById("closetab");
onOpenButton.addEventListener("click", function () {
  tabContainer.classList.add("opentab");
  onOpenButton.style.display = "none";

  tabContainer.classList.remove("closetab");
});
closeTabButton.addEventListener("click", function () {
  tabContainer.classList.add("closetab");
  tabContainer.classList.remove("opentab");
  onOpenButton.style.display = "block";
});
