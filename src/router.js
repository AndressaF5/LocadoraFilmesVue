import VueRouter from 'vue-router';
import Home from './components/Home';
import FormularioPedido from './components/FormularioPedido';
import ListarFilmes from './components/ListarFilmes'
import Carrinho from './components/Carrinho'

export default new VueRouter({
    mode: 'history',
    routes : [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/formularioPedido',
            name: 'FormularioPedido',
            component: FormularioPedido
        },
        {
            path: '/listarFilmes',
            name: 'ListarFilmes',
            component: ListarFilmes
        },
        {
            path: '/carrinho',
            name: 'Carrinho',
            component: Carrinho
        }
    ]
});