import app from "./app.js";

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} and link http://localhost:${PORT}/ `);
});
