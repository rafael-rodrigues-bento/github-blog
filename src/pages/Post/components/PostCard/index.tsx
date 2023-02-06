import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { ArrowSquareOut, ArrowLeft, GithubLogo, Calendar, ChatCircle } from "phosphor-react";
import { Link, useNavigate } from "react-router-dom";
import { PostCardContainer } from "./styles";

interface PostCardProps {
  title: string
  postUrl: string
  creator: string
  createdAt: string
  numberOfComments: number
}

export function PostCard({ title, postUrl, creator, createdAt, numberOfComments}: PostCardProps) {
  const navigate = useNavigate()

  return (
    <PostCardContainer>
      <div>
        <Link to={"/"}><ArrowLeft size={18}/>Voltar</Link>
        <a href={postUrl}>VER NO GITHUB <ArrowSquareOut size={18} /></a>
      </div>

      <div>
        <h2>{title}</h2>
        <div>
          <ul>
            <li><GithubLogo size={18}/>{creator}</li>
            <li><Calendar size={18} />
              {
                formatDistanceToNow(new Date(new Date(createdAt)), {
                  addSuffix: true,
                  locale: ptBR
                })
              }
            </li>
            <li><ChatCircle size={18} />{numberOfComments} comentários</li>
          </ul>
        </div>
      </div>
    </PostCardContainer>
  )
}