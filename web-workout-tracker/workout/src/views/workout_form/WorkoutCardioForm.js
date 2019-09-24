import React from "react";

const WorkoutCardioForm = ({set, setSet}) => {

    const addASet = (e) => {
        e.preventDefault();
        let newData = {};
        newData[`time${set.length}`] = 0;
        newData[`timeUnit${set.length}`] = 'sec';
        newData[`distance${set.length}`] = 0;
        newData[`distanceUnit${set.length}`] = 'm';
        setSet([...set, newData]);
        console.log(set)
    };

    const deleteASet = (e) => {
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
        console.log(set)
    };

    return (
        <>
            {set.map((setData, idx) => {
                return (
                    <div key={idx}>
                        <h3>Set {idx + 1}</h3>
                        Time: <input type="number"
                                       min='1'
                                       max='1000'
                                       name={`time${idx}`}
                                       onChange={(e) => {
                                           inputHandler(idx, e)
                                       }}
                                       value={setData[`time${idx}`]} required/>
                        <input type='range'
                               min='1'
                               max={'1000'}
                               name={`time${idx}`}
                               onChange={(e) => {
                                   inputHandler(idx, e)
                               }}
                               value={setData[`time${idx}`]}
                        />
                        <select name={`timeUnit${idx}`}
                                onChange={(e) => {
                                    inputHandler(idx, e)
                                }} defaultValue={set[idx][`timeUnit${idx}`]}>
                            <option value='sec'>sec</option>
                            <option value='min'>min</option>
                            <option value='hours'>hours</option>
                        </select>

                        <br/>

                        DISTANCE: <input type="number"
                                       min='1'
                                       max='1000'
                                       name={`distance${idx}`}
                                       onChange={(e) => {
                                           inputHandler(idx, e)
                                       }}
                                       value={setData[`distance${idx}`]} required/>
                        <input type='range'
                               min='1'
                               max={'1000'}
                               name={`distance${idx}`}
                               onChange={(e) => {
                                   inputHandler(idx, e)
                               }}
                               value={setData[`distance${idx}`]}
                        />
                        <select name={`distanceUnits${idx}`}
                                onChange={(e) => {
                                    inputHandler(idx, e)
                                }} defaultValue={set[idx][`distanceUnits${idx}`]}>
                            <option value='m'>m</option>
                            <option value='km'>km</option>
                        </select>

                        <br/>
                    </div>

                )
            })}
            <input type='button' value="+ ADD A SET" onClick={addASet}/>
            <input type='button' value='- REMOVE LAST SET' onClick={deleteASet}/>

        </>
    )
};

export default WorkoutCardioForm