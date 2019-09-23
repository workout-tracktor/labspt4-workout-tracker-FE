import React, { useState } from "react";
import styled from "styled-components";

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
          <WeightDiv key={idx}>
            <SetHeader>Set {idx + 1}</SetHeader>
            <InputDiv>
              <InputLabel>Reps: </InputLabel>
              <Input
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
            </InputDiv>

            <InputDiv>
              <InputLabel>Weight: </InputLabel>
              <Input
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
            </InputDiv>
            {/* <input type='range'
                               min='1'
                               max={'1000'}
                               name={`weight${idx}`}
                               onChange={(e) => {
                                   inputHandler(idx, e)
                               }}
                               value={setData[`weight${idx}`]}
                        /> */}
            <InputDiv>
              <InputLabel>Unit: </InputLabel>
              <Select
                name={`unit${idx}`}
                onChange={e => {
                  inputHandler(idx, e);
                }}
                defaultValue={set[idx][`unit${idx}`]}
              >
                <Option value="lbs">lbs</Option>
                <Option value="kg">kg</Option>
              </Select>
            </InputDiv>
          </WeightDiv>
        );
      })}

      <ButtonDiv>
        <Button type="button" value="+ ADD A SET" onClick={addASet} />
        <Button type="button" value="- REMOVE LAST SET" onClick={deleteASet} />
      </ButtonDiv>
    </>
  );
};

const WeightDiv = styled.div`
  display: flex;
  justify-content: space-between;
  /* height: 60px; */
  margin-bottom: 30px;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(225, 233, 241, 0.1);
`;
const SetHeader = styled.h3`
  font-family: Roboto Condensed;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  text-transform: uppercase;
  color: #ffffff;
  opacity: 0.5;
`;
const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const InputLabel = styled.label`
  font-family: Roboto Condensed;
  font-size: 18px;
  text-transform: uppercase;
  color: #ffffff;
  margin-bottom: 10px;
`;
const Input = styled.input`
  width: 60px;
  height: 40px;
`;
const Select = styled.select`
  width: 60px;
  height: 40px;
`;
const Option = styled.option`
  font-family: Roboto Condensed;
  font-size: 14px;
  text-transform: uppercase;
  color: #ffffff;
`;
const Button = styled.input``;
const ButtonDiv = styled.div``;

export default WorkoutWeightliftingForm;
