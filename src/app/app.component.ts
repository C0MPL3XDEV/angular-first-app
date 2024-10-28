import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, NgOptimizedImage, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
