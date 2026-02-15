// server.js

// This is to import the Express application instance from your app.js file
// This app already has all routers and middleware mounted
import app from "./src/app.js";

// To import dotenv to load environment variables from a .env file
import dotenv from "dotenv";

// To import the Swagger setup function from swagger.js
// This function will configure Swagger UI for your API documentation
import setupSwagger from "./swagger.js"; 

// Load environment variables from .env file into process.env
// This allows you to access variables like PORT or DATABASE_URI
dotenv.config();

// Define the port the server will listen on
// Uses the PORT from .env if available, otherwise defaults to 3000
const PORT = process.env.PORT || 3000;

// Initialize Swagger documentation
// This will make API docs accessible at /api-docs route
setupSwagger(app);

// Start the Express server and listen on the specified PORT
app.listen(PORT, () => {
  // Log a message indicating that the server is running
  console.log(`Server running on port ${PORT}`);
  
  // Log the URL where Swagger API documentation can be accessed
  console.log(`Swagger docs available at http://localhost:${PORT}/api-docs`);
});
