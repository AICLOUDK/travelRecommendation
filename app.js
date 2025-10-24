let apiData = null;

fetch('travel_recommendation_api.json')
  .then(response => response.json())
  .then(data => {
    apiData = data;
    console.log('Fetched API Data:', apiData); // Confirm data fetched
  });

function search() {
    const input = document.getElementById('searchInput').value.trim().toLowerCase();
    let resultsContainer = document.getElementById('recommendations');
    resultsContainer.innerHTML = ''; // Clear previous results

    if (!apiData) return;

    let recommendations = [];
    if (input.includes('beach')) {
        recommendations = apiData.beaches;
    } else if (input.includes('temple')) {
        recommendations = apiData.temples;
    } else {
        // Check country match
        for (const country of apiData.countries) {
            if (input.includes(country.name.toLowerCase())) {
                recommendations = country.cities;
                break;
            }
        }
    }

    if (recommendations.length > 0) {
        recommendations.slice(0,2).forEach(place => {
            const html = `
                <div class="recommendation">
                    <img src="${place.imageUrl}" alt="${place.name}">
                    <div>
                        <h4>${place.name}</h4>
                        <p>${place.description}</p>
                        ${displayCountryTime(place.name)}
                    </div>
                </div>
            `;
            resultsContainer.innerHTML += html;
        });
    } else {
        resultsContainer.innerHTML = '<p>No recommendations found. Please try other keywords (e.g., beach, temple, country name).</p>';
    }
}

function clearResults() {
    document.getElementById('searchInput').value = '';
    document.getElementById('recommendations').innerHTML = '';
}

// Optional: Display country time
function displayCountryTime(placeName) {
    const timezoneMap = {
        'Sydney': 'Australia/Sydney',
        'Melbourne': 'Australia/Melbourne',
        'Tokyo': 'Asia/Tokyo',
        'Kyoto': 'Asia/Tokyo',
        'Rio de Janeiro': 'America/Sao_Paulo',
        'São Paulo': 'America/Sao_Paulo',
        'Angkor Wat': 'Asia/Phnom_Penh',
        'Taj Mahal': 'Asia/Kolkata',
        'Bora Bora': 'Pacific/Tahiti',
        'Copacabana Beach': 'America/Sao_Paulo'
    };
    for (let city in timezoneMap) {
        if (placeName.toLowerCase().includes(city.toLowerCase())) {
            const options = { timeZone: timezoneMap[city], hour12: true, hour: 'numeric', minute: 'numeric', second: 'numeric' };
            const timeStr = new Date().toLocaleTimeString('en-US', options);
            return `<p><strong>Local time:</strong> ${timeStr}</p>`;
        }
    }
    return '';
}

function bookNow() {
    alert("Booking functionality coming soon!");
}
