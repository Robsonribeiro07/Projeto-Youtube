const express = require("express");
const multer = require("multer");
const path = require("path");
const { SpeechClient } = require("@google-cloud/speech");
const fs = require("fs");

const app = express();
const port = 5000;

// Configuração do Multer para upload de arquivo de áudio
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Instanciando o cliente do Google Cloud Speech
const client = new SpeechClient();

// Rota para transcrever o áudio
app.post("/transcribe", upload.single("audio"), async (req, res) => {
  if (!req.file) {
    return res.status(400).send("No audio file uploaded");
  }

  const audio = {
    content: req.file.buffer.toString("base64"), // Convertendo o áudio para base64
  };

  const config = {
    encoding: "LINEAR16", // Ou "FLAC", dependendo do tipo de arquivo
    sampleRateHertz: 16000, // Ajuste conforme sua taxa de amostragem
    languageCode: "pt-BR", // Idioma (português do Brasil)
  };

  const request = {
    audio,
    config,
  };

  try {
    const [response] = await client.recognize(request);
    const transcription = response.results
      .map(result => result.alternatives[0].transcript)
      .join("\n");

    res.json({ transcription });
  } catch (error) {
    console.error("Erro na transcrição:", error);
    res.status(500).send("Erro ao processar o áudio");
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
