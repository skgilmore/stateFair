const eventHub = document.querySelector("#state-fair")
let ridesTarget = document.querySelector(".rides")
let foodTarget = document.querySelector(".food")
let gamesTarget = document.querySelector(".games")
let sideshowTarget = document.querySelector(".sideshow")

export const fullPackageTicketHolder = () => {
    eventHub.addEventListener("fullPackageTicketPurchased", () => {
        return ridesTarget.innerHTML += `
        <div class="person bigSpender"></div>
        `
    })
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
