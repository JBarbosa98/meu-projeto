function ClientForm() {
    return (
        <form>
            <div>
                <input type='text' name='name' placeholder='Insira o nome do Cliente'></input>
            </div>
            <div>
                <input type='email' name='email' placeholder='Insira o email do Cliente'></input>
            </div>
            <div>
                <input type='text' name='cpf' pattern="(\d{3}\.?\d{3}\.?\d{3}-?\d{2})|(\d{2}\.?\d{3}\.?\d{3}/?\d{4}-?\d{2})" placeholder='Insira o CPF do Cliente'></input>
            </div >
            <div>
                <input type='submit' value='Cadastrar Cliente'></input>
            </div>
        </form>
    );
}

export default ClientForm;