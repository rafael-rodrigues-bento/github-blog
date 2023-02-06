import { CardContainer, MainContainer } from "./styles";
import { formatDistanceToNow } from "date-fns"
import { ptBR } from "date-fns/locale";
import { useNavigate } from "react-router-dom";


interface PostCardProps {
  title: string;
  date: string;
  body: string;
  number: number;
}

export function PostCard({title, date, body, number}: PostCardProps) {
  const navigate = useNavigate();

  function handleMoveToPostPage() {
    navigate(`/post/${number}`);
  }

  return (
    <MainContainer onClick={handleMoveToPostPage}>
      <CardContainer>
      
      <div>
        <h3>{title}</h3>
        <span>
          {
            formatDistanceToNow(new Date(new Date(date)), {
              addSuffix: true,
              locale: ptBR
            })
          }
        </span>
      </div>

      <p>{body}</p>
      </CardContainer>
    </MainContainer>
  )
}