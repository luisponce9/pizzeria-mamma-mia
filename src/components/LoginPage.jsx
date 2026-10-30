import { useState } from 'react'

const LoginPage = () => {
    const [correo, setCorreo] = useState('')
    const [password, setPw] = useState('')

    const [error, setError] = useState('')
   
    const [exito, setExito] = useState(false)


    const validarDatos = (e) => {
        e.preventDefault()
        setError('')
        setExito(false)

        if (!correo.trim() || !password.trim() ) {
            setError("Todos los campos son obligatorios.")
            return
        }
        if (password.length < 6) {
            setError("La contraseña debe tener 6 caracteres o más.")
            return
        }

        setError('')
        setExito(true)
        setCorreo('')
        setPw('')
    }

    return (
        <section
        className="container my-5">  
            <h1>Login</h1>
            <form className="formulario" onSubmit={validarDatos}>
                {error ? <p className="alert alert-danger mb-4">{error}</p> : null}

                {exito ? <p className="alert alert-success mb-4">Inicio de sesión exitoso.</p> : null}

                <div className="mb-3">
                    <label className="form-label">Correo electrónico</label>
                    <input
                        type="email"
                        name="correo"
                        className="form-control"
                        placeholder='Ingrese su correo'
                        onChange={(e) => setCorreo(e.target.value)}
                        value={correo} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Contraseña</label>
                    <input
                        type="password"
                        name="password"
                        className="form-control"
                        placeholder='Ingrese su contraseña'
                        onChange={(e) => setPw(e.target.value)}
                        value={password} />
                </div>

                <button type="submit" className="btn btn-primary mt-2">Enviar</button>
            </form>
        </section>
    )
}

export default LoginPage