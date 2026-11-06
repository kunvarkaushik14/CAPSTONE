import React, { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import {
  ArrowRight,
  Eye,
  EyeOff,
  UserRound,
  Mail,
  Lock,
  LoaderCircle,
  Check,
  GraduationCap,
  Sparkles,
  ArrowLeft,
  CheckCircle2,
  Cpu,
  BriefcaseBusiness,
  BookOpen
} from "lucide-react";

import Logo from "../../components/common/Logo.jsx";
import AuthLayout from "./AuthLayout.jsx";
import { registerUser } from "../../services/authService.js";
import { useNexora } from "../../context/NexoraContext.jsx";
import "./auth.css";

export default function RegisterPage() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const { setActivePortal } = useNexora();

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

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    currentGradeOrDegree: ""
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const update = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    });
    setError("");
  };

  const passwordChecks = [
    { label: "At least 8 characters", valid: form.password.length >= 8 },
    { label: "One uppercase letter", valid: /[A-Z]/.test(form.password) },
    { label: "One number", valid: /[0-9]/.test(form.password) }
  ];

  const submit = async (event) => {
    event.preventDefault();
    setError("");

    const name = form.name.trim();
    const email = form.email.trim();

    if (name.length < 2) {
      setError("Please enter your name.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!passwordChecks.every((check) => check.valid)) {
      setError("Please meet all password security requirements.");
      return;
    }

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (!accepted) {
      setError("Please agree to the Terms of Service to create an account.");
      return;
    }

    setLoading(true);

    try {
      const data = await registerUser({
        name,
        email,
        password: form.password,
        userType: selectedPortal || "student",
        currentGradeOrDegree: form.currentGradeOrDegree
      });

      if (data.token) {
        localStorage.setItem("nexora-token", data.token);
      }

      if (data.user) {
        localStorage.setItem("nexora-user", JSON.stringify(data.user));
      }

      setActivePortal(selectedPortal || "student");
      // Direct user into the adaptive 6-8 questions assessment wizard!
      navigate(`/onboarding?role=${selectedPortal || "student"}`);
    } catch (err) {
      setError(err.message || "Registration failed. Please try again.");
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

  // =========================================================================
  // VIEW 1: THE THREE-OPTION PORTAL CHOOSER FOR REGISTRATION
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

        {/* Center Section */}
        <main className="nx-portal-gateway-main">
          <div className="nx-portal-gateway-header">
            <span className="nx-portal-gateway-eyebrow">
              <Sparkles size={14} />
              NEW ACCOUNT REGISTRATION
            </span>
            <h1 className="nx-portal-gateway-title">
              Choose Your Registration Category
            </h1>
            <p className="nx-portal-gateway-subtitle">
              Select your track below to create your account, answer 6 to 8 quick questions, and generate your customized AI learning profile.
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
                  Class 8, 9, 10, 11 & 12 scholars. Add new skills you want to learn while in school (Python, AI basics, web development) alongside board exams.
                </p>

                <ul className="nx-portal-highlights">
                  <li>
                    <CheckCircle2 size={15} />
                    <span>6–8 Adaptive School Scholar Questions</span>
                  </li>
                  <li>
                    <CheckCircle2 size={15} />
                    <span>Explore & Add Skills While in School</span>
                  </li>
                  <li>
                    <CheckCircle2 size={15} />
                    <span>Dedicated School Student Portal</span>
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
                    <span>Register as School Student</span>
                    <ArrowRight size={16} />
                  </button>

                  <div className="nx-portal-sub-row">
                    <span>Already registered?</span>
                    <Link
                      to="/login?type=student"
                      className="nx-portal-sub-link"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Sign In ↗
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
                  For B.Tech, BCA, B.Sc, B.Com, MCA students. Master Java, Spring Boot, React, and DSA to secure top tier-1 placements and internships.
                </p>

                <ul className="nx-portal-highlights">
                  <li>
                    <CheckCircle2 size={15} />
                    <span>6–8 Degree & Tech Track Questions</span>
                  </li>
                  <li>
                    <CheckCircle2 size={15} />
                    <span>Spring Boot & React Placement Roadmaps</span>
                  </li>
                  <li>
                    <CheckCircle2 size={15} />
                    <span>Dedicated College Portal & Project Lab</span>
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
                    <span>Register as College Student</span>
                    <ArrowRight size={16} />
                  </button>

                  <div className="nx-portal-sub-row">
                    <span>Already registered?</span>
                    <Link
                      to="/login?type=college"
                      className="nx-portal-sub-link"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Sign In ↗
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
                    <span>6–8 Job Hunt & Interview Questions</span>
                  </li>
                  <li>
                    <CheckCircle2 size={15} />
                    <span>Live Job Openings & Skill Gap Radar</span>
                  </li>
                  <li>
                    <CheckCircle2 size={15} />
                    <span>Dedicated Fresher Job Portal</span>
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
                    <span>Register as Job Fresher</span>
                    <ArrowRight size={16} />
                  </button>

                  <div className="nx-portal-sub-row">
                    <span>Already registered?</span>
                    <Link
                      to="/login?type=fresher"
                      className="nx-portal-sub-link"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Sign In ↗
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
  // VIEW 2: REGISTRATION FORM FOR THE SELECTED PORTAL
  // =========================================================================
  const portalHeading =
    selectedPortal === "college"
      ? "College Student Account"
      : selectedPortal === "fresher"
      ? "Fresher Job Seeker Account"
      : "School Student Account";

  return (
    <AuthLayout
      eyebrow={portalHeading.toUpperCase()}
      title="Create your account."
      description="Register your credentials. Next, you will answer 6 to 8 quick questions to craft your personalized AI profile."
    >
      <button
        type="button"
        onClick={handleBackToPortals}
        className="nx-auth-back-to-portals-btn"
      >
        <ArrowLeft size={14} />
        <span>Switch Category Type</span>
      </button>

      <form className="nx-auth-form" onSubmit={submit} noValidate>
        {error && <div className="nx-auth-error">{error}</div>}

        <label className="nx-auth-label">
          <span>Full name</span>
          <div className="nx-auth-input-wrap">
            <UserRound size={16} className="nx-auth-icon" />
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={update}
              placeholder="E.g. Aarav Sharma"
              autoComplete="name"
              required
            />
          </div>
        </label>

        <label className="nx-auth-label">
          <span>
            {selectedPortal === "student"
              ? "Current Class / Grade"
              : selectedPortal === "college"
              ? "Degree & Branch"
              : "Graduation Degree & Year"}
          </span>
          <div className="nx-auth-input-wrap">
            <BookOpen size={16} className="nx-auth-icon" />
            <input
              type="text"
              name="currentGradeOrDegree"
              value={form.currentGradeOrDegree}
              onChange={update}
              placeholder={
                selectedPortal === "student"
                  ? "E.g. Class 10 (Secondary Board)"
                  : selectedPortal === "college"
                  ? "E.g. B.Tech Computer Science (3rd Yr)"
                  : "E.g. B.Tech Graduate (2025/2026 Batch)"
              }
            />
          </div>
        </label>

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
          <span>Password</span>
          <div className="nx-auth-input-wrap">
            <Lock size={16} className="nx-auth-icon" />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={form.password}
              onChange={update}
              placeholder="Create a strong password"
              autoComplete="new-password"
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

        <ul className="nx-auth-checks">
          {passwordChecks.map((check) => (
            <li key={check.label} className={check.valid ? "valid" : ""}>
              <span className="nx-auth-bullet">
                {check.valid && <Check size={11} strokeWidth={3} />}
              </span>
              <span>{check.label}</span>
            </li>
          ))}
        </ul>

        <label className="nx-auth-label">
          <span>Confirm password</span>
          <div className="nx-auth-input-wrap">
            <Lock size={16} className="nx-auth-icon" />
            <input
              type={showConfirm ? "text" : "password"}
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={update}
              placeholder="Repeat your password"
              autoComplete="new-password"
              required
            />
            <button
              type="button"
              className="nx-auth-toggle-pwd"
              onClick={() => setShowConfirm((val) => !val)}
              tabIndex={-1}
            >
              {showConfirm ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
        </label>

        <label className="nx-auth-checkbox">
          <input
            type="checkbox"
            checked={accepted}
            onChange={(e) => setAccepted(e.target.checked)}
          />
          <span>
            I agree to the <Link to="/terms">Terms of Service</Link> and{" "}
            <Link to="/privacy">Privacy Policy</Link>.
          </span>
        </label>

        <button type="submit" className="nx-auth-submit" disabled={loading}>
          {loading ? (
            <>
              <LoaderCircle size={18} className="nx-spin" />
              <span>Creating account...</span>
            </>
          ) : (
            <>
              <span>Continue to 6-8 Questions Assessment</span>
              <ArrowRight size={16} />
            </>
          )}
        </button>

        <div className="nx-auth-footer">
          <span>Already have a {selectedPortal} account?</span>
          <Link to={`/login?type=${selectedPortal}`}>Sign in</Link>
        </div>
      </form>
    </AuthLayout>
  );
}
