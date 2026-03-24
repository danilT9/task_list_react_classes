import { Task } from "./Task.jsx";
import { styled, createGlobalStyle } from "styled-components";
import { Component } from "react";

export const GlobalStyles = createGlobalStyle`
  body {
    user-select: none;
  }
`;

const TaskUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
  justify-content: center;
  align-items: center;
  list-style: none;
`;

export class TaskList extends Component {
  state = {
    tasks: [
      {
        id: "1",
        text: "Прибратися",
      },
      {
        id: "2",
        text: "Помити посуд",
      },
      {
        id: "3",
        text: "Зробити ДЗ",
      },
    ]
  };
  
  delTask = (id) => {
    this.setState((s) => ({
      tasks: s.tasks.filter(t => t.id !== id)
    }));
  }

  render() {
    return (
      <section>
        <div>
          <TaskUl>
            {this.state.tasks.map((t) => (
              <Task key={t.id} {...t} onDelete={() => this.delTask(t.id)}></Task>
            ))}
          </TaskUl>
        </div>
      </section>
    );
  }
}
