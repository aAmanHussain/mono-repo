import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'lib-class-list-item',
  templateUrl: './class-list-item.component.html',
  styleUrls: ['./class-list-item.component.css']
})
export class ClassListItemComponent implements OnInit {
  @Input() class: any = null;
  @Output() classSelected = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  handleClick(): void {
    this.classSelected.emit(this.class);
  }

}
