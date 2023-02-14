const tabContainer = document.getElementById("tabsection");
const onOpenButton = document.getElementById("opentab");
const closeTabButton = document.getElementById("closetab");
const main = document.getElementById("main");
onOpenButton.addEventListener("click", function () {
  tabContainer.classList.add("opentab");
  onOpenButton.style.display = "none!important";

  tabContainer.classList.remove("closetab");
  main.style.gridTemplateColumns = "1fr";
});
closeTabButton.addEventListener("click", function () {
  tabContainer.classList.add("closetab");

  setTimeout(() => {
    tabContainer.classList.remove("opentab");
  }, 100);
  onOpenButton.style.display = "block";
  main.style.gridTemplateColumns = "1fr 3fr";
});
