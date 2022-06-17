const data = JSON.parse(sessionStorage.getItem('product'))
const initState = data ? data : {
    list: []
}

const Dish = (state = initState, action) => {
    switch (action.type) {
        case 'add_dish': {
            let bool = true
            const newDish = [...state.list]
            newDish.forEach((item) => {
                if (item.name === action.payload.name) {
                    item.amount = item.amount + action.payload.amount
                    bool = false
                }
            })
            if (bool) newDish.push(action.payload)
            sessionStorage.removeItem('product')
            sessionStorage.setItem('product', JSON.stringify({
                ...state,
                list: newDish,
            }))
            return {
                ...state,
                list: newDish,
            }
        }
        case 'delete_dish': {
            const nowDish = [...state.list]
            let results = nowDish.filter(function (value) {
                if (value.name !== action.payload.name) {
                    return value
                }
            })
            sessionStorage.removeItem('product')
            sessionStorage.setItem('product', JSON.stringify({
                ...state,
                list: results,
            }))
            return {
                ...state,
                list: results,
            }

        }
        default:
            return state

    }
}

export default Dish