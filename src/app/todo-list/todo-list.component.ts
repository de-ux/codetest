import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todoList: Array<{id: number, title: string}>;
  todoInput: string;

  constructor() { }

  ngOnInit() {

    this.todoInput = '';
    this.todoList = [];

  }

  /* Input value should be added to list when 'return' key is pressed (keyup.enter)="createNewTodo()" */
  createNewTodo(){
    if(this.todoInput !== ''){ // make sure you don't add an empty todo to the list
      
      let num = 1
      if(this.todoList.length > 0) {
        //Create a unquie ID regardless of the array index position
        num = Math.max.apply(Math, this.todoList.map(function(o){return o.id;})) + 1; // we all need a little help from our friends.. (https://stackoverflow.com/questions/4020796/finding-the-max-value-of-an-attribute-in-an-array-of-objects)
      }
      this.todoList.push({
        id: num, 
        title: this.todoInput
      })
    }
    this.todoInput = '';
    
  }

  deleteTodo(event){
    const deleteId = event.target.id;
    this.todoList.splice(deleteId, 1); 
  }


  /* 'Add' button should highlight on input keypress (todo-step2.png)  Is this what you wanted?*/
  onKeyDown(event: any) {
    const button = document.getElementById('btn-submit');
    button.classList.add('hoverEffect');
  }

  onKeyUp(event: any) {
    const button = document.getElementById('btn-submit');
    button.classList.remove('hoverEffect');
  }
  
}
