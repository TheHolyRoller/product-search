equire('dotenv').config();

// Import the express library
const express = require('express');

// Import the axios library
const axios = require('axios');

// Import the ws library
const WebSocket = require('ws');

// Create an express app
const app = express();

// Use express middleware to parse JSON body
app.use(express.json());

// Define the Page access token from the environment variables
const PAGE_ACCESS_TOKEN = process.env.PAGE_ACCESS_TOKEN;
// Define the catalog ID from the environment variables
const CATALOG_ID = process.env.CATALOG_ID;

// Define an array to store the websocket connections and the filters
let connections = [];

// Define a function to create a filter string from the data
const createFilter = (data) => {
  // Get the values of the data
  const minPrice = data.minPrice;
  const maxPrice = data.maxPrice;
  // Parse the JSON string into an array of categories
  const categories = JSON.parse(data.categories);
  const distance = data.distance;
  // Return the filter string using the values
  // Use the in operator to filter by multiple categories
  // Use the join method to convert the array into a comma-separated string
  return `price:ge:${minPrice} and price:le:${maxPrice} and category:in:${categories.join(",")} and distance:lt:${distance}`;
};

// Define a route to handle the POST request from the UI component
app.post('/api', (req, res) => {
  try {
    // Get the data from the request body
    const data = req.body;
    // Create the filter string from the data
    const filter = createFilter(data);
    // Construct the Facebook API endpoint for getting products with the filter parameter
    const URL = `https://graph.facebook.com/v12.0/${CATALOG_ID}/products?access_token=${PAGE_ACCESS_TOKEN}&filter=${filter}`;
    // Make a GET request to the endpoint
    axios
      .get(URL)
      .then((response) => {
        // Get the data from the response
        const data = response.data;
        // Send back the data as JSON
        res.status(200).json(data);
      })
      .catch((error) => {
        // Send back an error message
        res.status(500).json({ message: error.message });
      });
  } catch (error) {
    // Send back an error message
    res.status(500).json({ message: error.message });
  }
});

// Create a websocket server
const wss = new WebSocket.Server({ port: 8080 });

// Define a function to handle the connection event
const handleConnection = (socket, request) => {
  // Get the filter string from the request URL
  const filter = request.url.split('?')[1];
  // Store the socket and the filter in the connections array
  connections.push({ socket, filter });
  // Handle the message event
  socket.on('message', (message) => {
    // Log the message
    console.log(`Received message: ${message}`);
    // Do something with the message
    // ...
  });
  // Handle the close event
  socket.on('close', () => {
    // Remove the socket and the filter from the connections array
    connections = connections.filter((c) => c.socket !== socket);
    // Log the event
    console.log('Connection closed');
  });
};

// Listen for the connection event on the server
wss.on('connection', handleConnection);

// Define a function to handle the data event from the Facebook API
const handleData = (data) => {
  // Loop through the connections array
  connections.forEach((connection) => {
    // Get the socket and the filter from the connection object
    const socket = connection.socket;
    const filter = connection.filter;
    // Check if the data matches the filter criteria
    if (
      data.price >= filter.minPrice &&
      data.price <= filter.maxPrice &&
      filter.categories.includes(data.category) &&
      data.distance < filter.distance
    ) {
      // Send the data to the socket
      socket.send(data);
    }
  });
};

// Listen for the data event from the Facebook API
// You can use the Commerce API or any other API that provides real-time updates
// For example, you can use the fetch API or the axios library to make requests to the API
// For simplicity, I will use a mock function to generate some random data
setInterval(() => {
  // Generate some random data
  const data = {
    id: Math.floor(Math.random() * 1000),
    name: `Product ${Math.floor(Math.random() * 1000)}`,
    price: Math.floor(Math.random() * 10000),
    category: ['car', 'bike', 'boat'][Math.floor(Math.random() * 3)],
    distance: Math.floor(Math.random() * 50),
  };
  // Log the data
  console.log(`Generated data: ${JSON.stringify(data)}`);
  // Call the handleData function with the data
  handleData(data);
}, 5000);

// Start the app
app.listen(5000, () => {
  console.log('App listening on port 3000');
});
