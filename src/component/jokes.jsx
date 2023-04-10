import { useEffect, useState } from "react";
import BookmarkedJokes from "./bookmarkedJokes";

const RandomJokes = () => {

    const [random, setRandom] = useState(Math.random())
    const [joke, setJoke] = useState()
    const [allJokes, setAllJokes] = useState([{}])

    const [state, setState] = useState(true)

    const handleJoke = () => {

        fetch("https://official-joke-api.appspot.com/random_joke").then(res => {
            return res.json()
        }).then(data => {
            setJoke(data)
        }).catch(err => {
            console.log(err)
        })
    }

    const addToBookmark = (joke) => {
        setAllJokes([...allJokes, { joke }])
        localStorage.setItem("bookmarkedJokes", JSON.stringify(allJokes));
    }

    console.log(allJokes)
    // console.log(joke)

    return (
        <>
            <section className="container">
                {state && < article >
                    <div>
                        <div className="Jokes-app">JOKES APPLICATION</div>
                        <div onClick={() => setState(false)}> 📑 </div>
                    </div>
                    <h4>TYPE: {joke?.type}</h4>
                    <p>{joke?.setup}</p>
                    <p>answer:  {joke?.punchline}</p>
                    <div>
                        <button onClick={handleJoke}>New Joke</button>
                        <button onClick={() => addToBookmark(joke)}>Bookmark</button>
                    </div>
                </article>}

                <BookmarkedJokes
                    state={state}
                    setState={setState}
                    allJokes={allJokes}
                    setAllJokes={setAllJokes}
                />
            </section >
        </>
    )
}
export default RandomJokes;