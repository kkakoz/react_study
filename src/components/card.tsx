import React from "react";


interface Task {
  name:string
}

function Card(task:string ) {
  return <li key={null} className="kanban-card">
    <div className="card-title">任务{task}</div>
    <div className="card-status">2022-03-04</div>
  </li>;
}

export function KanbanNewCard() {
  return (
    <li className="kanban-card">
      <h3>添加新卡片</h3>
      <div className="card-title">
        <input type="text"/>
      </div>
    </li>
  );
}

export default Card;