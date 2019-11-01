import React from "react";
import styled from "styled-components";

const ExerciseCardioForm = ({ set, setSet }) => {
  const addASet = e => {
    e.preventDefault();
    let newData = {};
    newData[`time`] = 0;
    newData[`time_units`] = "sec";
    newData[`distance`] = 0;
    newData[`distance_units`] = "m";

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
          <CardioDiv key={idx}>
            <SetHeader>Set {idx + 1}</SetHeader>
            <InputDiv>
              <InputLabel>Time:</InputLabel>
              <Input
                type="number"
                min="1"
                max="1000"
                name={`time`}
                onChange={e => {
                  inputHandler(idx, e);
                }}
                value={setData[`time`]}
                required
              />
            </InputDiv>

            {/* <input
              type="range"
              min="1"
              max={"1000"}
              name={`time${idx}`}
              onChange={e => {
                inputHandler(idx, e);
              }}
              value={setData[`time${idx}`]}
            /> */}

            <InputDiv>
              <InputLabel>Unit: </InputLabel>
              <Select
                name={`time_units`}
                onChange={e => {
                  inputHandler(idx, e);
                }}
                defaultValue={set[idx][`time_units`]}
              >
                <Option value="sec">sec</Option>
                <Option value="min">min</Option>
                <Option value="hours">hours</Option>
              </Select>
            </InputDiv>

            <InputDiv>
              <InputLabel>DISTANCE: </InputLabel>
              <Input
                type="number"
                min="1"
                max="1000"
                name={`distance`}
                onChange={e => {
                  inputHandler(idx, e);
                }}
                value={setData[`distance`]}
                required
              />
            </InputDiv>
            {/* <input
              type="range"
              min="1"
              max={"1000"}
              name={`distance${idx}`}
              onChange={e => {
                inputHandler(idx, e);
              }}
              value={setData[`distance${idx}`]}
            /> */}

            <InputDiv>
              <InputLabel>Unit: </InputLabel>
              <Select
                name={`distance_units`}
                onChange={e => {
                  inputHandler(idx, e);
                }}
                defaultValue={set[idx][`distance_units`]}
              >
                <Option value="m">m</Option>
                <Option value="km">km</Option>
              </Select>
            </InputDiv>
          </CardioDiv>
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

const CardioDiv = styled.div`
  display: flex;
  justify-content: space-between;
  /* height: 60px; */
  margin-bottom: 30px;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(225, 233, 241, 0.1);

  @media (max-width: 600px) {
    flex-direction: column;
  }
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
  margin-bottom: 20px;
`;
const Select = styled.select`
  width: 60px;
  height: 40px;
  border: 1px solid #ffffff;
  background: #ffffff;
  margin-bottom: 20px;
`;

const Option = styled.option`
  font-family: Roboto Condensed;
  font-size: 14px;
  text-transform: uppercase;
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

export default ExerciseCardioForm;
