import {useSelector} from "react-redux";

export default function DeleteItemForm({id}) {
    console.log("id,", id);
    const items = useSelector(state => state.items);
    const currentItem = items.find(item => {
        console.log(item.name, ", ", id)
        return item.id == id
    });
    console.log(currentItem)
    return (
        <p className={"delete-form"}>Вы уверены что хотите удалить задачу "{currentItem.name}"</p>
    )
}