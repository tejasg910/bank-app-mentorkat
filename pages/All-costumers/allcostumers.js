const tabContainer = document.getElementById("tabsection");
const onOpenButton = document.getElementById("opentab");
const closeTabButton = document.getElementById("closetab");
onOpenButton.addEventListener("click", function () {
  tabContainer.classList.add("opentab");
  onOpenButton.style.display = "none!important";

  tabContainer.classList.remove("closetab");
});
closeTabButton.addEventListener("click", function () {
  tabContainer.classList.add("closetab");

  setTimeout(() => {
    tabContainer.classList.remove("opentab");
  }, 100);
  onOpenButton.style.display = "block";
});
