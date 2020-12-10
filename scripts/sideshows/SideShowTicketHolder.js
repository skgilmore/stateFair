const sideshowTarget = document.querySelector(".sideshow")
const eventHub = document.querySelector("#state-fair")


export const sideShowTicketHolders = () => {
    eventHub.addEventListener("sideShowTicketPurchased", customEvent => {

        sideshowTarget.innerHTML += 
        `<div class="person gawker"></div>`
    })

}