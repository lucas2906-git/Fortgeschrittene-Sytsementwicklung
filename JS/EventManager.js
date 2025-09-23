
    document.getElementById('eventForm').addEventListener('submit', function(event){

    const title = document.getElementById('title').value;
    const date = document.getElementById('date').value;
    const description = document.getElementById('description').value;

    event.preventDefault(); // Verhindert das automatische Neuladen der Seite

    console.log(`Event hinzugefügt: ${title}, ${date}, ${description}`);

    document.getElementById('events').innerHTML += `
        <li>
            <strong>${title}</strong><br>
            <strong>${date}</strong><br>
            ${description}<br>
        </li>
    `;
});