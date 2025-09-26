function sortEvents() {
    const list = document.getElementById("events");
    const items = list.getElementsByTagName("li");
    const itemsArr = Array.from(items);
    const sortOption = document.getElementById("sort").value;
     
    switch (sortOption) {
                
        case "dateAscending":
            itemsArr.sort((a, b) => {
                let dateA, dateB;
                const dateArrA = a.querySelector(".date").innerText.split('.');
                const dateArrB = b.querySelector(".date").innerText.split('.');
                    
                    dateA = new Date(dateArrA[2], dateArrA[1] - 1, dateArrA[0]);
                    dateB = new Date(dateArrB[2], dateArrB[1] - 1, dateArrB[0]);

                    return dateA - dateB;  
                });

                itemsArr.forEach(item => list.appendChild(item));
        break;

        case "dateDescending":
            itemsArr.sort((a, b) => {
                let dateA, dateB;
                const dateArrA = a.querySelector(".date").innerText.split('.');
                const dateArrB = b.querySelector(".date").innerText.split('.');
                    
                    dateA = new Date(dateArrA[2], dateArrA[1] - 1, dateArrA[0]);
                    dateB = new Date(dateArrB[2], dateArrB[1] - 1, dateArrB[0]);

                    return dateB - dateA;  
                });

                itemsArr.forEach(item => list.appendChild(item));
        break

        case "titleAscending":
            itemsArr.sort((a, b) => {
                const titleA = a.querySelector(".title").innerText.toLowerCase();
                const titleB = b.querySelector(".title").innerText.toLowerCase();
                if (titleA < titleB) return -1;
                if (titleA > titleB) return 1;
                return 0;
            });

            itemsArr.forEach(item => list.appendChild(item));
        break;


        case "titleDescending":
            itemsArr.sort((a, b) => {
                const titleA = a.querySelector(".title").innerText.toLowerCase();
                const titleB = b.querySelector(".title").innerText.toLowerCase();
                if (titleA > titleB) return -1;
                if (titleA < titleB) return 1;
                return 0;
            }
            );
            itemsArr.forEach(item => list.appendChild(item));
        break;

        default:
            break;
};
}

function searchEvent() {
    const input = document.getElementById("searchEvent").value.toLowerCase();
    const list = document.getElementById("events");
    const items = list.getElementsByTagName("li");

    for (let item of items) {
        const text = item.innerText.toLowerCase();
        if (text.includes(input)) {
            item.style.display = "";
        } else {
            item.style.display = "none";
        }
    }
}