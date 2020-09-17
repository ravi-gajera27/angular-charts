import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VerticalChartComponent } from './vertical-chart/vertical-chart.component';
import { HorizontalChartComponent } from './horizontal-chart/horizontal-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';


const routes: Routes = [
  { path:'', redirectTo:'/vertical-chart', pathMatch:"full" },
  { path:'vertical-chart', component:VerticalChartComponent, pathMatch:"full" },
  { path:'horizontal-chart', component:HorizontalChartComponent , pathMatch:"full" },
  { path:'pie-chart', component:PieChartComponent, pathMatch:"full" },
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
