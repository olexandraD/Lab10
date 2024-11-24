import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-temperature',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.css']
})
export class TemperatureComponent {
  temperatures: number[] = []; 
  newTemperature: number | null = null; 
  belowMinus10: number = 0;

  addTemperature() {
    if (this.newTemperature !== null) {
      this.temperatures.push(this.newTemperature); 
      this.newTemperature = null; 
      this.calculateBelowMinus10(); 
    }
  }

  calculateBelowMinus10() {
    this.belowMinus10 = this.temperatures.filter(temp => temp < -10).length;
  }
}
