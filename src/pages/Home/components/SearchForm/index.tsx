import React, { ChangeEvent, useState } from "react";
import { FormContainer } from "./styles";
interface SearchFormProps {
  numberOfPublications: number;
  fetchPosts: (q: string) => Promise<void>;
}

export function SearchForm({numberOfPublications, fetchPosts}: SearchFormProps) {
  const [search, setSearch] = useState("")

  function handleSearchPost(event: ChangeEvent<HTMLInputElement>){
    setSearch(event.target.value)
  }

  return (
    <FormContainer>
      <div>
        <h3>Publicações</h3>
        <span>{numberOfPublications} publicações</span>
      </div>

      <input 
        type="text" 
        placeholder="Buscar conteúdo"
        onChange={handleSearchPost}
      />
    </FormContainer>
  )
}