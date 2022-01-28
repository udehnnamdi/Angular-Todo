import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.css']
})
export class NewTodoComponent implements OnInit {
  todo: string = '';
 @Output() enteredTodo = new EventEmitter<{id:string, todo:string}>()

  constructor() { }

  ngOnInit(): void {
  }

  onEnterTodo(){
    if(this.todo.length===0){
      return;
    }else{
      this.enteredTodo.emit({id: new Date().getTime().toString(), todo:this.todo})
    this.todo= ''
    // this.enteredTodo = this.todo
    // this.todoItems.push(this.enteredTodo)
    }
    
  }

}
