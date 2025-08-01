// api/prompts/generate.js
// Vercel API funkcija za generiranje AI odgovora putem Gemini

const { GoogleGenerativeAI } = require('@google/generative-ai');

export default async function handler(req, res) {
  // Dozvoli samo POST zahtjeve
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Samo POST zahtjevi su dozvoljeni' });
  }

  const { prompt } = req.body;

  // Provjera da li je prompt poslan
  if (!prompt) {
    return res.status(400).json({ message: 'Prompt je obavezan' });
  }

  try {
    // Provjera da li postoji API ključ
    const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
    if (!GEMINI_API_KEY) {
      console.error('Greska: GEMINI_API_KEY nije postavljen u environment varijablama');
      return res.status(500).json({ message: 'Greška na serveru. Kontaktiraj administratora.' });
    }

    // Inicijalizacija Gemini modela
    const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

    // Generiranje odgovora
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    // Slanje odgovora natrag frontendu
    res.status(200).json({ response: text });
  } catch (error) {
    console.error('Greška s Gemini API-jem:', error);

    // Posebna obrada za previše zahtjeva
    if (error.message.includes('429')) {
      return res.status(429).json({ message: 'Previše zahtjeva. Pričekaj trenutak.' });
    }

    // Nevažeći ključ
    if (error.message.includes('API key')) {
      return res.status(500).json({ message: 'Neispravan API ključ.' });
    }

    // Opća greška
    res.status(500).json({ message: 'Došlo je do greške. Pokušaj ponovno.' });
  }
}
