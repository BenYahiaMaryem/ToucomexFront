import { CollectionModule } from './../collection.module';
import { LoginComponent } from './../store/login/login.component';
import { AdminRouterModule } from './admin-router/admin-router.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
// ng2Semantic module
import { MainPageComponent } from './components/main-page/main-page.component';
import { AdminproductsComponent } from './components/admin-products/admin-products.component';
import { AdminCategoriesComponent } from './components/admin-categories/admin-categories.component';
import { AdminCartsComponent } from './components/admin-carts/admin-carts.component';
import { AdminSessionsComponent } from './components/admin-sessions/admin-sessions.component';
import { AdminCommandsComponent } from './components/admin-commands/admin-commands.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { productListComponent } from './components/admin-products/product-list/product-list.component';
import { productFormComponent } from './components/admin-products/product-form/product-form.component';
import { CategoryFormComponent } from './components/admin-categories/category-form/category-form.component';
import { CategoryListComponent } from './components/admin-categories/category-list/category-list.component';
import { CartListComponent } from './components/admin-carts/cart-list/cart-list.component';
import { CartFormComponent } from './components/admin-carts/cart-form/cart-form.component';
import { CommandListComponent } from './components/admin-commands/command-list/command-list.component';
import { CommandFormComponent } from './components/admin-commands/command-form/command-form.component';
import { productPusherComponent } from './components/admin-products/product-list/product-pusher/product-pusher.component';
import { ReactiveFormsModule } from '@angular/forms';
import { productGeneratorComponent } from './components/admin-products/product-generator/product-generator.component';  // <-- #1 import module

@NgModule({
  imports: [
    CommonModule,
    AdminRouterModule,
    CollectionModule,
    ReactiveFormsModule
  ],
  declarations: [
    SidebarComponent,
    MainPageComponent,
    AdminproductsComponent,
    AdminCategoriesComponent,
    AdminCartsComponent,
    AdminSessionsComponent,
    AdminCommandsComponent,
    AdminHomeComponent,
    productListComponent,
    productFormComponent,
    CategoryFormComponent,
    CategoryListComponent,
    CartListComponent,
    CartFormComponent,
    CommandListComponent,
    CommandFormComponent,
    productPusherComponent,
    productGeneratorComponent,

  ],
  exports: [
    SidebarComponent
  ]
})
export class AdminModule { }
