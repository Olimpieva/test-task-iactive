import React, { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import messagesActions from '../../redux/actions';
import { currentMessagesSelector } from '../../redux/selectors';
import { availableSortOrder } from '../../utils/constants';
import Message from '../Message/Message';
import SortPanel from '../SortPanel/SortPanel';

import './MessageList.css';

function MessageList() {

    const dispatch = useDispatch();
    const { entities, settings: { order }, error } = useSelector(currentMessagesSelector);
    const favoritesMessages = JSON.parse(localStorage.getItem('favorites')) || [];
    const [likedMessages, setLikedMessages] = useState(favoritesMessages);

    const currentMessages = useMemo(() => {

        if (order === availableSortOrder.desc) {
            return [...entities].reverse();
        } else {
            return entities;
        }

    }, [entities, order]);

    const ChangeOrderHandler = event => dispatch(messagesActions.setMessageListOrder(event.target.value));

    const toggleLike = itemId => {
        let updatedLikedMessages;

        if (likedMessages.includes(itemId)) {
            updatedLikedMessages = likedMessages.filter((favorite) => favorite !== itemId);
        } else {
            updatedLikedMessages = [...likedMessages, itemId];
        }

        localStorage.setItem("favorites", JSON.stringify(updatedLikedMessages));
        setLikedMessages(updatedLikedMessages);
    };

    const renderMessageList = () => {
        return currentMessages.map((item, index) => (
            <li className="message-list__item" key={`${item.id}_${index}`} >
                <Message
                    item={item}
                    isLiked={likedMessages.includes(item.id)}
                    likeMessageHandler={toggleLike}
                />
            </li>
        ))
    };

    if (currentMessages.length === 0 && !error) {
        return <div>Loading</div>
    }

    return (
        <div className="message-list">
            <div className="message-list__sort">
                <SortPanel name="message" onSort={ChangeOrderHandler} />
            </div>

            {error && <span>{error}</span>}

            <ul className="message-list__list list">
                {renderMessageList()}
            </ul>
        </div>
    );
};

export default MessageList;