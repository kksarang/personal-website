import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PortfolioLayout from './layouts/PortfolioLayout';
import KksystemsLayout from './layouts/KksystemsLayout';
import HomePage from './components/HomePage';
import ProjectDetail from './components/Projects/ProjectDetail';
import WorkPage from './components/Work/WorkPage';
import LearningPage from './components/Learning/LearningPage';
import LearningMaterials from './components/Learning/LearningMaterials';
import MaterialDetail from './components/Learning/MaterialDetail';
import LearningDetail from './components/Learning/LearningDetail';
import ErrorBoundary from './components/ErrorBoundary';

// KKSYSTEMS multi-page imports
import KksystemsHome from './pages/kksystems/Home';
import KksystemsWork from './pages/kksystems/Work';
import KksystemsWorkDetails from './pages/kksystems/WorkDetails';
import KksystemsLearning from './pages/kksystems/Learning';
import KksystemsLearningDetails from './pages/kksystems/LearningDetails';
import KksystemsContact from './pages/kksystems/Contact';

function App() {
  return (
    <Router>
      <ErrorBoundary>
        <Routes>
          {/* Main Portfolio Layout Wrap */}
          <Route path="/" element={<PortfolioLayout />}>
            <Route index element={<HomePage />} />
            <Route path="work" element={<WorkPage />} />
            <Route path="learning" element={<LearningPage />} />
            <Route path="learning/materials" element={<LearningMaterials />} />
            <Route path="learning/materials/:slug" element={<MaterialDetail />} />
            <Route path="learning/:slug" element={<LearningDetail />} />
            <Route path="our-projects/:projectSlug" element={<ProjectDetail />} />
          </Route>

          {/* New Company Website Layout Wrap */}
          <Route path="/kksystems" element={<KksystemsLayout />}>
            <Route index element={<KksystemsHome />} />
            <Route path="work" element={<KksystemsWork />} />
            <Route path="work/:id" element={<KksystemsWorkDetails />} />
            <Route path="learning" element={<KksystemsLearning />} />
            <Route path="learning/:id" element={<KksystemsLearningDetails />} />
            <Route path="contact" element={<KksystemsContact />} />
          </Route>
        </Routes>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
