import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GroupsComponent } from './groups/groups.component';
import { UsersComponent } from './users/users.component';
import { AboutComponent } from './about/about.component';
import { DealsComponent } from './deals/deals.component';
import { ColumnComponent } from './core/components/column/column.component';
import { DataTableComponent } from './core/components/data-table/data-table.component';

const routes:Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'deals', component: DealsComponent },
  { path: 'groups', component: GroupsComponent },
  { path: 'users', component: UsersComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GroupsComponent,
    UsersComponent,
    AboutComponent,
    DealsComponent,
    ColumnComponent,
    DataTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
