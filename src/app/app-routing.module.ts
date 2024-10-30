import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarClusterComponent } from './bar-cluster/bar-cluster.component';
import { ChartComponent } from './chart/chart.component';
import { PizzaComponent } from './pizza/pizza.component';
import { FinanceiroComponent } from './financeiro/financeiro.component';
import { InsumosComponent } from './insumos/insumos.component';
import { ClusterFabricaComponent } from './cluster-fabrica/cluster-fabrica.component';


const routes: Routes = [
  { path: '', component:ChartComponent }, 
  { path: 'cluster', component: BarClusterComponent },
  { path: 'fabrica', component: ClusterFabricaComponent},
  { path: 'pizza', component: PizzaComponent },
  { path: 'financeiro', component: FinanceiroComponent },
  { path: 'insumos', component: InsumosComponent }];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }