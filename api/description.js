import axios from "axios";
import cors from '../middleware/cors'; 

const apiKey = "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"; // Replace with your ChatGPT API key
const chatGptEndpoint = "https://api.openai.com/v1/engines/davinci/completions"; // Replace with the ChatGPT API endpoint
const imageGenerationApiEndpoint = "https://api.openai.com/v1/images/generations"; // Replace with your image generation API endpoint
import { generateImages } from "./generateImages"; // Import the generateImages function

// Store the generated images in a variable accessible to other parts of your application
let generatedImages = [];
export default async (req, res) => {

  await cors(req, res);

    if (req.method === "POST") {
      try {
        const { description } = req.body;
  
        // Send description to ChatGPT for generating image-related content
        const chatGptResponse = await axios.post(
          chatGptEndpoint,
          {
            prompt: `Generate NFT description: ${description}`,
            max_tokens: 100,
          },
          {
            headers: {
              Authorization: `Bearer ${apiKey}`,
              "Content-Type": "application/json",
            },
          }
        );
  
        // Extract the generated image-related content from ChatGPT response
        const imageRelatedContent = chatGptResponse.data.choices[0].text;
  
        // Generate images based on the provided description
        generatedImages = await generateImages(description);
  
        res.status(200).json({ content: imageRelatedContent, images: generatedImages });
      } catch (error) {
        console.error("Error generating image-related content or images:", error);
        res.status(500).json({ error: "Internal server error" });
      }
    } else {
      res.status(405).end(); // Method not allowed
    }
  };
