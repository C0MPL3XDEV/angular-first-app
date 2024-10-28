import { Component, inject } from '@angular/core';
import {HousingLocationComponent} from '../housing-location/housing-location.component';
import {HousingLocation} from '../housinglocation';
import {NgForOf} from '@angular/common';
import {HousingService} from '../housing.service';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HousingLocationComponent, NgForOf, RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  housingService: HousingService = inject(HousingService);

  filteredList: HousingLocation[] = [];

  constructor() {
    this.housingService.getAllHousingLocations().then((housingLocationsList: HousingLocation[]) => {
      this.housingLocationList = housingLocationsList;
      this.filteredList = this.housingLocationList;
    });
  }

  housingLocationList: HousingLocation [] = []

  filterResults(text: string) {
    if (!text) {
      this.filteredList = this.housingLocationList;
      return;
    }
    this.filteredList = this.housingLocationList.filter((housingLocation) =>
      housingLocation?.city.toLowerCase().includes(text.toLowerCase()),
    );
  }
}
