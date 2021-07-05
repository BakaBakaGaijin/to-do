import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";

import {ReactComponent as Edit} from "../../img/edit.svg";
import {ReactComponent as Del} from "../../img/delete.svg";
import {modalTypeChanged} from "../modal/modalTypeSlice";

export default function CategoriesBtns(props) {
    const modalHandler = props.handler;
    const id = props.id;
    const setCurrentId2 = props.setCurrentId2;
    const dispatch = useDispatch();

    const history = useHistory();

    return (
        <div className="tools">
            <Edit
                className="edit"
                onClick={() => {
                    dispatch(
                        modalTypeChanged("editCategory")
                    )
                    setCurrentId2(id);
                    modalHandler(true);
                    history.push(`/categories/edit${id}`)
                }}
            />
            <Del
                className="delete"
                onClick={() => {
                    dispatch(
                        modalTypeChanged("deleteCategory")
                    )
                    setCurrentId2(id);
                    modalHandler(true);
                    history.push(`/categories/delete${id}`)
                }}
            />
        </div>
    );
}