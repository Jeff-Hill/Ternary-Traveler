import{createInterestContainer, enterNewInterest} from "./makeDOMComponents.js"
import{getInterests} from "./api.js"
import { saveNewInterestBtn} from "./events.js";


let newInterestForm = document.querySelector("#new-interest")
let displayInterest = document.querySelector("#display-interest")



function addNewInterestFormToDom() {
    newInterestForm.innerHTML = enterNewInterest("#new-interest")
    saveNewInterestBtn()

}


function displayInterestsToDom() {
    getInterests()
        .then(interestsArray => {
            interestsArray.forEach(interest => {
                displayInterest.innerHTML += createInterestContainer(interest)
            });

        })


}

export{displayInterestsToDom, addNewInterestFormToDom}