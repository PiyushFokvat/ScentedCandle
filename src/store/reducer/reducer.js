const initialState = {
    wax: {
        parafeenWax: false,
        soyWax: false,
        beesWax: false,
        granulatedWax: false,
        gelCandleWax: false
    },
    perfume: {
        fresh: false,
        woody: false,
        floral: false,
        exotic: false
    },
    thread: {
        polyester: false,
        cotton: false
    },
    flask: {
        glass: false,
        metal: false,
        plastic: false
    },
    totalPrice: 20
}

const itemPrise = {
    parafeenWax: 20,
    soyWax: 40,
    beesWax: 70,
    granulatedWax: 100,
    gelCandleWax: 60,
    fresh: 50,
    woody: 80,
    floral: 150,
    exotic: 90,
    polyester: 10,
    cotton: 30,
    glass: 70,
    metal: 90,
    plastic: 20
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SELECT_WAX':
            return {
                ...state,
                wax: {
                    ...state.wax,
                    [action.waxType]: true
                },
                totalPrice: state.totalPrice + itemPrise[action.waxType]
            }
        case 'SELECT_PERFUME':
            return {
                ...state,
                perfume: {
                    ...state.perfume,
                    [action.waxType]: true
                },
                totalPrice: state.totalPrice + itemPrise[action.waxType]
            }
        case 'SELECT_THREAD':
            return {
                ...state,
                thread: {
                    ...state.thread,
                    [action.waxType]: true
                },
                totalPrice: state.totalPrice + itemPrise[action.waxType]
            }
        case 'SELECT_FLASK':
            return {
                ...state,
                flask: {
                    ...state.flask,
                    [action.waxType]: true
                },
                totalPrice: state.totalPrice + itemPrise[action.waxType]
            }
        case 'UNSELECT_WAX':
            return {
                ...state,
                wax: {
                    ...state.wax,
                    [action.waxType]: false
                },
                totalPrice: state.totalPrice - itemPrise[action.waxType]
            }

        case 'UNSELECT_PERFUME':
            return {
                ...state,
                perfume: {
                    ...state.perfume,
                    [action.waxType]: false
                },
                totalPrice: state.totalPrice - itemPrise[action.waxType]

            }
        case 'UNSELECT_THREAD':
            return {
                ...state,
                thread: {
                    ...state.thread,
                    [action.waxType]: false
                },
                totalPrice: state.totalPrice - itemPrise[action.waxType]
            }
        case 'UNSELECT_FLASK':
            return {
                ...state,
                flask: {
                    ...state.flask,
                    [action.waxType]: false
                },
                totalPrice: state.totalPrice - itemPrise[action.waxType]
            }
        default:
            return state

    }
}

export default reducer;