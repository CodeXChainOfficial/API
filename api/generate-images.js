import axios from "axios";
import cors from '../middleware/cors'; 

const apiKey = "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"; // Replace with your ChatGPT API key
const imageGenerationApiEndpoint = "https://api.openai.com/v1/images/generations"; // Replace with your image generation API endpoint

let generatedImages = [];

export async function generateImages(description) {
    await cors(req, res);
  try {
    const numImages = 3; // Generate 3 images (adjust as needed)

    // Use the provided description to request images from your image generation API
    const imageGenerationResponse = await axios.post(
      imageGenerationApiEndpoint,
      {
        description,
        numImages,
      }
    );

    // Extract the generated images from the image generation API response
    generatedImages = imageGenerationResponse.data.images;

    return generatedImages;
  } catch (error) {
    console.error("Error generating images:", error);
    throw new Error("Error generating images");
  }
}
export default async function generateImages(req, res) {
    await cors(req, res);
    if (req.method === 'GET') {
      try {
        // Replace with your image generation API endpoint
        const imageGenerationApiEndpoint = 'https://api.openai.com/v1/images/generations';
  
        const imageGenerationResponse = await axios.get(imageGenerationApiEndpoint);
  
        const generatedImages = imageGenerationResponse.data.images;
  
        res.status(200).json({ images: generatedImages });
      } catch (error) {
        console.error('Error fetching generated images:', error);
        res.status(500).json({ error: 'Internal server error' });
      }
    } else {
      res.status(405).end(); // Method not allowed
    }
  }