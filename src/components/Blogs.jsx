import React, { useState } from 'react'
import styled from 'styled-components'
import { blogposts } from '../data'

export const Blogs = () => {
  const [blog, setblog] = useState(blogposts);

  return (
    <BlogsContainer>
    <section className='blogs-container'>
      <h5>Timeless Harmony | Integrating Oriental Traditions into Contemporary Home</h5>
      <p className='underline'></p>
      <div className='blogs'>
        {blogposts.map((blogpost)=>{
          const {id, image, title, info, url} = blogpost;
          return (
            <div className='single-blog' key={id}>
              <img src={image} alt={title} className='img'/>

              <div className='blog-info'>
                <a href={url} target="_blank">{title}</a>
                <p>{info}</p>
              </div>
            </div>
          )
          })}
      
      </div>
    </section>
    </BlogsContainer>
  )
}

const BlogsContainer = styled.nav`

.blogs-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content:center;
    align-items: center;
    width: 100%;
    height: auto;
    margin-top: 50px;
    padding: 50px;
  }

  .blogs-container h5{
    width: 100%;
    text-align: center;
  }

  .underline{
    width: 10%;
    height: 0px;
    margin-top: 30px;
    border-bottom: 2px solid grey;
  }
  
  .blogs {
    padding: 5rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 0.1rem;
    width: 80%;
  }
  
  
  .single-blog {
    margin-top: 30px;
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    // align-content: center;
    // align-items: center;
    background: var(--white);
    position: relative;
    width: 80%;
    height: 400px;
    padding: 20px;
  }
  
  // .single-blog:hover {
  //   box-shadow: var(--shadow-3);
  // }

  .single-blog .img {
    height: 12rem;
    width: 24rem;
    border: none;
    border-top-right-radius: var(--borderRadius);
    border-top-left-radius: var(--borderRadius);
  }
  
  .blog-info {
    // padding: 1rem 1rem;
    font-size: 0.8rem;
    margin-top: 0.5rem;
  }
  
  .blog-info a {
    text-align: start;
    margin-top: 0.5rem;
    margin:-bottom: 1rem;
    font-weight: 400;
    line-height: 1.5;
    font-size: 1rem;
    text-transform: uppercase;
  }
  .blog-info p {
    margin-top: 0.5rem;
    line-height: 1.5;
    color: var(--grey-500);
  }
  

  @media only screen and (max-width: 760px) {

    .blogs {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content:center;
        align-items: center;
        width: 100%;
      }

      .img {
        // width: 100%;
        object-fit: cover;
      }

    }
`
