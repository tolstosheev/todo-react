import Todo from "./components/Todo";
import {TasksContext, TasksProvider} from "./context/TasksContext";

const App = () => {
  return (
      <TasksProvider>
          <Todo/>
      </TasksProvider>
  )
}

export default App
