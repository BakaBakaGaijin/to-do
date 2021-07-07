import {useSelector} from "react-redux";

export default function DeleteCategoryForm({id}) {
    const categories = useSelector(state => state.categories);
    if (!id) { return null}

    const currentCategory = categories.find(category => {
        return category.id == id
    });

    return (
        <p className={"delete-form"}>Вы уверены что хотите удалить задачу "{currentCategory.name}"</p>
    )
}