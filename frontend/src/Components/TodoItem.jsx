import { useState } from "react";

import TodoItemTop from "./TodoItemTop";
import TodoItemBottom from "./TodoItemBottom";

function TodoItem({ task, handleDeleteTask, handleFinishTask }) {
  const { id, finished, finish_date, name, priority, description, member_id } =
    task;
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="mt-2 flex w-full flex-col items-center">
      <TodoItemTop
        status={finished}
        name={name}
        finish_date={finish_date}
        priority={priority}
        isExpanded={isExpanded}
        setIsExpanded={setIsExpanded}
      />
      {isExpanded && (
        <TodoItemBottom
          handleDeleteTask={handleDeleteTask}
          handleFinishTask={handleFinishTask}
          member_id={member_id}
          desc={description}
          id={id}
        />
      )}
    </div>
  );
}

export default TodoItem;
