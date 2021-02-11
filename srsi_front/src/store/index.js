import { createStore, compose } from 'redux'


const initialState = {
    menuOn: false,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'MENU_TOGGLE':
            console.log(state)
            return {
                ...state,
                menuOn: !(state.menuOn)
            }
        case 'MENU_TURN_ON':
            return {
                ...state,
                menuOn: true
            }
        case 'MENU_TURN_OFF':
            return {
                ...state,
                menuOn: false
            }
        default:
            return state;
    }
}

const store = createStore(reducer);

export default store;
