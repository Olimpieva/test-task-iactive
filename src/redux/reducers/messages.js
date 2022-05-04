import { REQUEST, SUCCESS, FAILURE, GET_MESSAGES, SET_LOADING_END, SORT_MESSAGES, SET_LIST_ORDER } from "../actions/actionTypes";

const initialState = {
    entities: [],
    lastMessageId: 0,
    settings: {
        order: 'asc',
    },
    loading: false,
    error: null,
};

const Tasks = (state = initialState, action) => {

    switch (action.type) {
        case GET_MESSAGES + REQUEST:
            return { ...state, loading: true, error: null };
        case GET_MESSAGES + SUCCESS:
            return { ...state, ...action.payload, loading: false, error: null }
        case GET_MESSAGES + FAILURE:
            return { ...state, loading: false, error: action.payload };
        case SET_LOADING_END:
            return { ...state, loading: false }
        case SET_LIST_ORDER:
            return { ...state, settings: { ...state.settings, order: action.payload } }
        case SORT_MESSAGES:
            return { ...state, entities: action.payload }
        default:
            return state;
    };
};

export default Tasks;