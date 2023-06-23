import { useState } from "react";

import TodoItemTop from "./TodoItemTop";
import TodoItemBottom from "./TodoItemBottom";

function TodoItem(props) {
  const { status, name, priority, desc } = props.props;
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className="mt-2 flex w-[99vw] flex-col items-center"
      onClick={(_) => {
        setIsExpanded((current) => !current);
      }}
    >
      <TodoItemTop
        status={status}
        name={name}
        isExpanded={isExpanded}
        priority={priority}
      />
      {isExpanded && <TodoItemBottom desc={desc} />}
    </div>
  );
}

export default TodoItem;
