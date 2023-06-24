import { MdCheckCircle, MdRadioButtonUnchecked } from "react-icons/md";
import PriorityIcon from "./PriorityIcon";

function TodoItemTop({
  status,
  name,
  finish_date,
  priority,
  isExpanded,
  setIsExpanded,
}) {
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
      {status && (
        <div className="ml-auto hidden text-xl text-slate-300 sm:block">
          {new Date(finish_date).toLocaleString("pt-br")}
        </div>
      )}
      {status && (
        <div className="ml-auto block text-xl text-slate-300 sm:hidden">
          {new Date(finish_date).toLocaleDateString("pt-br")}
        </div>
      )}
      <div className="ml-auto flex pl-2">
        <PriorityIcon priority={priority} />
      </div>
    </div>
  );
}

export default TodoItemTop;
