const foodTarget = document.querySelector(".food")
const eventHub = document.querySelector("#state-fair")


export const FoodTicketHolders = () => {
    eventHub.addEventListener("foodTicketPurchased", customEvent => {

        foodTarget.innerHTML += 
        `<div class="person eater"></div>`
    })

}




