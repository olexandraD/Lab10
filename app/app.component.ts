import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { HeaderComponent } from './header/header.component';
import { PhoneCalcComponent } from './phonecalc/phonecalc.component';
import { TemperatureComponent } from './lab10/temperature.component'; 
import { MatrixComponent } from './lab10/matrix.component'; 
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    PhoneCalcComponent,
    TemperatureComponent,
    MatrixComponent,
    FormsModule,
    CommonModule, 
  ], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'laba9_10';
  showPage: string = 'phonecalc'; 
}
