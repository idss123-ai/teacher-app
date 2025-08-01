// api/auth/request-idss.js
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Samo POST zahtjevi' });
  }

  const { email, firstName, lastName } = req.body;

  // Ovo je samo simulacija slanja emaila
  // U stvarnom svijetu koristi Vercel + Resend ili SendGrid
  console.log(`Zahtjev za IDSS: ${firstName} ${lastName} (${email})`);

  // U stvarnom svijetu: pošalji email na process.env.ADMIN_EMAIL
  // Za sada, samo potvrdi korisniku
  res.status(200).json({ message: 'Zahtjev poslan! Direktor će te kontaktirati.' });
}
