import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProfileComponent } from './components/profile/profile.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { OrderHistoryComponent } from './components/order-history/order-history.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
export const routes: Routes = [
    { 
        path: 'login', 
        component: LoginComponent 
    },
    { 
        path: 'signup', 
        component: SignupComponent 
    },
    { 
        path: 'profile', 
        component: ProfileComponent 
    },
    { 
        path: 'wishlist', 
        component: WishlistComponent 
    },
    { 
        path: 'order-history', 
        component: OrderHistoryComponent 
    },
    { 
        path: 'dashboard', 
        component: DashboardComponent 
    },
    { 
        path: '', 
        redirectTo: '/login',
        pathMatch: 'full' 
    },
    { 
        path: '**', 
        redirectTo: '/login'
    },

];
