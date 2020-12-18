const eventHub = document.querySelector("#state-fair")
let ridesTarget = document.querySelector(".rides")
let foodTarget = document.querySelector(".food")
let gamesTarget = document.querySelector(".games")
let sideshowTarget = document.querySelector(".sideshow")

let ticketCounter = 1

export const ticketPurchased = () => {
    const ticketBought = {
        id: ticketCounter++,
    }
    return ticketBought
}

export const fullPackageTicketHolder = (ticketPurchased) => {
    eventHub.addEventListener("fullPackageTicketPurchased", () => {
        return ridesTarget.innerHTML += `
        <dive class="customers">'Ticket Counter${ticketPurchased.id}'</div>
        <div class="person bigSpender"></div>
        `
    }) 
    console.log(fullPackageTicketHolder)

    eventHub.addEventListener("fullPackageTicketPurchased", () => {
        return foodTarget.innerHTML += `
        <div class="person bigSpender"></div>
        `
    })
    eventHub.addEventListener("fullPackageTicketPurchased", () => {
        return gamesTarget.innerHTML += `
        <div class="person bigSpender"></div>
        `
    })
    eventHub.addEventListener("fullPackageTicketPurchased", () => {
        return sideshowTarget.innerHTML += `
        <div class="person bigSpender"></div>
        `
    })
}
