function Pessoa({ nome, profissao, idade, foto }) {
    return (
        <div>
            <h1> Fala ai {nome}, suave ?</h1>
            <p>Profissao: {profissao}</p>
            <p>Idade: {idade}</p>
            <img src={foto} alt={nome}></img>
        </div>
    )
}

export default Pessoa