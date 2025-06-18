---
created: 2025-06-18T00:46
updated: 2025-06-18T08:54
---
# Project - _Movies_

[](https://github.com/elotusteam/challenges/blob/main/frontend-2.md#project---movies)

**Movies** is a movies app using the [The Movie Database API](https://developers.themoviedb.org/3).

- Total time: 72 hours
## Quick Start:

Because your time is extremely valuable, I’ve already hosted the website so you can conveniently view it directly without needing to know how to set it up.
Check it here: https://elotus-movies.great-site.net

## User Stories

[](https://github.com/elotusteam/challenges/blob/main/frontend-2.md#user-stories)

Here are **required** features I've done:

- [x]  User can view a list of movies currently playing in theaters. Poster images load asynchronously.
- [x]  Add a tab bar for **Now Playing** and **Top Rated** movies.
- [x]  Add a search bar.
- [x]  User can view movie details by tapping on a cell.
- [x]  User sees loading state while waiting for the API.
- [x]  User sees an error message when there is a network error.
- [x]  Simple responsive.

Here are **optional** features I've done:

- [ ]  Implement segmented control to switch between list view and grid view.
- [x]  All images fade in.
- [x]  Implement lazy load image.
- [x]  Customize the highlight and selection effect of the cell.
- [x]  Improve UX loading by skeleton loading.
- [x]  Enhance responsive.

The following **additional** features are implemented:
Here are things I think that will improve our Movies application:
- [x] Add "Load more" logic.
- [x] Add scroll to top button.
- [x] Add embed trailer/review video.
- [x] Allow trigger search logic when hitting "Enter", instead of clicking "Search" button.
- [x] Add fallback placeholder thumbnail because the TMDB api does not return "poster_path" or "backdrop_path" either.
- [ ] Add sorting and filtering logic.
- [ ] Add language switcher function.
- [ ] Integrate Redux to separate business logic out of view layer (following Clean Architecture that we have Core Business Logic, Interface Adapters, Application Layer).


## How to install (if you want to review my code)

+ Make sure you're already installed Node.js 22.13.0
+ Clone this repo:
```
git clone https://github.com/nhanhieuhcmus/elotus-movies.git
```
+ Install dependencies:
```
npm install
```
+ Run this project:
```
npm run dev
```
+ Now it should open in your default browser.

