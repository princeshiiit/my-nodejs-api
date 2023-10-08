const express = require("express");
const axios = require("axios");
const app = express();
const port = 3000;

app.use(express.json());

app.get("/api/hello", (req, res) => {
  res.json({ message: "I'm alive!" });
});

const apiUrl = "https://652271b7f43b17938414820b.mockapi.io/v1/techexam/TechExamAPI";

app.get("/api/getsampledata", async (req, res) => {
  try {
    const response = await axios.get(apiUrl);
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching data from the API:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Create a POST route for the same URL to send data
app.post("/api/postdata", async (req, res) => {
  try {
    // Assuming you want to send JSON data in the request body
    const postData = req.body;

    const response = await axios.post(apiUrl, postData);
    res.json(response.data);
  } catch (error) {
    console.error("Error posting data to the API:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
