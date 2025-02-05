import LinkButton from '../layout/LinkButton';
import styles from './Home.module.css'

/*importar imagem de fundo */


function Home() {
    return (
        <section className={styles.home_container}>
            <h1>Bem vindo ao <span>Clients</span></h1>
            <p>Comece a gerenciar os seus clientes agora mesmo!</p>
            <LinkButton to='/newClient' text='Incluir Cliente'></LinkButton>
        {/*    <img src={savings} alt='Clients'></img>*/}
        </section>
  );
}

export default Home;