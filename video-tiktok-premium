import fetch from "node-fetch";

export default async function handler(req, res) {
  const { url } = req.query;
  if (!url) return res.status(400).send("URL do TikTok é obrigatória");

  try {
    // Aqui usamos Snaptik para pegar o vídeo
    const apiUrl = `https://snaptik.app/abc?url=${encodeURIComponent(url)}`; 
    // Nota: 'abc' é só um exemplo, o endpoint real precisa ser confirmado
    const response = await fetch(apiUrl);
    if(!response.ok) throw new Error("Erro no Snaptik");

    const buffer = await response.arrayBuffer();
    res.setHeader("Content-Type", "video/mp4");
    res.send(Buffer.from(buffer));
  } catch (err) {
    console.error(err);
    res.status(500).send("Erro ao processar o download");
  }
}
