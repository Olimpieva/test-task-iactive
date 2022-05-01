import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import messagesActions from '../../redux/actions';
import MessageList from '../MessageList/MessageList';

import './App.css';

function App() {

  const dispatch = useDispatch();

  const getNewMessages = () => {
    setInterval(() => {
      dispatch(messagesActions.getMessages());
    }, 5000)
  }

  useEffect(() => {
    dispatch(messagesActions.getMessages());
    getNewMessages();
  }, [dispatch])

  return (
    <div className="app">
      <MessageList />
    </div>
  );
}

export default App;
