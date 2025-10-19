import React from 'react'
import {  Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Layout from './pages/Layout'
import ResumeReview from './pages/ResumeReview'
import ArticleWriter from './pages/ArticleWriter'
import BackgroundRemover from './pages/BackgroundRemover'
import BlogTitleGenerator from './pages/BlogTitleGenerator'
import Community from './pages/Community'
import Dashboard from './pages/Dashboard'
import ImageGenerator from './pages/ImageGenerator'
import ObjectRemover from './pages/ObjectRemover'

const App = () => {
  return (
    // <BrowserRouter>
        // <div >
          <Routes>

            <Route path="/" element={<Home/>}  />  
            <Route path="/resume-review" element={<ResumeReview/>}  />
            <Route path="/article-writer" element={<ArticleWriter/>}  />
            <Route path="/background-remover" element={<BackgroundRemover/>}  />
            <Route path="/blog-title-generator" element={<BlogTitleGenerator/>}  />
            <Route path="/image-generator" element={<ImageGenerator/>}  />
            <Route path="/object-remover" element={<ObjectRemover/>}  />   

            <Route path="/ai" element={<Layout/>}  >
              
              <Route index element={<Dashboard/>}  />
              <Route path="community" element={<Community/>}  />
            
            
            </Route>
            
          </Routes>
        // </div>
    // </BrowserRouter>


  )
}

export default App