const ridesTarget = document.querySelector(".rides")
const eventHub = document.querySelector("#state-fair")

export const RideTicketHolders = () => {
    eventHub.addEventListener("rideTicketPurchased", customEvent => {
        ridesTarget.innerHTML +=
        `
    <div class="person rider"> </div>

      `

})
}
