import { URLs } from "../models/URL.js";
import { generateShortURL } from "../utils/generateShortURL.js";
export const saveURL = async (req, res) => {
    const { longURL } = req.body;
    try {
        const shortURL = generateShortURL();
        const newURL = new URLs({ longUrl:longURL,shortId: shortURL });
        await newURL.save();
        const shorturl = `http://localhost:5050/${shortURL}`;
        res.status(200).json({
            ok: true,
            shortURL: shorturl
        });
    } catch (error) {
        console.error("Error saving URL:", error);
        res.status(500).json({
            ok: false,
            error: error
        });
    }
}