import { Header } from "../../components/Header";
import { PostCard } from "./components/PostCard";
import { Profile } from "./components/Profile";
import { SearchForm } from "./components/SearchForm";
import { CardContainer, MainContent } from "./styles";

export function Home() {
  return (
    <>
      <Header />
      <MainContent>
        <Profile />
        <SearchForm />

        <CardContainer>
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </CardContainer>
      </MainContent>
      
    </>
  
  )
}