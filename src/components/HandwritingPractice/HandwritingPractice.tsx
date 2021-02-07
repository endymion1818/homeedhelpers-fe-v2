import React from 'react'
import styles from './stylesheet.module.css'

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
            <h1>Handwriting practice paper</h1>
            <p>Make full-page custom handwriting worksheets in seconds!</p>
            <ol className={styles.instructions}>
                <li>Select a writing style: <i>Primary (d'nealian)</i> or <i>cursive</i></li>
                <li>Type your handwriting worksheet content and test how you want it to appear</li>
                <li>Select your letter size</li>
                <li>Click <i>Print</i> for a copy of your writing worksheet for immediate use
                </li>
            </ol>
            <p id={styles.sorrynotresponsive} data-nosnippet>Sorry! You'll need to use a device with a larger screen for this to work.</p>
            <div id={styles.edit}>
                <textarea value={message} onChange={e => useMessage(e.currentTarget.value)} />
            </div>
            <div id={styles.font}>
                <fieldset className={styles.fieldset}>
                    <label htmlFor="dot">Font: </label>
                    <select>
                    <option id={styles.dot} value="KG Primary Dots" selected>Primary</option>
                    <option value="Learning Curve Dashed" >Dots lined Cursive</option>
                </select>
                </fieldset>
                <fieldset className={styles.fieldset}>
                    <label htmlFor="lines">Show lines: </label>
                    <input type="checkbox" checked={showLines} />
                </fieldset>
                <fieldset className={styles.fieldset}>
                    <label htmlFor="align">Align: </label>
                    <select id={styles.align}>
                        <option value="left" selected>Left</option>
                        <option value="center">Center</option>
                        <option value="right">Right</option>
                    </select>
                </fieldset>
                <fieldset className={styles.fieldset}>
                    <label htmlFor="scale">Font Size</label>
                    <select id={styles.scale} value={scale} onChange={printStyle}>
                        <option id={styles.large} value="large" selected>Large</option>
                        <option id={styles.small} value="small">Small</option>
                    </select>
                </fieldset>
                <fieldset className={styles.fieldset}>
                    <button onClick={printHandler}>Print</button>
                </fieldset>
            </div>
            <div id={styles.printarea}>
                <section id={styles.printarea__header}>
                    <p>Student name: ______________________</p>
                    <p>Date: ___________</p>
                </section>
                {}
            </div>
            <hr/>
        <h2>Frequently asked questions</h2>
        <ol className={styles.instructions}>
            <li>
                <strong>What is this?</strong>
                <i>This is a tool to help teachers and home educators give their students and children custom handwriting worksheets learn how to write.</i>
            </li>
            <li>
                <strong>How do I use it?</strong>
                <i>Enter the text you want your student or child to write into the text box provided. Click the "print" button, and your printer dialog will appear. We have configured the print version to contain an area for the student to write their name and the date on the printed sheet.</i>
            </li>
            <li>
                <strong>Is there a charge for this service?</strong>
                <i>No. This service is provided free of charge. We hope to make it pay for itself by the use of advertising in the future.</i>
            </li>
            <li>
                <strong>How do I contact you?</strong>
                <i>You can email homeedhelpers@gmail.com to send feature suggestions and bug reports. We will read your email but cannot guarantee a response.</i>
            </li>
        </ol>
        </div>
    )
}

export default HandwritingPractice
