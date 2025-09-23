function sortDateascending() {
    const list = document.getElementById("events");
    const items = list.getElementsByTagName("li");
    const itemsArr = Array.from(items);
    itemsArr.sort((a, b) => {
        const dateA = new Date(a.getAttribute("data-date"));
        const dateB = new Date(b.getAttribute("data-date"));
        return dateA - dateB;
    });}
    
function sortDatedescending() {}
function sortTitleascending() {}
function sortTitledescending() {}