<h1 align="center">Rick and Morty :stars:</h1>
<hr>
<p align="center"><img src="https://user-images.githubusercontent.com/112214885/215333868-68e494eb-ce25-4874-9849-30e3afee6f32.png"/></p>



## APPLIED TECHNOLOGIES

![HTML5](https://img.shields.io/badge/-HTML5-000000?style=flat&logo=html5)
![JavaScript](https://img.shields.io/badge/-JavaScript-000000?style=flat&logo=javascript)
![Less](https://img.shields.io/badge/-Less-000000?style=flat&logo=less)
![Webpack](https://img.shields.io/badge/-Webpack-000000?style=flat&logo=Webpack)

![GitHub](https://img.shields.io/badge/-GitHub-222222?style=flat&logo=github&logoColor=181717)
![Node.js](https://img.shields.io/badge/-Node.js-222222?style=flat&logo=node.js&logoColor=339933)
![React](https://img.shields.io/badge/-React-222222?style=flat&logo=React&logoColor=61DAFB)
![Redux](https://img.shields.io/badge/-Redux-222222?style=flat&logo=Redux&logoColor=61DAFB)

## Routes

| Request Type | Endpoint    | Returns                                                                                                                                                   | Status |
| ------------ | ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| GET          | /characters | An object containing an info property with count, pages, next, and previous page info and a results property, an array containing all characters details. | 200    |
| GET          | /favorites  | An array of objects containing user's favorite characters' details.                                                                                       | 200    |
| GET          | /filter     | Requires a category and query as query parameters to filter for specific character data, an object with a info and results property.                      | 200    |
| GET          | /episodes   | An object containing an info property with count, pages, next, and previous page info and a results property, an array containing all episodes details.   | 200    |
| POST         | /character  | An object containing character details. Id, name, status, species, type, gender, origin, location, image, episode, url.                                   | 201    |
| DELETE       | /character  | An object containing a name property matching the character to be deleted.                                                                                | 200    |

## Features

### Navigation Bar

- The navigation bar was built utilizing the React Router. The React Router API allows us to build single page applications with navigation without the need for page refreshing, which dramatically improves user experience and render times.

- The React Router uses the Router and Link components, which prevents page refreshes and allows the user to use the browsers functionality like a forward and back button in order to maintain the correct page view.

![Navigation Bar](client/assets/navigation.png 'Search bar feature')

---

### Search

- The search bar utilizes GET /characters endpoint which can be provided query parameters for the category and the query string. These two query parameters correspond to the Rick and Morty API, allowing for seamless filtering of the **600+** characters available.

- Material-UI was utilized for this feature. Material-UI provides minimalist React components, built utilizing Material Design framework in order for fast and clean web development.



---

### Pagination

- Utilizing React Hooks to store state of the current page traversed, which serves as the query parameter for my GET /character endpoint.

- Latency was vastly increased with the use of Redis. Redis is a great database caching technology that is optimized for speed using data structures such as hashes and sets. Each page and its corresponding data was stored as a key value pair, after the user's first click on the respective page.



---

### Favorites

- The favorites collection utilizes the POST /character endpoint to add a user's favorite Rick and Morty characters, and persists in a MongoDB database collection.

- Characters can be removed from the collection with the DELETE /character endpoint.



---

### Accessibility

- Achieved 100 accessibility through Google Chrome Lighthouse report. Through the use of Material-UI components, adding roles, aria-labels, semantic HTML provides a seamless and web accessible application for users with or without disabilities.


