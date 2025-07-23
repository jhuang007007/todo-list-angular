import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
    <main>
      <h1>To Do List</h1>
      <router-outlet/>
    </main>
  `,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('todo-list-angular');
}
