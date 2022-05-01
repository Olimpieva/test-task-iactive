import React from 'react';
import { useSelector } from 'react-redux';

import { currentMessagesSelector } from '../../redux/selectors';
import Message from '../Message/Message';

import './MessageList.css';

function MessageList() {

    const { entities } = useSelector(currentMessagesSelector);

    if (entities.length === 0) {
        return <div>Loading</div>
    }

    return (
        <div className="message-list">
            <ul className="message-list__list">
                {entities.map(item => {
                    return (
                        <li className="message-list__item" key={item.id + item.author + item.content} >
                            <Message item={item} />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default MessageList;