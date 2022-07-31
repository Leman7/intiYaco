import {useState, useEffect} from 'react'

//useState = hace que una funcion perdure en el tiempo y podamos usarla
//onClick es el evento de presionar el click izquierdo.

//useEffect: Se utiliza para controlar los momentos de un componente.

//Tiene 3 eventos:
//-Cuando se inicia
//-Las actualizaciones que va sufriendo
//-Cuando se va

//El primero y el ultimo se ejecutan por una unica vez.


const Counter = () => {
    const [count, setCount] = useState(10)
    const [title, setTitle] = useState('Hola')


    useEffect(() => {
        console.log('el componente se monto')
    }, []) // El array vacio hace que se ejecute por unica vez

    useEffect(() => {
        console.log('cambio el title')

        return // >> EN EL RETURN DEL USE EFFECT VA EL EVENTO CUANDO DESAPARECE, EL ULTIMO
    }, [title]) // el parametro title hace que cambie cada vez que se cambia el titulo

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        setCount(count - 1)
    }


    console.log('render')
    return (
        <div>
            <h1>{title}</h1>
            <button onClick={() => setTitle(title === 'Hola' ? 'Chau' : 'Hola')}>Saludar</button>
            <h1>{count}</h1>
            <button onClick={increment}>Incrementar</button>
            <button onClick={decrement}>Decrementar</button>
        </div>
    )

}

export default Counter