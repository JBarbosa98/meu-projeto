import Button from "./Button"
function Evento() {

    function meuEvento() {
        console.log("Opa ! Fui ativado")
    }

    function segundoEvento() {
        console.log("Ativando segundo evento")
    }

    return (
        <>
            <p> CLique para ativar o evento !</p>
            <Button event={meuEvento} text="Primeiro Evento"></Button>
            <Button event={segundoEvento} text="Segundo Evento"></Button>
            
        </>
    )
}

export default Evento