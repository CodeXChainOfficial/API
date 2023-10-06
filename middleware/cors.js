import Cors from 'cors';

// Initializing the cors middleware
const cors = require("cors");

// Initialize CORS middleware
app.use(
  cors({
    origin: "https://nft-alpha-eight.vercel.app", // Replace with your NFT app's domain
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  })
);

  console.log("localhost3004 cors run");
export default function handler(req, res) {
  // Run the cors middleware
  return new Promise((resolve, reject) => {
    cors(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}
