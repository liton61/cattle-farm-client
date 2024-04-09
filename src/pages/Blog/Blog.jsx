import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('blog.json')
            .then(res => res.json())
            .then(data => {
                // Sort posts by date in descending order
                const sortedPosts = data.sort((a, b) => new Date(b.date) - new Date(a.date));
                setPosts(sortedPosts);
            })
    }, []);

    return (
        <div className='lg:w-3/4 mx-auto lg:px-0 px-5 my-10'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {posts.map(post => (
                    <div key={post._id}>
                        <div>
                            <Link to={`/blogDetails/${post._id}`}>
                                <div className="card card-compact shadow-md rounded-none">
                                    <figure><img src={post.image} alt="" /></figure>
                                    <div className="card-body">
                                        <div className='flex justify-between'>
                                            <span><i className="fa-solid fa-user text-green-900"></i> {post.author}</span>
                                            <span><i className="fa-solid fa-calendar-days text-green-800"></i> {post.date}</span>
                                        </div>
                                        <h2 className="card-title">{post.title}</h2>
                                        {/* <p>{post.content}</p> */}
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blog;
