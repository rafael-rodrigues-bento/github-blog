import { useCallback, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Header } from "../../components/Header";
import { api } from "../../lib/axios";
import { PostCardContainer, PostContainer, PostContent } from "./styles";
import ReactMarkdown from 'react-markdown'
import { ArrowLeft, ArrowSquareOut, Calendar, ChatCircle, GithubLogo } from "phosphor-react";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

interface User {
  login: string
}
interface PostProps {
  number: number
  html_url: string
  title: string
  body: string
  comments: number
  created_at: string
  user: User
}

export function Post() {
  const [post, setPost] = useState<PostProps>({} as PostProps)

  const { issueNumber } = useParams()

  const fetchPost = useCallback(async () => {
    const response = await api.get<PostProps>(
      `/repos/rafael-rodrigues-bento/github-blog/issues/${issueNumber}`,
    )

    setPost(response.data)
  }, [issueNumber])

  useEffect(() => {
    fetchPost()
  }, [issueNumber, fetchPost])

  return (
    <>
      <Header />
      <PostContainer>
        <PostCardContainer>
        <div>
          <Link to={"/"}><ArrowLeft size={18}/>Voltar</Link>
          <a href={post.html_url}>VER NO GITHUB <ArrowSquareOut size={18} /></a>
        </div>

        <div>
          <h2>{post.title}</h2>
          <div>
            <ul>
              <li><GithubLogo size={18}/>{post.user ? post?.user.login: ""}</li>
              <li><Calendar size={18} />
                {post.created_at &&
                  formatDistanceToNow(new Date(post.created_at), {
                    addSuffix: true,
                    locale: ptBR,
                })}
              </li>
              <li><ChatCircle size={18} />{post.comments} comentários</li>
            </ul>
          </div>
        </div>
      </PostCardContainer>

        <PostContent>

          <ReactMarkdown>
            {post.body}
          </ReactMarkdown>
        </PostContent>
      </PostContainer>
    </>
  )
}