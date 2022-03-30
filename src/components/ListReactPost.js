import React, { Component } from 'react'

class ListPost extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: []
        }
    }

    async componentDidMount() {
        const url = 'https://www.breakingbadapi.com/api/characters';
        const res = await fetch(url);
        const data = await res.json();
        this.setState({ posts: data })
    }

    render() {
        const { posts } = this.state; // const posts = this.state.posts
        
        return (
            <>
                <h2>List Post</h2>
                {posts && posts.map(post => <h3 key={post.char_id}>{post.name}</h3>)}
            </>
        )
    }
}

export default ListPost