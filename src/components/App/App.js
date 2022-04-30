import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import messagesActions from '../../redux/actions';
import { currentMessagesSelector } from '../../redux/selectors';
import MessageList from '../MessageList/MessageList';

import './App.css';

function App() {

  const dispatch = useDispatch();
  const { entities: messages } = useSelector(currentMessagesSelector);

  console.log({ messages })

  useEffect(() => {
    dispatch(messagesActions.getMessages());
  }, [dispatch])

  return (
    <div className="app">
      App
      <MessageList />
    </div>
  );
}

export default App;
