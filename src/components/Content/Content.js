import React, { useState } from 'react';

import { maxShownCharLength } from '../../utils/constants';

import './Content.css';

function Content({ text, multimedia }) {

    const [isFullContentShown, setIsFullContentShown] = useState(false);

    const onMoreButtonClick = () => {
        setIsFullContentShown(prevState => !prevState);
    };

    return (
        <div className="content">
            <p className={`content__text ${text.length > maxShownCharLength && !isFullContentShown && 'content__text_hidden'}`}>{text}</p>

            {text.length > maxShownCharLength &&
                <button className="button content__more-button"
                    onClick={onMoreButtonClick}
                >
                    {isFullContentShown ? 'Скрыть' : 'Далее'}
                </button>
            }

            {multimedia.image &&
                <img className="content__image"
                    src={multimedia.image}
                    alt="content"
                />
            }

            {multimedia.video &&
                <video className="content__video" controls >
                    <source
                        src={multimedia.video}
                        type="video/mp4"
                    />
                </video>
            }

        </div>
    );
};

export default Content;