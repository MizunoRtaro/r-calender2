export default function handler(req, res) {
  res.status(200).json({
    CLIENT_ID: process.env.CLIENT_ID,
    SPREADSHEET_ID: process.env.SPREADSHEET_ID
  });
}