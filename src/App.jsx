import RandomVerse from "./components/RandomVerse";
import SpecificVerse from "./components/SpecificVerse";

function App() {
    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            <h1>Bible Verse App</h1>
            <RandomVerse />
            <SpecificVerse />
        </div>
    );
}

export default App;
