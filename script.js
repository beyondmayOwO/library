const travelList = [
  {
    city: "Barcelona",
    country: "Spain",
    region: "Europe",
    haveTravelled: true
  },
  {
    city: "Istanbul",
    country: "Turkey",
    region: "Eurasia",
    haveTravelled: false
  },
  {
    city: "Sydney",
    country: "Australia",
    region: "Australia",
    haveTravelled: true
  }
];

class Destination {
  constructor (city, country, region, haveTravelled) {
    this.city = city;
    this.country = country;
    this.region = region;
    this.haveTravelled = haveTravelled;
  }
}

//Select the form inputs and span alert
const cityInput = document.querySelector('#city');
const countryInput = document.querySelector('#country');
const regionInput = document.querySelector('#region');
const alertText = document.querySelector('.alert');

//Take user inputs and store new objects into an array
function addPlaceToList() {
  //Validation for empty fields. [trim() removes whitespace from both ends of a string]
  if(cityInput.value.trim() === '' || countryInput.value.trim() === '' || regionInput.value === '') {
    alertText.style.display = 'block';
  }
  else {
    const place = new Destination(cityInput.value, countryInput.value, regionInput.value, false);
    travelList.push(place);
    dialog.close();
  }
}

//Select the grid div
const placesGrid = document.querySelector('.places-grid');

//Reset the grid display before creating new cards so that they won't doubled
function resetGridDisplay() {
  placesGrid.textContent = '';
}

//Creating card for each place: loop each object in the array, create DOM elements, put the values in corresponding DOM elements
function createCard() {
  travelList.forEach((place, index) => {
    //Inside each card div --> banner image, city name, country name, region name, travel status icon, status button, remove button
    const placeCard = document.createElement('div');
    placeCard.className = 'place-card';

    //Banner image
    const cardImage = document.createElement('img');
    cardImage.className = 'card-image';
    cardImage.src = './images/card-image.jpg';

    //City name
    const cityName = document.createElement('div');
    cityName.className = 'city-name';
    cityName.textContent = place.city;

    //Place location (Inside the div --> country name, region name)
    const placeLocation = document.createElement('div');
    placeLocation.className = 'place-location';

    //Country name
    const countryName = document.createElement('div');
    countryName.className = 'country-name';
    countryName.textContent = place.country;

    //Region name
    const regionName = document.createElement('div');
    regionName.className = 'region-name';
    regionName.textContent = place.region;

    //Action buttons (Inside the div --> travel status icon, travel status button, remove button)
    const actionButtons = document.createElement('div');
    actionButtons.className = 'action-buttons';

    //Travel status icon, status button, remove button
    const travelStatusIcon = document.createElement('img');
    travelStatusIcon.className = 'travel-status-icon';

    const travelStatusButton = document.createElement('button');
    travelStatusButton.className = 'travel-status-button';

    const removeButton = document.createElement('button');
    removeButton.className = 'remove-button';
    removeButton.textContent = 'Remove';

    if(place.haveTravelled) {
      travelStatusIcon.src = './images/have-travelled.svg';
      travelStatusButton.textContent = 'Mark as plan to travel';
    }
    else {
      travelStatusIcon.src = './images/plan-to-travel.svg';
      travelStatusButton.textContent = 'Mark as travelled';
    }

    //When travel status button is clicked, it changes haveTravelled value to the opposite. Then update the UI by resetting and creating card
    travelStatusButton.addEventListener('click', () => {
      place.haveTravelled = !place.haveTravelled;
      resetGridDisplay();
      createCard();
    })

    //When 'remove' button is clicked, it removes 1 element at the index of the current object. Then update the UI by resetting and creating card
    removeButton.addEventListener('click', () => {
      travelList.splice(index, 1);
      resetGridDisplay();
      createCard();
    })

    placesGrid.appendChild(placeCard);
    placeCard.append(cardImage, cityName, placeLocation, actionButtons);
    placeLocation.append(countryName, regionName);
    actionButtons.append(travelStatusIcon, travelStatusButton, removeButton);
  })
}

createCard();

//Select the buttons to show and close the dialog
const newDestination = document.querySelector('.new-destination');
const dialog = document.querySelector('dialog');
const addDestination = document.querySelector('.add-destination');
const cancelBtn = document.querySelector('.cancel-btn');

//Show the dialog 'New Destination' button is clicked
newDestination.addEventListener('click', () => {
  dialog.showModal();
})

//CLose the dialog when 'cancel' button is clicked
cancelBtn.addEventListener('click', () => {
  dialog.close();
})

//Add place to list and create the card when 'Add Destination' button is clicked
addDestination.addEventListener('click', () => {
  addPlaceToList();
  resetGridDisplay();
  createCard();
})