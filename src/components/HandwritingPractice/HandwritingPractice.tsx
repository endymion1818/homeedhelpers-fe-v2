import React, { FC, useEffect } from 'react'
import clsx from 'clsx'
import { ErrorBoundary } from '@sentry/react'

import styles from './stylesheet.module.scss'

const lineScales = {
    title: 'Line scales',
    items: [
    {
        name: 'large',
        value: 'large'
    },
    {
        name: 'small',
        value: 'small'
    }
]}
const fontStyles = {
    title: 'Font styles',
    items: [
    {
        name: 'primary',
        value: 'primary'
    },
    {
        name: 'cursive',
        value: 'cursive'
    }
]}
const alignmentStyles = {
    title: 'Alignment styles',
    items: [
    {
        name: 'left',
        value: 'left'
    },
    {
        name: 'center',
        value: 'center'
    },
    {
        name: 'right',
        value: 'right'
    }
]}

export type Option = {
    name: string,
    value: string
}
export interface SelectProps {
    options: {
        title: string,
        items: Option[]
    },
    callback: (value) => void
}

const Select = ({ options, callback }:SelectProps) => {
    const { title, items } = options
    const name = title.split(' ').join('-').toLowerCase()
    return (
        <>
            <label htmlFor={name}>Title: </label>
            <select
                id={name}
                defaultValue={items[0].value}
                onChange={({ target: { value } }) => callback(value)}
            >
                {items.map(value => (
                <option key={value.value} value={value.value}>
                    {value.name}
                </option>
                ))}
            </select>
            </>
    );
}

const HandwritingPractice = () => {
    const [font, setFont] = React.useState(fontStyles.items[0].name)
    const [scale, setScale] = React.useState(lineScales.items[0].name)
    const [textAlignment, setTextAlign] = React.useState(alignmentStyles.items[0].name)
    const [showLines, setShowLines] = React.useState(true)
    const [lines, setLines] = React.useState(['Edit me!'])

    const classes = clsx(
        styles.editableArea,
        styles[font],
        styles[scale],
        styles[textAlignment],
        showLines ? styles['lined'] : styles['plain']
    )

    return (
        <ErrorBoundary>
        <label htmlFor="textarea" className={styles.sronly}>Font Size: </label>
        <textarea data-cy="textarea" id="textarea" className={styles.textarea} defaultValue={lines[0]} onKeyUp={e => setLines(e.currentTarget.value.split("\n").map(l => l.trim()))} />
        <div className={styles.textArea}>
            <fieldset className={styles.fieldset}>
                <Select options={fontStyles} callback={setFont} />
            </fieldset>
            <fieldset className={styles.fieldset}>
                <label htmlFor="lines">Show lines: </label>
                <input 
                    id="lines" 
                    type="checkbox" 
                    defaultChecked={true} 
                    onChange={() => setShowLines(!showLines)} 
                />
            </fieldset>
            <fieldset className={styles.fieldset}>
                <Select options={alignmentStyles} callback={setTextAlign} />
            </fieldset>
            <fieldset className={styles.fieldset}>
                <Select options={lineScales} callback={setScale} />
            </fieldset>
            <div className={styles.fieldset}>
                <button onClick={() => window.print}>Print</button>
            </div>
        </div>
        <div id={styles.printarea}>
            <section id={styles.printarea__header}>
                <p>Student name: ______________________</p>
                <p>Date: ___________</p>
            </section>
            <p className={classes} data-cy='printarea'>
                {lines.map(line => `${line} \n`)}
                {showLines && (
                    <span className={styles.imageBackground}>
                        {lines.map(line => (
                            <img key={line.split(' ').join('-')} className={styles.editableAreaImage} src={`/images/handwriting-singleline-${scale}.png`} alt="" width="100%" />
                        ))}
                    </span>
                )}
            </p>
        </div>
      </ErrorBoundary>
    )
}

export default HandwritingPractice
