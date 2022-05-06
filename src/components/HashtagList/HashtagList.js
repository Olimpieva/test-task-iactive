import React from 'react';

import './HashtagList.css';

function HashtagList({ hashtags }) {

    return (
        <div className="hashtag-list">
            {hashtags.map((item, index) => <span key={index} className="hashtag">#{item}</span>)}
        </div>
    );
};

export default HashtagList;