import Item from "./Item"

function List() {
    return (
        <>
            <h1>Minha lista</h1>
            <Item marca="Ferrari" ano_lancamento={1998}></Item>
            <Item marca="Renault" ano_lancamento={2004}></Item>
            <Item marca="Porsche" ano_lancamento={1964}></Item>                        
            <Item></Item>                        
        </>
    )
}

export default List