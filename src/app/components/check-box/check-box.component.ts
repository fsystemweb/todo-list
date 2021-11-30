import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-check-box',
  templateUrl: './check-box.component.html',
  styleUrls: ['./check-box.component.scss'],
})
export class CheckBoxComponent implements OnInit {
  @Input() id;

  @Output() emitCheckBoxActive = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  clickOnCheckBox(value, event) {
    const object: any = {
      id: value,
      flag: false,
    };

    if (event.target.checked) object.flag = true;

    this.emitCheckBoxActive.emit(object);
  }
}
