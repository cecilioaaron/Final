import { CategoriasPage, HomePage, FormacionPage, ProyectosPage, ServiciosPage, SesionPage } from "../pages/index";
import { login } from "../login/login";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type JSXComponent = () => JSX.Element;

interface Route {
    path: string;
    component: JSXComponent;
    name: string;
    children?: Route[]
}

export const routes: Route[] = [
    {
        path: '/home',
        component: HomePage,
        name: 'Home'
    },

    {
        path: 'proyectos',
        component: ProyectosPage,
        name: 'Proyectos'
    },
    {
        path: 'servicios',
        component: ServiciosPage,
        name: 'Servicios'
    },
    
    {
        path: '/categorias',
        component: CategoriasPage,
        name: 'Categorias'
    },
    
    {
        path: '/login',
        component: login,
        name: 'login'
    }

];