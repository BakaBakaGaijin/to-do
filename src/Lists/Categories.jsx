/* VENDOR */
import { useSelector } from "react-redux";

/* APPLICATION */
import { ListItem } from "./ListItem";
import { selectAllCategories } from "../features/categoriesSlice";

export const Categories = ({ setActive }) => {
  const categories = useSelector(selectAllCategories);

  return (
    <ul>
      {categories.map((category) => (
        <ListItem setActive={setActive} key={category.id} item={category} />
      ))}
    </ul>
  );
};
