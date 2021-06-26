import { useState } from "react"

export const ItemCount = ({stock, inicial}) => {
    const [capacidad, setCapacidad] = useState(stock)
    const [number, setNumber] = useState(inicial)

    const resultadoOperacion = (operator) => {
        let nuevoResultado
        let nuevoStock

        
        switch (operator){
            case '+':
                if (capacidad <= 1 ){
                    return(alert('Stock agotado'))
                }
                else{
                    nuevoStock = Number(capacidad) - 1
                    nuevoResultado = Number(number) + 1
                }
            break
            case '-':
                if (number < 1){
                    return(alert('No se pueden seleccionar menos valores'))
                }
                else{
                    nuevoResultado = Number(number) - 1
                    nuevoStock = Number(capacidad) + 1
                }
            break
        }
        setNumber (nuevoResultado)
        setCapacidad (nuevoStock)
    }
    
    return(
        <div className='itemCount'>
            <label htmlFor='number'>
                Item Seleccionado:
                   <input
                        id='number'
                        type='number'
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                   />
            </label>
            <div>
                <button onClick={() => resultadoOperacion('-')}>-</button>
                <button onClick={() => resultadoOperacion('+')}>+</button>
            </div>
        </div>
    )
}