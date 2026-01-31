import express from 'express';
import cors from 'cors';
import multer from 'multer';
import { RealityDefender } from '@realitydefender/realitydefender';
import path from 'path';
import fs from 'fs';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3001;

// Enable CORS
app.use(cors());
app.use(express.json());

// Configure multer for file uploads
const uploadDir = 'uploads';
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadDir)
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname))
    }
});

const upload = multer({ storage: storage });

app.post('/api/analyze', upload.single('media'), async (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded' });
    }

    const apiKey = req.body.apiKey || process.env.VITE_REALITY_DEFENDER_KEY;
    if (!apiKey) {
        // Only remove file if we fail early
        fs.unlinkSync(req.file.path);
        return res.status(400).json({ error: 'API Key missing' });
    }

    try {
        console.log(`Processing file: ${req.file.path} with RD SDK`);

        const realityDefender = new RealityDefender({
            apiKey: apiKey,
        });

        const result = await realityDefender.detect({
            filePath: req.file.path,
        });

        // Clean up file after analysis
        fs.unlinkSync(req.file.path);

        res.json(result);

    } catch (error) {
        console.error('Analysis error:', error);

        // Ensure file is deleted even on error
        if (req.file && fs.existsSync(req.file.path)) {
            fs.unlinkSync(req.file.path);
        }

        res.status(500).json({
            error: error.message || 'Analysis failed',
            details: error.toString()
        });
    }
});

app.listen(port, () => {
    console.log(`Forensic analysis backend running at http://localhost:${port}`);
});
