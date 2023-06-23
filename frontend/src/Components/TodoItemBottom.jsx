import { MdCheck, MdEdit, MdDelete } from "react-icons/md";

function TodoItemBottom({ desc }) {
  return (
    <div className="flex h-fit min-h-[50px] w-2/3 items-center rounded-b-lg bg-slate-300">
      <div className="mt-2 flex w-full justify-end px-4 pb-3 pt-2">
        <div className="px-2/3 w-[80%]">{desc}</div>
        <button className="ml-auto rounded-lg bg-teal-500 p-3 text-xl font-bold text-slate-200">
          <MdCheck />
        </button>
        <button className="mx-4 rounded-lg bg-sky-500 p-3 text-xl font-bold text-slate-200">
          <MdEdit />
        </button>
        <button className="rounded-lg bg-red-600 p-3 text-xl font-bold text-slate-200">
          <MdDelete />
        </button>
      </div>
    </div>
  );
}

export default TodoItemBottom;
