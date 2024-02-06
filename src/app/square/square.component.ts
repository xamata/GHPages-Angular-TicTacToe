import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

const button = document.getElementById('square-button');
var disabledButtons: boolean = true;
var gameOver: boolean = false;

@Component({
  selector: 'app-square',
  standalone: true,
  imports: [MatButtonModule],
  template: `
    <button id="square-button" mat-button color="primary">
      {{ value }}
    </button>
  `,
  styles: `button { width: 100%; height: 100%; font-size: 2em !important; }`,
})
export class SquareComponent {
  @Input() value!: 'X' | 'O';
  public buttonValue: string = this.setButton;

  @Input() set setButton(buttonValue: string) {
    if (!gameOver && this.value == 'X') {
      this.buttonValue = 'X';
    } else if (!gameOver && this.value == 'O') {
      this.buttonValue = 'O';
    }
    this.buttonValue = 'S';
  }
}

/*
SCENARIOS to TURN OFF THE BOARD AFTER GAME ENDS:
- buttons stop working
- new board (strings)is created with the same buttons
- 
*/
