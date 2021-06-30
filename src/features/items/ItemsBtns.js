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
                    setCurrentId(id);
                    modalHandler(true);
                }}
            />
            <Del
                className="delete"
                onClick={() => {
                    dispatch(
                        modalTypeChanged("deleteItem")
                    )
                    setCurrentId(id);
                    modalHandler(true);
                }}
            />
        </div>
    );
}