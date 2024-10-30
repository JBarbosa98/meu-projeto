import { useState } from 'react'

function Condicional() {
    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    function cadastrarEmail(e) {
        e.preventDefault()
        setUserEmail(email)
        console.log("entrou cadastrarEmail()")
    }

    function limparEmail(e) {
        e.preventDefault()
        setUserEmail('')
        console.log("entrou limparEmail()")
    }

    return (
        <div>
            <h2>Cadastrar Email</h2>
            <form>
                <div>
                    <input type="email" placeholder="Digite seu email" onChange={(e) => setEmail(e.target.value)}></input>
                    <button type="submit" onClick={cadastrarEmail}>Cadastrar</button>
                </div>
                {userEmail && (
                    <div>
                        <p>O email {userEmail} foi registrado !</p>
                        <button type="submit" onClick={limparEmail}>Limpar email</button>
                    </div>

                )}
            </form>
        </div>
    )
}
export default Condicional