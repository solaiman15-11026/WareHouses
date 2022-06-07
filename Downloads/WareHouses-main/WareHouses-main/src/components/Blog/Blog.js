import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='blog-container'>
            <div>
                <h3>How React Works?</h3>
                <p>React is a JavaScript library that creates efficient user interfaces through declarative programming.
                    We can construct single-page apps and mobile apps with React.
                    Virtual DOM, a JavaScript version of a DOM tree, is used by React.

                    As a result, when reading or writing to the DOM, it will use the virtual representation.

                    This is ideal because, most of the time, this is all we desire.
                </p>
            </div>
            <div>
                <h3>Props Vs State</h3>
                <p>
                    Props are used to communicate data from one component to another. State, on the other hand, is a local data storage component that is only used locally. It is impossible to pass any component anywhere. It is termed state when a user interacts with a website and can modify anything in the website interface. If the user interface in the UI state can be changed but the props can't,
                </p>
            </div>
        </div>
    );
};

export default Blog;