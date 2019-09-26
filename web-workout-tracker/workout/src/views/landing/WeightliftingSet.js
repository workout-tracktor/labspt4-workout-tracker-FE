import React from 'react'

const WeightliftingSet = ({setData}) => {
    return (
        <>
            {setData.map((set, idx) => {
                return (
                    <div>
                        <p>Set {idx+1}</p>
                        <p>{set[`weight${idx}`]}</p>
                        <p>{set[`unit${idx}`]}</p>
                        <p>{set[`rep${idx}`]}</p>
                    </div>
                )
            })}

        </>
    )
}

export default WeightliftingSet