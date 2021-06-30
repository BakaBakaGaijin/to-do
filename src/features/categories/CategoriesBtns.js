import { useDispatch } from "react-redux";

import {ReactComponent as Edit} from "../../img/edit.svg";
import {ReactComponent as Del} from "../../img/delete.svg";
import {modalTypeChanged} from "../modal/modalTypeSlice";

export default function CategoriesBtns(props) {
    const modalHandler = props.handler;

    const dispatch = useDispatch();

    return (
        <div className="tools">
                <Edit
                    className="edit"
                    onClick={() => {
                        dispatch(
                                modalTypeChanged("editCategory")
                        )
                        modalHandler(true);
                    }}
                >

                </Edit>
                <Del
                    className="delete"
                    onClick={() => {
                        dispatch(
                                modalTypeChanged("deleteCategory")
                            )
                        modalHandler(true);
                    }}
                >

                </Del>
            </div>
    );
}