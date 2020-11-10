import React from 'react';
import Navbar from '../component/Navbar';
import Container from '../component/Container';
import Footer from '../component/Footer';
import ArticleCard from '../component/ArticleCard';
import Hero from '../component/Hero';
import { getAllPosts } from '../controllers/post_controller';


export default function Home() {
  
  let left = false;

  return (
    <>
      <Navbar />

      <Hero/>
      <Container>
      
        {
          getAllPosts().map((post) => {
            left = !left;
            return <ArticleCard left={left} post={post} />
          })
        }
      </Container>
      <Footer />
    </>
  )
}