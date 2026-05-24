import { useEffect, useState, react } from "react";

function ApiCalling() {
  const [isLoading, setIsloading] = useState(false);
const [gtpost, setGtpost] = useState(null);

  useEffect(() => {
    const FetchPost = async () => {
      try {
        setIsloading(true);
        const Fetchposts = await fetch(
          "https://jsonplaceholder.typicode.com/posts",
        );
        const posts = await Fetchposts.json();
        console.log(posts);
        setGtpost(posts);
      } catch (error) {
        console.log(error);
      } finally {
        setIsloading(false);
        console.log("existing....");
      }
    };
    FetchPost();
 
  }, [1]);

  return (
    <>
 
    <h2>API Calling</h2>
    
    {isLoading && <p>Loading posts...</p>}
    
    {gtpost && gtpost.length > 0 ? (
      <div>
        {gtpost.map((post) => (
          <div key={post.id} style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <small>Post ID: {post.id}</small>
          </div>
        ))}
      </div>
    ) : (
      !isLoading && <p>No posts found</p>
    )}
 
    </>
);
 
}
export default ApiCalling;
