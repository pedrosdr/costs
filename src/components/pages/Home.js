import savings from '../../img/savings.svg'
import LinkButton from '../layout/LinkButton'
import styles from './Home.module.css'

function Home() {
    return (
        <section className={styles['home-container']}>
            <h1>Bem-Vindo ao <span>Costs</span></h1>
            <p>Comece a gerenciar os seus projetos agora mesmo!</p>
            <LinkButton href='/newproject'>Criar Projeto</LinkButton>
            <img src={savings} alt="Costs"/>
        </section>
    )
}

export default Home