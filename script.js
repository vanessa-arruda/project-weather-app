//Global variables
const ApiKey = "231ff309be8ceb223aff125da6bf7bb2";
const citiesBtn = document.getElementById("cities-btn");
const city = document.getElementById("city");
const citySearched = document.getElementById("search-input");
const date = document.getElementById("date");
const searchBtn = document.getElementById("search-btn");
const sunriseTime = document.getElementById("sunrise");
const sunsetTime = document.getElementById("sunset");
const temperature = document.getElementById("temperature");
const time = document.getElementById("time");
const weatherType = document.getElementById("skyStatus");
const weatherIcon = document.getElementById("weather-icon");
//famous cities array
const citiesArray = [
  "Stockholm",
  "London",
  "New York",
  "Tokyo",
  "Paris",
  "Seoul",
  "Berlin",
  "São Paulo",
];
let currentCityIndex = 0;

//Fetch weather API
const fetchWeatherData = async (cityByName) => {
  try {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityByName}&units=metric&APPID=${ApiKey}`;
    const responseFromApi = await fetch(URL);
    const weatherData = await responseFromApi.json();

    return weatherData;
  } catch (error) {
    console.log(error);
  }
};
// Display the properties in weather app - top container
const showCity = async (cityName) => {
  const weatherData = await fetchWeatherData(cityName);

  // Fetch weekly weather forecast data
  const weeklyWeatherData = await fetchWeeklyWeatherData(cityName);

  // Save API data in respective variables
  const cityValue = weatherData.name;
  const sunrise = weatherData.sys.sunrise;
  const sunset = weatherData.sys.sunset;
  const temperatureValue = weatherData.main.temp.toFixed(1);
  const timezoneOffSet = weatherData.timezone;
  const weatherNow = weatherData.weather[0].description;
  const weatherIconImg = weatherData.weather[0].icon;

<<<<<<< HEAD
  // Display the values in console.log (dev)
  console.log(cityValue);
  console.log("weatherData", weatherData);
  
  // Example usage: Display in HTML
  let now = new Date();
=======
  // Display current weather data
>>>>>>> dfd608780772c6123e488fcd24aa34916e21b16c
  temperature.textContent = `${temperatureValue}°C`;
  city.textContent = cityValue;
  weatherType.textContent = weatherNow;
  sunriseTime.textContent = `Sunrise: ${unixConversion(
    sunrise + timezoneOffSet
  )}`;
  sunsetTime.textContent = `Sunset: ${unixConversion(sunset + timezoneOffSet)}`;
<<<<<<< HEAD
  weatherIcon.src = `https://openweathermap.org/img/wn/${weatherIconImg}@2x.png`;
  date.textContent = dateBuilder(now);

  temperature.setAttribute("data-temp-c", temperatureValue);
  temperature.setAttribute("data-temp-f", convertToFahrenheit(temperatureValue));
=======
  date.textContent = dateBuilder(new Date());

  // Display weekly weather forecast
  renderWeeklyForecast(weeklyWeatherData);
>>>>>>> dfd608780772c6123e488fcd24aa34916e21b16c

  // Hour now
  setInterval(() => {
    const currentTime = new Date();
    time.textContent = timeBuilder(currentTime);
  }, 1000);
};
// Display Time
function timeBuilder(time) {
<<<<<<< HEAD
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const formattedHours = hours < 10 ? `0${hours}` : hours;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    return `${formattedHours}:${formattedMinutes}`;
  }
=======
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const formattedHours = hours < 10 ? `0${hours}` : hours;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  return `${formattedHours}:${formattedMinutes}`;
}
>>>>>>> dfd608780772c6123e488fcd24aa34916e21b16c
// Date
function dateBuilder(d) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[d.getDay()];
  let date = d.getDay();
  let month = months[d.getMonth()];
  let year = d.getFullYear();
