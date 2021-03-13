import React, { FC, useEffect } from 'react'
import clsx from 'clsx'
import { ErrorBoundary } from '@sentry/react'

import styles from './stylesheet.module.scss'

const lineScales = [
    {
        name: 'large',
        value: 'large'
    },
    {
        name: 'small',
        value: 'small'
    }
]
const fontStyles = [
    {
        name: 'primary',
        value: 'primary'
    },
    {
        name: 'cursive',
        value: 'cursive'
    }
]
const alignmentStyles = [
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
]

export type Option = {
    name: string,
    value: string
}
export interface SelectProps {
    values: Option[],
    callback: (value) => void
}

const Select:FC<SelectProps> = ({ values, callback }) => {
    return (
      <select
        defaultValue={values[0].value}
        onChange={({ target: { value } }) => callback(value)}
      >
        {values.map(value => (
          <option key={value.value} value={value.value}>
            {value.name}
          </option>
        ))}
      </select>
    );
}

const HandwritingPractice:FC = () => {
    const [font, setFont] = React.useState(fontStyles[0].name)
    const [scale, setScale] = React.useState(lineScales[0].name)
    const [textAlignment, setTextAlign] = React.useState(alignmentStyles[0].name)
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
        <textarea data-cy="textarea" className={styles.textarea} defaultValue={lines[0]} onKeyUp={e => setLines(e.currentTarget.value.split("\n").map(l => l.trim()))} />
        <div className={styles.textArea}>
            <fieldset className={styles.fieldset}>
                <label htmlFor="dot">Font: </label>
                <Select values={fontStyles} callback={setFont} />
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
                <label htmlFor="align">Align: </label>
                <Select values={alignmentStyles} callback={setTextAlign} />
            </fieldset>
            <fieldset className={styles.fieldset}>
                <label htmlFor="scale">Font Size: </label>
                <Select values={lineScales} callback={setScale} />
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
