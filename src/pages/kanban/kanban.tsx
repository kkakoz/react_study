import logo from "../../logo.svg";
import Card, {KanbanNewCard} from "../../components/card";
import React from "react";
import style from "./kanban.module.css";
import style2 from "./kanban2.module.css";


export default function Kanban() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>我的看板</h1>
      </header>
      <main className={style.kanbanBoard}>
        <section className="kanban-column column-ongoing">
          <h2>进行中<button>&#8853;添加新卡片</button></h2>
          <ul>
            {KanbanNewCard()}
          </ul>
        </section>
        <section className="kanban-column column-todo">
          <h2>待处理</h2>
          <ul>
            {
              new Array(10).fill("1").map((item) => Card("任务" + item))
            }
          </ul>
        </section>
        <section className="kanban-column column-done">
          <h2>已完成</h2>
        </section>
      </main>
    </div>
  );
}

interface controlButtonI  {
  onActive:boolean
}

const controlButton = ({onActive}:controlButtonI) => {
  if (onActive) {
    console.log("active");
  }
  return null;
};