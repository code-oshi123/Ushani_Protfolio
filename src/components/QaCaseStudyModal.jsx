import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  CheckCircle2, 
  AlertCircle, 
  FileText, 
  Download, 
  ExternalLink, 
  ShieldCheck, 
  Maximize2, 
  ChevronDown, 
  ChevronUp, 
  Sparkles
} from 'lucide-react';

export default function QaCaseStudyModal({ isOpen, onClose }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [expandedCases, setExpandedCases] = useState({
    'AUTH-01': true,
    'AUTH-02': false,
    'AUTH-03': false,
    'AUTH-04': false,
  });
  const [imageErrors, setImageErrors] = useState({});

  // Prevent background scrolling and handle Escape key
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (selectedImage) {
          setSelectedImage(null);
        } else {
          onClose();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, selectedImage, onClose]);

  if (!isOpen) return null;

  const toggleCase = (id) => {
    setExpandedCases((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const expandAll = () => {
    setExpandedCases({
      'AUTH-01': true,
      'AUTH-02': true,
      'AUTH-03': true,
      'AUTH-04': true,
    });
  };

  const collapseAll = () => {
    setExpandedCases({
      'AUTH-01': false,
      'AUTH-02': false,
      'AUTH-03': false,
      'AUTH-04': false,
    });
  };

  const handleImageError = (id) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  // Test cases data strictly from SauceDemo_test_report.pdf
  const testCases = [
    {
      id: "AUTH-01",
      number: "1",
      module: "Authentication & Access Control",
      scenario: "Valid username and password",
      type: "Positive Testing",
      steps: [
        "Open SauceDemo (https://www.saucedemo.com).",
        "Enter valid username.",
        "Enter valid password.",
        "Click Login."
      ],
      testData: {
        username: "standard_user",
        password: "[valid password used during testing] (masked)"
      },
      preconditions: "SauceDemo login page is open and accessible.",
      expectedResult: "User should successfully log in.",
      actualResult: "User successfully logged in.",
      status: "Pass",
      errorMessage: null,
      screenshot: "/qa/auth-01.png",
      screenshotCaption: "SauceDemo Products Inventory catalog page displayed after successful login authentication."
    },
    {
      id: "AUTH-02",
      number: "2",
      module: "Authentication & Access Control",
      scenario: "Incorrect password",
      type: "Negative Testing",
      steps: [
        "Open SauceDemo.",
        "Enter valid username.",
        "Enter invalid password.",
        "Click Login."
      ],
      testData: {
        username: "standard_user",
        password: "[Invalid password used during testing] (masked)"
      },
      preconditions: "SauceDemo login page is open.",
      expectedResult: "Login should be prevented and an appropriate error message should appear.",
      actualResult: "Login was prevented.",
      status: "Pass",
      errorMessage: "Epic sadface: Username and password do not match any user in this service",
      screenshot: "/qa/auth-02.png",
      screenshotCaption: "Error banner displayed when an invalid password is provided for standard_user."
    },
    {
      id: "AUTH-03",
      number: "3",
      module: "Authentication & Access Control",
      scenario: "Both fields empty",
      type: "Negative Testing",
      steps: [
        "Open SauceDemo.",
        "Enter both fields empty.",
        "Click Login."
      ],
      testData: {
        username: "(empty)",
        password: "(empty)"
      },
      preconditions: "SauceDemo login page is open with blank input fields.",
      expectedResult: "Login should be prevented and an appropriate error message should appear.",
      actualResult: "An error message appeared.",
      status: "Pass",
      errorMessage: "Epic sadface: Username is required",
      screenshot: "/qa/auth-03.png",
      screenshotCaption: "Required field validation message displayed when submitting login form with empty credentials."
    },
    {
      id: "AUTH-04",
      number: "4",
      module: "Authentication & Access Control",
      scenario: "Valid username, empty password",
      type: "Negative Testing",
      steps: [
        "Open SauceDemo.",
        "Enter valid username.",
        "Enter empty password.",
        "Click Log In."
      ],
      testData: {
        username: "standard_user",
        password: "(empty field for password)"
      },
      preconditions: "SauceDemo login page is open with username populated.",
      expectedResult: "Login should be prevented and an appropriate error message should appear.",
      actualResult: "The system did not allow the user to log in.",
      status: "Pass",
      errorMessage: "Epic sadface: Password is required",
      screenshot: "/qa/auth-04.png",
      screenshotCaption: "Validation banner displayed requiring password when username is provided alone."
    }
  ];

  const toolsAndSkills = [
    "Manual Testing",
    "Functional Testing",
    "Positive Testing",
    "Negative Testing",
    "Test Case Design",
    "Bug Reporting",
    "Web Testing"
  ];

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-6 bg-[#1F0C31]/70 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="qa-case-study-title"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 20 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="bg-[#FAF8FE] border border-[#ECE4FA] rounded-[28px] sm:rounded-[36px] w-full max-w-4xl max-h-[92vh] flex flex-col shadow-2xl relative overflow-hidden my-auto"
      >
        {/* TOP BAR / HEADER */}
        <div className="sticky top-0 z-30 bg-[#FAF8FE]/95 backdrop-blur-md px-6 sm:px-8 py-5 border-b border-[#ECE4FA] flex items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-full bg-[#5D3EA8] text-white flex items-center justify-center text-xs font-bold shadow-xs">
              QA
            </span>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold tracking-[0.2em] text-[#8B6EED] uppercase">
                  MANUAL TESTING CASE STUDY
                </span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  100% Pass
                </span>
              </div>
              <h2 id="qa-case-study-title" className="text-lg sm:text-xl font-serif font-bold text-[#3B1C54]">
                SauceDemo Login Functionality
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/SauceDemo_test_report.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-[#DDD3F5] text-xs font-semibold text-[#5D3EA8] hover:bg-[#FAF8FE] hover:border-[#8B5CF6] transition-colors shadow-2xs"
              title="Open official PDF test report"
            >
              <FileText className="w-3.5 h-3.5 text-[#8B5CF6]" />
              <span>PDF Report</span>
              <ExternalLink className="w-3 h-3 opacity-60" />
            </a>

            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white border border-[#DDD3F5] text-[#3B1C54] hover:bg-[#5D3EA8] hover:text-white flex items-center justify-center transition-all cursor-pointer shadow-2xs"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* MODAL BODY (SCROLLABLE) */}
        <div className="overflow-y-auto px-6 sm:px-8 py-6 space-y-8 text-[#2D2633]">
          
          {/* SECTION A: PROJECT OVERVIEW */}
          <section className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#8B5CF6]" />
              <h3 className="text-xs font-bold text-[#8B6EED] uppercase tracking-[0.2em]">
                A. Project Overview
              </h3>
            </div>

            <div className="bg-white border border-[#ECE4FA] rounded-2xl p-5 sm:p-6 shadow-2xs space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="space-y-1">
                  <span className="text-[11px] font-semibold text-[#3B1C54]/65 uppercase tracking-wider block">
                    Application Under Test
                  </span>
                  <div className="text-xs font-bold text-[#3B1C54] flex items-center gap-1.5">
                    <span>SauceDemo Web App</span>
                    <a 
                      href="https://www.saucedemo.com" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-[#8B5CF6] hover:underline inline-flex items-center text-[10px]"
                    >
                      (saucedemo.com <ExternalLink className="w-2.5 h-2.5 ml-0.5" />)
                    </a>
                  </div>
                </div>

                <div className="space-y-1">
                  <span className="text-[11px] font-semibold text-[#3B1C54]/65 uppercase tracking-wider block">
                    Testing Type
                  </span>
                  <p className="text-xs font-bold text-[#3B1C54]">
                    Manual Functional Testing
                  </p>
                </div>

                <div className="space-y-1">
                  <span className="text-[11px] font-semibold text-[#3B1C54]/65 uppercase tracking-wider block">
                    My Role &amp; Contribution
                  </span>
                  <p className="text-xs font-bold text-[#3B1C54]">
                    Manual QA Tester
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-[#ECE4FA] grid grid-cols-1 md:grid-cols-2 gap-4 text-xs leading-relaxed text-[#2D2633]/85">
                <div>
                  <span className="font-bold text-[#3B1C54] block mb-1">Project Objective:</span>
                  <p>
                    Test the SauceDemo website login page using basic manual testing techniques to ensure proper authentication flow, form validation, and accurate user error messaging.
                  </p>
                </div>
                <div>
                  <span className="font-bold text-[#3B1C54] block mb-1">Scope of Testing:</span>
                  <p>
                    Authentication &amp; Access Control module covering positive login path with valid credentials, and negative scenarios verifying user rejection and validation error messages for incorrect password, empty input fields, and empty password.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION B: TEST EXECUTION SUMMARY */}
          <section className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#8B5CF6]" />
              <h3 className="text-xs font-bold text-[#8B6EED] uppercase tracking-[0.2em]">
                B. Test Execution Summary
              </h3>
            </div>

            {/* Metrics cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              <div className="bg-white border border-[#ECE4FA] rounded-2xl p-4 text-center shadow-2xs">
                <span className="text-2xl sm:text-3xl font-serif font-bold text-[#3B1C54] block">
                  4
                </span>
                <span className="text-[11px] font-semibold text-[#3B1C54]/70 uppercase tracking-wider">
                  Test Cases Executed
                </span>
              </div>

              <div className="bg-emerald-50/70 border border-emerald-200/80 rounded-2xl p-4 text-center shadow-2xs">
                <span className="text-2xl sm:text-3xl font-serif font-bold text-emerald-700 block">
                  4
                </span>
                <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider flex items-center justify-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                  Passed (100%)
                </span>
              </div>

              <div className="bg-white border border-[#ECE4FA] rounded-2xl p-4 text-center shadow-2xs">
                <span className="text-2xl sm:text-3xl font-serif font-bold text-[#3B1C54]/50 block">
                  0
                </span>
                <span className="text-[11px] font-semibold text-[#3B1C54]/60 uppercase tracking-wider">
                  Failed
                </span>
              </div>

              <div className="bg-white border border-[#ECE4FA] rounded-2xl p-4 text-center shadow-2xs">
                <span className="text-2xl sm:text-3xl font-serif font-bold text-[#3B1C54]/50 block">
                  0
                </span>
                <span className="text-[11px] font-semibold text-[#3B1C54]/60 uppercase tracking-wider">
                  Blocked
                </span>
              </div>
            </div>

            {/* Overall Observation from Report */}
            <div className="bg-gradient-to-r from-purple-50/80 to-[#FAF8FE] border border-[#DDD3F5] rounded-2xl p-4.5 sm:p-5 flex items-start gap-3 shadow-2xs">
              <div className="w-8 h-8 rounded-full bg-[#5D3EA8]/10 text-[#5D3EA8] flex items-center justify-center shrink-0 mt-0.5">
                <Sparkles className="w-4 h-4 text-[#8B5CF6]" />
              </div>
              <div className="space-y-1">
                <h4 className="text-xs font-bold text-[#3B1C54] uppercase tracking-wider">
                  Overall Observation
                </h4>
                <p className="text-xs sm:text-[13px] text-[#2D2633]/85 italic leading-relaxed">
                  "All four executed login scenarios behaved as expected. Appropriate validation messages were displayed for invalid or incomplete login inputs."
                </p>
                <span className="text-[10px] text-[#8B6EED] font-medium block">
                  — Documented in SauceDemo Login Testing Report
                </span>
              </div>
            </div>
          </section>

          {/* SECTION C: TEST CASES */}
          <section className="space-y-4">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#8B5CF6]" />
                <h3 className="text-xs font-bold text-[#8B6EED] uppercase tracking-[0.2em]">
                  C. Executed Test Cases ({testCases.length})
                </h3>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={expandAll}
                  className="text-[11px] font-semibold text-[#5D3EA8] hover:text-[#8B5CF6] px-2.5 py-1 rounded-md hover:bg-white border border-transparent hover:border-[#ECE4FA] transition-colors cursor-pointer"
                >
                  Expand All
                </button>
                <span className="text-[#DDD3F5]">|</span>
                <button
                  onClick={collapseAll}
                  className="text-[11px] font-semibold text-[#3B1C54]/70 hover:text-[#3B1C54] px-2.5 py-1 rounded-md hover:bg-white border border-transparent hover:border-[#ECE4FA] transition-colors cursor-pointer"
                >
                  Collapse All
                </button>
              </div>
            </div>

            <div className="space-y-3">
              {testCases.map((tc) => {
                const isExpanded = !!expandedCases[tc.id];
                return (
                  <div
                    key={tc.id}
                    className={`border rounded-2xl transition-all duration-200 overflow-hidden ${
                      isExpanded 
                        ? 'bg-white border-[#8B5CF6]/50 shadow-sm ring-1 ring-[#8B5CF6]/15' 
                        : 'bg-white/80 border-[#ECE4FA] hover:border-[#8B5CF6]/40 hover:bg-white'
                    }`}
                  >
                    {/* Collapsible Header */}
                    <button
                      onClick={() => toggleCase(tc.id)}
                      className="w-full px-4 sm:px-5 py-3.5 flex items-center justify-between gap-3 text-left cursor-pointer transition-colors"
                      aria-expanded={isExpanded}
                    >
                      <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                        <span className="font-mono text-xs font-bold text-white bg-[#5D3EA8] px-2.5 py-0.5 rounded-full shadow-2xs">
                          {tc.id}
                        </span>

                        <span className="text-xs sm:text-sm font-serif font-bold text-[#3B1C54]">
                          {tc.scenario}
                        </span>

                        <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${
                          tc.type === 'Positive Testing'
                            ? 'bg-purple-50 text-[#5D3EA8] border-purple-200'
                            : 'bg-amber-50 text-amber-800 border-amber-200'
                        }`}>
                          {tc.type}
                        </span>
                      </div>

                      <div className="flex items-center gap-3 shrink-0">
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold">
                          <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                          {tc.status}
                        </span>
                        <div className="text-[#8B6EED]">
                          {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                        </div>
                      </div>
                    </button>

                    {/* Collapsible Content */}
                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="border-t border-[#ECE4FA] px-4 sm:px-6 py-4 bg-[#FAF8FE]/50 space-y-4"
                        >
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                            {/* Preconditions & Test Data */}
                            <div className="space-y-3">
                              <div>
                                <span className="font-bold text-[#3B1C54] uppercase tracking-wider text-[10.5px] block mb-1">
                                  Preconditions:
                                </span>
                                <p className="text-[#2D2633]/85 bg-white p-2.5 rounded-xl border border-[#EDE4FA]">
                                  {tc.preconditions}
                                </p>
                              </div>

                              <div>
                                <span className="font-bold text-[#3B1C54] uppercase tracking-wider text-[10.5px] block mb-1">
                                  Test Data (Masked Credentials):
                                </span>
                                <div className="bg-white p-2.5 rounded-xl border border-[#EDE4FA] space-y-1 font-mono text-[11px] text-[#3B1C54]">
                                  <div><span className="text-[#8B6EED] font-sans font-semibold">Username:</span> {tc.testData.username}</div>
                                  <div><span className="text-[#8B6EED] font-sans font-semibold">Password:</span> {tc.testData.password}</div>
                                </div>
                              </div>
                            </div>

                            {/* Execution Steps */}
                            <div>
                              <span className="font-bold text-[#3B1C54] uppercase tracking-wider text-[10.5px] block mb-1">
                                Test Steps:
                              </span>
                              <ol className="bg-white p-2.5 rounded-xl border border-[#EDE4FA] space-y-1.5 list-decimal list-inside text-[#2D2633]/85">
                                {tc.steps.map((step, idx) => (
                                  <li key={idx} className="leading-relaxed">
                                    <span>{step}</span>
                                  </li>
                                ))}
                              </ol>
                            </div>
                          </div>

                          {/* Expected vs Actual */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                            <div className="p-3 rounded-xl bg-white border border-[#EDE4FA]">
                              <span className="text-[10px] font-bold text-[#8B6EED] uppercase tracking-wider block mb-1">
                                Expected Result
                              </span>
                              <p className="text-xs text-[#2D2633]/90 font-medium">
                                {tc.expectedResult}
                              </p>
                            </div>

                            <div className="p-3 rounded-xl bg-white border border-emerald-200">
                              <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider block mb-1">
                                Actual Result
                              </span>
                              <p className="text-xs text-[#2D2633]/90 font-medium flex items-start gap-1.5">
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                                <span>{tc.actualResult}</span>
                              </p>
                            </div>
                          </div>

                          {/* Error Message if Applicable */}
                          {tc.errorMessage && (
                            <div className="p-3 rounded-xl bg-red-50/70 border border-red-200 flex items-start gap-2.5">
                              <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                              <div className="space-y-0.5">
                                <span className="text-[10px] font-bold text-red-800 uppercase tracking-wider block">
                                  Exact UI Error Message Displayed:
                                </span>
                                <code className="text-xs font-mono font-semibold text-red-900 block bg-white/80 px-2 py-1 rounded border border-red-200/60">
                                  {tc.errorMessage}
                                </code>
                              </div>
                            </div>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </section>

          {/* SECTION D: TEST EVIDENCE / SCREENSHOTS GALLERY */}
          <section className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#8B5CF6]" />
                <h3 className="text-xs font-bold text-[#8B6EED] uppercase tracking-[0.2em]">
                  D. Test Evidence &amp; Visual Screenshots
                </h3>
              </div>
              <span className="text-[11px] text-[#2D2633]/60 hidden sm:inline">
                Click any screenshot to enlarge in lightbox
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
              {testCases.map((tc) => {
                const hasError = !!imageErrors[tc.id];

                return (
                  <div
                    key={tc.id}
                    className="group bg-white border border-[#ECE4FA] hover:border-[#8B5CF6] rounded-2xl overflow-hidden shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between cursor-pointer"
                    onClick={() => !hasError && setSelectedImage(tc)}
                  >
                    {/* Thumbnail Image Container */}
                    <div className="relative h-32 bg-[#FAF8FE] flex items-center justify-center p-2 border-b border-[#ECE4FA] overflow-hidden">
                      {hasError ? (
                        <div className="text-center p-3 text-xs text-[#2D2633]/60">
                          <AlertCircle className="w-5 h-5 mx-auto text-amber-500 mb-1" />
                          <span>Screenshots not provided</span>
                        </div>
                      ) : (
                        <>
                          <img
                            src={tc.screenshot}
                            alt={`Evidence for ${tc.id}: ${tc.scenario}`}
                            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                            loading="lazy"
                            onError={() => handleImageError(tc.id)}
                          />
                          <div className="absolute inset-0 bg-[#3B1C54]/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <span className="px-2.5 py-1 rounded-full bg-white/95 text-[#3B1C54] text-[10px] font-bold flex items-center gap-1 shadow-xs">
                              <Maximize2 className="w-3 h-3" /> Zoom
                            </span>
                          </div>
                        </>
                      )}

                      <span className="absolute top-2 left-2 z-10 px-2 py-0.5 rounded-md bg-[#5D3EA8] text-white text-[9px] font-mono font-bold shadow-xs">
                        {tc.id}
                      </span>
                    </div>

                    {/* Caption */}
                    <div className="p-3 space-y-1">
                      <span className="text-[10px] font-bold text-[#8B6EED] block truncate">
                        {tc.scenario}
                      </span>
                      <p className="text-[11px] text-[#2D2633]/75 line-clamp-2 leading-tight">
                        {tc.screenshotCaption}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* SECTION E: FINDINGS / DEFECTS */}
          <section className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#8B5CF6]" />
              <h3 className="text-xs font-bold text-[#8B6EED] uppercase tracking-[0.2em]">
                E. Findings &amp; Defect Analysis
              </h3>
            </div>

            <div className="bg-white border border-[#ECE4FA] rounded-2xl p-5 sm:p-6 shadow-2xs space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div className="space-y-1.5">
                  <h4 className="text-xs font-bold text-[#3B1C54] uppercase tracking-wider">
                    Zero Defects Logged — Expected Behavior Confirmed
                  </h4>
                  <ul className="space-y-1.5 text-xs text-[#2D2633]/85 leading-relaxed">
                    <li className="flex items-start gap-1.5">
                      <span className="text-[#8B5CF6] font-bold">✓</span>
                      <span><strong>No defects identified</strong> in the executed test cases.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-[#8B5CF6] font-bold">✓</span>
                      <span>Defect reporting was <strong>not required</strong> for the executed scenarios because the observed behavior matched the expected results.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-[#8B5CF6] font-bold">✓</span>
                      <span>Login prevention mechanisms and dynamic error notification banners function accurately across negative test vectors.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION F: TESTING APPROACH & SKILLS */}
          <section className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#8B5CF6]" />
              <h3 className="text-xs font-bold text-[#8B6EED] uppercase tracking-[0.2em]">
                F. Testing Approach, Tools &amp; Skills
              </h3>
            </div>

            <div className="bg-white border border-[#ECE4FA] rounded-2xl p-5 shadow-2xs space-y-3">
              <span className="text-[11px] font-bold text-[#3B1C54]/75 uppercase tracking-wider block">
                Skills &amp; Methodologies Documented in Report:
              </span>
              <div className="flex flex-wrap gap-2">
                {toolsAndSkills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-semibold text-[#3B1C54] bg-[#FAF8FE] border border-[#EDE4FA] px-3 py-1 rounded-full shadow-2xs"
                  >
                    ✦ {skill}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* SECTION G: REPORT ACCESS & DOWNLOAD */}
          <section className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#8B5CF6]" />
              <h3 className="text-xs font-bold text-[#8B6EED] uppercase tracking-[0.2em]">
                G. Official Test Report Access
              </h3>
            </div>

            <div className="bg-gradient-to-br from-[#FAF8FE] to-white border border-[#DDD3F5] rounded-2xl p-5 sm:p-6 shadow-2xs flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-[#8B5CF6]" />
                  <h4 className="text-sm font-serif font-bold text-[#3B1C54]">
                    SauceDemo_test_report.pdf
                  </h4>
                  <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-[#EDE4FA] text-[#5D3EA8]">
                    Official PDF
                  </span>
                </div>
                <p className="text-xs text-[#2D2633]/75">
                  View the authentic test report document containing full test execution logs and observations.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2.5 shrink-0 w-full sm:w-auto">
                <a
                  href="/SauceDemo_test_report.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-[#5D3EA8] text-white text-xs font-semibold hover:bg-[#4C3090] transition-colors shadow-xs"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>View Full Test Report</span>
                  <ExternalLink className="w-3 h-3 opacity-70" />
                </a>

                <a
                  href="/SauceDemo_test_report.pdf"
                  download="SauceDemo_test_report.pdf"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-white border border-[#DDD3F5] text-[#5D3EA8] text-xs font-semibold hover:bg-[#FAF8FE] hover:border-[#8B5CF6] transition-colors shadow-xs"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Report</span>
                </a>
              </div>
            </div>
          </section>

        </div>

        {/* MODAL FOOTER */}
        <div className="sticky bottom-0 z-30 bg-[#FAF8FE]/95 backdrop-blur-md px-6 sm:px-8 py-4 border-t border-[#ECE4FA] flex items-center justify-between gap-4">
          <span className="text-[11px] text-[#2D2633]/60 hidden sm:inline">
            Single-page portfolio • Press <kbd className="px-1.5 py-0.5 rounded bg-white border border-[#DDD3F5] font-mono text-[10px]">Esc</kbd> to return
          </span>

          <button
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-2 rounded-full bg-[#5D3EA8] text-white text-xs font-semibold hover:bg-[#4C3090] transition-colors shadow-xs cursor-pointer ml-auto"
          >
            Close Case Study
          </button>
        </div>

        {/* ACCESSIBLE LIGHTBOX FOR SCREENSHOTS */}
        <AnimatePresence>
          {selectedImage && (
            <div
              className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-2xl max-w-2xl w-full p-4 sm:p-5 shadow-2xl relative space-y-3"
              >
                <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-white bg-[#5D3EA8] px-2.5 py-0.5 rounded-full">
                      {selectedImage.id}
                    </span>
                    <h4 className="text-sm font-bold text-[#3B1C54]">
                      {selectedImage.scenario}
                    </h4>
                  </div>
                  <button
                    onClick={() => setSelectedImage(null)}
                    className="w-7 h-7 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center cursor-pointer transition-colors"
                    aria-label="Close image preview"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="bg-[#FAF8FE] rounded-xl p-3 border border-[#ECE4FA] flex items-center justify-center overflow-hidden max-h-[60vh]">
                  <img
                    src={selectedImage.screenshot}
                    alt={selectedImage.scenario}
                    className="max-h-[55vh] w-auto object-contain rounded"
                  />
                </div>

                <p className="text-xs text-[#2D2633]/80 leading-relaxed pt-1">
                  {selectedImage.screenshotCaption}
                </p>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
