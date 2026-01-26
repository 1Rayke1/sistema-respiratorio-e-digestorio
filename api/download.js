import fetch from "node-fetch";

export default async function handler(req, res) {
  const urlTikTok = req.query.url;
  if (!urlTikTok) return res.status(400).send("URL do TikTok é obrigatória");

  try {
    // Chama Snaptik como backend
    const apiUrl = `https://snaptik.app/pt?url=${encodeURIComponent(urlTikTok)}`;
    const response = await fetch(apiUrl);
    const buffer = await response.arrayBuffer();

    res.setHeader("Content-Disposition", "attachment; filename=video-tiktok.mp4");
    res.setHeader("Content-Type", "video/mp4");
    res.send(Buffer.from(buffer));
  } catch (err) {
    console.error(err);
    res.status(500).send("Erro ao baixar o vídeo");
  }
}
