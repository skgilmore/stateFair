const gamesTarget = document.querySelector(".games")
const eventHub = document.querySelector("#state-fair")

export const GameTicketHolders = () => {
    eventHub.addEventListener("gameTicketPurchased", customEvent => {

        gamesTarget.innerHTML += 
        `<div class="person player"></div>`;
    })

}

