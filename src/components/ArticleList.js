import  React from 'react';
import ArticleComponent from './Article';

function ArticleList({posts}) {
    const articles = posts.map((post)=> (
        <ArticleComponent
            key={post.id}
            title={post.title}
            preview={post.preview}
            date={post.date}
        />
    ))
    return <main>{articles}</main>
}

export default ArticleList;