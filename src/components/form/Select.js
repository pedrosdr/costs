import styles from './Select.module.css'

function Select({text, name, options, handleOnChange, value}) {
    return (
        <div className={styles['form-control']}>
            <label htmlFor={name}>{text}</label>
            <select 
                name={name} 
                id={name} 
                onChange={handleOnChange}
            >
                <option>Selecione uma opção</option>

            </select>
        </div>
    )
}

export default Select