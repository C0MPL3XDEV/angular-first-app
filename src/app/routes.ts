import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {HousingDetailsComponent} from './housing-details/housing-details.component';

const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: "Home Page",
  },
  {
    path: 'details/:id',
    component: HousingDetailsComponent,
    title: 'Home Details',
  },
];

export default routeConfig;
