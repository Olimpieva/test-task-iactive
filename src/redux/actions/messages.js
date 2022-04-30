import api from "../../utils/Api";
import handleError from "./errorHandler";
import {
    GET_MESSAGES,
    REQUEST,
    SUCCESS,
} from "./actionTypes";
import { createFormData } from "../../utils/constants";

export const getMessages = () => async (dispatch, getState) => {

    const { messages: { loading } } = getState();

    if (loading) {
        return;
    };

    dispatch({ type: GET_MESSAGES + REQUEST });

    const requestData = createFormData({ actionName: 'MessagesLoad', messageId: 0 })

    try {
        const messages = await api.getMessages(requestData);

        dispatch({ type: GET_MESSAGES + SUCCESS, payload: messages });
    } catch (error) {
        dispatch(handleError({ errorCode: 500, action: GET_MESSAGES }));
    };
};
