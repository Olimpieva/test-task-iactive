import React, { useState } from 'react';

import { ReactComponent as Avatar } from '../../images/avatar.svg';
import { ReactComponent as LikeIcon } from '../../images/icons/like-icon.svg';
import { ReactComponent as LikeIconActive } from '../../images/icons/like-icon_active.svg';
import { ReactComponent as SettingsIcon } from '../../images/icons/settings-icon.svg';
import { ReactComponent as SendMessageIcon } from '../../images/icons/send-message-icon.svg';
import { ReactComponent as HideMessageIcon } from '../../images/icons/hide-message-icon.svg';

import './Message.css';
import { handleDate } from '../../utils/constants';

function Message({ item, isLiked, likeMessageHandler }) {

    const { author, content, date, attachments } = item;
    const currentDate = handleDate(date);

    const [isFullContentShown, setIsFullContentShown] = useState(false);

    const multimedia = attachments.reduce((acc, item) => {
        acc[item.type] = item.url
        return acc;
    }, {});

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

                        <div className="message__menu menu">

                            <div className="menu__i-dont-know-what-its-for i-dont-know-what-its-for">
                                <button className="button i-dont-know-what-its-for__button">Левый</button>
                                <button className="button i-dont-know-what-its-for__button">Центр</button>
                                <button className="button i-dont-know-what-its-for__button">Правый</button>
                            </div>

                            <div className="menu__actions actions">
                                <button className="button actions__button" onClick={() => console.log('Send Message')}>
                                    <SendMessageIcon />
                                </button>
                                <button className="button actions__button" onClick={() => console.log('Hide Message')}>
                                    <HideMessageIcon />
                                </button>
                                <button className="button actions__button" onClick={() => console.log('Open Settings')}>
                                    <SettingsIcon />
                                </button>
                                <button className="button actions__button" onClick={() => likeMessageHandler(item.id)}>
                                    {isLiked ? <LikeIconActive /> : <LikeIcon />}
                                </button>
                            </div>

                        </div>
                    </div>

                    <div className="message-content">
                        <p className={`message-content__text ${content.length > 400 && !isFullContentShown && 'message-content__text_hidden'}`}>{content}</p>
                        {content.length > 400 &&
                            <button className="button message-content__button" onClick={() => setIsFullContentShown(prevState => !prevState)}>
                                {isFullContentShown ? 'Скрыть' : 'Далее'}
                            </button>
                        }
                        {multimedia.image &&
                            <img src={multimedia.image} width="400" height="200" alt="content" />
                        }
                        {multimedia.video &&
                            <video className="message-content__video" controls >
                                <source src={multimedia.video} type="video/mp4" />
                            </video>
                        }
                    </div>
                </div>
            </div>

            <div className="hashtag-container">
                <span className="hashtag">#New</span>
                <span className="hashtag">#Expert</span>
            </div>
        </div>
    );
}

export default React.memo(Message);