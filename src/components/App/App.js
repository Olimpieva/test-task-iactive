import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import messagesActions from '../../redux/actions';
import { currentMessagesSelector } from '../../redux/selectors';

function App() {

  const dispatch = useDispatch();
  const { entities: messages } = useSelector(currentMessagesSelector);

  console.log({ messages })

  useEffect(() => {
    dispatch(messagesActions.getMessages());
  }, [])

  return (
    <div className="app">
      App
    </div>
  );
}

export default App;
