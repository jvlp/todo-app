import { useState } from "react";

import TodoItemTop from "./TodoItemTop";
import TodoItemBottom from "./TodoItemBottom";

function TodoItem({ task, handleDelete }) {
  const { id, finished, name, priority, description } = task;
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="mt-2 flex w-full flex-col items-center">
      <TodoItemTop
        status={finished}
        name={name}
        isExpanded={isExpanded}
        priority={priority}
        setIsExpanded={setIsExpanded}
      />
      {isExpanded && (
        <TodoItemBottom
          handleDelete={handleDelete}
          desc={description}
          id={id}
        />
      )}
    </div>
  );
}

export default TodoItem;
