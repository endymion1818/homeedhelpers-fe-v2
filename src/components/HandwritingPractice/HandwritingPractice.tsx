import React from 'react'
import './stylesheet.module.css'

const HandwritingPractice = () => {

    const [message, useMessage] = React.useState('Edit me!')
    const font = 'KG Primary Dots'
    const scale = 'large'
    const textAlign = 'left'
    const showLines = true
    let lines = []
    
    const linesList = function () {
        lines = message
            .split("\n")
            .map(l => l.trim())
    }
    const lineStyle = function () {
        return {
            fontSize: scale === 'large' ?  `152px` : `40px`,
            fontFamily: font,
            lineHeight: scale === 'large' ?  `1.3` : `1.2`,
        }
    }
    const printStyle = function () {
        return {
            textAlign: textAlign,
            paddingTop: scale === 'large' ? `40px` : `72px`
        }
    }
    const printHandler:React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement> = function() {
        if (typeof window !== 'undefined') {
            window.print
        }
    }
    return (
        <div className="container">
            <div id="edit">
            <textarea value={message} onChange={e => useMessage(e.currentTarget.value)} />
        </div>
            <div id="font">
                <fieldset>
                    <label htmlFor="dot">Font: </label>
                    <select>
                    <option id="dot" value="KG Primary Dots" selected>Primary</option>
                    <option id="dot-line-cursive" value="Learning Curve Dashed" >Dots lined Cursive</option>
                </select>
                </fieldset>
                <fieldset>
                    <label htmlFor="lines">Show lines: </label>
                    <input type="checkbox" checked={showLines} />
                </fieldset>
                <fieldset>
                    <label htmlFor="align">Align: </label>
                    <select id="align">
                        <option id="to-left" value="left" selected>Left</option>
                        <option id="to-center" value="center">Center</option>
                        <option id="to-right" value="right">Right</option>
                    </select>
                </fieldset>
                <fieldset>
                    <label htmlFor="scale">Font Size</label>
                    <select id="scale" value={scale} onChange={printStyle}>
                        <option id="large" value="large" selected>Large</option>
                        <option id="small" value="small">Small</option>
                    </select>
                </fieldset>
                <fieldset>
                    <button onClick={printHandler}>Print</button>
                </fieldset>
            </div>
            <div id="printarea">
                <section id="printarea__header">
                    <p>Student name: ______________________</p>
                    <p>Date: ___________</p>
                </section>
                {lines && lines.map((line, index) => (
                    <p key={index} className="scale" v-for="line in lines" >
                    <img src="./images/handwriting-singleline-large.png" alt="lined background " v-if="showLines === true && scale === 'large'"/>
                    <img src="./images/handwriting-singleline-small.png" alt="lined background " v-if="showLines === true && scale === 'small'" />
                    {line}
                </p>
                ))}
            </div>
        </div>
    )
}

export default HandwritingPractice
