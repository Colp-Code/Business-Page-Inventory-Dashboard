import './singup.css';
import axion from 'axios';
import { useState } from 'react';
import { Button } from '../../components/aodesu/button';
    
const SingUp = () => {
    const [error, setError] = useState('')
    const [bien, setBien] = useState('')
    const [fromData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('')
        console.log(error)
        if(fromData.password !== fromData.confirmPassword){
            setError('Las contraseñas no coinciden')
            console.log([fromData.password, fromData.confirmPassword])
            return;
        }else{
            setBien('todo bien')
        }
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <div className="header-singup">
                    <h1>Sing Up Page</h1>
                    <input
                        type="text"
                        placeholder='Nombre de usuario'
                        name='username'
                        value={fromData.username}
                        onChange={(e) => setFormData({...fromData, username: e.target.value})}
                    />
                    <input
                        type="text"
                        placeholder='Correo'
                        name='correo'
                        value={fromData.email}
                        onChange={(e) => setFormData({...fromData, email: e.target.value})}
                        />
                    <input 
                        type="password"
                        placeholder='Contraseña'
                        name='contraseña'
                        value={fromData.password}
                        onChange={(e) => setFormData({...fromData, password: e.target.value})}
                        />
                    <input 
                        type="password"
                        placeholder='confirme la contraseña'
                        name='confirmarContraseña'
                        value={FormData.password}
                        onChange={(e) => setFormData({...fromData, confirmPassword: e.target.value})}
                        />
                    <div>
                        <Button size="small" color='secondary' variant="contained" type="submit">
                            Hola mundo
                        </Button>
                        {error}
                        {bien}
                    </div>
                    
                </div>
            </form>
            

        </>
    )
}

export default SingUp;