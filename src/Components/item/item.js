export const Item = ({item}) => {
    return (
        <>        
            <p>Producto: <span>{item.title}</span></p>
            <p>Precio:<span>{item.price} </span></p>
        </>
    )
}