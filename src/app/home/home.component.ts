import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { HeaderComponent } from "./Component/header/header.component";
import { HomeProsuctComponent } from "./Component/home-prosuct/home-prosuct.component";
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeaderComponent, HomeProsuctComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
}
