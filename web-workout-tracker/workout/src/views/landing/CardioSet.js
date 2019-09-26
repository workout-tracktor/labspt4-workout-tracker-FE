import React from 'react'

const CardioSet = ({setData}) => {
    return (
        <>
            {setData.map((set, idx) => {
                return (
                    <div>
                        <p>Set {idx + 1}</p>
                        <p>{set[`time${idx}`]}</p>
                        <p>{set[`timeUnit${idx}`]}</p>
                        <p>{set[`distance${idx}`]}</p>
                        <p>{set[`distanceUnit${idx}`]}</p>
                    </div>
                )
            })}

        </>
    )
}

export default CardioSet