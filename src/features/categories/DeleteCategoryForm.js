import {useSelector} from "react-redux";

export default function DeleteCategoryForm({id}) {
    console.log("id,", id);
    const categories = useSelector(state => state.categories);
    const currentCategory = categories.find(category => {
        console.log(category.name, ", ", id)
        return category.id == id
    });
    console.log(currentCategory)
    return (
        <p className={"delete-form"}>Вы уверены что хотите удалить задачу "{currentCategory.name}"</p>
    )
}