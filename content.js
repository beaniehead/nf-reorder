
function insertAfter(el, referenceNode) {
  referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
}
const myList = document.querySelector("[data-list-context='queue']");
const continueWatching = document.querySelector("[data-list-context='continueWatching']");
const billboardRow = document.querySelector(".billboard-row");
// insertAfter(myList, billboardRow);
insertAfter(continueWatching, billboardRow);


