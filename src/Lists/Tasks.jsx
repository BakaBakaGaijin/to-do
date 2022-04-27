/* VENDOR */
import { useSelector, useDispatch } from "react-redux";

/* APPLICATION */
import { ListItem } from "./ListItem";
import { selectAllTasks } from "../features/tasksSlice";

export const Tasks = ({ setActive }) => {
  const tasks = useSelector(selectAllTasks);

  return (
    <ul>
      {tasks.map((task) => (
        <ListItem setActive={setActive} key={task.id} item={task} />
      ))}
    </ul>
  );
};

// можно попробовать вынести svg в отдельный файл в виде кода
