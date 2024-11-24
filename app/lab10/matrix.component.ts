import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-matrix',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './matrix.component.html',
  styleUrls: ['./matrix.component.css']
})
export class MatrixComponent {
  matrix: number[][] = [
    [4, 7, 2, 9, 3],
    [8, 1, 5, 6, 4],
    [3, 6, 9, 2, 1],
    [7, 8, 3, 6, 9],
    [2, 4, 8, 5, 6]
  ];

  minValue: number = Infinity;
  minPosition: { row: number; col: number } = { row: -1, col: -1 };
  calculationDone: boolean = false;
Infinity: any;

  findMinValue(): void {
    this.minValue = Infinity;
    this.minPosition = { row: -1, col: -1 };
    this.calculationDone = true;

    for (let i = 0; i < this.matrix.length; i++) {
      for (let j = 0; j < this.matrix[i].length; j++) {
        if (this.matrix[i][j] < this.minValue) {
          this.minValue = this.matrix[i][j];
          this.minPosition = { row: i, col: j };
        }
      }
    }
  }

  checkPosition(): string {
    const { row, col } = this.minPosition;
    const diagSum = this.matrix.length - 1;

    if (row + col === diagSum) {
      return 'На правій діагоналі';
    }

    else if (row + col < diagSum) {
      return 'Ліворуч від правої діагоналі';
    }

    else {
      return 'Праворуч від правої діагоналі';
    }
  }

  isMinValue(rowIndex: number, colIndex: number): boolean {
    return this.minPosition.row === rowIndex && this.minPosition.col === colIndex;
  }
}
