import { useState } from "react";

import TodoItemTop from "./TodoItemTop";
import TodoItemBottom from "./TodoItemBottom";

function TodoItem(props) {
  const { id, finished, name, priority, description } = props.props;
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className="mt-2 flex w-full flex-col items-center"
      onClick={(_) => {
        setIsExpanded((current) => !current);
      }}
    >
      <TodoItemTop
        status={finished}
        name={name}
        isExpanded={isExpanded}
        priority={priority}
      />
      {isExpanded && <TodoItemBottom desc={description} />}
    </div>
  );
}

export default TodoItem;
