import { useEffect, useState } from "react";


function ApiCalling() {
  const [isLoading, setIsLoading] = useState(false);
  const [gtpost, setGtpost] = useState([]);
  const [loadmore, setLoadmore] = useState(10);

  useEffect(() => {
    const FetchPost = async () => {
      try {
        setIsLoading(true);
        const Fetchposts = await fetch(
          `https://jsonplaceholder.typicode.com/posts?_limit=${loadmore}`
        );
        const posts = await Fetchposts.json();
        setGtpost(prevPosts => [...prevPosts, ...posts]);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    FetchPost();
  }, [loadmore]);

  return (
    <div className="api-container">
      <div className="header">
        <h1>📰 Posts Feed</h1>
        <p className="subtitle">Explore amazing posts</p>
      </div>

      <div className="posts-grid">
        {gtpost.map((post) => (
          <div key={post.id} className="post-card">
            <div className="post-number">{post.id}</div>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>

      {isLoading && <p className="loading">⏳ Loading posts...</p>}

      <div className="button-container">
        <button 
          className="load-more-btn" 
          onClick={() => setLoadmore(loadmore + 10)}
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : "Load More Posts"}
        </button>
      </div>
    </div>
  );
}

export default ApiCalling;
