import { useState } from "react";
import axios from "axios";

function RandomVerse() {
    const [verse, setVerse] = useState("");

    const fetchVerse = async () => {
        try {
            const response = await axios.get("https://labs.bible.org/api/?passage=random&type=json");
            setVerse(response.data[0].text);
        } catch (error) {
            console.error("Error fetching random verse:", error);
        }
    };

    return (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
            <button onClick={fetchVerse} style={{ padding: "10px 20px", fontSize: "16px" }}>
                Get Random Verse
            </button>
            <p style={{ marginTop: "20px", fontSize: "18px", fontWeight: "bold" }}>{verse}</p>
        </div>
    );
}

export default RandomVerse;
