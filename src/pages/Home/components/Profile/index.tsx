import { ArrowSquareOut, GithubLogo, Buildings, Users } from "phosphor-react";
import { useEffect, useState } from "react";
import { api } from "../../../../lib/axios";
import { ProfileContainer, ProfileInfo } from "./styles";

interface userProps {
  avatar: string
  followers: number
  bio: string
  name: string
  company: string
  login: string
}

export function Profile() {
  const [user, setUser] = useState<userProps>()

  async function fetchUser() {
    const response = await api.get("/users/rafael-rodrigues-bento")
    const { avatar_url: avatar, followers, bio, name, company, login } = response.data

    setUser({ avatar, followers, bio, name, company, login })
  }

  useEffect(() => {
    fetchUser()
  }, [])

  return (
    <ProfileContainer>
      <img src={user?.avatar} alt="" />

      <ProfileInfo>
        <div>
          <h2>{user?.name}</h2>
          <a href="github.com">GITHUB <ArrowSquareOut size={18} /></a>
        </div>

        <div>
          <p>
            {user?.bio}
          </p>
        </div>

        <div>
          <a href=""><GithubLogo size={18}/> {user?.login}</a>
          <a href=""><Buildings size={18} /> @Rocketseat</a>
          <a href=""><Users size={18} />{user?.followers} seguidores</a>
        </div>
      </ProfileInfo>
    </ProfileContainer>
  )
}