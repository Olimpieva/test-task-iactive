import React from 'react';

import { ReactComponent as LikeIcon } from '../../images/icons/like-icon.svg';
import { ReactComponent as LikeIconActive } from '../../images/icons/like-icon_active.svg';
import { ReactComponent as SettingsIcon } from '../../images/icons/settings-icon.svg';
import { ReactComponent as SendMessageIcon } from '../../images/icons/send-message-icon.svg';
import { ReactComponent as HideMessageIcon } from '../../images/icons/hide-message-icon.svg';

import './ControlPanel.css';

function ControlPanel({ onLikeButtonClick, isLiked }) {

    return (
        <div className="control-panel">

            <div className="control-panel__some-options some-options">
                <button className="button some-options__button">Левый</button>
                <button className="button some-options__button">Центр</button>
                <button className="button some-options__button">Правый</button>
            </div>

            <div className="control-panel__actions actions">
                <button className="button actions__button" onClick={() => console.log('Send Message')}>
                    <SendMessageIcon />
                </button>
                <button className="button actions__button" onClick={() => console.log('Hide Message')}>
                    <HideMessageIcon />
                </button>
                <button className="button actions__button" onClick={() => console.log('Open Settings')}>
                    <SettingsIcon />
                </button>
                <button className="button actions__button" onClick={onLikeButtonClick}>
                    {isLiked ? <LikeIconActive /> : <LikeIcon />}
                </button>
            </div>

        </div>

    );
}

export default ControlPanel;