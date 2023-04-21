import {ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChange, SimpleChanges} from '@angular/core';


@Component({
  selector: 'app-game-result-icon',
  templateUrl: './game-result-icon.component.html',
  styleUrls: ['./game-result-icon.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameResultIconComponent implements OnChanges {
  @Input() win!: boolean;
  @Input() size: number = 25;
  resultLabel!: string;

  ngOnChanges(changes: SimpleChanges): void {
    const winChange: SimpleChange = changes['win'];
    const win: boolean | undefined = winChange?.currentValue;

    if(win !== undefined) {
      this.setResultLabel(win);
    }
  }

  private setResultLabel(win: boolean): void {
    this.resultLabel = win ? 'W' : 'L';
  }
}
