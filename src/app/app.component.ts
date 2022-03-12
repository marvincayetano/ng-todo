import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  todoArray: string[] = [];
  title = 'ng-todo';

  addTodo(value: string) {
    this.todoArray.push(value);
    console.log(this.todoArray);
  }
}
