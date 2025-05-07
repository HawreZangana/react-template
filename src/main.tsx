import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MainLayout from './layouts/MainLayout.tsx'
import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from './pages/HomePage.tsx';
import AssignmentsPage from './pages/AssignmentsPage.tsx';
import GroupsPage from './pages/GroupsPage.tsx';
import StudentsPage from './pages/StudentsPage.tsx';
import LoginPage from './pages/LoginPage.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>

        <Route path='/login' element={<LoginPage/>}/>
        
        <Route element={<MainLayout/>}>
          <Route path='/' element={<HomePage/>} />
          <Route path="/assignments" element={<AssignmentsPage/>}/>
          <Route path="/groups" element={<GroupsPage/>}/>
          <Route path="/students" element={<StudentsPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
