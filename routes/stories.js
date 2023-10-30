const express = require("express");
const axios = require("axios");
const router = express.Router();

router.get("/top-stories/:type", (req, res) => {
  const { type: storyType } = req.params || {};

  axios
    .get(
      `${process.env.NODE_NY_TIMES_URL}/topstories/v2/${storyType}/?api-key=${process.env.NODE_API_KEY}`
    )
    .then(({ data }) => {
      res.send(data);
    })
    .catch((err) => res.send(err.message));
});

module.exports = router;
