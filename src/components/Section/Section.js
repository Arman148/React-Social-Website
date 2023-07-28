import React, {useState, useEffect} from 'react';
import './Section.css';

function Section () {

    const postURL = 'https://5d8e0901370f02001405c7c9.mockapi.io/api/v1/postblog/postblog';
    const [posts, setPosts] = useState([]);

    const getPosts = ( url ) => {
        fetch( url )
        .then( response => response.json() )
        .then((data) => {
            setPosts(data);
        })
    }

    useEffect( () => {
        getPosts(postURL)
    }, [] )

    return (
        <section>
            { posts.map( (post) => {
                return(
                    <div className='post' key={post.id} >
                        <div className='author' >
                            <h3>{post.author}</h3>
                        </div>
                        <div className='description' >
                            {post.description}
                        </div>
                        <hr className="post-line" ></hr>
                    </div>
                )
            } ) }
        </section>
    )
}

export default Section;