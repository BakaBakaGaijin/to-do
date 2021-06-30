import {useDispatch} from "react-redux";

import {ReactComponent as Edit} from "../../img/edit.svg";
import {ReactComponent as Del} from "../../img/delete.svg";
import {modalTypeChanged} from "../modal/modalTypeSlice";

export default function ItemsBtns(props) {
    const modalHandler = props.handler;
    const id = props.id;
    const setCurrentId = props.setCurrentId;
    const dispatch = useDispatch();

    return (
        <div className="tools">
            <Edit
                className="edit"
                onClick={(e) => {
                    dispatch(
                        modalTypeChanged("editItem")
                    )
                    console.log("click on edit");
                    console.log("здесь id, ", id);
                    setCurrentId(id);
                    modalHandler(true, id);
                }}
            >

            </Edit>
            <Del
                className="delete"
                onClick={() => {
                    dispatch(
                        modalTypeChanged("deleteItem")
                    )
                    modalHandler(true);
                }}
            >

            </Del>
        </div>
    );
}