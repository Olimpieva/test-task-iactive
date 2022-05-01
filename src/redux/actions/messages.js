import api from "../../utils/Api";
import handleError from "./errorHandler";
import {
    GET_MESSAGES,
    REQUEST,
    SET_LOADING_END,
    SUCCESS,
} from "./actionTypes";
import { createFormData } from "../../utils/constants";

export const getMessages = () => async (dispatch, getState) => {
    const { messages: { entities: oldMessages, lastMessageId, loading } } = getState();

    if (loading) {
        return;
    }

    dispatch({ type: GET_MESSAGES + REQUEST });

    const requestData = createFormData({ actionName: 'MessagesLoad', messageId: lastMessageId })

    try {
        const response = await api.getMessages(requestData);

        if (response === 'no message') {
            return dispatch({ type: GET_MESSAGES + SUCCESS });
        }

        const newMessages = response.Messages;
        const numberOfNewMessages = newMessages.length;
        const lastId = newMessages[numberOfNewMessages - 1].id;
        const messages = [...oldMessages.slice(numberOfNewMessages), ...newMessages];

        dispatch({ type: GET_MESSAGES + SUCCESS, payload: { entities: messages, lastMessageId: lastId } });
    } catch (error) {
        console.log(error)
    }
}
