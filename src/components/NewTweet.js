import React, { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { Form, Button } from 'react-bootstrap';

const NewTweet = () => {
  const [content, setContent] = useState('');
  const [user, setUser] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addDoc(collection(db, 'tweets'), {
      user: user,
      content: content,
      timestamp: serverTimestamp(),
      likes: 0,
      retweets: 0,
      comments: []
    });
    setContent('');
    setUser('');
  };

  return (
    <div className="tweet-box">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formUserName">
          <Form.Control 
            type="text" 
            placeholder="Your Name" 
            value={user}
            onChange={e => setUser(e.target.value)} 
          />
        </Form.Group>
        <Form.Group controlId="formContent">
          <Form.Control 
            as="textarea" 
            rows={3}
            placeholder="What's happening?" 
            value={content}
            onChange={e => setContent(e.target.value)} 
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Tweet
        </Button>
      </Form>
    </div>
  );
};

export default NewTweet;
