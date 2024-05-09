import { mems } from "./MemArray";
import React, { useState } from "react";
import "./MemsLogic.css";

export function MemsLogic(props) {
  const [votes, setVotes] = useState(
    mems.map((mem) => ({ upvotes: mem.upvotes, downvotes: mem.downvotes }))
  );

  const clickHandlerPlus = (index) => {
    const newVotes = [...votes];
    newVotes[index].upvotes++;
    setVotes(newVotes);
  };

  const clickHandlerMinus = (index) => {
    const newVotes = [...votes];
    newVotes[index].downvotes++;
    setVotes(newVotes);
  };

  return (
    <div className="memsContainer">
      {mems.map((mem, index) => (
        <div key={index} className="oneMem">
          <img src={mem.img} alt={mem.title} />
          <div className="likesContainer">
            <div className="counters">
              <p className="countingPlus">{votes[index].upvotes} </p>
              <p className="countingMinus">{votes[index].downvotes} </p>
            </div>
            <div className="buttons">
              <button
                className="operatorButton"
                onClick={() => clickHandlerPlus(index)}
              >
                {" "}
                +{" "}
              </button>
              <button
                className="operatorButton"
                onClick={() => clickHandlerMinus(index)}
              >
                {" "}
                -{" "}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
