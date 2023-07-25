import { useEffect, useState } from "react";

function App() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [isCLick, setIsClick] = useState(false);

  useEffect(() => {
    fetch("https://api.quotable.io/random")
      .then((response) => {
        if (!response.ok) {
          console.log("not responding");
        }
        return response.json();
      })
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((error) => {
        console.log("Error:"(error));
      });
  }, [isCLick]);

  const handleClick = () => {
    setIsClick(!isCLick);
  };

  return (
    <>
      <div id="wrapper">
        <div
          className="d-flex flex-column p-5 gap-4 m-auto bg-dark text-light rounded mt-5"
          style={{ maxWidth: 600 }}
          id="quote-box">
          <h1 className="text-center">Quotes </h1>
          <h2 id="text" className="text-center">
            "{quote}"
          </h2>
          <h3 id="author" className="text-center">
            -{author}
          </h3>
          <div className="d-flex justify-content-between">
            <a href="twitter.com/intent/tweet" id="tweet-quote" target="_blank">
              {" "}
              <i class="fab fa-twitter"></i>
            </a>{" "}
            <button
              id="new-quote"
              className="btn btn-primary "
              onClick={handleClick}>
              Generate text
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
