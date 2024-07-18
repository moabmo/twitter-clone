import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import NewTweet from './NewTweet';
import { collection, onSnapshot, updateDoc, doc } from 'firebase/firestore';
import { Container } from 'react-bootstrap';
import { formatDistanceToNow } from 'date-fns';

const Home = () => {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'tweets'), snapshot => {
      setTweets(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });

    return () => unsubscribe();
  }, []);

  const handleLike = async (tweetId) => {
    const tweetRef = doc(db, 'tweets', tweetId);
    const tweet = tweets.find(t => t.id === tweetId);
    await updateDoc(tweetRef, { likes: tweet.likes + 1 });
  };

  const handleRetweet = async (tweetId) => {
    const tweetRef = doc(db, 'tweets', tweetId);
    const tweet = tweets.find(t => t.id === tweetId);
    await updateDoc(tweetRef, { retweets: tweet.retweets + 1 });
  };

  const handleComment = (tweetId) => {
    // Handle comment functionality
  };

  return (
    <div className="feed">
      <Container>
        <h1 className="my-4">Home</h1>
        <NewTweet />
        {tweets.map((tweet, index) => (
          <div key={index} className="tweet">
            <div className="tweet-header">
              <div>
                <img src="https://via.placeholder.com/50" alt="Profile" />
                <h3>{tweet.user}</h3>
              </div>
              <div className="timestamp">
                {tweet.timestamp ? formatDistanceToNow(tweet.timestamp.toDate()) + ' ago' : 'Just now'}
              </div>
            </div>
            <div className="tweet-content">
              <p>{tweet.content}</p>
            </div>
            <div className="tweet-actions">
              <button onClick={() => handleLike(tweet.id)}>
                <i className="fas fa-heart"></i> {tweet.likes}
              </button>
              <button onClick={() => handleRetweet(tweet.id)}>
                <i className="fas fa-retweet"></i> {tweet.retweets}
              </button>
              <button onClick={() => handleComment(tweet.id)}>
                <i className="fas fa-comment"></i>
              </button>
            </div>
          </div>
        ))}
      </Container>
    </div>
  );
};

export default Home;
