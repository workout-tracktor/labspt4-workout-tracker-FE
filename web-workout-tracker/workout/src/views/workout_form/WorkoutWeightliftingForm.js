import React, { useState } from "react";

const WorkoutWeightliftingForm = ({ setData, set, setSet }) => {
  const addASet = e => {
    e.preventDefault();
    let newData = {};
    newData[`weight${set.length}`] = 0;
    newData[`unit${set.length}`] = "lbs";
    newData[`rep${set.length}`] = 0;
    setSet([...set, newData]);
    console.log(set);
  };

  const deleteASet = e => {
    e.preventDefault();
    let setCopy = [...set];
    setCopy.pop();
    setSet(setCopy);
  };

  const inputHandler = (idx, e) => {
    e.preventDefault();
    let setCopy = [...set];
    setCopy[idx][e.target.name] = e.target.value;
    setSet(setCopy);
    console.log(set);
  };

  return (
    <>
      {set.map((setData, idx) => {
        return (
          <div key={idx}>
            <h3>Set {idx + 1}</h3>
            REPS:{" "}
            <input
              type="number"
              min="1"
              max="1000"
              name={`rep${idx}`}
              onChange={e => {
                inputHandler(idx, e);
              }}
              value={setData[`rep${idx}`]}
              required
            />
            WEIGHT:{" "}
            <input
              type="number"
              min="1"
              max="1000"
              name={`weight${idx}`}
              onChange={e => {
                inputHandler(idx, e);
              }}
              value={setData[`weight${idx}`]}
              required
            />
            {/* <input type='range'
                               min='1'
                               max={'1000'}
                               name={`weight${idx}`}
                               onChange={(e) => {
                                   inputHandler(idx, e)
                               }}
                               value={setData[`weight${idx}`]}
                        /> */}
            <select
              name={`unit${idx}`}
              onChange={e => {
                inputHandler(idx, e);
              }}
              defaultValue={set[idx][`unit${idx}`]}
            >
              <option value="lbs">lbs</option>
              <option value="kg">kg</option>
            </select>
          </div>
        );
      })}
      <input type="button" value="+ ADD A SET" onClick={addASet} />
      <input type="button" value="- REMOVE LAST SET" onClick={deleteASet} />
    </>
  );
};

export default WorkoutWeightliftingForm;
