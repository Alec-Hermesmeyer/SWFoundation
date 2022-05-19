import React from 'react'


const BlogData = [
    {
        id: 1,
        title: 'Commercial Pier Drilling',
        excerpt: 'S&W is your one stop shop for all of your Commercial Pier Drilling Needs',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae nostrum ad, hic non adipisci, odit ducimus autem quisquam sequi quasi nobis facilis, omnis earum cum reprehenderit harum tempore fugit totam!',
    },
    {
        id: 2,
        title: 'Limited Access Pier Drilling',
        excerpt: 'S&W is your one stop shop for all of your Commercial Pier Drilling Needs',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae nostrum ad, hic non adipisci, odit ducimus autem quisquam sequi quasi nobis facilis, omnis earum cum reprehenderit harum tempore fugit totam!',
    }
]
const BlogPost = () => {
  return (
    <div className='post-container'>
        <div className="post-card">
            {BlogData.map((post, index) => {
                return(
                    <div className='post-title'>
                        {post.id}
                        {post.title}
                        console.log({post.title})
                    </div>
                    
                )
            })}
        </div>
    </div>
  )
}

export default BlogPost