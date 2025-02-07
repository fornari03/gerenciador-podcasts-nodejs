# podcasts-manager-nodejs
This project was developed as part of DIO's NodeJS Training, based on the original training repository: https://github.com/digitalinnovationone/formacao-nodejs

## Overview

**podcasts-manager-nodejs** is a lightweight REST API for managing podcasts, written in TypeScript without any frameworks. The API provides functionalities for listing (all or filtered) podcasts while following a clean architecture approach.

## Features

- Built using **pure TypeScript**, without any frameworks.
- Modular architecture with **Controller-Service-Repository** layers.
- Supports **development and production builds** with TypeScript.
- Uses **TSX** for development and **Tsup** for bundling.
- Environment variable support using `.env` files.

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/fornari03/gerenciador-podcasts-nodejs.git
   cd gerenciador-podcasts-nodejs
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

## Usage

### Development Mode

Run the server in development mode:
```sh
npm run start:dev
```

Watch mode (automatically reloads on file changes):
```sh
npm run start:watch
```

### Production Mode

Build and start the production server:
```sh
npm run start:dist
```

## Testing

To test the project, you can use any HTTP client application such as **Postman** or **Thunder Client**. These applications allow you to make HTTP requests to your local server and interact with the API endpoints. Here's how you can test the project:

1. **Make a GET Request**  
   You can send a GET request to either of the following endpoints:

   - `http://localhost:PORT/api/list`
   - `http://localhost:PORT/api/filter?p=PODCAST&c=CATEGORIES`

   Replace `PORT` with the port specified in your `.env` file.  
   The `PODCAST` and `CATEGORIES` parameters are optional and should be selected from the examples available in the `podcasts.json` file located in the `repositories` folder of the project. You can choose to filter by either **podcast** or **category**, or both.

   For example:
   - `http://localhost:PORT/api/filter?p=Podpah` (filters only by podcast)
   - `http://localhost:PORT/api/filter?c=humor` (filters only by category)
   - `http://localhost:PORT/api/filter?p=Flow+Podcast&c=saude` (filter by both podcast and category)

2. **Handling Missing or Empty Data**  
   If no results match the query, the response will return a `NO_CONTENT` status.

   Example:
   - **Request**: `http://localhost:PORT/api/filter?p=UnknownPodcast&c=UnknownCategory`
   - **Response**: `NO_CONTENT`


## Project Structure

The project follows a layered architecture to ensure separation of concerns:

```
/src
│   app.ts           # Handles HTTP requests and routes them to the controllers
│   server.ts        # Creates and starts the HTTP server
│
├── controllers      # Handles HTTP requests and responses
│
├── models           # TypeScript interfaces for data structures
│
├── repositories     # Data access layer (database is actually a JSON file)
│
├── routes           # Defines API routes
│
├── services         # Business logic layer
│
├── utils            # Helper enumerators and functions
```

## Technologies Used

- **TypeScript** - Static typing and improved development experience.
- **TSX** - Enhanced TypeScript execution for development.
- **Tsup** - Bundler for compiling TypeScript code.
- **Node.js** - JavaScript runtime environment.

## Issues & Contributions

If you encounter any issues or have suggestions for improvements, please open an issue [here](https://github.com/fornari03/podcasts-manager-nodejs/issues). Contributions are welcome!