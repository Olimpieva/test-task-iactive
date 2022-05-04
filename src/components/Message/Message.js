import React from 'react';

import { ReactComponent as Avatar } from '../../images/avatar.svg';
import { ReactComponent as LikeIcon } from '../../images/icons/like-icon.svg';
import { ReactComponent as LikeIconActive } from '../../images/icons/like-icon_active.svg';
import { ReactComponent as SettingsIcon } from '../../images/icons/settings-icon.svg';
import { ReactComponent as SendMessageIcon } from '../../images/icons/send-message-icon.svg';
import { ReactComponent as HideMessageIcon } from '../../images/icons/hide-message-icon.svg';

import './Message.css';

function Message({ item, isLiked, likeMessageHandler }) {

    const { author, content, date, attachments } = item;

    const multimedia = attachments.reduce((acc, item) => {
        acc[item.type] = item.url
        return acc;
    }, {});


    return (
        <div className="message">
            <div>
                <Avatar />
                <span>{date}</span>
            </div>
            <div>
                <h2>{author}</h2>
                <div>
                    <div>
                        <p>{content}</p>
                        <div>
                            <SendMessageIcon />
                            <HideMessageIcon />
                            <SettingsIcon />
                            <button onClick={() => likeMessageHandler(item.id)}>
                                {isLiked ? <LikeIconActive /> : <LikeIcon />}
                            </button>

                        </div>
                    </div>

                    {multimedia.image && <img src={multimedia.image} width="400" height="200" alt="content" />}
                    {multimedia.video &&
                        <video width="400" height="200" controls >
                            <source src={multimedia.video} type="video/mp4" />
                        </video>
                    }
                </div>
            </div>
        </div>
    );
}

export default React.memo(Message);