<<<<<<< HEAD
=======

  return `${day} ${date} ${month} ${year}`;
}
>>>>>>> dfd608780772c6123e488fcd24aa34916e21b16c

  return `${day} ${date} ${month} ${year}`;
}

// Search bar input
const search = (e) => {
  let cityName = citySearched.value;

  if (cityName && cityName.trim().length > 0) {
    cityName = cityName.trim().toLowerCase();
  }
  // Listener for the 'Enter' key for search bar
  showCity(cityName);
};
// Search event listener (button + enter key)
searchBtn.addEventListener("click", search);
citySearched.addEventListener("keyup", (e) => {
  if (e.key == "Enter") {
    search();
  }
});

// Toggle Search bar
function toggleSearchBar() {
  const searchContainer = document.getElementById("search-container");
  const searchInput = document.getElementById("search-input");
  const searchIcon = document.getElementById("search-icon");
  const closeIcon = document.getElementById("close-icon");

  searchContainer.classList.toggle("active");
  if (searchContainer.classList.contains("active")) {
    searchInput.focus(); // Automatically focus on the input when the search bar is active.
  }

  if (searchContainer.classList.contains("active")) {
    searchIcon.style.display = "none";
    closeIcon.style.display = "block";
  } else {
    searchIcon.style.display = "block";
    closeIcon.style.display = "none";
  }
}
// Sunset/Sunrise timestamp conversion
const unixConversion = (unixTimestamp) => {
  //convert Unix Timestamp from seconds to milliseconds
  const date = new Date(unixTimestamp * 1000);
  const options = {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "UTC",
  };
<<<<<<< HEAD
  // Generate time string
  return(date.toLocaleTimeString("default", options));
=======
  //Generate time string
  return date.toLocaleTimeString("default", options);
>>>>>>> dfd608780772c6123e488fcd24aa34916e21b16c
};
// Randomize famous cities array
const nextCity = () => {
  currentCityIndex++;
  if (currentCityIndex > citiesArray.length - 1) {
    currentCityIndex = 0;
  }
  showCity(citiesArray[currentCityIndex]);
};
citiesBtn.addEventListener("click", nextCity);

// Add this code to your script.js file

// Function to fetch the weekly weather data
const fetchWeeklyWeatherData = (cityName) => {
  const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&APPID=${ApiKey}`;

  return fetch(apiUrl)
    .then((response) => response.json())
    .catch((error) => {
      console.error("Error:", error);
      throw error;
    });
};

// Function to render the weekly weather forecast
const renderWeeklyForecast = (data) => {
  const forecastList = data.list;
  const forecastContainer = document.getElementById("forecast-list");
  forecastContainer.innerHTML = ""; // Clear previous forecast data

  // Adjust or remove the filter condition if needed
  forecastList
    .filter((item) => item.dt_txt.split(" ")[1].split(":")[0] == 12)
    .forEach((item) => {
      const date = new Date(item.dt * 1000);
      const dateString = date.toDateString();
      const temp = item.main.temp.toFixed(1);
      const windSpeed = item.wind.speed.toFixed(1);

      console.log("data", item);

      const listItem = document.createElement("li");
      listItem.innerHTML = `<span>${dateString}</span><span class="weather-condition-icon"><img src="https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png"></span><span>${temp}°C</span><span>${windSpeed} m/s</span>`;

      forecastContainer.appendChild(listItem);
    });
};

  const fahrenheit = (celsius * 1.8) + 32;
  return fahrenheit.toFixed(1);
};

//Toggle temperature into °C and °F on click - fixing bugs before commit(on going)
const toggleTemp = () => {
  if (temperature.textContent.endsWith('°C')){
      temperature.textContent = `${temperature.getAttribute("data-temp-f")}°F`;
  } else {
      temperature.textContent = `${temperature.getAttribute("data-temp-c")}°C`;
  }
};
//event listeners / execution
showCity(citiesArray[currentCityIndex]);
citiesBtn.addEventListener('click', nextCity);
temperature.addEventListener('click', toggleTemp);
