import React, { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import messagesActions from '../../redux/actions';
import { currentMessagesSelector } from '../../redux/selectors';
import { availableSortOrder } from '../../utils/constants';
import Message from '../Message/Message';

import './MessageList.css';

function MessageList() {

    const dispatch = useDispatch();
    const { entities, settings: { order } } = useSelector(currentMessagesSelector);
    const favoritesMessages = JSON.parse(localStorage.getItem('favorites')) || [];
    const [likedMessages, setLikedMessages] = useState(favoritesMessages)

    const currentMessages = useMemo(() => {

        if (order === availableSortOrder.desc) {
            return [...entities].reverse();
        } else {
            return entities;
        }

    }, [entities, order])

    const onSortChangeHandler = event => dispatch(messagesActions.setMessageListOrder(event.target.value));

    const toggleLike = (itemId) => {
        let updatedLikedMessages;

        if (likedMessages.includes(itemId)) {
            updatedLikedMessages = likedMessages.filter((favorite) => favorite !== itemId);
        } else {
            updatedLikedMessages = [...likedMessages, itemId];
        }

        localStorage.setItem("favorites", JSON.stringify(updatedLikedMessages));
        setLikedMessages(updatedLikedMessages);
    };

    if (currentMessages.length === 0) {
        return <div>Loading</div>
    }

    return (
        <div className="message-list">

            <select className="message-list__sort" defaultValue={availableSortOrder.asc} name="sort" onChange={onSortChangeHandler} >
                <option value={availableSortOrder.asc}>От старого к новому</option>
                <option value={availableSortOrder.desc}>От нового к старому</option>
            </select>

            <ul className="message-list__list">
                {currentMessages.map((item, index) => (
                    <li className="message-list__item" key={`${item.id}_${index}`} >
                        <Message item={item} isLiked={likedMessages.includes(item.id)} likeMessageHandler={toggleLike} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MessageList;