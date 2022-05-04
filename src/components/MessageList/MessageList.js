import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import messagesActions from '../../redux/actions';
import { currentMessagesSelector } from '../../redux/selectors';
import Message from '../Message/Message';

import './MessageList.css';

function MessageList() {

    const dispatch = useDispatch();
    const { entities, settings: order } = useSelector(currentMessagesSelector);

    useEffect(() => {
        dispatch(messagesActions.sortMessages());
    }, [dispatch, order, entities])

    const onChangeHandler = (event) => {
        dispatch(messagesActions.setMessageListOrder(event.target.value))
    }

    if (entities.length === 0) {
        return <div>Loading</div>
    }

    return (
        <div className="message-list">

            <select className="message-list__sort" defaultValue={'asc'} name="sort" onChange={onChangeHandler} >
                <option value={'asc'}>От старого к новому</option>
                <option value={'desc'}>От нового к старому</option>
            </select>

            <ul className="message-list__list">
                {entities.map((item, index) => (
                    <li className="message-list__item" key={`${item.id}_${index}`} >
                        <Message item={item} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default MessageList;