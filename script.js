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

//Select the grid div
const placesGrid = document.querySelector('.places-grid');

//Creating card for each place: loop each object in the array, create DOM elements, put the values in corresponding DOM elements
function createCard() {
  travelList.forEach(place => {
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
    cityName.innerText = place.city;

    //Place location (Inside the div --> country name, region name)
    const placeLocation = document.createElement('div');
    placeLocation.className = 'place-location';

    //Country name
    const countryName = document.createElement('div');
    countryName.className = 'country-name';
    countryName.innerText = place.country;

    //Region name
    const regionName = document.createElement('div');
    regionName.className = 'region-name';
    regionName.innerText = place.region;

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
    removeButton.innerText = 'Remove';

    if(place.haveTravelled) {
      travelStatusIcon.src = './images/have-travelled.svg';
      travelStatusButton.innerText = 'Mark as plan to travel';
    }
    else {
      travelStatusIcon.src = './images/plan-to-travel.svg';
      travelStatusButton.innerText = 'Mark as travelled';
    }

    placesGrid.appendChild(placeCard);
    placeCard.append(cardImage, cityName, placeLocation, actionButtons);
    placeLocation.append(countryName, regionName);
    actionButtons.append(travelStatusIcon, travelStatusButton, removeButton);
    }
  )
}

createCard();