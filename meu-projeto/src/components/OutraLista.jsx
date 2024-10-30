function OutraLista({itens}) {
    return (
        <>
            {
                itens.length > 0 ? (
                itens.map((item, index) => (
                <p key={index}>{item}</p>
                ))) : (
                    <p>Nao ha itens na lista</p>
            )}
        </>
    )
}

export default OutraLista