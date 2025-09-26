// Gruppe 1
    document.getElementById('eventForm').addEventListener('submit', function(event){

    const title = document.getElementById('title').value;
    const date = document.getElementById('date').value;
    const description = document.getElementById('description').value;
    const partsArr = date.split('-'); 
    const correctFormat = `${partsArr[2]}.${partsArr[1]}.${partsArr[0]}`; 

    event.preventDefault(); // Verhindert das automatische Neuladen der Seite

    console.log(`Event hinzugefügt: ${title}, ${date}, ${description}`);

    document.getElementById('events').innerHTML += `
        <li>
            <strong class="title">${title}</strong><br>
            <strong>Datum: </strong>
            <time class="date">${correctFormat}</time><br>
            ${description}<br>
        </li>
    `;
    document.getElementById('eventForm').reset(); // Formular zurücksetzen
    sortEvents(); // Events nach dem Hinzufügen sortieren
});