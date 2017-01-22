import {
  Component,
  Input,
  Output,
  EventEmitter,

} from '@angular/core';

@Component({
  selector: 'color-picker',
  styles: [`
    .color-selector {
      position: relative;
    }
    .selector {
      min-width: 120px;
      border: 1px solid lightgrey;
      padding: 10px;
      background-color: #efefef;
      position: absolute;
      top: -50px;
      left: 0;
    }
    .color {
      height: 30px;
      width: 30px;
      border-radius: 100%;
      cursor: pointer;
      margin-right: 10px;
      margin-bottom: 10px;
    }
    .color:hover {
      border: 2px solid darkgrey;
    }
    .icon {
      font-size: 1.4rem;
      color: grey;
      cursor: pointer;
    }
  `],
  template: `
    <div class="color-selector">
      <i class="material-icons icon"
      (click)="showColorPicker(true)">color_lens</i>
      <div class="selector row center-xs" *ngIf="isSelectorVisible">
        <div class="color"
        *ngFor="let color of colors"
        (click)="selectColor(color)"
        [ngStyle]="{'background-color': color}"></div>
      </div>
    </div>
  `
})

export class ColorPicker {
  // Expect an input of colors to populate color picker
  @Input() colors: string[] = [];
  // Event to be fired once a color is selected
  @Output() selected = new EventEmitter();
  isSelectorVisible: boolean = false;

  // Selects the background color for the current note
  selectColor(color: string) {
    this.selected.next(color);
    // hide the color picker
    this.showColorPicker(false);
  }

  showColorPicker(value: boolean) {
    this.isSelectorVisible = value;
  }
}
