import { useEffect, useState } from "react";
import "./Joker.css";

export default function Joker() {
    const URL = "https://official-joke-api.appspot.com/random_joke";

    let [joke, setJoke] = useState({
        setup: "",
        punchline: "",
    });

    let getNewJoke = async () => {
        let response = await fetch(URL);
        let jsonResponse = await response.json();

        setJoke({
            setup: jsonResponse.setup,
            punchline: jsonResponse.punchline,
        });
    };

    useEffect(() => {
        async function getFirstJoke() {
            let response = await fetch(URL);
            let jsonResponse = await response.json();

            console.log(jsonResponse);

            setJoke({
                setup: jsonResponse.setup,
                punchline: jsonResponse.punchline,
            });
        }

        getFirstJoke();
    }, []);

    return (
        <div className="joker-container">

            <h3>🃏 Joker's Jokes</h3>

            <div className="joke-card">
                <div className="setup">
                    😂 {joke.setup}
                </div>

                <div className="line"></div>

                <div className="punchline">
                    💡 {joke.punchline}
                </div>
            </div>

            <button onClick={getNewJoke}>
                New Joke 
            </button>

        </div>
    );
}