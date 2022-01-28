import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NewTodoComponent } from './new-todo/new-todo.component';
import { TodoOutputComponent } from './todo-output/todo-output.component';

@NgModule({
  declarations: [
    AppComponent,
    NewTodoComponent,
    TodoOutputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
