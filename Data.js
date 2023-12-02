import React, { useState, useEffect } from 'react';
import { fetchData } from '../services/api';
import { filterPostsByUserId } from '../services/utils';
import Table from './Table';
import PieChart from './PieChart';

function Data() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchDataAndFilter = async () => {
      try {
        const data = await fetchData('https://jsonplaceholder.typicode.com/posts');
        const filteredPosts = filterPostsByUserId(data, 1);
        setPosts(filteredPosts);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchDataAndFilter();
  }, []);

  return (
    <div>
      <h2>Data Page</h2>
      <Table posts={posts} />
      <PieChart posts={posts} />
    </div>
  );
}

export default Data;
