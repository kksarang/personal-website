import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import PortfolioLayout from './layouts/PortfolioLayout';
import KksystemsLayout from './layouts/KksystemsLayout';
import HomePage from './components/HomePage';
import ErrorBoundary from './components/ErrorBoundary';

const ProjectDetail = lazy(() => import('./components/Projects/ProjectDetail'));
const WorkPage = lazy(() => import('./components/Work/WorkPage'));
const LearningPage = lazy(() => import('./components/Learning/LearningPage'));
const LearningMaterials = lazy(() => import('./components/Learning/LearningMaterials'));
const MaterialDetail = lazy(() => import('./components/Learning/MaterialDetail'));
const LearningDetail = lazy(() => import('./components/Learning/LearningDetail'));

// KKSYSTEMS multi-page imports
const KksystemsHome = lazy(() => import('./pages/kksystems/Home'));
const KksystemsWork = lazy(() => import('./pages/kksystems/Work'));
const KksystemsWorkDetails = lazy(() => import('./pages/kksystems/WorkDetails'));
const KksystemsLearning = lazy(() => import('./pages/kksystems/Learning'));
const KksystemsLearningDetails = lazy(() => import('./pages/kksystems/LearningDetails'));
const KksystemsLearningPractice = lazy(() => import('./pages/kksystems/LearningPractice'));
const KksystemsLearningLiveCode = lazy(() => import('./pages/kksystems/LearningLiveCode'));
const KksystemsContact = lazy(() => import('./pages/kksystems/Contact'));
const KksystemsAbout = lazy(() => import('./pages/kksystems/About'));
const KksystemsServices = lazy(() => import('./pages/kksystems/Services'));
const CoreHexenity = lazy(() => import('./pages/kksystems/CoreHexenity'));
const HexenityAI = lazy(() => import('./pages/kksystems/HexenityAI'));
const HexenitySaaS = lazy(() => import('./pages/kksystems/HexenitySaaS'));
const HexenitySaaSDemo = lazy(() => import('./pages/kksystems/HexenitySaaSDemo'));
const ServiceDetail = lazy(() => import('./components/KkSystems/ServiceDetail'));
const ExpenserLanding = lazy(() => import('./pages/ExpenserLanding'));

// Solution Pages
const MobileSolutions = lazy(() => import('./pages/kksystems/solutions/MobileSolutions'));
const WebSolutions = lazy(() => import('./pages/kksystems/solutions/WebSolutions'));
const ERPSolutions = lazy(() => import('./pages/kksystems/solutions/ERPSolutions'));
const MobileAppDevDetail = lazy(() => import('./pages/kksystems/MobileAppDevDetail'));

// ERP Imports
const ERPDashboard = lazy(() => import('./pages/kksystems/erp/Dashboard'));
const ERPEmployees = lazy(() => import('./pages/kksystems/erp/Employees'));
const ERPInventory = lazy(() => import('./pages/kksystems/erp/Inventory'));
const ERPAnalytics = lazy(() => import('./pages/kksystems/erp/Analytics'));
const ERPCustomers = lazy(() => import('./pages/kksystems/erp/Customers'));
const ERPClients = lazy(() => import('./pages/kksystems/erp/Clients'));
const ERPProjects = lazy(() => import('./pages/kksystems/erp/Projects'));
const ERPSites = lazy(() => import('./pages/kksystems/erp/Sites'));

function KksystemsLegacyRedirect() {
  const location = useLocation();
  const newPathname = location.pathname.replace(/^\/kksystems/, '/hexenity');

  return (
    <Navigate
      to={{
        pathname: newPathname,
        search: location.search,
        hash: location.hash,
      }}
      replace
    />
  );
}

function RouteLoader() {
  return (
    <div className="flex min-h-[30vh] items-center justify-center">
      <div className="h-7 w-7 animate-spin rounded-full border-2 border-indigo-500/40 border-t-indigo-500" />
    </div>
  );
}

function App() {
  return (
    <Router>
      <ErrorBoundary>
        <Suspense fallback={<RouteLoader />}>
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
            <Route path="/hexenity" element={<KksystemsLayout />}>
              <Route index element={<KksystemsHome />} />
              <Route path="services" element={<KksystemsServices />} />
              <Route path="services/:slug" element={<ServiceDetail />} />
              <Route path="work" element={<KksystemsWork />} />
              <Route path="work/:id" element={<KksystemsWorkDetails />} />
              <Route path="learning" element={<KksystemsLearning />} />
              <Route path="learning/practice" element={<KksystemsLearningPractice />} />
              <Route path="learning/practice/live" element={<KksystemsLearningLiveCode />} />
              <Route path="learning/:id" element={<KksystemsLearningDetails />} />
              <Route path="core-hexenity" element={<CoreHexenity />} />
              <Route path="ai" element={<HexenityAI />} />
              <Route path="saas" element={<HexenitySaaS />} />
              <Route path="saas/demo" element={<HexenitySaaSDemo />} />
              <Route path="contact" element={<KksystemsContact />} />
              <Route path="about" element={<KksystemsAbout />} />

              {/* ERP Routes */}
              <Route path="erp/dashboard" element={<ERPDashboard />} />
              <Route path="erp/employees" element={<ERPEmployees />} />
              <Route path="erp/inventory" element={<ERPInventory />} />
              <Route path="erp/analytics" element={<ERPAnalytics />} />
              <Route path="erp/customers" element={<ERPCustomers />} />
              <Route path="erp/clients" element={<ERPClients />} />
              <Route path="erp/projects" element={<ERPProjects />} />
              <Route path="erp/sites" element={<ERPSites />} />

              {/* Solution Detail Pages */}
              <Route path="solutions/mobile" element={<MobileSolutions />} />
              <Route path="solutions/mobile-detail" element={<MobileAppDevDetail />} />
              <Route path="solutions/web" element={<WebSolutions />} />
              <Route path="solutions/erp" element={<ERPSolutions />} />
            </Route>

            {/* Legacy: redirect old /kksystems URLs */}
            <Route path="/kksystems/*" element={<KksystemsLegacyRedirect />} />

            {/* Expenser Landing Page */}
            <Route path="/expenser" element={<ExpenserLanding />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
