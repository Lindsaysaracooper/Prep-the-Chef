# Prep-the-Chef

### Final Project at The Iron Yard


### Pitch Concept
-  A web app to aid communication between guest and chef. Give adequate time for a chef to prepare you a meal fit for your dietary needs.

- Longer Summary: In fine dining, a Chef likes their food to be prepared in the way it was intended. Modifying or removing certain items can create a flavor unbalance and many high-end chefs will just refuse to do so. This proves to be problematic as many people with strict dietary restrictions, find themselves at restaurants that can not accommodate them. This is why it is necessary to create a tool that allows easier communication between guest and chef.

- API: The app will connect to the Yelp API to access 4 and 5 star restaurants, location and type of cuisine. It will also connect to Kinvey.

- Basic user flow:
    - The user will log in and see a variety of restaurants.
    - In the search bar they will be able to search a type of cuisine and a location.
    - They will be taken to a search page where they can see all of their results
    - There will be a "message the restaurant" button that will take them to a new page
    - This page will have a survey on their dietary restrictions and the date and time they would like to come in. They will get a notification once they submit that the chef will get back to them via email.
    - If they choose to login, users will have the ability to see their favorite restaurants, and send their pre-filled out allergy form without having to complete the survey over and over again.

- Business logistics:
    - For this to actually function in the real world, Sales would need to contact restaurants and chefs to agree to join the website. They would give their email address so we could send the request directly to their inbox. They would then need to forward this to the host.

- Special Features: Submit form (using google forms) so user's can request specific restaurants

- Data modeling

  - Collection: Restaurants
        ```
        url: '',
        model: eachRestaurant,
        ```
  - Models: Session, Each Restaurant
        ```
          username: '',
          password:'',
          allergy:''

        ```
        ```
          name: '',
          cuisine:'',
          stars: ''
        ```
  - Components: Login/Signup, Landing Page, Search Page, Results Page, Personal dashboard, Message Modal

  - Routes: | Landing -> Login | Landing -> SearchPage | SearchPage-> SearchResults | Login/Signup->PersonalDashBoard | ResultsPage->eachRestaurant | eachRestaurant-> Message Modal | Message Modal -> eachRestaurant | eachRestaurant-> SearchResults


### MVP
  - A main page for a user to see participating restaurants
  - A way to message the business and have the message get stored in a dashboard
  - A dashboard with the user, including the messages they have sent with the ability to delete them.

### Icebox
  - Adding a search and search result page
  - Add individual photos
