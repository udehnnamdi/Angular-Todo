import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-output',
  templateUrl: './todo-output.component.html',
  styleUrls: ['./todo-output.component.css']
})
export class TodoOutputComponent implements OnInit {
  @Input() todo: string;
  @Input() id: string;
  @Output() taskId = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

  onRemoveTodo(id:string){
    this.taskId.emit(id)
  }

}
