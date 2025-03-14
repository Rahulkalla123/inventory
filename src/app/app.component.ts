import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AllAPIService } from './service/all-api.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
