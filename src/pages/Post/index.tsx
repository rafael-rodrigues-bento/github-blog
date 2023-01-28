import { Header } from "../../components/Header";
import { PostCard } from "./components/PostCard";
import { PostContainer } from "./styles";

export function Post() {
  return (
    <>
      <Header />
      <PostContainer>
        <PostCard />
      </PostContainer>
    </>
  )
}