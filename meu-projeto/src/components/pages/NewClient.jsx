import ClientForm from '../client/ClientForm';
import styles from './NewClient.module.css'

function NewClient() {
  return (
      <div className={styles.newClient_container}>
          <h1>Cadastrar Cliente</h1>
          <p>Cadastre seu cliente para depois adicionar os servicos</p>
          <ClientForm></ClientForm>
      </div>
  );
}

export default NewClient;