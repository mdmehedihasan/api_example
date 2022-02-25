const loadBuddies = () => {
    fetch('https://randomuser.me/api/?results=10')
        .then(response => response.json())
        .then(data => showBuddies(data))
}
loadBuddies();
const showBuddies = (data) => {
    const frndLst = data.results;
    const containerInfo = document.getElementById('buddies');
    // containerInfo.innerText = buddy.email;
    for (const buddy of frndLst) {
        console.log(buddy.email, buddy.name.first, buddy.name.last);
        const p = document.createElement('p');
        p.innerText = ` Name:${buddy.name.first} ${buddy.name.last} emai: ${buddy.email} `;
        containerInfo.appendChild(p);
    }
}