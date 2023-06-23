import CreateTask from "./Pages/CreateTask";
import EditTask from "./Pages/EditTask";
const mockTask = {
  id: 7,
  name: "test",
  desc: "desc desc desc",
  prio: 1,
};

function App() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-neutral-700">
      {/* <CreateTask /> */}
      <EditTask props={mockTask} />
    </div>
  );
}

export default App;
