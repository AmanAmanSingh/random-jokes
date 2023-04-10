const BookmarkedJokes = ({ state, setState, allJokes, setAllJokes }) => {

    let jokeObj = JSON.parse(localStorage.getItem("bookmarkedJokes"));

    // console.log(jokeObj, "kkkk")
    return (
        <>
            <h3>Bookmarked Jokes</h3>
            {!state && jokeObj?.map((val, i) => {
                return (
                    < article key={i} style={{ display: "flex", flexDirection: "column" }}>

                        <p>{val?.joke?.setup}</p>
                        <p>answer:{val?.joke?.punchline}</p>
                        <div>
                            <button onClick={() => localStorage.clear()}>Remove</button>
                        </div>
                        <hr />
                    </article >
                )
            })}
            <button onClick={() => setState(true)}>Go back</button>
        </>
    )
}
export default BookmarkedJokes;