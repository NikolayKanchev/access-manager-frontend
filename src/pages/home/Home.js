import React, { useContext } from 'react'
import { Context } from '../../utils/Store'
import './Home.css'

const HomePage = () => {
    const [state, setState] = useContext(Context);

    const handleClick = () => {

        const person = {
            name: 'Didi',
            email: 'd.a.kancheva@gmail.com'
        }

        setState(person);
    }

    return (
        <>
            <p className="style">{state.name}</p>
            <p>{state.email}</p>
            <button onClick={handleClick}>Change State</button>
        </>
    )
}

export default HomePage;

