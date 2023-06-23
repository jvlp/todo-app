import CreateMember from "./Pages/CreateMember";
import CreateTask from "./Pages/CreateTask";
import EditTask from "./Pages/EditTask";
import TodoItem from "./Components/TodoItem";
import TodoList from "./Pages/TodoList";
const mockTask = {
  id: 7,
  name: "test",
  status: true,
  desc: "desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc",
  prio: 1,
};

function App() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-neutral-700">
      {/* <CreateTask /> */}
      {/* <EditTask props={mockTask} /> */}
      {/* <TodoItem props={mockTask} /> */}
      {/* <TodoList /> */}
      <CreateMember />
    </div>
  );
}

export default App;
