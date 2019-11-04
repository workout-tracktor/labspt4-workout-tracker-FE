
import React, { useState } from "react";
import styled from "styled-components";

const ExerciseWeightliftingForm = ({ set, setSet }) => {
  const addASet = e => {
    e.preventDefault();
    let newData = {};
    newData[`weight`] = 0;
    newData[`weight_units`] = "lbs";
    newData[`reps`] = 0;
    setSet([...set, newData]);
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
                name={`reps`}
                onChange={e => {
                  inputHandler(idx, e);
                }}
                value={setData[`reps`]}
                required
              />
            </InputDiv>

            <InputDiv>
              <InputLabel>Weight: </InputLabel>
              <Input
                type="number"
                min="1"
                max="1000"
                name={`weight`}
                onChange={e => {
                  inputHandler(idx, e);
                }}
                value={setData[`weight`]}
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
                name={`weight_units`}
                onChange={e => {
                  inputHandler(idx, e);
                }}
                defaultValue={set[idx][`weight_units`]}
              >
                <Option value="lbs">lbs</Option>
                <Option value="kg">kg</Option>
              </Select>
            </InputDiv>
          </WeightDiv>
        );
      })}

      <ButtonDiv>
        <ButtonAdd type="button" value="ADD A SET" onClick={addASet} />
        <ButtonDelete
          type="button"
          value="REMOVE LAST SET"
          onClick={deleteASet}
        />
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
const ButtonAdd = styled.input`
  height: 30px;
  width: 100px;
  margin-left: 15px;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  color: #ffffff;
  font-family: Roboto Condensed;
  font-size: 14px;
  text-transform: uppercase;
  font-weight: bold;
`;

const ButtonDelete = styled.input`
  height: 30px;
  width: 150px;
  margin-left: 15px;
  background: rgba(255, 53, 53, 0.5);
  border: none;
  color: #ffffff;
  font-family: Roboto Condensed;
  font-size: 14px;
  text-transform: uppercase;
  font-weight: bold;
`;
const ButtonDiv = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export default ExerciseWeightliftingForm;
