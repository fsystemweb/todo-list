import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() title = '';

  public click($event: any) {
    $event.preventDefault();
  }
  constructor() {}

  ngOnInit(): void {}
}
