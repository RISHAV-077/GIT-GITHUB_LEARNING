   const apiKey = "863242cfb2b1d357e6093d9a4df19a4b";
        
        // DOM Elements
        const searchBtn = document.getElementById('search-btn');
        const cityInput = document.getElementById('city-input');
        const errorMessage = document.getElementById('error-message');
        
        // Weather Data Elements
        const cityElement = document.getElementById('city-name');
        const tempElement = document.getElementById('temperature');
        const humidityElement = document.getElementById('humidity');
        const windElement = document.getElementById('wind-speed');
        const weatherIcon = document.getElementById('weather-icon');
        const weatherDesc = document.getElementById('weather-description');
        
        // Default city
        let city = 'Bangalore';
        
        // Fetch weather data
        async function checkWeather(cityName) {
            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityName}&appid=${apiKey}`;
            
            try {
                const response = await fetch(apiUrl);
                
                if (response.status === 404) {
                    errorMessage.style.display = 'block';
                    return;
                } else {
                    errorMessage.style.display = 'none';
                }
                
                const data = await response.json();
                
                // Update DOM with weather data
                cityElement.textContent = data.name;
                tempElement.textContent = `${Math.round(data.main.temp)}°C`;
                humidityElement.textContent = `${data.main.humidity}%`;
                windElement.textContent = `${data.wind.speed} km/h`;
                weatherDesc.textContent = data.weather[0].description;
                
                // Update weather icon
                weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
                
            } catch (error) {
                console.error("Error fetching weather data:", error);
                errorMessage.textContent = "Error fetching weather data. Please try again.";
                errorMessage.style.display = 'block';
            }
        }
        
        // Event listeners
        searchBtn.addEventListener('click', () => {
            if (cityInput.value.trim() !== '') {
                city = cityInput.value.trim();
                checkWeather(city);
            }
        });
        
        cityInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && cityInput.value.trim() !== '') {
                city = cityInput.value.trim();
                checkWeather(city);
            }
        });
        
        // Initialize with default city
        checkWeather(city);