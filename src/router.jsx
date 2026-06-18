import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import Home from './pages/Home'
import Imc from './pages/Imc'
import Agenda from './pages/Agenda'
import Contacto from './pages/Contacto'

export const router = createBrowserRouter([
    {
        path: "/",
        // App va a ser la pagina padre, el componente que maneja al resto de los componentes
        element: <App/>,
        children: [
            // El componente App va a tener varios hijos, que son el resto de las rutas
            {
                index: true,
                element: <Home/>
            },
            {
                path: "/imc",
                element: <Imc/>
            },
            {
                path: "/agenda",
                element: <Agenda/>
            },
             {
                path: "/contacto",
                element: <Contacto/>
            },
            {
                // Una ruta de error, cualquier ruta mal escrita te lleva a esta pagina
                path: "*",
                element: (
                    <div>
                        <h1> Error 404 </h1>
                        <p>Pagina no encontrada</p>
                    </div>
                )
            }
        ]
    }
])