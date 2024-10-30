import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ChartComponent } from './chart/chart.component';
import { PizzaComponent } from './pizza/pizza.component';
import { ToastModule } from 'primeng/toast';
import { SidebarModule } from 'primeng/sidebar';
import { SelectButtonModule } from 'primeng/selectbutton';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { ChartModule } from 'primeng/chart';
import { ButtonModule } from 'primeng/button';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { CommonModule } from '@angular/common';
import { InsumosComponent } from './insumos/insumos.component';
import { FinanceiroComponent } from './financeiro/financeiro.component';
import { ClusterFabricaComponent } from './cluster-fabrica/cluster-fabrica.component';
import { BarClusterComponent } from './bar-cluster/bar-cluster.component';



@NgModule({
  declarations: [
    AppComponent,
    PizzaComponent,
    InsumosComponent,
    FinanceiroComponent,
    ClusterFabricaComponent,
    ChartComponent,
    BarClusterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CoreModule,
    AppRoutingModule,
    ChartModule, 
    CalendarModule,
    FormsModule,
    SelectButtonModule, 
    ButtonModule, 
    SidebarModule,
    ToastModule,
    ProgressSpinnerModule,
    CommonModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
