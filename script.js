var detailsForm = document.querySelector("#destination_details_form");
//add event listener
detailsForm.addEventListener("submit" ,handleFormSubmit);

function handleFormSubmit(event) {
    event.preventDefault();
//clear form data
//create function and run it so it creates a new card
//change header on top of desitination list if needed
//add the new card
   
var destName = event.target.elements["name"].value;
var destLocation = event.target.elements["location"].value;
var destPhoto = event.target.elements["photo"].value;
var destDescription = event.target.elements["description"].value;

//for loop

for( var i=0; i<detailsForm.length; i++ )
    {
    detailsForm.elements[i].value = " ";
    }

    //new card created

    var wishListContainer = document.getElementById("destinations_container");

    var destCard = createDestinationCard(destName, destLocation, destPhoto, destDescription);



    if(wishListContainer.children.length === 0){
        document.getElementById("title").innerHTML = "My Wish List";
    }

    document.querySelector("#destinations_container").appendChild(destCard);
}
// issue with photoURL or photo not displaying
function createDestinationCard(name, location, photoURL, description){

    var card = document.createElement("div");
    card.className = "card";

    var img = document.createElement("img");
    img.setAttribute("alt", name);

    var constantPhotoUrl = "images/signpost.jpg";

    if(photoURL.length === 0 ){
        img.setAttribute("src", constantPhotoUrl);
       
    }

    else {
        img.setAttribute("scr", photoURL);
    }

    var cardBody = document.createElement("div");
    cardBody.className = "card-body";

    var cardTitle = document.createElement("h3");
    cardTitle.innerText = name;
    cardBody.appendChild(cardTitle);

    var cardSubtitle = document.createElement("h4");
    cardSubtitle.innerText = location;
    cardBody.appendChild(cardSubtitle);

    if (description.length !== 0){
        var cardText = document.createElement("p");
        cardText.className = "card-text";
        cardText.innerText = description;
        cardBody.appendChild(cardText);
    }

    var cardDeleteBtn = document.createElement("button");
    cardDeleteBtn.innerText = "Remove";

    cardDeleteBtn.addEventListener("click", removeDestination);
    cardBody.appendChild(cardDeleteBtn);

    card.appendChild(cardBody);

    return card;

}
//remove card function

function removeDestination(event){
    var card = event.target.parentElement.parentElement;
    card.remove();
}