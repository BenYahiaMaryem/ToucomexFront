import { CommandFormComponent } from './../components/admin-commands/command-form/command-form.component';
import { CategoryFormComponent } from './../components/admin-categories/category-form/category-form.component';
import { productFormComponent } from './../components/admin-products/product-form/product-form.component';
import { CategoryListComponent } from './../components/admin-categories/category-list/category-list.component';
import { CommandListComponent } from './../components/admin-commands/command-list/command-list.component';
import { CartListComponent } from './../components/admin-carts/cart-list/cart-list.component';
import { CartFormComponent } from './../components/admin-carts/cart-form/cart-form.component'
import { productListComponent } from './../components/admin-products/product-list/product-list.component';
import { AdminHomeComponent } from './../admin-home/admin-home.component';
import { AdminproductsComponent } from './../components/admin-products/admin-products.component';
import { AdminCategoriesComponent } from './../components/admin-categories/admin-categories.component';
import { AdminCommandsComponent } from './../components/admin-commands/admin-commands.component';
import { AdminCartsComponent } from './../components/admin-carts/admin-carts.component';
import { MainPageComponent } from './../components/main-page/main-page.component';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { LoginComponent } from '../../store/login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const ROUTES = [
    {
        path: '', 
        component: AdminHomeComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
      path: 'main',
      component: MainPageComponent
    },
    {
      path: 'admin-products',
      component: AdminproductsComponent
    },
    {
      path: 'admin-carts',
      component: AdminCartsComponent
    },
    {
      path: 'admin-commands',
      component: AdminCommandsComponent
    },
    {
      path: 'admin-categories',
      component: AdminCategoriesComponent
    },
    {
      path: 'product-list',
      component: productListComponent
    },
    {
      path: 'cart-list',
      component: CartListComponent
    },
    {
      path: 'command-list',
      component: CommandListComponent
    },
    {
      path: 'category-list',
      component: CategoryListComponent
    },
    {
      path: 'product-form',
      component: productFormComponent
    },
    {
      path: 'cart-form',
      component: CartFormComponent
    },
    {
      path: 'command-form',
      component: CommandFormComponent
    },
    {
      path: 'category-form',
      component: CategoryFormComponent
    }


]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class AdminRouterModule { }
