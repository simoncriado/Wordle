import React, { useEffect, useState } from "react";

// const express = require("express");
// const cors = require("cors");
// const app = express();
// //use cors as middleware
// app.use(
//   cors({
//     origin: "*",
//   })
// );

export default function Keypad({ usedKeys }) {
  const [letters, setLetters] = useState(null);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/simoncriado/Wordle/master/data/db.json",
      {
        headers: {
          "Access-Control-Allow-Origin":
            "*",
          "Access-Control-Allow-Methods": [
            "POST",
            "GET",
            "OPTIONS",
            "DELETE",
            "PUT",
          ],
          "Access-Control-Allow-Headers": [
            "append",
            "delete",
            "entries",
            "foreach",
            "get",
            "has",
            "keys",
            "set",
            "values",
            "Authorization",
          ],
        },
      }
    )
      .then((res) => res.json())
      .then((json) => {
        const letters = json.letters;
        setLetters(letters);
      });
  }, []);

  return (
    <div className="keypad">
      {letters &&
        letters.map((l) => {
          const color = usedKeys[l.key];
          return (
            <div key={l.key} className={color}>
              {l.key}
            </div>
          );
        })}
    </div>
  );
}
