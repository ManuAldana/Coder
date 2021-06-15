export const NavBar = () => {
    const handleClick = () => alert('Página en construcción')

    return(
        <nav>
            <ul>
                <h1>GenPro</h1>
                <p>¡Tecnología para tu vida!</p>
                <button className='button' onClick={handleClick} > PC Gamer</button>
                <button className='button' onClick={handleClick} > CryptoMining</button>
                <button className='button' onClick={handleClick} > Office</button>
                <button className='button' onClick={handleClick} > Home/Student</button>
            </ul>
        </nav>
    )
}