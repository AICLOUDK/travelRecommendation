document.addEventListener('DOMContentLoaded', () => {
  const searchBtn = document.getElementById('searchBtn');
  const clearBtn = document.getElementById('clearBtn');
  const searchInput = document.getElementById('searchInput');
  const resultsDiv = document.getElementById('results');

  let travelData = {};

  // Fetch data from JSON file
  fetch('travel_recommendation_api.json')
    .then(response => response.json())
    .then(data => {
      travelData = data;
      console.log('Travel data loaded:', travelData);
    })
    .catch(error => console.error('Error loading travel data:', error));

  // Function to clear results
  function clearResults() {
    resultsDiv.innerHTML = '';
    searchInput.value = '';
  }

  // Function to create a card for each recommendation
  function createCard(place) {
    const card = document.createElement('div');
    card.className = 'recommendation-card';

    const img = document.createElement('img');
    img.src = place.imageUrl;
    img.alt = place.name;

    const name = document.createElement('h3');
    name.textContent = place.name;

    const desc = document.createElement('p');
    desc.textContent = place.description;

    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(desc);

    return card;
  }

  // Search functionality
  searchBtn.addEventListener('click', () => {
    const keyword = searchInput.value.trim().toLowerCase();
    if (!keyword) {
      alert('Please enter a keyword to search.');
      return;
    }

    resultsDiv.innerHTML = '';

    // Normalize keyword for plural/singular
    let key = keyword;
    if (key.endsWith('es')) {
      key = key.slice(0, -2);
    } else if (key.endsWith('s')) {
      key = key.slice(0, -1);
    }

    let foundResults = false;

    if (key === 'beach' || key === 'beaches') {
      travelData.beaches.forEach(beach => {
        resultsDiv.appendChild(createCard(beach));
      });
      foundResults = true;
    } else if (key === 'temple' || key === 'temples') {
      travelData.temples.forEach(temple => {
        resultsDiv.appendChild(createCard(temple));
      });
      foundResults = true;
    } else {
      // Check if keyword matches any country name
      const countryMatches = travelData.countries.filter(country =>
        country.name.toLowerCase() === keyword
      );
      if (countryMatches.length > 0) {
        countryMatches.forEach(country => {
          country.cities.forEach(city => {
            resultsDiv.appendChild(createCard(city));
          });
        });
        foundResults = true;
      }
    }

    if (!foundResults) {
      resultsDiv.innerHTML = `<p>No recommendations found for "${keyword}". Please try another keyword.</p>`;
    }
  });

  // Clear button functionality
  clearBtn.addEventListener('click', clearResults);
});
