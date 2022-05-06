import React from 'react';

import Content from '../Content/Content';
import ControlPanel from '../ControlPanel/ControlPanel';
import HashtagList from '../HashtagList/HashtagList';
import { ReactComponent as Avatar } from '../../images/avatar.svg';
import { handleDate, hashtagFixtures } from '../../utils/constants';

import './Message.css';

function Message({ item, isLiked, likeMessageHandler }) {

    const { author, content, date, attachments } = item;
    const currentDate = handleDate(date);

    const multimedia = attachments.reduce((acc, item) => {
        acc[item.type] = item.url
        return acc;
    }, {});

    const onLikeButtonClick = () => {
        likeMessageHandler(item.id)
    }

    return (
        <div className="message">
            <div className="message__container">
                <div className="message__left-section">
                    <Avatar />
                    <span>{currentDate.time}</span>
                </div>
                <div className="message__right-section">
                    <div className="message__header">
                        <div>
                            <h2 className="message__author">{author}</h2>
                            <span className="message__comment">Текст поста в соц. сетях если это комментарий</span>
                        </div>
                        <ControlPanel onLikeButtonClick={onLikeButtonClick} isLiked={isLiked} />
                    </div>
                    <Content text={content} multimedia={multimedia} />
                </div>
            </div>
            <HashtagList hashtags={hashtagFixtures} />
        </div>
    );
}

export default React.memo(Message);