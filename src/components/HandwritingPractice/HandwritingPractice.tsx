import React from 'react'

const HandwritingPractice = () => {
    return (
        <div>
            <div id="edit">
            <textarea v-model="message"></textarea>
        </div>
            <div id="font">
                <fieldset>
                    <label htmlFor="dot">Font: </label>
                    <select v-model="font">
                    <option id="dot" value="KG Primary Dots" selected>Primary</option>
                    <option id="dot-line-cursive" value="Learning Curve Dashed" >Dots lined Cursive</option>
                </select>
                </fieldset>
                <fieldset>
                    <label htmlFor="lines">Show lines: </label>
                    <input type="checkbox" v-model="showLines"/>
                </fieldset>
                <fieldset>
                    <label htmlFor="align">Align: </label>
                    <select id="align" v-model="textAlign">
                        <option id="to-left" value="left" selected>Left</option>
                        <option id="to-center" value="center">Center</option>
                        <option id="to-right" value="right">Right</option>
                    </select>
                </fieldset>
                <fieldset>
                    <label htmlFor="scale">Font Size</label>
                    <select id="scale" v-model="scale">
                        <option id="large" value="large" selected>Large</option>
                        <option id="small" value="small">Small</option>
                    </select>
                </fieldset>
                <fieldset>
                    {/* <button onClick={window.print()}>Print</button> */}
                </fieldset>
            </div>
            <div id="printarea">
                <section id="printarea__header">
                    <p>Student name: ______________________</p>
                    <p>Date: ___________</p>
                </section>
                <p className="scale" v-for="line in lines" >
                    <img src="./images/handwriting-singleline-large.png" alt="lined background " v-if="showLines === true && scale === 'large'"/>
                    <img src="./images/handwriting-singleline-small.png" alt="lined background " v-if="showLines === true && scale === 'small'" />
                    {/* {{ line }} */}
                </p>
            </div>
        </div>
    )
}

export default HandwritingPractice
