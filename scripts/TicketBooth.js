const contentTarget = document.querySelector(".entry")
const eventHub = document.querySelector("#state-fair")

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id ==="rideTicket"){
    const rideEvent = new CustomEvent ("rideTicketPurchased", {
        detail: {
        
            buttonClicked: "ride"
       }

    })
       eventHub.dispatchEvent(rideEvent)

    }
})

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "foodTicket") {
        const foodEvent = new CustomEvent("foodTicketPurchased", {
            detail: {
                buttonClicked: "food"
          }
        
        })

        eventHub.dispatchEvent(foodEvent)
    }
})


eventHub.addEventListener("click", clickEvent => {
   if (clickEvent.target.id ==="gameTicket") {
    const gameEvent = new CustomEvent ("gameTicketPurchased",{
        detail: {
            buttonClicked: "game"
        }

    })
    eventHub.dispatchEvent(gameEvent)
   }
})

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id ==="sideShowTicket") {
     const sideShowEvent = new CustomEvent ("sideShowTicketPurchased",{
         detail: {
             buttonClicked: "sideShow"
         }
 
     })
     eventHub.dispatchEvent(sideShowEvent)
    }
 })
 eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id ==="fullPackageTicket") {
     const fullPackageEvent = new CustomEvent ("fullPackageTicketPurchased",{
         detail: {
             buttonClicked: "fullPackage"
         }
 
     })
     eventHub.dispatchEvent(fullPackageEvent)
    }
 })

 let ticketCounter = 1
 

        export const TicketBooth = () => {
            contentTarget.innerHTML += `
                <div class="ticketBooth">
                <button id="rideTicket">Ride Ticket</button>
                <button id="foodTicket">Food Ticket</button>
                <button id="gameTicket">Game Ticket</button>
                <button id="sideShowTicket">Sideshow Ticket</button>
                <button id="fullPackageTicket">FullPacakge Ticket</button>
                </div>
            `
        }
    







