import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/global/header/header.component";
import { ReservationComponent } from './components/pages/reservation/liste-reservations/listeReservations.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fil_rouge_YOLO_part3_front';
}
