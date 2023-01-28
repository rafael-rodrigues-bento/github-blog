import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { ThemeProvider } from 'styled-components'
import { Home } from './pages/Home'
import { Post } from './pages/Post'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Post />
    </ThemeProvider>
  )
}