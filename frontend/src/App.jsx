import React from "react";
import { Routes, Route, Navigate, Link } from "react-router-dom";

import { NexoraProvider } from "./context/NexoraContext.jsx";
import LandingPage from "./pages/landing/LandingPage.jsx";
import LoginPage from "./pages/auth/LoginPage.jsx";
import RegisterPage from "./pages/auth/RegisterPage.jsx";
import OnboardingPage from "./pages/onboarding/OnboardingPage.jsx";
import DashboardLayout from "./layouts/DashboardLayout.jsx";

import DashboardPage from "./pages/workspace/DashboardPage.jsx";
import DiscoverPage from "./pages/workspace/DiscoverPage.jsx";
import SkillsPage from "./pages/workspace/SkillsPage.jsx";
import RoadmapPage from "./pages/workspace/RoadmapPage.jsx";
import NexoraAiPage from "./pages/workspace/NexoraAiPage.jsx";
import SavedPage from "./pages/workspace/SavedPage.jsx";
import ProfilePage from "./pages/workspace/ProfilePage.jsx";
import AnalyticsPage from "./pages/workspace/AnalyticsPage.jsx";

// Three dedicated websites/portals: School Student, College, and Fresher
import StudentPortalPage from "./pages/portals/StudentPortalPage.jsx";
import CollegePortalPage from "./pages/portals/CollegePortalPage.jsx";
import FresherPortalPage from "./pages/portals/FresherPortalPage.jsx";

import "./pages/auth/auth.css";
import "./pages/portals/portals.css";
import "./pages/onboarding/onboarding.css";
import "./pages/workspace/workspace.css";

function ForgotPasswordPage() {
  return (
    <section className="coming-soon">
      <p className="eyebrow">ACCOUNT SUPPORT</p>
      <h1>Reset your password.</h1>
      <p>
        You can sign in immediately using the Demo Accounts on the Sign In page, or register a new account.
      </p>
      <Link to="/login" className="primary-button">Return to sign in</Link>
    </section>
  );
}

function LegalPage({ title }) {
  return (
    <section className="coming-soon">
      <p className="eyebrow">NEXORA</p>
      <h1>{title}</h1>
      <p>Your career profile, skill data, and study notes are stored privately for your personalised career intelligence.</p>
      <Link to="/register" className="primary-button">Return to registration</Link>
    </section>
  );
}

function App() {
  const logout = () => {
    localStorage.removeItem("nexora-token");
    localStorage.removeItem("nexora-user");
    localStorage.removeItem("nexora-profile");
    localStorage.removeItem("nexora-progress");
    localStorage.removeItem("nexora-active-portal");
    localStorage.removeItem("nexora-role");
    window.location.href = "/login";
  };

  return (
    <NexoraProvider>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/terms" element={<LegalPage title="Terms of Service" />} />
        <Route path="/privacy" element={<LegalPage title="Privacy Policy" />} />
        <Route path="/onboarding" element={<OnboardingPage />} />

        {/* Dashboard Layout with Sidebar & Topbar for all Portal & Workspace routes */}
        <Route element={<DashboardLayout onLogout={logout} />}>
          {/* Dedicated 3 Portal Hubs */}
          <Route path="/student" element={<StudentPortalPage />} />
          <Route path="/college" element={<CollegePortalPage />} />
          <Route path="/fresher" element={<FresherPortalPage />} />

          {/* Unified Workspace with role adaptation */}
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/analytics" element={<AnalyticsPage />} />
          <Route path="/discover" element={<DiscoverPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/roadmap" element={<RoadmapPage />} />
          <Route path="/nexora-ai" element={<NexoraAiPage />} />
          <Route path="/saved" element={<SavedPage />} />
          <Route path="/profile" element={<ProfilePage />} />

          {/* Sub-portal routes inside dashboard layout */}
          <Route path="/student-hub" element={<StudentPortalPage />} />
          <Route path="/college-hub" element={<CollegePortalPage />} />
          <Route path="/fresher-hub" element={<FresherPortalPage />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </NexoraProvider>
  );
}

export default App;
