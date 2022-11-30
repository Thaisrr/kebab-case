import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  @Input('open') is_open = false;
  @Input('action_name') action = 'Valider';
  @Output() confirm = new EventEmitter<boolean>();


  constructor() { }

  ngOnInit(): void {
  }

  emitConfirm(val: boolean) {
    this.confirm.emit(val);
  }

}
