const onSaveItemClicked = () => {
        if (name && description && categoryId) {
            console.log("click");
            dispatch(
                itemAdded({
                    id: nanoid(),
                    name,
                    description,
                    categoryId
                })
            )

            setName("");
            setCategoryId("");
            setDescription("");
        }
    }