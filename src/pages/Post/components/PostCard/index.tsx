import { ArrowSquareOut, ArrowLeft, GithubLogo, Calendar, ChatCircle } from "phosphor-react";
import { PostCardContainer } from "./styles";

export function PostCard() {
  return (
    <PostCardContainer>
      <div>
        <a href="#"><ArrowLeft size={18}/>Voltar</a>
        <a href="#">VER NO GITHUB <ArrowSquareOut size={18} /></a>
      </div>

      <div>
        <h2>Javascript data types and data structures</h2>
        <div>
          <ul>
            <li><GithubLogo size={18}/>camerownll</li>
            <li><Calendar size={18} /> há 1 dia</li>
            <li><ChatCircle size={18} /> 5 comentários</li>
          </ul>
        </div>
      </div>
    </PostCardContainer>
  )
}