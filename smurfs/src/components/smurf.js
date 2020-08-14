import React from 'react'
 
export const Smurf = (props) => {
    // const { name, age, height } = props
    // console.log(props)
    return(
        <div>
            <h2>{props.smurf.name}</h2>
            <h3>{props.smurf.age}</h3>
            <h4>{props.smurf.height}</h4>
        </div>
    )
}