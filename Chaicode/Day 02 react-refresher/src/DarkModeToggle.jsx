import { useState, useEffect } from "react";
import { BsHeartFill } from "react-icons/bs";
import { BsHeart } from "react-icons/bs";

function DarkModeToggle() {
  const [colorSch, setColorSch] = useState(0);
  const [likeCh, setlikeCh] = useState(0);
  const [count, setCount] = useState(0);

  function switchTheme() {
    setColorSch(!colorSch);
  }

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    if (count <= 0) {
      setCount(count + 0);
    } else {
      setCount(count - 1);
    }
  }

  // without dependency array it will run on every render
  useEffect(() => {
    console.log("without dependency array it will run on every render");
  });

  // with empty dependecy this will run atleast  one time
  useEffect(() => {
    console.log("with dependency value 2");
  }, []);

  // with dependency we need to pass value array
  useEffect(() => {
    (console.log("with dependency"), []);
  });

  function likeUnlikeToggle() {
    setlikeCh(!likeCh);
  }

  return (
    <>
      <div
        style={{
          height: "100vh",
          width: "100vw",
          backgroundColor: colorSch ? "black" : "white",
          color: colorSch ? "white" : "black",
          transition: "0.3s",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column ",
        }}
      >
        <button onClick={switchTheme}>Toggle Theme🌓</button>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          autem iusto labore a perferendis et id modi! Quod tenetur rem, nostrum
          eaque dolorum voluptas praesentium temporibus sint, impedit quia
          magnam nam nulla!
        </p>

        <div>
          <div>
            <video src="#">Video</video>
            <h4>My Video</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Veritatis officia ipsam nostrum?
            </p>
          </div>
          <div>
            <h2>Hi We are </h2>
            <div
              onClick={likeUnlikeToggle}
              style={{
                border: "none",
                background: "none",
                fontSize: "2rem",
                cursor: "pointer",
              }}
            >
              {likeCh ? (
                <BsHeartFill
                  style={{
                    color: "red",
                  }}
                />
              ) : (
                <BsHeart />
              )}
            </div>
          </div>
        </div>

        {/* counter */}
        <div>
          <button onClick={increment}>➕</button>
          <h2>{count}</h2>
          <button onClick={decrement}>➖</button>
        </div>
      </div>
    </>
  );
}

export default DarkModeToggle;
