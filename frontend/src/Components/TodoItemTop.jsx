import { MdCheckCircle, MdRadioButtonUnchecked } from "react-icons/md";
import PriorityIcon from "./PriorityIcon";

function TodoItemTop({ status, name, isExpanded, priority, setIsExpanded }) {
  return (
    <div
      onClick={(_) => {
        setIsExpanded((current) => !current);
      }}
      className={
        "mx-10 flex min-h-fit w-full items-center rounded-t-lg bg-slate-500 hover:cursor-pointer " +
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
      <div className="overflow-hidden text-ellipsis text-xl text-slate-300">
        {name}
      </div>
      <div className="ml-auto flex pl-2">
        <PriorityIcon priority={priority} />
      </div>
    </div>
  );
}

export default TodoItemTop;
