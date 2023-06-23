import { MdCheckCircle, MdRadioButtonUnchecked } from "react-icons/md";
import PriorityIcon from "./PriorityIcon";

function TodoItemTop({ status, name, isExpanded, priority }) {
  return (
    <div
      className={
        "flex h-12 w-2/3 items-center rounded-t-lg bg-slate-500 px-2" +
        `${isExpanded ? "" : " rounded-b-lg"}`
      }
    >
      <div
        className={
          "p-3 text-3xl font-bold" +
          `${status ? " text-green-500" : " text-slate-200"}`
        }
      >
        {status ? <MdCheckCircle /> : <MdRadioButtonUnchecked />}
      </div>

      <div className="text-xl text-slate-300">{name}</div>

      <PriorityIcon priority={priority} />
    </div>
  );
}

export default TodoItemTop;
