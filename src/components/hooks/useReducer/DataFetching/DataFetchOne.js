import React, {useState, useEffect} from 'react';
import axios from 'axios';

const DataFetchOne = () => {

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [posts, setPosts] = useState({});

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
      .then(res => {
        setLoading(false);
        setPosts(res.data);
        setError('')
      })
      .catch(err => {
        setLoading(false);
        setPosts({});
        setError('Something went wrong')
        console.log(err)
      })
  }, []);

  return (
    <div>
      {loading ? 'Loading' : posts.title}
      {error ? error : null}
    </div>
  )
}

export default DataFetchOne