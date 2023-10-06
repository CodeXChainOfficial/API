import Cors from 'cors';

// Initializing the cors middleware
const cors = Cors({
    methods: ['GET', 'HEAD', 'POST'],
    origin: 'http://localhost:3004', // Replace with your frontend's origin
    
  });
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
