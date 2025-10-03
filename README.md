# Elice Mini Project

## Technology Stack
- MERN (MongoDB, Express JS, React JS, Node JS) Stack
- Frontend: React, due to experience in using it during the General Assembly Software Bootcamp
- Backend: Express, same as the above.
- Database: MongoDB, same as the above.
- Alternatives: Flask (Python) and PostGreSQL for the Backend and Database respectively. Due to the time constraint and less experience in using it, I opted to utilise the MERN stack instead.

## API
- The APIs used are the Youtube API and the Google Books API. The former requires the use of an API key while the latter does not for authentication purposes.
- As the API for Youtube requires the use of an API key under Google Cloud, an account would have to be created before retrieving and using the key.
- API rate limits are inevitable without paying a fee for it and the project context would be much needed to determine the amount of times the API needs to be accessed through the project's lifetime.

## Performance and Scalability
- As the API call currently limits the Youtube and Book results to 9 each, there isn't really a case of increased load, unless pagination is implemented.
- In addition to the previous point, bottlenecks shouldn't pose an issue due to the amount of results being displayed at any given time.

## Integration
- The Youtube and Books APIs under Google Cloud are arguably one of the most well-known public APIs available for personal use. As such, there is no question in using them for this mini project.
- Try, Catch statements are used when fetching data from the API in the backend, as well as calling the route from the frontend service to ensure that the errors are reflected accordingly to the user when encountered.
- Currently, the Youtube API key, MongoDB Connection URL and Backend URL are stored in .env files both in the frontend and backend folders, with its file type included in the .gitignore file such that only the developer(s) can have access to it and that these confidential data are not pushed to the GitHub remote repository.