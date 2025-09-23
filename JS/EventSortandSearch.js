function sortDateascending() {
    const list = document.getElementById("events");
    const items = list.getElementsByTagName("li");
    const itemsArr = Array.from(items);
    itemsArr.sort((a, b) => {
        
        
    });}

function sortDatedescending() {
    const list = document.getElementById("events");
    const items = list.getElementsByTagName("li");
    const itemsArr = Array.from(items);
    itemsArr.sort((a, b) => {
        
    
});}

function sortTitleascending() {}
function sortTitledescending() {}

function searchEvent() {
    const input = document.getElementById("searchEvent").value.toLowerCase();
    const list = document.getElementById("events");
    const items = list.getElementsByTagName("li");
}