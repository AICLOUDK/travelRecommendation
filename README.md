# travelrecommendation.github.io
Explanation and Introduction to Pages
Home Page (travel_recommendation.html)
This is the landing page for the TravelBloom website.
Contains the navigation bar including Home, About Us, Contact Us links, and a search bar with Search and Clear buttons.
Displays a large background image with a headline promoting exploration.
Includes a "Book Now" button (currently a placeholder alert).
Shows social media icon links for engagement.
Search results appear dynamically below when users search for destinations, beaches, or temples.
About Us Page (about_us.html)
Contains company information describing TravelBloom’s mission.
Introduces core team members with their roles.
Navigation bar links only show Home, About Us, and Contact Us (no search bar here for simplicity).
Contact Us Page (contact_us.html)
Contains a contact form where users can enter their name, email, and a message.
Includes a Submit button that triggers a simple thank-you alert and resets the form.
Navigation bar as in About Us, without the search bar.
JavaScript (script.js)
Fetches travel data from a local JSON file.
Implements search functionality:
Accepts keywords like "beach", "temple", or country names.
Handles keyword variations (capitalization, plural forms).
Displays relevant recommendations with images and descriptions.
Implements Clear button functionality to reset search and results.
JSON Data (travel_recommendation_api.json)
Contains structured data for countries with cities, temples, and beaches.
Each entry has a name, image URL (local path), and description.
Styling (styles.css)
Provides consistent layout and styling for navbar, hero section, buttons, cards, forms, and pages.
Ensures a professional, visually appealing UI.
How to Add and Push to GitHub
Initialize git repository (if not done yet):

git init
Add all files:

git add .
Commit your changes:

git commit -m "Initial commit for TravelBloom travel recommendation project"
Add remote repository URL (replace <your-repo-url>):

git remote add origin <your-repo-url>
Push to GitHub:

git push -u origin main
