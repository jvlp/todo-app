import CreateTask from "./Pages/CreateTask";
import EditTask from "./Pages/EditTask";
import TodoItem from "./Components/TodoItem";
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
      <TodoItem props={mockTask} />
    </div>
  );
}

export default App;
