import{createNewInterestObj, createInterestContainer} from "./makeDOMComponents.js"
import { addNewInterest, getInterests } from "./api.js";

function saveNewInterestBtn() {
    document.querySelector("#save-new-interest").addEventListener("click", () => {
        console.log("save button clicked")
    let interestName = document.querySelector("#new-interest-name").value
    let interestDesc = document.querySelector("#new-interest-desc").value
    let interestCost = document.querySelector("#new-interest-cost").value
    let interestCountry = document.querySelector(".country-option").value
    let newInterestObj = createNewInterestObj(interestName, interestDesc, interestCost, interestCountry)
    addNewInterest(newInterestObj).then( () => {
        getInterests().then( () => {interestsArray => {
            document.querySelector("#display-interest").innerHTML = ""
            interestsArray.forEach(interest => {
                document.querySelector("#display-interest").innerHTML += createInterestContainer(interest)


            });
        }

        })
    })
})
}

function editInterestBtn() {
    document.querySelector(`#edit-interest-${interest.id}`).addEventListener("click", () => {
        console.log("edit button clicked")
    })
}

function deleteInterestBtn() {
    document.querySelector(`#delete-interest-${interest.id}`).addEventListener("click", () => {
        console.log("delete button clicked")
    })
}

export{saveNewInterestBtn, editInterestBtn, deleteInterestBtn}