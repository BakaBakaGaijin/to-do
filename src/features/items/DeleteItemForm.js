import { useSelector } from "react-redux";

export default function DeleteItemForm({id}) {
    const items = useSelector(state => state.items);
    const currentItem =  items.find(item => item.name == id);
    return (
        <p className={"delete-form"}>Вы уверены что хотите удалить задачу "{currentItem}"</p>
    )
}