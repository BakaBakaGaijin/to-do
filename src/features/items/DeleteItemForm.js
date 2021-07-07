import {useSelector} from "react-redux";

export default function DeleteItemForm({id}) {
    const items = useSelector(state => state.items);
    if (!id) { return null};

    const currentItem = items.find(item => {
        return item.id == id
    });

    return (
        <p className={"delete-form"}>Вы уверены что хотите удалить задачу "{currentItem.name}"</p>
    )
}