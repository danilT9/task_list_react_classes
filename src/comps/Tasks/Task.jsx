import { styled } from "styled-components";
import { Component } from "react";

const TaskLi = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 250px;
  border-radius: 10px;
  gap: 10px;
`;

const TaskText = styled.p`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 1px solid black;
  margin: 0;
  padding: 10px;
  width: 150px;
`;

const TaskDel = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 1px solid black;
  margin: 0;
  padding: 10px;
  width: 30px;
  height: 30px;
  transition: all 0.5s ease;
  &:hover {
    background-color: rgba(255, 0, 0, 0.5);
    color: white;
  }
  &:active {
    background-color: rgba(255, 0, 0, 0.8);
  }
`;

export class Task extends Component {
  render() {
    return (
      <TaskLi>
        <TaskText>{this.props.text}</TaskText>
        <TaskDel onClick={this.props.onDelete}>X</TaskDel>
      </TaskLi>
    );
  }
}
