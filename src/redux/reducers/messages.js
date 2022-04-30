import { REQUEST, SUCCESS, FAILURE, GET_MESSAGES } from "../actions/actionTypes";

const initialState = {
    entities: null,
    loading: false,
    error: null,
};

const Tasks = (state = initialState, action) => {

    switch (action.type) {
        case GET_MESSAGES + REQUEST:
            return { ...state, loading: true, error: null };
        case GET_MESSAGES + SUCCESS:
            return { ...state, entities: action.payload, loading: false, error: null };
        case GET_MESSAGES + FAILURE:
            return { ...state, entities: null, totalEntitiesCount: 0, loading: false, error: action.payload };
        default:
            return state;
    };
};

export default Tasks;