import React from 'react'
import Button from './sub/Button'
import Screen from './sub/Screen'

import "./calc.css"

function Calculator(props) {

    // to create numbers
    const createDigit = () => {
        let digits = [];
        for(let i=1; i<10; i++) {
            digits.push(<Button title={i} />)
        }
        return digits
    }
    return (
        <div>
            <h1>Calculator</h1>
            <div className="container">
                <Screen class={'output'} result={0}/>
                <div className="ops">
                    <Button title={"7"} class={"btn"} />
                    <Button title={"8"} class={"btn"} />
                    <Button title={"9"} class={"btn"} />
                    <Button title={"/"} class={"btn btn-warning"} />

                    <Button title={"4"} class={"btn"} />
                    <Button title={"5"} class={"btn"} />
                    <Button title={"6"} class={"btn"} />
                    <Button title={"*"} class={"btn btn-warning"} />

                    <Button title={"1"} class={"btn"} />
                    <Button title={"2"} class={"btn"} />
                    <Button title={"3"} class={"btn"} />
                    <Button title={"-"} class={"btn btn-warning"} />
                    
                    <Button title={"."} class={"btn btn-warning"} />
                    <Button title={"0"} class={"btn"} />
                    <Button title={"%"} class={"btn btn-warning"} />
                    <Button title={"+"} class={"btn btn-warning"} />

                    <Button title={"clear"} class={"btn"} />
                    <Button title={"="} class={"btn btn-success"} />
                </div>
            </div>
        </div>
    )
}

export default Calculator