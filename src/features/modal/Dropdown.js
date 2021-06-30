import React, {useState} from "react";
import {useSelector} from "react-redux";

export default function DropDown({selected, setSelected}) {
    const categories = useSelector(state => state.categories);
    console.log(categories);

    const [isActive, setIsActive] = useState(false);
    return (
        <div className={"dropdown item-form"}>
            <div
                className={selected ? "dropdown-btn dropdown-active" : "dropdown-btn"}
                onClick={(e) => setIsActive(!isActive)}
            >
                {selected || "Выберите категорию"}
                <div className={"triangle dropdown-icon"}></div>
            </div>
            {isActive &&
            <div className={"dropdown-content"}>
                {categories.map(category => (
                    <div
                        onClick={ (e) => {
                            setSelected(category.name)
                            setIsActive(false);
                        }
                        }
                        className="dropdown-item">
                        {category.name}
                    </div>
                ))}
            </div>}
        </div>
    );
}
