import { FormContainer } from "./styles";
interface SearchFormProps {
  numberOfPublications: number;
}

export function SearchForm({numberOfPublications}: SearchFormProps) {
  return (
    <FormContainer>
      <div>
        <h3>Publicações</h3>
        <span>{numberOfPublications} publicações</span>
      </div>

      <input type="text" 
        placeholder="Buscar conteúdo"
      />
    </FormContainer>
  )
}