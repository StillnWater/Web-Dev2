const eventForm = document.getElementById("eventForm");
const eventTitle = document.getElementById("eventTitle");
const eventDate = document.getElementById("eventDate");
const eventCategory = document.getElementById("eventCategory");
const eventDescription= document.getElementById("eventDescription")

const eventContainer = document.getElementById("eventContainer")
const clearAllBtn = document.getElementById("clearAllBtn")
const addSampleBtn = document.getElementById("addSampleBtn")

let sampleEvent =
    [
        {
            title: "wen dev",
            date: "2026-12-8",
            category: "webinar",
            description: "asdfghjklertyuikcvbnghghg"
        },
        {
            title: "wen dev2",
            date: "2026-12-9",
            category: "social",
            description: "asdfghjklersdmnjdtyuikcvbnghghg"
        },
    ]



function createEventCard(eventData){
    console.log("inside create");
    const card=document.createElement('div');

    // assign the class to the card div
    // card.className="event-card";
    card.innerHTML=`
    <button class="delete-btn>X</button>
    <h2>${eventData.title}</h2>
    <div>${eventData.date}</div>
    <span>${eventData.category}</span>
    <p>${eventData.description}</p>
    `

    return card;
}

function addEvent(eventData){
    console.log("inside addevent")
    const emptyState = document.getElementById("empty-state");
    if(emptyState)  emptyState.remove();
    
    eventContainer.appendChild(createEventCard(eventData))
}

eventForm.addEventListener("submit",(event)=>{
    event.preventDefault();
    console.log("inside submit");

let eventData = {
    title:eventTitle.value,
    date:eventDate.value,
    category: eventCategory.value,
    description: eventDescription.value
}
console.log(eventData);

addEvent(eventData);
eventForm.reset();
})
