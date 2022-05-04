import api from "../../utils/Api";
import handleError from "./errorHandler";
import {
    GET_MESSAGES,
    REQUEST,
    SET_LIST_ORDER,
    SET_LOADING_END,
    SORT_MESSAGES,
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

export const sortMessages = () => (dispatch, getState) => {
    const { messages: { entities: messages, settings: { order } } } = getState();
    let updatedMessages;

    if (order === 'asc') {
        updatedMessages = messages.sort((prev, next) => prev.id < next.id ? -1 : 1)
    }

    if (order === 'desc') {
        updatedMessages = messages.sort((prev, next) => prev.id > next.id ? -1 : 1)
    }

    dispatch({ type: SORT_MESSAGES, payload: updatedMessages });
}

export const setMessageListOrder = (newOrder) => ({ type: SET_LIST_ORDER, payload: newOrder });