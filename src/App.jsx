import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import PortfolioLayout from './layouts/PortfolioLayout';
import KksystemsLayout from './layouts/KksystemsLayout';
import HomePage from './components/HomePage';
import ErrorBoundary from './components/ErrorBoundary';
import SeoManager from './components/SeoManager';
import { lazyRoute } from './utils/lazyRoute';

const ProjectDetail = lazyRoute(() => import('./components/Projects/ProjectDetail'));
const WorkPage = lazyRoute(() => import('./components/Work/WorkPage'));
const LearningPage = lazyRoute(() => import('./components/Learning/LearningPage'));
const LearningMaterials = lazyRoute(() => import('./components/Learning/LearningMaterials'));
const MaterialDetail = lazyRoute(() => import('./components/Learning/MaterialDetail'));
const LearningDetail = lazyRoute(() => import('./components/Learning/LearningDetail'));

// KKSYSTEMS multi-page imports
const KksystemsHome = lazyRoute(() => import('./pages/kksystems/Home'));
const KksystemsWork = lazyRoute(() => import('./pages/kksystems/Work'));
const KksystemsWorkDetails = lazyRoute(() => import('./pages/kksystems/WorkDetails'));
const KksystemsLearning = lazyRoute(() => import('./pages/kksystems/Learning'));
const KksystemsLearningDetails = lazyRoute(() => import('./pages/kksystems/LearningDetails'));
const KksystemsLearningPractice = lazyRoute(() => import('./pages/kksystems/LearningPractice'));
const KksystemsLearningLiveCode = lazyRoute(() => import('./pages/kksystems/LearningLiveCode'));
const KksystemsContact = lazyRoute(() => import('./pages/kksystems/Contact'));
const KksystemsAbout = lazyRoute(() => import('./pages/kksystems/About'));
const KksystemsServices = lazyRoute(() => import('./pages/kksystems/Services'));
const CoreHexenity = lazyRoute(() => import('./pages/kksystems/CoreHexenity'));
const HexenityAI = lazyRoute(() => import('./pages/kksystems/HexenityAI'));
const HexenitySaaS = lazyRoute(() => import('./pages/kksystems/HexenitySaaS'));
const HexenitySaaSDemo = lazyRoute(() => import('./pages/kksystems/HexenitySaaSDemo'));
const CleansoLaundry = lazyRoute(() => import('./pages/kksystems/solutions/CleansoLaundry'));
const ServiceDetail = lazyRoute(() => import('./components/KkSystems/ServiceDetail'));
const ExpenserLanding = lazyRoute(() => import('./pages/ExpenserLanding'));

// Solution Pages
const MobileSolutions = lazyRoute(() => import('./pages/kksystems/solutions/MobileSolutions'));
const WebSolutions = lazyRoute(() => import('./pages/kksystems/solutions/WebSolutions'));
const ERPSolutions = lazyRoute(() => import('./pages/kksystems/solutions/ERPSolutions'));
const MobileAppDevDetail = lazyRoute(() => import('./pages/kksystems/MobileAppDevDetail'));

// ERP Imports
const ERPDashboard = lazyRoute(() => import('./pages/kksystems/erp/Dashboard'));
const ERPEmployees = lazyRoute(() => import('./pages/kksystems/erp/Employees'));
const ERPInventory = lazyRoute(() => import('./pages/kksystems/erp/Inventory'));
const ERPAnalytics = lazyRoute(() => import('./pages/kksystems/erp/Analytics'));
const ERPCustomers = lazyRoute(() => import('./pages/kksystems/erp/Customers'));
const ERPClients = lazyRoute(() => import('./pages/kksystems/erp/Clients'));
const ERPProjects = lazyRoute(() => import('./pages/kksystems/erp/Projects'));
const ERPSites = lazyRoute(() => import('./pages/kksystems/erp/Sites'));

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
      <SeoManager />
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
              <Route path="solutions/laundry" element={<CleansoLaundry />} />
              <Route path="cleanso" element={<CleansoLaundry />} />
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
