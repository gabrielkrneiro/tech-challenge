import React from 'react';

import './Figure.css';
import examplePng from './images/example.png';

const Question3 = () => {
    return (
        <section>
            <h2>Question 3</h2>
            <p>Description: Write the necessary React code for generating the below figure (using flex).
            </p>
            <img className='image' src={examplePng} alt="example" />

            <div className="container">
                <header className="item header">Header</header>
                <aside className="item hero">Hero</aside>
                <aside className="item sidebar">Sidebar</aside>
                <div className="item main-content">Main Content</div>
                <div className="item extra-content">Extra Content</div>
                <div className="item related-images">Related Images</div>
                <div className="item related-posts">Related Posts</div>
                <footer className="item footer">Footer</footer>
            </div>
        </section>

    );
};

export default Question3;