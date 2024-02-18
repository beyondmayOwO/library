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

//Creating cards (Inside each card --> banner image, city name, country name, region name, travel status icon, button a user can toggle to change the travel status, remove button)
const placeCard = document.createElement('div');
placeCard.className = 'place-card';

//Creating div for the the banner image, select the image url and give it a class name
const cardImage = document.createElement('img');
cardImage.src = './images/card-image.jpg'
cardImage.className = 'card-image';

//Creaing div for the city name, country name and region name and give them a class name
const cityName = document.createElement('div');
cityName.className = 'city-name';
const countryName = document.createElement('div');
countryName.className = 'country-name';
const regionName = document.createElement('div');
regionName.className = 'region-name';

//Creating div for the action buttons (Inside the div --> travel status icon, travel status button, remove button)
const actionButtons = document.createElement('div');
actionButtons.className = 'action-buttons';

// Creating div, button for the travel status icon, status button, remove button and give them a class name
const travelStatusIcon = document.createElement('div');
travelStatusIcon.className = 'travel-status-icon';

const travelStatusButton = document.createElement('button');
travelStatusButton.className = 'travel-status-button';

const removeButton = document.createElement('button');
removeButton.className = 'remove-button';