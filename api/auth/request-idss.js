// api/auth/request-idss.js
// Ova datoteka prima zahtjev za IDSS pristup

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Samo POST zahtjevi su dozvoljeni' });
  }

  const { email, firstName, lastName } = req.body;

  if (!email || !firstName || !lastName) {
    return res.status(400).json({ message: 'Sva polja su obavezna' });
  }

  // Ovdje bi u stvarnom svijetu poslao email na process.env.ADMIN_EMAIL
  console.log(`IDSS Zahtjev: ${firstName} ${lastName} (${email})`);

  res.status(200).json({ 
    message: 'Zahtjev za IDSS pristup poslan! Direktor će te kontaktirati.' 
  });
}
