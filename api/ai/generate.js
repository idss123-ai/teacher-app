// api/ai/generate.js
// Generira AI odgovor pomoću Google Gemini API-ja

const { GoogleGenerativeAI } = require('@google/generative-ai');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Samo POST zahtjevi su dozvoljeni' });
  }

  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ message: 'Prompt je obavezan' });
  }

  try {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    res.status(200).json({ response: text });
  } catch (error) {
    console.error('Greška s Gemini API-jem:', error);
    
    if (error.message.includes('API key')) {
      return res.status(500).json({ message: 'Neispravan Gemini API ključ. Kontaktiraj administratora.' });
    }

    res.status(500).json({ message: 'Došlo je do greške prilikom generiranja odgovora.' });
  }
}
