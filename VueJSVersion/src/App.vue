<template>
  <div id="app">
    <div id="todo-container">
      <div class="input-container">
        <input id="new-todo-name" v-model="newItem" v-on:keyup.enter='addItem' type="text">
        <button id="add-todo" :disabled="!newItem" @click.prevent="addItem">Add</button>
      </div>
      <h1>What do you have to do today?</h1>
      <div id="to-do-list">
        <div v-for="item in todos" :key="item.name" class="to-do" :id="item.name">
          <label class="custom-checkbox">
            <input type="checkbox" :value="item.name">
            <span :data-name="item.name" class="checkbox" @click="removeItem"></span>
            {{item.name}}
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    // Establish all the base data
    return {
      newItem: "",
      todos: []
    };
  },
  methods: {
    addItem: function() {
      // Make sure its a valid value
      if (this.newItem !== "") {
        // Create the new array item
        const newList = { name: this.newItem };
        // Push the new value to the broader list
        this.todos.push(newList);
        // Reset textbox
        this.newItem = "";
      }
    },
    removeItem: function(event) {
      const name = event.srcElement.dataset.name;

      for (let i = 0; i < this.todos.length; i++) {
        // Find the array item and delete it based on the checked item
        if (this.todos[i].name === name) {
          // Timeout serves to provide a more basic fadeout
          setTimeout(() => {
            this.todos.splice(i, 1);
          }, 300);
          break;
        }
      }
    }
  }
};
</script>

<style lang="scss">
#todo-container {
  margin: auto;
  margin-top: 10rem;
  padding-top: 1rem;
  padding-left: 5px;
  padding-right: 5px;
  max-width: 400px;
  min-height: 300px;
  border: #cccccc solid 1px;
  border-radius: 10px;
  background-color: #f4f4f4;
  text-align: center;

  input {
    width: 300px;
    padding: 10px 5px;
    display: inline-block;
    border-width: 1px;
    border-style: solid;
    border-color: #ccc;
    margin-right: 5px;
    font-size: 18px;
  }

  button {
    background-color: #28b472;
    border: solid 1px #333;
    font-size: 16px;
    color: #fff;
    margin-right: 5px;
    padding: 11px;
    border-radius: 0px;

    &:disabled {
      color: #a9a9a9;
      background-color: #ccc;
      border: #a9a9a9 solid 1px;
    }
  }

  .to-do {
    border-top: 1px solid #a9a9a9;
    padding-top: 15px;
    padding-bottom: 0px;

    &:last-of-type {
      border-bottom: 1px solid #a9a9a9;
      margin-bottom: 10px;
    }
  }

  .custom-checkbox {
    cursor: pointer;
    display: block;
    font-size: 20px;
    line-height: 32px;
    margin: 0 0 20px;
    padding: 0 0 0 40px;
    position: relative;

    input[type="checkbox"] {
      display: none;
    }

    span.checkbox {
      background-color: #fff;
      border: solid 2px #cccccc;
      border-radius: 2px;
      cursor: pointer;
      display: block;
      height: 30px;
      margin: 0px;
      position: absolute;
      left: 0;
      top: 0px;
      width: 30px;
    }

    input[type="checkbox"]:checked + span.checkbox {
      background: #fff;
      border-color: #ccc;
      text-align: center;
    }

    input[type="checkbox"]:checked + span.checkbox:before {
      content: "\f00c";
      color: #e67e21;
      font: normal normal normal 20px/1 FontAwesome;
      position: relative;
      top: 0px;
    }
  }

  h1 {
    font-style: italic;
    font-size: 20px;
    font-weight: 100;
  }

  #to-do-list {
    text-align: left;
    padding-left: 10px;
    padding-right: 10px;
  }
}
</style>
