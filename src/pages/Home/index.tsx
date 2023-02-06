import { useCallback, useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { api } from "../../lib/axios";
import { PostCard } from "./components/PostCard";
import { Profile } from "./components/Profile";
import { SearchForm } from "./components/SearchForm";
import { CardContainer, MainContent } from "./styles";

interface PostProps {
    number: number
    title: string
    body: string
    created_at: string
}

interface SearchPostsProps {
  items: PostProps[]
}

export function Home() {
  const [posts, setPosts] =useState<PostProps[]>([]);

  const fetchPosts = useCallback(async (query?: string) => {
    const response = await api.get<SearchPostsProps>(
      `search/issues?q=${query ? query + '%20' : ''}repo:rafael-rodrigues-bento/github-blog
      `,
    )
    setPosts(response.data.items)
  }, [])

    const postsLength = posts.length;

    useEffect(() => {
      fetchPosts();
    },[fetchPosts])

  return (
    <>
      <Header />
      <MainContent>
        <Profile />
        <SearchForm 
          numberOfPublications={postsLength}
          fetchPosts={fetchPosts}
        />

        <CardContainer>
          {
            posts.map(post => {
              return (
                <PostCard
                  key={post.number}
                  number={post.number} 
                  body={post.body}
                  date={post.created_at}
                  title={post.title}
                />
              )
            })
          }
        </CardContainer>
      </MainContent>
      
    </>
  
  )
}