import dotenv from "dotenv";
import express from "express";
import axios from "axios";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = 5000;

app.use(cors());

app.get("/search", async (req, res) => {
  const query = req.query.q;

  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
      query
    )}&include_adult=false&language=en-US&page=1`,
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.BEARER}`,
    },
  };

  try {
    const response = await axios.request(options);
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch data from API" });
  }
});

app.get("/details/:id", async (req, res) => {
  const movie_id = req.params.id;
  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/movie/${movie_id}?language=en-US`,
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.BEARER}`,
    },
  };

  try {
    const response = await axios.request(options);
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch data from API" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
