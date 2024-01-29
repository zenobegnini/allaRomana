import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PagamentoComponent } from './pagamento/pagamento.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',

    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'pagamento',
        component: PagamentoComponent
    },

];
