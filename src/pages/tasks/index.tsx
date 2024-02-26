/* VENDOR */
import { useSelector } from "react-redux";

/* APPLICATION */
import { selectAllTasks } from "../../features/tasksSlice";
import List from "../../widgets/list";

const Tasks = () => {
  const tasks = useSelector(selectAllTasks);

  return <List items={tasks} />;
};

export default Tasks;
