import { useState } from "react";
import axios from "axios";

function SpecificVerse() {
    const [verse, setVerse] = useState("");
    const [query, setQuery] = useState("John 3:16");

    const fetchVerse = async () => {
        try {
            const response = await axios.get(`https://labs.bible.org/api/?passage=${query}&type=json`);
            setVerse(response.data[0].text);
        } catch (error) {
            console.error("Error fetching specific verse:", error);
        }
    };

    return (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Enter Bible Verse (e.g. John 3:16)"
                style={{ padding: "10px", fontSize: "16px", marginRight: "10px" }}
            />
            <button onClick={fetchVerse} style={{ padding: "10px 20px", fontSize: "16px" }}>
                Get Verse
            </button>
            <p style={{ marginTop: "20px", fontSize: "18px", fontWeight: "bold" }}>{verse}</p>
        </div>
    );
}

export default SpecificVerse;
