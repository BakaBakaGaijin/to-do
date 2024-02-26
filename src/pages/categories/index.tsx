/* VENDOR */
import { useSelector } from "react-redux";

/* APPLICATION */
import { selectAllCategories } from "../../features/categoriesSlice";
import List from "../../widgets/list";

const Categories = () => {
  const categories = useSelector(selectAllCategories);

  return <List items={categories} />;
};

export default Categories;
