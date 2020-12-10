// Import and invoke the ticket booth component function

import { FoodTicketHolders } from "./food/FoodTicketHolder.js"
import { RideTicketHolders } from "./rides/RideTicketHolders.js"
import { TicketBooth } from "./TicketBooth.js"
import { GameTicketHolders } from "./games/GameTicketHolder.js"
import { sideShowTicketHolders } from "./sideshows/SideShowTicketHolder.js"
import { fullPackageTicketHolder } from "./fullPackage/fullPackage.js"

FoodTicketHolders()
TicketBooth()
RideTicketHolders()
GameTicketHolders()
sideShowTicketHolders()
fullPackageTicketHolder()



// button in ticket booth to buy food ticket (event send to foodtixholder)
// addEventListener in foodholder
// in event body add function with  div of food tix bought
// repeat for games