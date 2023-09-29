console.log('javascript connected!');
    
const carousel = new bootstrap.Carousel('#homeCarousel', {
    interval: 2000,
    pause: false
})

const carouselButton = document.getElementById('carouselButton');
const faIcon = document.getElementById('faButton');

carouselButton.addEventListener('click', function () {
    if (faIcon.classList.contains('fa-pause')) {
        faIcon.classList.remove('fa-pause');
        faIcon.classList.add('fa-play');
        carousel.pause();
    } else {
        faIcon.classList.remove('fa-play');
        faIcon.classList.add('fa-pause');
        carousel.cycle();
    }
}) 
 
async function fetchWeather() {
    const apiKey = process.env.OPEN_WEATHER_API_KEY;
    const city = "jakarta";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    try {
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
        return data;  
    }catch (error) {
        console.error('There was an error!', error);
    }
    
}
fetchWeather().then(data => {
    displayWeather(data);
});

function displayWeather(data) {
    const temperature = data.main.temp;
    console.log(`Temperature: ${temperature} °F`);
}

function displayWeather(data) {
    
    const temperature = data.main.temp;
    const weatherDescription = data.weather[0].description;
    const iconCode = data.weather[0].icon;

    
    const iconElement = document.createElement('img');
    iconElement.src = `https://openweathermap.org/img/w/${iconCode}.png`;
 
    const iconContainer = document.getElementById('weather-icon');
    iconContainer.innerHTML = '';
    iconContainer.appendChild(iconElement);

    const tempElement = document.getElementById('weather-temp');
    const descriptionElement = document.getElementById('weather-description');
    tempElement.textContent = `Temperature: ${temperature} °F`;
    descriptionElement.textContent = `Description: ${weatherDescription}`;
}


