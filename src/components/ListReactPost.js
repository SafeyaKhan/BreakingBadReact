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
               <div id="breaking_container" className="breaking-container">
               
                {posts && posts.map(post => {
                return(
                    <>
                    <div className='breaking'>
                     <div className='img-container'>
                    <img src={post.img} alt={post.name}/>
                    </div>
                    <div className='info'>
                    <h3 key={post.char_id} className='name'>{post.name}</h3>
                    </div>
                    </div>
                    </>              
                   
               
                ) }  )}
                 </div>
            </>
        )
    }
}

export default ListPost