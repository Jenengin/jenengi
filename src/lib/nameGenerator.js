// Integration with Hugging Face APIs
// lib/nameGenerator.js

// This utility connects to Hugging Face's Inference API which has free tiers
// and provides access to open-source models

export async function generateNamesWithAI(keyword, type) {
  // For demonstration purposes - in a real app you would:
  // 1. Set up an environment variable for your Hugging Face API key
  // 2. Choose an appropriate model for text generation

  try {
    // Prepare the prompt based on type
    let prompt = '';
    
    switch(type) {
      case 'project':
        prompt = `Generate 5 unique and creative project names related to the keyword "${keyword}". Each name should be short, memorable, and suitable for a modern tech project.`;
        break;
      case 'company':
        prompt = `Generate 5 professional and unique company names related to the keyword "${keyword}". Each name should sound trustworthy and established.`;
        break;
      case 'brand':
        prompt = `Generate 5 catchy and unique brand names related to the keyword "${keyword}". Each name should be modern, easy to remember, and have potential for strong brand identity.`;
        break;
      case 'human':
        prompt = `Generate 5 Indonesian human names (first and last name) that have some connection to the meaning of "${keyword}".`;
        break;
      default:
        prompt = `Generate 5 unique names related to the keyword "${keyword}".`;
    }

    // In a production app, you would make an actual API call:
    // const response = await fetch("https://api-inference.huggingface.co/models/gpt2", {
    //   method: "POST",
    //   headers: {
    //     "Authorization": `Bearer ${process.env.HUGGINGFACE_API_KEY}`,
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ inputs: prompt }),
    // });
    
    // For demo purposes, we'll simulate a response
    const simulatedNames = simulateAIGeneration(keyword, type);
    return simulatedNames;
    
  } catch (error) {
    console.error("Error calling AI model:", error);
    throw new Error("Failed to generate names with AI");
  }
}

// Simulation function for demonstration
function simulateAIGeneration(keyword, type) {
  // This would normally be the parsed response from the AI API
  const capitalizedKeyword = keyword.charAt(0).toUpperCase() + keyword.slice(1);
  
  const namesByType = {
    'project': [
      `${capitalizedKeyword} Hub`, 
      `Project ${capitalizedKeyword}`, 
      `${capitalizedKeyword} Next`, 
      `Ultra${capitalizedKeyword}`, 
      `${capitalizedKeyword} Prime`
    ],
    'company': [
      `${capitalizedKeyword} Solutions`, 
      `${capitalizedKeyword} Technologies`, 
      `Global ${capitalizedKeyword}`, 
      `${capitalizedKeyword} Innovations`, 
      `${capitalizedKeyword} Enterprise`
    ],
    'brand': [
      `${keyword}ify`, 
      `i${capitalizedKeyword}`, 
      `${keyword}ly`, 
      `${keyword}.io`, 
      `${capitalizedKeyword} Go`
    ],
    'human': [
      `Budi ${capitalizedKeyword}wan`, 
      `Siti ${capitalizedKeyword}wati`, 
      `${capitalizedKeyword}anto Wijaya`, 
      `Dewi ${capitalizedKeyword}sari`, 
      `${capitalizedKeyword}awan Santoso`
    ]
  };
  
  return namesByType[type] || namesByType.brand;
}