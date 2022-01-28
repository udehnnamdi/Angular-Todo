import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Angular-Todo';
  todos = [];
  tasks = ''


  ngOnInit(): void {
    if(localStorage.getItem("enteredTasks")){
      const storedTasks = JSON.parse(localStorage.getItem("enteredTasks"));
      this.todos = storedTasks;}
      console.log(this.todos)
      this.tasks = 'You have '+ `${this.todos.length}` +' tasks'
  }


  onEnteredTodo(todo:{id:string, todo:string}){
    this.todos.push(todo)
    console.log(this.todos)
    this.tasks = 'You have '+ `${this.todos.length}` +' tasks'
    localStorage.setItem("enteredTasks", JSON.stringify([...this.todos]))
  }

  onDeleteTodo(taskId:string){
   const filteredTodo = this.todos.filter(todo=>todo.id !== taskId)
   localStorage.setItem("enteredTasks", JSON.stringify(filteredTodo))
   this.todos = filteredTodo
   this.tasks = 'You have '+ `${this.todos.length}` +' tasks'
  }

  onClearTodos(){
    this.todos = [];
    localStorage.removeItem("enteredTasks")
  }


}
