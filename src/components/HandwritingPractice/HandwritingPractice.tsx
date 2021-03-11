import React, { useEffect } from 'react'
import styles from './stylesheet.module.scss'
import clsx from 'clsx'

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

const Select = ({ values, callback, selected }) => {
    return (
      <select
        defaultValue={selected}
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

const HandwritingPractice = () => {
    const [font, setFont] = React.useState(fontStyles[0].name)
    const [scale, setScale] = React.useState(lineScales[0].name)
    const [textAlignment, setTextAlign] = React.useState(alignmentStyles[0].name)
    const [showLines, setShowLines] = React.useState(true)

    const classes = clsx(
        styles.editable,
        styles[font],
        styles[scale],
        styles[textAlignment],
        showLines ? styles['lined'] : styles['plain']
    )

    return (
        <>
        <div id={styles.font}>
            <fieldset className={styles.fieldset}>
                <label htmlFor="dot">Font: </label>
                <Select values={fontStyles} callback={setFont} selected={fontStyles[0]} />
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
                <Select values={alignmentStyles} callback={setTextAlign} selected={alignmentStyles[0]} />
            </fieldset>
            <fieldset className={styles.fieldset}>
                <label htmlFor="scale">Font Size: </label>
                <Select values={lineScales} callback={setScale} selected={lineScales[0]} />
            </fieldset>
            <fieldset className={styles.fieldset}>
                <button onClick={() => window.print}>Print</button>
            </fieldset>
        </div>
        <div id={styles.printarea}>
            <section id={styles.printarea__header}>
                <p>Student name: ______________________</p>
                <p>Date: ___________</p>
            </section>
            <p className={classes} contentEditable="true">Edit me!</p>
        </div>
      </>
    )
}

export default HandwritingPractice
