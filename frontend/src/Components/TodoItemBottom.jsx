import { MdCheck, MdEdit, MdDelete } from "react-icons/md";

function TodoItemBottom({ desc, id, handleDelete }) {
  return (
    <div className="flex h-fit min-h-[50px] w-full flex-col items-center rounded-b-lg bg-slate-400 sm:flex-row">
      <div className="my-2  w-[80%] px-6 text-xl">{desc}</div>
      <div className="flex pb-3 pr-4 pt-2">
        <button className="ml-auto rounded-lg bg-teal-500 p-3 text-xl font-bold text-slate-200">
          <MdCheck />
        </button>
        <button className="mx-4 rounded-lg bg-sky-500 p-3 text-xl font-bold text-slate-200">
          <MdEdit />
        </button>
        <button
          onClick={() => handleDelete(id)}
          className="rounded-lg bg-red-600 p-3 text-xl font-bold text-slate-200"
        >
          <MdDelete />
        </button>
      </div>
    </div>
  );
}

export default TodoItemBottom;
