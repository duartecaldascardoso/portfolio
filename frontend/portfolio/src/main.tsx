import { StrictMode, lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import { ColorModeProvider } from './components/ui/color-mode.tsx'
import { system } from "./theme.ts";
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/site/Layout';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import ProjectsPage from './pages/ProjectsPage';
import AboutPage from './pages/AboutPage';
import LearningPage from './pages/LearningPage';

// Posts load the Markdown and code-highlighting libraries, so they are fetched only when a post is opened.
const PostPage = lazy(() => import('./pages/PostPage'));

const basename = import.meta.env.BASE_URL.replace(/\/$/, '')

// public/404.html stores the requested path and sends the visitor to the site root,
// so that deep links like /blog/some-post still load the app.
const redirectPath = sessionStorage.getItem('redirect')
if (redirectPath) {
    sessionStorage.removeItem('redirect')
    const parsedUrl = new URL(redirectPath, window.location.origin)
    const restoredPath = `${parsedUrl.pathname}${parsedUrl.search}${parsedUrl.hash}`
    const normalizedPath = restoredPath !== `${basename}/` && restoredPath.endsWith('/')
        ? restoredPath.slice(0, -1)
        : restoredPath
    window.history.replaceState(null, '', normalizedPath)
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChakraProvider value={system}>
      <ColorModeProvider defaultTheme="system" enableSystem>
        <BrowserRouter basename={basename}>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:slug" element={<Suspense fallback={null}><PostPage /></Suspense>} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/learning" element={<LearningPage />} />
              <Route path="/publications" element={<Navigate to="/blog" replace />} />
              <Route path="/resources" element={<Navigate to="/blog" replace />} />
              <Route path="/courses" element={<Navigate to="/learning" replace />} />
              <Route path="/books" element={<Navigate to="/learning" replace />} />
              <Route path="/home" element={<Navigate to="/" replace />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ColorModeProvider>
    </ChakraProvider>
  </StrictMode>
)
