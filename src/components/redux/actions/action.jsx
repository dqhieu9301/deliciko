
export const add_product = (product) => {
    return {
        type: "add_dish",
        payload: product,
    }
}

export const delete_product = (product) => {
    return {
        type: "delete_dish",
        payload: product,
    }
}

