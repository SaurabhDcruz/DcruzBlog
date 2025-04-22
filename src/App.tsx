import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import HomePage from "./pages/HomePage"
import ArticlePage from "./pages/ArticlePage"
import AuthorPage from "./pages/AuthorPage"
import { ArticleProvider } from "./context/ArticleContext"
import { ThemeProvider } from "./context/ThemeContext"

function App() {
  return (
    <ThemeProvider>
      <ArticleProvider>
        <Router>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/article/:slug" element={<ArticlePage />} />
                <Route path="/author/:authorId" element={<AuthorPage />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </ArticleProvider>
    </ThemeProvider>
  )
}

export default App
