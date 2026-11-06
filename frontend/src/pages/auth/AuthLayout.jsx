import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Sparkles, GraduationCap, Cpu, BriefcaseBusiness } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "../../components/common/Logo.jsx";
import "./auth.css";

export default function AuthLayout({ children, mode = "login", userType = "student" }) {
  const isRegister = mode === "register";

  const isCollege = userType === "college";
  const isFresher = userType === "fresher";

  const visualPhoto = isCollege
    ? "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1800&q=90"
    : isFresher
    ? "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1800&q=90"
    : "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1800&q=90";

  return (
    <main className="auth-page">
      <section className="auth-visual">
        <Link to="/" className="auth-back">
          <ArrowLeft size={16} />
          Back to home
        </Link>

        <img
          className="auth-photo"
          src={visualPhoto}
          alt="Students and tech learners studying"
        />

        <div className="auth-photo-shade" />

        <div className="auth-photo-content">
          <span className="auth-photo-kicker">
            {isCollege ? (
              <Cpu size={14} />
            ) : isFresher ? (
              <BriefcaseBusiness size={14} />
            ) : (
              <GraduationCap size={14} />
            )}
            {isCollege
              ? "COLLEGE & UNIVERSITY TRACK"
              : isFresher
              ? "FRESHER JOB LAUNCHPAD"
              : "SCHOOL SCHOLAR TRACK"}
          </span>

          <motion.h1
            key={`${mode}-${userType}`}
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {isCollege ? (
              isRegister ? (
                <>Degree roadmap to<br />production <em>engineering.</em></>
              ) : (
                <>Spring Boot, React &<br />placement <em>readiness.</em></>
              )
            ) : isFresher ? (
              isRegister ? (
                <>Land your first<br />full-time <em>tech job.</em></>
              ) : (
                <>ATS calibration &<br />mock <em>interviews.</em></>
              )
            ) : isRegister ? (
              <>Learn future skills<br />early in <em>school.</em></>
            ) : (
              <>Board exams &<br />coding <em>clarity.</em></>
            )}
          </motion.h1>

          <p>
            {isCollege
              ? "Master Java, Spring Boot, React, and Data Structures to crack product placements."
              : isFresher
              ? "Target verified entry-level openings, optimize ATS resume keywords, and clear technical rounds."
              : "Excel in school exams while adding modern skills like Python, AI, and Web Design to your profile."}
          </p>

          <div className="auth-photo-footer">
            <span>01 — PERSONAL GROWTH</span>
            <span>
              {isCollege ? "COLLEGE PORTAL" : isFresher ? "FRESHER PORTAL" : "SCHOOL PORTAL"}
            </span>
          </div>
        </div>
      </section>

      <section className="auth-panel">
        <div className="auth-panel-top">
          <Logo />
          <span>CAREER INTELLIGENCE PLATFORM</span>
        </div>

        <div className="auth-form-wrap">
          {children}
        </div>
      </section>
    </main>
  );
}
