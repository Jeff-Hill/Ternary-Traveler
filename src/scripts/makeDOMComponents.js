
function createInterestContainer(interest) {

    return `
    <div id="interests-container">
    <fieldset>
    <h2 class="place-name" id="place-${interest.id}">Country:${interest.placeId}</h2>
    <h3 class="interest-name" id="interest-${interest.id}">Destination:${interest.name}</h3>
    <h4 class="interest-desc" id="interest-${interest.id}">Description:${interest.description}</h4>
    <h5 class="interest-cost" id="interest-${interest.id}">Cost: $${interest.cost}</h5>
    <h5 class="interest-review" id="interest-${interest.id}">Review:${interest.review}</h5>
    <button type="button" class="interest-edit" id="edit-interest-${interest.id}">Edit Interest</button>
    <button type="button" class="interest-delete" id="delete-interest-${interest.id}">Delete Interest</button>
    </fieldset>
    </div>
        `

}

function enterNewInterest() {
    return `
    <input type="text" id="new-interest-name" placeholder="Name of Point of Interest">
    <input type="textarea" id="new-interest-desc" placeholeder="Description">
    <input type="number" id="new-interest-cost" placeholder="Cost">
    <select name="country" id="country-name" required>
        <option class="country-option" value="1">Italy</option>
        <option class="country-option" value="2">Switzerland</option>
        <option class="country-option" value="3">France</option>
    </select>
    <button id="save-new-interest">Save</button>
    `
}

function createNewInterestObj(name, description, cost, country) {
    return {
        name: name,
        description: description,
        cost: cost,
        country: country,
        review: ""
    }
}







export{createInterestContainer, enterNewInterest, createNewInterestObj}