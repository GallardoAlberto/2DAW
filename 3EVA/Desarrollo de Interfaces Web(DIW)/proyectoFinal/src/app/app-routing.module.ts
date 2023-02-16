import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PriceComponent } from './price/price.component';


const routes: Routes = [
  { path: '', component : HomeComponent},
  { path: 'about', component : AboutComponent},
  { path: 'portfolio', component :PortfolioComponent},
  { path: 'contact', component : ContactComponent},
  { path: 'details/:reference/:image/:description/:price/:color', component : DetailsComponent},
  { path: 'price/:reference', component : PriceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
