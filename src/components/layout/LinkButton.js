import styles from './LinkButton.module.css'

function LinkButton(props) {
    return <a href={props.href} className={styles.btn}>{props.children}</a>
}

export default LinkButton