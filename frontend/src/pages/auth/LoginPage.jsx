import React, { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import {
  ArrowRight,
  Eye,
  EyeOff,
  Mail,
  Lock,
  LoaderCircle,
  GraduationCap,
  Sparkles,
  CheckCircle2,
  ArrowLeft,
  Cpu,
  BriefcaseBusiness
} from "lucide-react";

import Logo from "../../components/common/Logo.jsx";
import AuthLayout from "./AuthLayout.jsx";
import { loginUser } from "../../services/authService.js";
import { useNexora } from "../../context/NexoraContext.jsx";
import "./auth.css";

export default function LoginPage() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const { setActivePortal, setUser, applyFresherPreset } = useNexora();

  const initialType = searchParams.get("type") || searchParams.get("role");
  const [selectedPortal, setSelectedPortal] = useState(
    initialType === "college"
      ? "college"
      : initialType === "fresher"
      ? "fresher"
      : initialType === "student"
      ? "student"
      : null
  );

  React.useEffect(() => {
    const t = searchParams.get("type") || searchParams.get("role");
    if (["student", "college", "fresher"].includes(t)) {
      setSelectedPortal(t);
      setActivePortal(t);
    }
  }, [searchParams, setActivePortal]);

  const [form, setForm] = useState({
    email: localStorage.getItem("nexora-remember-email") || "",
    password: ""
  });

  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const update = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    });
    setError("");
  };

  const submit = async (event) => {
    event.preventDefault();
    setError("");

    const email = form.email.trim();
    const password = form.password;

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!password) {
      setError("Please enter your password.");
      return;
    }

    setLoading(true);

    try {
      const data = await loginUser({
        email,
        password,
        userType: selectedPortal || "student"
      });

      if (data.token) {
        localStorage.setItem("nexora-token", data.token);
      }

      if (data.user) {
        localStorage.setItem("nexora-user", JSON.stringify(data.user));
        if (setUser) setUser(data.user);
      }

      if (remember) {
        localStorage.setItem("nexora-remember-email", email);
      } else {
        localStorage.removeItem("nexora-remember-email");
      }

      const dest =
        selectedPortal === "college"
          ? "/college"
          : selectedPortal === "fresher"
          ? "/fresher"
          : "/student";

      setActivePortal(selectedPortal || "student");
      navigate(dest);
    } catch (err) {
      setError(err.message || "Unable to sign in. Please verify your credentials.");
    } finally {
      setLoading(false);
    }
  };

  const handleSelectPortal = (type) => {
    setSelectedPortal(type);
    setActivePortal(type);
    setError("");
    setSearchParams({ type });
  };

  const handleBackToPortals = () => {
    setSelectedPortal(null);
    setError("");
    setSearchParams({});
  };

  // Instant 1-click evaluation sign in
  const quickDemoLogin = async (e, email, pass, userType, presetId) => {
    if (e) e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const data = await loginUser({
        email,
        password: pass,
        userType
      });

      if (data.token) {
        localStorage.setItem("nexora-token", data.token);
      }

      if (data.user) {
        localStorage.setItem("nexora-user", JSON.stringify(data.user));
        if (setUser) setUser(data.user);
      }

      if (presetId && applyFresherPreset) {
        applyFresherPreset(presetId);
      }

      setActivePortal(userType);
      const dest = userType === "college" ? "/college" : userType === "fresher" ? "/fresher" : "/student";
      navigate(dest);
    } catch {
      const fallbackUser = {
        name: email.split("@")[0],
        email,
        userType
      };
      localStorage.setItem("nexora-user", JSON.stringify(fallbackUser));
      if (setUser) setUser(fallbackUser);

      if (presetId && applyFresherPreset) {
        applyFresherPreset(presetId);
      }

      setActivePortal(userType);
      const dest = userType === "college" ? "/college" : userType === "fresher" ? "/fresher" : "/student";
      navigate(dest);
    } finally {
      setLoading(false);
    }
  };

  // =========================================================================
  // VIEW 1: THE THREE-OPTION PORTAL CHOOSER
  // =========================================================================
  if (!selectedPortal) {
    return (
      <div className="nx-portal-gateway-root">
        {/* Top Navbar */}
        <header className="nx-portal-gateway-nav">
          <Logo />
          <Link to="/" className="nx-portal-back-link">
            <ArrowLeft size={14} />
            <span>Return to Home</span>
          </Link>
        </header>

        {/* Center Section: THREE PORTAL OPTIONS */}
        <main className="nx-portal-gateway-main">
          <div className="nx-portal-gateway-header">
            <span className="nx-portal-gateway-eyebrow">
              <Sparkles size={14} />
              AUTHENTICATION PORTAL
            </span>
            <h1 className="nx-portal-gateway-title">
              Select Your Portal to Continue
            </h1>
            <p className="nx-portal-gateway-subtitle">
              Choose your profile to sign in or get started. Dedicated portals for School Students, College Learners, and Freshers looking for new jobs.
            </p>
          </div>

          <div className="nx-portal-grid-3col">
            {/* BOX 1: SCHOOL STUDENT */}
            <div
              className="nx-portal-card-box student"
              onClick={() => handleSelectPortal("student")}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && handleSelectPortal("student")}
            >
              <div className="nx-portal-box-top">
                <span className="nx-portal-kicker-pill blue">
                  <GraduationCap size={15} />
                  SCHOOL STUDENT
                </span>
                <div className="nx-portal-box-indicator">
                  <ArrowRight size={17} />
                </div>
              </div>

              <div className="nx-portal-box-bottom">
                <h2 className="nx-portal-box-h2">School Students</h2>
                <p className="nx-portal-box-desc">
                  For Class 8–12 CBSE, ICSE, and state boards. Excel in academics and learn future skills like Python, AI, and Web Design early while in school.
                </p>

                <ul className="nx-portal-highlights">
                  <li>
                    <CheckCircle2 size={15} />
                    <span>Skills to learn while being in school</span>
                  </li>
                  <li>
                    <CheckCircle2 size={15} />
                    <span>Board Exam Syllabus & Math/Science Pointers</span>
                  </li>
                  <li>
                    <CheckCircle2 size={15} />
                    <span>Interactive School AI Tutor</span>
                  </li>
                </ul>

                <div className="nx-portal-cta-group">
                  <button
                    type="button"
                    className="nx-portal-primary-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSelectPortal("student");
                    }}
                  >
                    <span>Sign In as School Student</span>
                    <ArrowRight size={16} />
                  </button>

                  <div className="nx-portal-sub-row">
                    <span>New student?</span>
                    <Link
                      to="/register?type=student"
                      className="nx-portal-sub-link"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Sign Up Here ↗
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* BOX 2: COLLEGE STUDENT */}
            <div
              className="nx-portal-card-box college"
              onClick={() => handleSelectPortal("college")}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && handleSelectPortal("college")}
            >
              <div className="nx-portal-box-top">
                <span className="nx-portal-kicker-pill purple">
                  <Cpu size={15} />
                  COLLEGE STUDENT
                </span>
                <div className="nx-portal-box-indicator">
                  <ArrowRight size={17} />
                </div>
              </div>

              <div className="nx-portal-box-bottom">
                <h2 className="nx-portal-box-h2">College & University</h2>
                <p className="nx-portal-box-desc">
                  For B.Tech, BCA, B.Sc, B.Com, MCA students. Master Java, Spring Boot, React, and Data Structures for campus placements and internships.
                </p>

                <ul className="nx-portal-highlights">
                  <li>
                    <CheckCircle2 size={15} />
                    <span>Java 17, Spring Boot 3 & React 19 Tracks</span>
                  </li>
                  <li>
                    <CheckCircle2 size={15} />
                    <span>Campus Placement DSA & Mock Assessments</span>
                  </li>
                  <li>
                    <CheckCircle2 size={15} />
                    <span>Standout Capstone Projects for Resume</span>
                  </li>
                </ul>

                <div className="nx-portal-cta-group">
                  <button
                    type="button"
                    className="nx-portal-primary-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSelectPortal("college");
                    }}
                  >
                    <span>Sign In as College Student</span>
                    <ArrowRight size={16} />
                  </button>

                  <div className="nx-portal-sub-row">
                    <span>New college student?</span>
                    <Link
                      to="/register?type=college"
                      className="nx-portal-sub-link"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Sign Up Here ↗
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* BOX 3: FRESHER JOB SEEKER */}
            <div
              className="nx-portal-card-box fresher"
              onClick={() => handleSelectPortal("fresher")}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && handleSelectPortal("fresher")}
            >
              <div className="nx-portal-box-top">
                <span className="nx-portal-kicker-pill green">
                  <BriefcaseBusiness size={15} />
                  FRESHER (JOB SEEKER)
                </span>
                <div className="nx-portal-box-indicator">
                  <ArrowRight size={17} />
                </div>
              </div>

              <div className="nx-portal-box-bottom">
                <h2 className="nx-portal-box-h2">Freshers Seeking Jobs</h2>
                <p className="nx-portal-box-desc">
                  For recent graduates searching for entry-level tech roles. Land your first job with ATS resume calibration, job openings, and interview prep.
                </p>

                <ul className="nx-portal-highlights">
                  <li>
                    <CheckCircle2 size={15} />
                    <span>Verified Fresh Graduate Openings (₹5-12 LPA)</span>
                  </li>
                  <li>
                    <CheckCircle2 size={15} />
                    <span>ATS Keyword Screening & Skill Deficit Radar</span>
                  </li>
                  <li>
                    <CheckCircle2 size={15} />
                    <span>AI Mock Technical Interview Simulator</span>
                  </li>
                </ul>

                <div className="nx-portal-cta-group">
                  <button
                    type="button"
                    className="nx-portal-primary-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSelectPortal("fresher");
                    }}
                  >
                    <span>Sign In as Job Fresher</span>
                    <ArrowRight size={16} />
                  </button>

                  <div className="nx-portal-sub-row">
                    <span>New job seeker?</span>
                    <Link
                      to="/register?type=fresher"
                      className="nx-portal-sub-link"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Sign Up Here ↗
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  // =========================================================================
  // VIEW 2: DEDICATED SIGN IN FORM FOR SELECTED PORTAL
  // =========================================================================
  const portalHeading =
    selectedPortal === "college"
      ? "College & University Portal"
      : selectedPortal === "fresher"
      ? "Fresher Job Seeker Portal"
      : "School Student Portal";

  return (
    <AuthLayout
      eyebrow={portalHeading.toUpperCase()}
      title="Welcome back."
      description={`Enter your email and credentials to continue to the ${portalHeading}.`}
    >
      <button
        type="button"
        onClick={handleBackToPortals}
        className="nx-auth-back-to-portals-btn"
      >
        <ArrowLeft size={14} />
        <span>Switch Portal Type</span>
      </button>

      {/* Instant 1-Click Evaluation Sign In */}
      <div className="nx-auth-demo-banner">
        <div className="nx-auth-demo-header">
          <Sparkles size={14} />
          <span>INSTANT 1-CLICK DEMO LOGIN:</span>
        </div>
        <div className="nx-auth-demo-actions">
          {selectedPortal === "student" && (
            <button
              type="button"
              className="nx-auth-demo-btn active"
              onClick={(e) =>
                quickDemoLogin(e, "student@nexora.ai", "DemoStudent123!", "student", "school-preset")
              }
            >
              Demo School Student (Class 10)
            </button>
          )}

          {selectedPortal === "college" && (
            <button
              type="button"
              className="nx-auth-demo-btn active"
              onClick={(e) =>
                quickDemoLogin(e, "college@nexora.ai", "DemoCollege123!", "college", "college-preset")
              }
            >
              Demo College Engineer (B.Tech)
            </button>
          )}

          {selectedPortal === "fresher" && (
            <button
              type="button"
              className="nx-auth-demo-btn active"
              onClick={(e) =>
                quickDemoLogin(e, "fresher@nexora.ai", "DemoFresher123!", "fresher", "fresher-preset")
              }
            >
              Demo Job Fresher (Junior SDE)
            </button>
          )}
        </div>
      </div>

      <form className="nx-auth-form" onSubmit={submit} noValidate>
        {error && <div className="nx-auth-error">{error}</div>}

        <label className="nx-auth-label">
          <span>Email address</span>
          <div className="nx-auth-input-wrap">
            <Mail size={16} className="nx-auth-icon" />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={update}
              placeholder="you@domain.com"
              autoComplete="email"
              required
            />
          </div>
        </label>

        <label className="nx-auth-label">
          <div className="nx-auth-label-row">
            <span>Password</span>
            <Link to="/forgot-password" tabIndex={-1}>
              Forgot password?
            </Link>
          </div>
          <div className="nx-auth-input-wrap">
            <Lock size={16} className="nx-auth-icon" />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={form.password}
              onChange={update}
              placeholder="Enter your password"
              autoComplete="current-password"
              required
            />
            <button
              type="button"
              className="nx-auth-toggle-pwd"
              onClick={() => setShowPassword((val) => !val)}
              tabIndex={-1}
            >
              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
        </label>

        <div className="nx-auth-row">
          <label className="nx-auth-checkbox">
            <input
              type="checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
            />
            <span>Remember me for 30 days</span>
          </label>
        </div>

        <button type="submit" className="nx-auth-submit" disabled={loading}>
          {loading ? (
            <>
              <LoaderCircle size={18} className="nx-spin" />
              <span>Signing in...</span>
            </>
          ) : (
            <>
              <span>Sign in to {selectedPortal} workspace</span>
              <ArrowRight size={16} />
            </>
          )}
        </button>

        <div className="nx-auth-footer">
          <span>New to NEXORA?</span>
          <Link to={`/register?type=${selectedPortal}`}>
            Create a {selectedPortal} account
          </Link>
        </div>
      </form>
    </AuthLayout>
  );
}
