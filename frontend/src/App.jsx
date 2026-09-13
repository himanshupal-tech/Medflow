import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { QRCodeSVG } from "qrcode.react";
import LanguageSwitcher from "./components/LanguageSwitcher";
import { MEDFLOW_LANGUAGES } from "./i18n";
import Navbar from "./components/Navbar";
import IntakeProgress from "./components/IntakeProgress";
import { Card, EmptyState, LoadingState, SectionHeader, StatusBadge, Toast } from "./components/PlatformUI";
import {
  BODY_SYSTEMS,
  DURATION_OPTIONS,
  PROGRESSION_OPTIONS,
} from "./data/symptomDictionary";

import {
  Activity,
  Wind,
  Brain,
  UtensilsCrossed,
  Bone,
  Sparkles,
  Droplets,
  ShieldAlert,
  ArrowLeft,
  ArrowRight,
  Check,
  FileText,
  HeartPulse,
  Lock,
  Mic,
  Search,
  ShieldCheck,
  Upload,
  X,
  AlertCircle,
  RotateCcw,
  Edit3,
  LayoutDashboard,
  LogOut,
  ClipboardList,
  UserRound,
  Volume2,
  Settings2,
  Play,
  Pause,
  Square,
  Building2,
  Stethoscope,
  Ticket,
  Radio,
  UserCog,
  Shield,
  Users,
  Hospital,
  QrCode,
  Clock3,
  CheckCircle2,
  PhoneCall,
  BarChart3,
  CircleHelp,
  LifeBuoy,
  ChevronDown,
} from "lucide-react";
import { getRedFlags } from "./data/redFlagRules";

import "./App.css";

const MAX_DOCUMENT_SIZE_BYTES = 10 * 1024 * 1024;
const DOCUMENT_SIZE_ERROR = "File is too large. Please upload a document smaller than 10 MB.";
const SARVAM_TTS_LANGUAGE_CODES = new Set(["en-IN", "hi-IN", "bn-IN", "gu-IN", "kn-IN", "ml-IN", "mr-IN", "od-IN", "pa-IN", "ta-IN", "te-IN"]);

// Body system accent color palette
const SYSTEM_COLORS = {
  heart:     { bg: "#fef2f2", iconBg: "#ef4444", border: "#ef4444", text: "#991b1b", light: "#fee2e2" },
  lungs:     { bg: "#eff6ff", iconBg: "#3b82f6", border: "#3b82f6", text: "#1e40af", light: "#dbeafe" },
  brain:     { bg: "#f5f3ff", iconBg: "#8b5cf6", border: "#8b5cf6", text: "#5b21b6", light: "#ede9fe" },
  digestive: { bg: "#fff7ed", iconBg: "#f97316", border: "#f97316", text: "#9a3412", light: "#fed7aa" },
  muscles:   { bg: "#fffbeb", iconBg: "#f59e0b", border: "#f59e0b", text: "#92400e", light: "#fde68a" },
  skin:      { bg: "#fdf2f8", iconBg: "#ec4899", border: "#ec4899", text: "#831843", light: "#fce7f3" },
  urinary:   { bg: "#ecfeff", iconBg: "#06b6d4", border: "#06b6d4", text: "#0e7490", light: "#cffafe" },
  general:   { bg: "#f0fdf4", iconBg: "#10b981", border: "#10b981", text: "#065f46", light: "#d1fae5" },
};

function App() {
  const { t, i18n } = useTranslation();

  const [page, setPage] = useState(() => {
    const byPath = { "/dashboard": "dashboard", "/documents": "documents", "/medical-records": "records", "/find-doctor": "find-doctor", "/faq": "faq", "/help": "help", "/profile": "profile", "/hospital-token": "hospital-token", "/live-queue": "live-queue", "/doctor-dashboard": "doctor-dashboard", "/doctor-queue": "doctor-queue", "/doctor-patients": "doctor-patients", "/doctor-assessments": "doctor-assessments", "/doctor-documents": "doctor-documents", "/doctor-review": "doctor-review", "/doctor-profile": "doctor-profile", "/admin-dashboard": "admin-dashboard", "/admin-hospitals": "admin-hospitals", "/admin-doctors": "admin-doctors", "/admin-queues": "admin-queues", "/admin-patients": "admin-patients", "/admin-reports": "admin-reports" };
    Object.assign(byPath, { "/admin-assessments": "admin-assessments", "/admin-profile": "admin-profile" });
    return window.location.pathname.startsWith("/queue-status/") ? "queue-status" : (byPath[window.location.pathname] || "login");
  });
  const [accessibility, setAccessibility] = useState(() => {
    try { return { guidedAudio: false, largeText: false, highContrast: false, reduceMotion: false, autoReadQuestions: false, ...(JSON.parse(localStorage.getItem("medx-accessibility") || "{}")) }; }
    catch { return { guidedAudio: false, largeText: false, highContrast: false, reduceMotion: false, autoReadQuestions: false }; }
  });
  const [showAccessibility, setShowAccessibility] = useState(false);
  const [isReadingConsent, setIsReadingConsent] = useState(false);
  const [consent, setConsent] = useState({ health: false, audio: false, documents: false });
  const [authenticatedUser, setAuthenticatedUser] = useState(null);
  const [sessionChecked, setSessionChecked] = useState(false);
  const [selectedRole, setSelectedRole] = useState("patient");
  const [staffDashboard, setStaffDashboard] = useState(null);
  const [adminData, setAdminData] = useState({ overview: null, hospitals: [], doctors: [], queues: [], patients: [] });
  const [adminSearch, setAdminSearch] = useState("");
  const [platformLoading, setPlatformLoading] = useState(false);
  const [platformError, setPlatformError] = useState("");
  const [platformNotice, setPlatformNotice] = useState("");
  const [selectedStaffToken, setSelectedStaffToken] = useState(null);
  const [selectedStaffTokenId, setSelectedStaffTokenId] = useState(null);
  const [physicianReview, setPhysicianReview] = useState(null);
  const [reviewDraft, setReviewDraft] = useState("");
  const [reviewSaving, setReviewSaving] = useState(false);
  const [patientClinicalReview, setPatientClinicalReview] = useState(null);
  const [patientClinicalReviewState, setPatientClinicalReviewState] = useState("idle");
  const [reviewSummaryLanguage, setReviewSummaryLanguage] = useState("english");
  const [translatedReviewSummaries, setTranslatedReviewSummaries] = useState({});
  const [translatingReviewLanguage, setTranslatingReviewLanguage] = useState("");
  const [reviewTranslationError, setReviewTranslationError] = useState("");
  const [publicQueueStatus, setPublicQueueStatus] = useState(null);
  const [authForm, setAuthForm] = useState({ identityType: "abha", identity: "", password: "", mobile: "", otp: "", profileName: "", abhaId: "", dateOfBirth: "", gender: "" });
  const [authError, setAuthError] = useState("");
  const [otpSessionId, setOtpSessionId] = useState("");
  const [mobileVerified, setMobileVerified] = useState(false);

  // =====================================================
  // PATIENT PROFILE
  // =====================================================

  const [form, setForm] = useState({
    name: "",
    age: "",
    gender: "",
    phone: "",
    language: "English",
  });

  const [errors, setErrors] = useState({});

  // =====================================================
  // STRUCTURED 7-STEP INTAKE STATE
  // =====================================================

  const [intakeStep, setIntakeStep] = useState(1);
  const [assessmentId, setAssessmentId] = useState(null);
  const [creatingAssessment, setCreatingAssessment] = useState(false);
  const [assessmentError, setAssessmentError] = useState("");
  const [savingAssessment, setSavingAssessment] = useState(false);
  const [assessmentSaveError, setAssessmentSaveError] = useState("");
  const [intakeData, setIntakeData] = useState({
    bodySystem: "",
    symptoms: [],           // stores stable symptom IDs
    severity: 5,
    duration: "",           // stores stable duration ID
    progression: "",        // stores stable progression ID
    medicalConditionsHas: "no",
    medicalConditionsText: "",
    medicationsHas: "no",
    medicationsText: "",
    allergiesHas: "no",
    allergiesText: "",
    previousSimilar: "no",
    recentInjuryHas: "no",
    recentInjuryText: "",
    additionalInformation: "",
  });

  const [symptomSearch, setSymptomSearch] = useState("");
  const [clinicalSummary, setClinicalSummary] = useState(null);
  const [summaryLanguage, setSummaryLanguage] = useState("english");
  const [translatedClinicalSummaries, setTranslatedClinicalSummaries] = useState({});
  const [translatingSummaryLanguage, setTranslatingSummaryLanguage] = useState("");
  const [summaryTranslationError, setSummaryTranslationError] = useState("");
  const [hospitals, setHospitals] = useState([]);
  const [selectedHospitalId, setSelectedHospitalId] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [queueDoctors, setQueueDoctors] = useState([]);
  const [loadingQueueDoctors, setLoadingQueueDoctors] = useState(false);
  const [activeToken, setActiveToken] = useState(null);
  const [queueError, setQueueError] = useState("");
  const [lastQueueUpdated, setLastQueueUpdated] = useState(null);
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [faqCategory, setFaqCategory] = useState("general");
  const [faqSearch, setFaqSearch] = useState("");
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const [documentPreview, setDocumentPreview] = useState(null);
  const [analyzingIntake, setAnalyzingIntake] = useState(false);
  const [analysisError, setAnalysisError] = useState("");
  const [savingClinicalSummary, setSavingClinicalSummary] = useState(false);
  const [clinicalSummarySaveError, setClinicalSummarySaveError] = useState("");
  const [showDemoResetConfirm, setShowDemoResetConfirm] = useState(false);
  const [resettingDemo, setResettingDemo] = useState(false);
  const [demoResetNotice, setDemoResetNotice] = useState("");
  // These documents are scoped to the current intake. Their extracted content,
  // not the raw files, is sent to the server-side clinical-summary endpoint.
  const [intakeDocuments, setIntakeDocuments] = useState([]);
  const lastAnnouncedQueueTokenRef = useRef(null);

  const API_URL = "http://localhost:5000";

  async function queueRequest(path, options = {}) {
    const response = await fetch(`${API_URL}${path}`, { ...options, credentials: "include" });
    const data = await response.json();
    if (!response.ok || !data.success) throw new Error(data.error || "Unable to update the hospital queue.");
    return data;
  }

  async function loadHospitals() {
    try {
      const data = await queueRequest("/api/hospitals");
      setHospitals(data.hospitals);
      if (data.hospitals[0]) setSelectedHospitalId((current) => current || data.hospitals[0].id);
    } catch (error) { setQueueError(error.message); }
  }

  async function loadDoctors(hospitalId) {
    if (!hospitalId) {
      setQueueDoctors([]);
      return;
    }
    setLoadingQueueDoctors(true);
    setQueueDoctors([]);
    setSelectedDepartment("");
    setQueueError("");
    try {
      const data = await queueRequest(`/api/hospitals/${hospitalId}/doctors`);
      setQueueDoctors(data.doctors || []);
    } catch (error) {
      setQueueDoctors([]);
      setQueueError(error.message);
    } finally {
      setLoadingQueueDoctors(false);
    }
  }

  async function createToken(doctorId) {
    try {
      setQueueError("");
      const data = await queueRequest("/api/tokens", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ patientId: authenticatedUser?.patientId, assessmentId, hospitalId: selectedHospitalId, doctorId }) });
      setActiveToken(data.token);
      setLastQueueUpdated(new Date());
    } catch (error) { setQueueError(error.message); }
  }

  async function cancelActiveToken() {
    if (!activeToken?.id || !authenticatedUser?.patientId) return;
    try {
      setQueueError("");
      await queueRequest(`/api/tokens/${activeToken.id}/cancel`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ patientId: authenticatedUser.patientId }) });
      setActiveToken((previous) => ({ ...previous, status: "cancelled", patientsAhead: 0 }));
    } catch (error) { setQueueError(error.message); }
  }

  async function startNewAssessment() {
    const patientId = authenticatedUser?.patientId;

    if (!patientId) {
      setAssessmentError("Your patient profile is not available. Please sign in again before starting an assessment.");
      return;
    }

    setCreatingAssessment(true);
    setAssessmentError("");
    setAssessmentId(null);
    setTranslatedClinicalSummaries({});
    setSummaryLanguage("english");
    setSummaryTranslationError("");

    try {
      const response = await fetch(`${API_URL}/api/assessments`, {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          patientId,
          bodySystem: intakeData.bodySystem || null,
          severity: intakeData.severity,
          duration: intakeData.duration || null,
          progression: intakeData.progression || null,
        }),
      });
      const data = await response.json();

      if (!response.ok || !data.success || !data.assessment?.id) {
        throw new Error(data.error || "Unable to start the clinical assessment.");
      }

      setAssessmentId(data.assessment.id);
      setIntakeStep(1);
      setAnalysisError("");
      setSpeechError("");
      setIsListening(false);
      setPage("intake");
    } catch (error) {
      setAssessmentError(error.message || "Unable to start the clinical assessment.");
    } finally {
      setCreatingAssessment(false);
    }
  }

  async function assessmentRequest(path, options) {
    const response = await fetch(`${API_URL}${path}`, { ...options, credentials: "include" });
    const data = await response.json();
    if (!response.ok || !data.success) {
      throw new Error(data.error || "Unable to save the assessment.");
    }
    return data;
  }

  async function persistIntakeStep(step) {
    if (!assessmentId) {
      setAssessmentSaveError("This assessment is not available. Please start a new assessment.");
      return;
    }

    setSavingAssessment(true);
    setAssessmentSaveError("");

    try {
      if (step === 1) {
        await assessmentRequest(`/api/assessments/${assessmentId}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ bodySystem: intakeData.bodySystem }),
        });
        await assessmentRequest(`/api/assessments/${assessmentId}/symptoms`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ symptomIds: intakeData.symptoms }),
        });
        setIntakeStep(2);
      } else if (step === 2) {
        await assessmentRequest(`/api/assessments/${assessmentId}/symptoms`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ symptomIds: intakeData.symptoms }),
        });
        setIntakeStep(3);
      } else if (step === 3) {
        await assessmentRequest(`/api/assessments/${assessmentId}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            bodySystem: intakeData.bodySystem,
            severity: intakeData.severity,
            duration: intakeData.duration,
            progression: intakeData.progression,
          }),
        });
        setIntakeStep(4);
      }
    } catch (error) {
      setAssessmentSaveError(error.message || "Unable to save the assessment.");
    } finally {
      setSavingAssessment(false);
    }
  }

  async function persistClinicalHistory() {
    if (!assessmentId) {
      setAssessmentSaveError("This assessment is not available. Please start a new assessment.");
      return;
    }

    setSavingAssessment(true);
    setAssessmentSaveError("");

    // These fields map to text columns in clinical_history. Keep the yes/no
    // answers separate and always send plain strings, even after a voice input
    // or an interrupted/legacy state update.
    const clinicalHistoryPayload = {
      medicalConditionsHas: intakeData.medicalConditionsHas,
      medicalConditionsText: String(intakeData.medicalConditionsText ?? "").trim(),
      medicationsHas: intakeData.medicationsHas,
      medicationsText: String(intakeData.medicationsText ?? "").trim(),
      allergiesHas: intakeData.allergiesHas,
      allergiesText: String(intakeData.allergiesText ?? "").trim(),
      previousSimilar: intakeData.previousSimilar,
      recentInjuryHas: intakeData.recentInjuryHas,
      recentInjuryText: String(intakeData.recentInjuryText ?? "").trim(),
      additionalInformation: String(intakeData.additionalInformation ?? "").trim(),
    };

    try {
      await assessmentRequest(`/api/assessments/${assessmentId}/clinical-history`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(clinicalHistoryPayload),
      });
      setIntakeStep(5);
    } catch (error) {
      setAssessmentSaveError(error.message || "Unable to save clinical history.");
    } finally {
      setSavingAssessment(false);
    }
  }

  useEffect(() => { if (["find-doctor", "hospital-token"].includes(page)) loadHospitals(); }, [page]);
  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key !== "Escape") return;
      if (documentPreview) closeDocumentPreview();
      if (profileMenuOpen) setProfileMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [documentPreview, profileMenuOpen]);
  useEffect(() => { if (selectedHospitalId && ["find-doctor", "hospital-token"].includes(page)) loadDoctors(selectedHospitalId); }, [selectedHospitalId, page]);
  useEffect(() => {
    if (authenticatedUser?.role === "staff" && ["doctor-dashboard", "doctor-queue", "doctor-patients"].includes(page)) loadStaffDashboard();
    if (authenticatedUser?.role === "admin" && page.startsWith("admin-")) loadAdminData();
  }, [page, authenticatedUser?.role]);
  useEffect(() => {
    if (authenticatedUser?.role !== "patient" || !authenticatedUser.patientId) return;
    queueRequest(`/api/patients/${authenticatedUser.patientId}/active-token`).then((data) => { setActiveToken(data.token); setLastQueueUpdated(new Date()); }).catch(() => setActiveToken(null));
  }, [authenticatedUser?.role, authenticatedUser?.patientId]);
  useEffect(() => {
    let active = true;
    platformRequest("/api/auth/session").then((data) => {
      if (!active) return;
      const session = data.session;
      setAuthenticatedUser({ name: session.name, abhaId: session.abhaId || "", role: session.role, patientId: session.patientId, doctorId: session.doctorId, hospitalId: session.hospitalId, demo: session.demo });
      if (page === "login") setPage(session.role === "staff" ? "doctor-dashboard" : session.role === "admin" ? "admin-dashboard" : "dashboard");
    }).catch(() => {
      if (active && page.startsWith("doctor-") || active && page.startsWith("admin-") || active && ["dashboard", "documents", "find-doctor", "hospital-token", "live-queue", "records", "faq", "help", "profile"].includes(page)) setPage("login");
    }).finally(() => { if (active) setSessionChecked(true); });
    return () => { active = false; };
  }, []);
  useEffect(() => {
    if (!sessionChecked) return;
    const role = authenticatedUser?.role;
    if (!role && (page.startsWith("doctor-") || page.startsWith("admin-") || ["dashboard", "documents", "find-doctor", "hospital-token", "live-queue", "records", "faq", "help", "profile"].includes(page))) setPage("login");
    if (role === "patient" && (page.startsWith("doctor-") || page.startsWith("admin-"))) setPage("dashboard");
    if (role === "staff" && !page.startsWith("doctor-")) setPage("doctor-dashboard");
    if (role === "admin" && !page.startsWith("admin-")) setPage("admin-dashboard");
  }, [sessionChecked, authenticatedUser?.role, page]);
  useEffect(() => {
    if (page !== "queue-status") return;
    const tokenId = window.location.pathname.split("/").filter(Boolean).at(-1);
    setPlatformLoading(true); setPlatformError("");
    platformRequest(`/api/public/queue-status/${tokenId}`).then((data) => setPublicQueueStatus(data.queue)).catch((error) => setPlatformError(error.message)).finally(() => setPlatformLoading(false));
  }, [page]);
  useEffect(() => {
    if (!activeToken?.doctorId || ["completed", "cancelled"].includes(activeToken.status) || !["dashboard", "hospital-token", "live-queue"].includes(page)) return;
    const refresh = async () => { try { const data = await queueRequest(`/api/tokens/${activeToken.id}`); if (["completed", "cancelled"].includes(data.token?.status)) { setActiveToken(null); if (data.token.status === "completed") setPlatformNotice("Your assessment has been completed."); } else { setActiveToken((previous) => ({ ...previous, ...data.token })); } setLastQueueUpdated(new Date()); } catch (error) { setQueueError(error.message); } };
    refresh(); const interval = window.setInterval(refresh, 8000);
    return () => window.clearInterval(interval);
  }, [activeToken?.doctorId, activeToken?.id, page]);

  useEffect(() => {
    if (page !== "records" || authenticatedUser?.role !== "patient") return;
    setPatientClinicalReviewState("loading"); setPatientClinicalReview(null);
    platformRequest("/api/patient/clinical-review").then((data) => { setPatientClinicalReview(data.review); setPatientClinicalReviewState("ready"); setReviewSummaryLanguage("english"); setTranslatedReviewSummaries({}); setReviewTranslationError(""); }).catch((error) => { setPatientClinicalReviewState(error.message === "Physician review is not available yet." ? "pending" : "error"); if (error.message !== "Physician review is not available yet.") setPlatformError(error.message); });
  }, [page, authenticatedUser?.role]);

  useEffect(() => {
    const onKeyDown = (event) => { if (event.key === "Escape") setShowAccessibility(false); };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    const currentToken = activeToken?.displayCurrentToken || activeToken?.currentToken;
    if (!currentToken) return;
    const token = String(currentToken);
    if (lastAnnouncedQueueTokenRef.current === null) {
      lastAnnouncedQueueTokenRef.current = token;
      return;
    }
    if (lastAnnouncedQueueTokenRef.current !== token) {
      lastAnnouncedQueueTokenRef.current = token;
      if (accessibility.guidedAudio) speak(`Now serving token ${token}.`);
    }
  }, [activeToken?.displayCurrentToken, activeToken?.currentToken, accessibility.guidedAudio]);

  useEffect(() => {
    localStorage.setItem("medx-accessibility", JSON.stringify(accessibility));
    document.body.classList.toggle("large-text", accessibility.largeText);
    document.body.classList.toggle("high-contrast", accessibility.highContrast);
    document.body.classList.toggle("reduce-motion", accessibility.reduceMotion);
  }, [accessibility]);

  useEffect(() => {
    if (summaryLanguage === "preferred" && !translatedClinicalSummaries[i18n.language]) {
      setSummaryLanguage("english");
    }
  }, [i18n.language]);

  function splitTextForSpeech(text, maxLength = 2200) {
    if (text.length <= maxLength) return [text];
    const chunks = [];
    let remaining = text;
    while (remaining.length > maxLength) {
      const boundary = Math.max(remaining.lastIndexOf(" ", maxLength), remaining.lastIndexOf("\n", maxLength));
      const end = boundary > 0 ? boundary : maxLength;
      chunks.push(remaining.slice(0, end));
      remaining = remaining.slice(end).trimStart();
    }
    if (remaining) chunks.push(remaining);
    return chunks;
  }

  function playSarvamAudio(audioBase64, requestId) {
    return new Promise((resolve, reject) => {
      const audio = new Audio(`data:audio/mpeg;base64,${audioBase64}`);
      audioPlaybackRef.current = audio;
      audio.onended = () => resolve();
      audio.onerror = () => reject(new Error("Unable to play the generated speech."));
      if (requestId !== speechPlaybackRequestRef.current) return resolve();
      audio.play().catch(() => reject(new Error("Unable to play the generated speech.")));
    });
  }

  async function speak(text) {
    if (!text) return;
    stopSpeech();
    const requestId = speechPlaybackRequestRef.current;
    const languageCode = i18n.language || "en-IN";
    setSpeechError("");

    if (SARVAM_TTS_LANGUAGE_CODES.has(languageCode)) {
      try {
        for (const chunk of splitTextForSpeech(String(text))) {
          const response = await fetch(`${API_URL}/api/sarvam/tts`, {
            method: "POST",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ text: chunk, languageCode }),
          });
          const data = await response.json();
          if (!response.ok || !data.success || !data.audioBase64) throw new Error(data.error || "Unable to generate speech.");
          if (requestId !== speechPlaybackRequestRef.current) return;
          await playSarvamAudio(data.audioBase64, requestId);
          if (requestId !== speechPlaybackRequestRef.current) return;
        }
        return;
      } catch (error) {
        if (requestId === speechPlaybackRequestRef.current) setSpeechError(error.message || t("speechErrors.unable"));
        return;
      }
    }

    if (!("speechSynthesis" in window)) {
      setSpeechError(t("speechErrors.unable"));
      return;
    }
    const matchingVoice = window.speechSynthesis.getVoices().find((voice) => voice.lang?.toLowerCase().startsWith(languageCode.slice(0, 2).toLowerCase()));
    if (languageCode !== "en-IN" && !matchingVoice) {
      setSpeechError(t("speechErrors.unable"));
      return;
    }
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = languageCode;
    if (matchingVoice) utterance.voice = matchingVoice;
    window.speechSynthesis.speak(utterance);
  }

  function stopSpeech() {
    speechPlaybackRequestRef.current += 1;
    window.speechSynthesis?.cancel();
    if (audioPlaybackRef.current) {
      audioPlaybackRef.current.pause();
      audioPlaybackRef.current.currentTime = 0;
      audioPlaybackRef.current = null;
    }
  }

  function toggleConsentReadAloud() {
    if (!("speechSynthesis" in window)) return;
    if (window.speechSynthesis.speaking) {
      stopSpeech();
      setIsReadingConsent(false);
      return;
    }
    const consentText = [
      t("accessibility.consentDescription"),
      t("accessibility.healthConsent"),
      t("accessibility.audioConsent"),
      t("accessibility.documentConsent"),
    ].join(". ");
    const utterance = new SpeechSynthesisUtterance(consentText);
    utterance.lang = i18n.language || "en-IN";
    utterance.onend = () => setIsReadingConsent(false);
    utterance.onerror = () => setIsReadingConsent(false);
    setIsReadingConsent(true);
    window.speechSynthesis.speak(utterance);
  }

  function updateAccessibility(key) {
    setAccessibility((previous) => ({ ...previous, [key]: !previous[key] }));
  }

  function updateAuthField(field, value) {
    setAuthForm((previous) => ({ ...previous, [field]: value }));
    setAuthError("");
  }

  function maskAbha(abhaId) {
    if (!abhaId) return t("auth.notProvided");
    const visible = abhaId.slice(-4);
    return `****-****-${visible}`;
  }

  async function requestAuth(route, body) {
    let response;
    try {
      response = await fetch(`${API_URL}${route}`, { method: "POST", credentials: "include", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
    } catch {
      throw new Error("MedFlow backend is unavailable. Start the backend and try again.");
    }
    const contentType = response.headers.get("content-type") || "";
    if (!contentType.includes("application/json")) {
      throw new Error("MedFlow backend is unavailable or needs to be restarted. Please try again.");
    }
    const data = await response.json();
    if (!response.ok || !data.success) throw new Error(data.error || t("auth.genericError"));
    return data;
  }

  async function platformRequest(path, options = {}) {
    let response;
    try {
      response = await fetch(`${API_URL}${path}`, { ...options, credentials: "include", headers: { "Content-Type": "application/json", ...(options.headers || {}) } });
    } catch {
      throw new Error("We could not reach MedFlow. Please check your connection and try again.");
    }
    const contentType = response.headers.get("content-type") || "";
    if (!contentType.includes("application/json")) throw new Error("MedFlow returned an unexpected response. Please restart the backend.");
    const data = await response.json();
    if (!response.ok || !data.success) throw new Error(data.error || "Something went wrong. Please try again.");
    return data;
  }

  async function loadStaffDashboard() {
    setPlatformLoading(true); setPlatformError("");
    try { setStaffDashboard(await platformRequest("/api/staff/dashboard")); }
    catch (error) { setPlatformError(error.message); }
    finally { setPlatformLoading(false); }
  }

  async function loadAdminData() {
    setPlatformLoading(true); setPlatformError("");
    try {
      const [overview, hospitalsData, doctorsData, queuesData, patientsData] = await Promise.all([
        platformRequest("/api/admin/overview"), platformRequest("/api/admin/hospitals"), platformRequest("/api/admin/doctors"), platformRequest("/api/admin/queues"), platformRequest("/api/admin/patients"),
      ]);
      setAdminData({ overview: overview.stats, hospitals: hospitalsData.hospitals, doctors: doctorsData.doctors, queues: queuesData.queues, patients: patientsData.patients });
    } catch (error) { setPlatformError(error.message); }
    finally { setPlatformLoading(false); }
  }

  async function signInRole(role) {
    if (role === "patient") { setSelectedRole("patient"); return; }
    try {
      setAuthError("");
      const data = await requestAuth("/api/auth/role-login", { role, demo: true });
      setAuthenticatedUser(data.user);
      setSelectedRole(role);
      setPage(role === "staff" ? "doctor-dashboard" : "admin-dashboard");
      if (role === "staff") loadStaffDashboard(); else loadAdminData();
    } catch (error) { setAuthError(error.message); }
  }

  async function signInRoleWithCredentials(role) {
    try {
      setAuthError("");
      const data = await requestAuth(role === "staff" ? "/api/auth/staff-login" : "/api/auth/admin-login", { loginId: authForm.identity, password: authForm.password });
      setAuthenticatedUser(data.user); setSelectedRole(role); setPage(role === "staff" ? "doctor-dashboard" : "admin-dashboard");
    } catch (error) { setAuthError(error.message); }
  }

  async function logOut() {
    try { await platformRequest("/api/auth/logout", { method: "POST" }); } catch { /* Clear local UI even if the server has stopped. */ }
    setAuthenticatedUser(null); setStaffDashboard(null); setSelectedStaffToken(null); setActiveToken(null); setAdminData({ overview: null, hospitals: [], doctors: [], queues: [], patients: [] }); setPlatformError(""); setPlatformNotice(""); setPage("login");
  }

  async function callNextPatient() {
    if (!staffDashboard?.doctor?.id) return;
    setPlatformLoading(true); setPlatformError("");
    try {
      await platformRequest(`/api/queues/${staffDashboard.doctor.id}/call-next`, { method: "POST" });
      setPlatformNotice(t("platform.patientCalled"));
      await loadStaffDashboard();
    } catch (error) { setPlatformError(error.message); }
    finally { setPlatformLoading(false); }
  }

  async function updateStaffToken(tokenId, action) {
    setPlatformLoading(true); setPlatformError("");
    try {
      await platformRequest(`/api/staff/tokens/${tokenId}/${action}`, { method: "POST" });
      setPlatformNotice(action === "complete" ? t("platform.consultationCompleted") : t("platform.consultationStarted"));
      await loadStaffDashboard();
    } catch (error) { setPlatformError(error.message); }
    finally { setPlatformLoading(false); }
  }

  async function openStaffAssessment(tokenId) {
    setPlatformLoading(true); setPlatformError("");
    try {
      const [assessment, reviewData] = await Promise.all([platformRequest(`/api/staff/tokens/${tokenId}/assessment`), platformRequest(`/api/staff/tokens/${tokenId}/review`)]);
      setSelectedStaffToken(assessment); setSelectedStaffTokenId(tokenId); setPhysicianReview(reviewData.review); setReviewDraft(JSON.stringify(reviewData.review?.reviewed_summary || assessment.clinicalSummary?.english_summary || {}, null, 2)); setPage("doctor-assessments");
    }
    catch (error) { setPlatformError(error.message); }
    finally { setPlatformLoading(false); }
  }

  async function savePhysicianReview(finalize = false) {
    if (!selectedStaffTokenId || physicianReview?.status === "finalized") return;
    let reviewedSummary;
    try { reviewedSummary = JSON.parse(reviewDraft); } catch { setPlatformError("The physician-reviewed summary must be valid JSON."); return; }
    setReviewSaving(true); setPlatformError("");
    try {
      const saved = await platformRequest(`/api/staff/tokens/${selectedStaffTokenId}/review`, { method: "PUT", body: JSON.stringify({ reviewedSummary }) });
      if (finalize) {
        if (!window.confirm("After finalization, this physician-reviewed summary cannot be edited. Continue?")) { setPhysicianReview(saved.review); return; }
        const finalized = await platformRequest(`/api/staff/tokens/${selectedStaffTokenId}/review/finalize`, { method: "POST" });
        setPhysicianReview(finalized.review); setPlatformNotice("Physician review finalized and patient completed."); setSelectedStaffToken(null); setSelectedStaffTokenId(null); await loadStaffDashboard(); setPage("doctor-queue");
      } else { setPhysicianReview(saved.review); setPlatformNotice("Physician review draft saved."); }
    } catch (error) { setPlatformError(error.message); } finally { setReviewSaving(false); }
  }

  async function viewDoctorDocument(documentId) {
    if (!selectedStaffTokenId || !documentId) return;
    try {
      setPlatformError("");
      const response = await fetch(`${API_URL}/api/staff/tokens/${selectedStaffTokenId}/documents/${documentId}/view`, { credentials: "include" });
      if (!response.ok) throw new Error("Unable to open this document.");
      const file = await response.blob();
      if (!file.size) throw new Error("Unable to open this document.");
      const document = selectedStaffToken?.documents?.find((item) => item.id === documentId);
      setDocumentPreview({
        name: document?.file_name || "Medical document",
        type: document?.file_type || file.type || "application/octet-stream",
        size: document?.file_size || file.size,
        url: URL.createObjectURL(file),
      });
    } catch {
      setPlatformError("Unable to open this document.");
    }
  }

  function closeDocumentPreview() {
    if (documentPreview?.url) URL.revokeObjectURL(documentPreview.url);
    setDocumentPreview(null);
  }

  function renderDocumentPreview() {
    if (!documentPreview) return null;
    const isPdf = documentPreview.type === "application/pdf" || documentPreview.name.toLowerCase().endsWith(".pdf");
    return <div className="document-preview-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) closeDocumentPreview(); }}><section className="document-preview-modal" role="dialog" aria-modal="true" aria-labelledby="document-preview-title"><header><div><strong id="document-preview-title">{documentPreview.name}</strong><span>{documentPreview.type} · {Math.max(1, Math.round(documentPreview.size / 1024))} KB</span></div><button type="button" className="document-preview-close" aria-label="Close document preview" onClick={closeDocumentPreview}><X size={20} /></button></header><div className="document-preview-body">{isPdf ? <iframe title={`Preview of ${documentPreview.name}`} src={documentPreview.url} /> : <img src={documentPreview.url} alt={`Preview of ${documentPreview.name}`} />}</div></section></div>;
  }

  function renderDocumentScanner(document, variant = "compact") {
    if (!document) return <div className={`document-scanner ${variant} scanner-empty`}><FileText size={variant === "feature" ? 40 : 25} /><span>No document selected</span></div>;
    const isImage = document.type?.startsWith("image/") && document.previewUrl;
    return <div className={`document-scanner ${variant}`} aria-label={`Processing ${document.name}`}>
      <div className="document-scanner-preview">{isImage ? <img src={document.previewUrl} alt="" /> : <FileText size={variant === "feature" ? 46 : 26} aria-hidden="true" />}</div>
      <span className="document-scanner-beam" aria-hidden="true" />
      <div className="document-scanner-caption"><Sparkles size={15} aria-hidden="true" /><span>{variant === "feature" ? "Analyzing medical document" : "Scanning document"}</span></div>
    </div>;
  }

  function clearDemoAssessmentState() {
    setAssessmentId(null);
    setActiveToken(null);
    setSelectedHospitalId("");
    setSelectedDepartment("");
    setQueueDoctors([]);
    setLoadingQueueDoctors(false);
    setLastQueueUpdated(null);
    setClinicalSummary(null);
    setSummaryLanguage("english");
    setTranslatedClinicalSummaries({});
    setTranslatingSummaryLanguage("");
    setSummaryTranslationError("");
    setIntakeDocuments([]);
    setDocuments([]);
    setPatientClinicalReview(null);
    setPatientClinicalReviewState("idle");
    setPublicQueueStatus(null);
    setIntakeStep(1);
    setConsent({ health: false, audio: false, documents: false });
    setIntakeData({ bodySystem: "", symptoms: [], severity: 5, duration: "", progression: "", medicalConditionsHas: "no", medicalConditionsText: "", medicationsHas: "no", medicationsText: "", allergiesHas: "no", previousSimilar: "no", recentInjuryHas: "no", recentInjuryText: "", additionalInformation: "" });
    setSymptomSearch("");
    setAnalyzingIntake(false);
    setAnalysisError("");
    setSavingClinicalSummary(false);
    setShowUpload(false);
    setSelectedFile(null);
    setExtracting(false);
    setExtractedData(null);
    setExtractionError("");
    setVoiceDraft("");
    setSpeechError("");
    setAssessmentError("");
    setAssessmentSaveError("");
    setClinicalSummarySaveError("");
    setQueueError("");
  }

  async function resetDemoData() {
    if (!authenticatedUser?.demo || resettingDemo) return;
    setResettingDemo(true);
    setDemoResetNotice("");
    try {
      const data = await platformRequest("/api/demo/reset", { method: "POST" });
      clearDemoAssessmentState();
      setShowDemoResetConfirm(false);
      setProfileMenuOpen(false);
      setDemoResetNotice(data.message || "Demo data reset successfully.");
      setPlatformNotice(data.message || "Demo data reset successfully.");
      setPage("dashboard");
    } catch (error) {
      setDemoResetNotice(error.message || "Unable to reset demo data. Please try again.");
    } finally {
      setResettingDemo(false);
    }
  }

  async function toggleDoctor(doctor) {
    try {
      await platformRequest(`/api/admin/doctors/${doctor.id}`, { method: "PATCH", body: JSON.stringify({ isActive: !doctor.is_active }) });
      setPlatformNotice(t("platform.doctorUpdated"));
      loadAdminData();
    } catch (error) { setPlatformError(error.message); }
  }

  async function prepareDemoQueues() {
    setPlatformLoading(true); setPlatformError("");
    try {
      const data = await platformRequest("/api/admin/demo-queue-seed", { method: "POST" });
      setPlatformNotice(data.message); await loadAdminData();
    } catch (error) { setPlatformError(error.message); }
    finally { setPlatformLoading(false); }
  }

  async function signIn(useDemo = false) {
    try {
      setAuthError("");
      const payload = useDemo
        ? { demo: true }
        : { identityType: authForm.identityType, identity: authForm.identity, password: authForm.password };
      const data = await requestAuth("/api/auth/login", payload);
      setAuthenticatedUser({ ...data.user, patientId: data.patientId || data.user.patientId, role: "patient" });
      setForm((previous) => ({ ...previous, name: data.user.name, language: previous.language }));
      // The demo account uses the same database-backed flow as every other
      // patient. Never repopulate sample intake data after a successful reset.
      if (data.user.demo) clearDemoAssessmentState();
      setPage("dashboard");
    } catch (error) {
      setAuthError(error.message);
    }
  }

  async function sendOtp() {
    try {
      const data = await requestAuth("/api/auth/send-otp", { mobile: authForm.mobile });
      setOtpSessionId(data.sessionId);
      setPage("otp");
    } catch (error) { setAuthError(error.message); }
  }

  async function verifyOtp() {
    try {
      await requestAuth("/api/auth/verify-otp", { sessionId: otpSessionId, otp: authForm.otp });
      setMobileVerified(true);
      setPage("profile-setup");
    } catch (error) { setAuthError(error.message); }
  }

  async function createProfile() {
    try {
      const data = await requestAuth("/api/auth/register", { name: authForm.profileName, abhaId: authForm.abhaId, mobileVerified });
      setAuthenticatedUser({
    ...data.user,
    patientId: data.patientId,
    role: "patient",
});
      setForm((previous) => ({ ...previous, name: data.user.name, gender: authForm.gender, phone: authForm.mobile, language: previous.language }));
      setPage("dashboard");
    } catch (error) { setAuthError(error.message); }
  }

  // =====================================================
  // SPEECH RECOGNITION (SARVAM STT)
  // =====================================================

  const [isListening, setIsListening] = useState(false);
  const [speechError, setSpeechError] = useState("");
  const [voiceDraft, setVoiceDraft] = useState("");

  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);
  const lastRedFlagKeyRef = useRef("");
  const audioPlaybackRef = useRef(null);
  const speechPlaybackRequestRef = useRef(0);

  // =====================================================
  // MEDICAL RECORDS
  // =====================================================

  const [documents, setDocuments] = useState([
    {
      id: 1,
      name: "Blood Test Report",
      type: "Lab Report",
      hospital: "ABC Diagnostics",
      date: "28 Aug 2026",
      status: "Verified",
      locked: true,
    },
    {
      id: 2,
      name: "Prescription",
      type: "Prescription",
      hospital: "City Hospital",
      date: "15 Aug 2026",
      status: "Verified",
      locked: true,
    },
    {
      id: 3,
      name: "Discharge Summary",
      type: "Discharge",
      hospital: "Apollo Medical Centre",
      date: "02 Aug 2026",
      status: "Verified",
      locked: true,
    },
  ]);

  const [showUpload, setShowUpload] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");

  const [extracting, setExtracting] = useState(false);
  const [extractedData, setExtractedData] = useState(null);
  const [extractionError, setExtractionError] = useState("");

  // =====================================================
  // FORM FUNCTIONS
  // =====================================================

  function updateField(field, value) {
    setForm({
      ...form,
      [field]: value,
    });

    if (errors[field]) {
      setErrors({
        ...errors,
        [field]: "",
      });
    }
  }

  function validateForm() {
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = t("errors.enterName");
    }

    if (!form.age) {
      newErrors.age = t("errors.enterAge");
    } else if (Number(form.age) < 1 || Number(form.age) > 120) {
      newErrors.age = t("errors.validAge");
    }

    if (!form.gender) {
      newErrors.gender = t("errors.selectGender");
    }

    if (!form.phone) {
      newErrors.phone = t("errors.enterPhone");
    } else if (!/^[0-9]{10}$/.test(form.phone)) {
      newErrors.phone = t("errors.validPhone");
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function continueToIntake() {
    if (!validateForm()) return;
    setIntakeStep(1);
    setAnalysisError("");
    setSpeechError("");
    setIsListening(false);
    setPage("intake");
  }

  // =====================================================
  // STRUCTURED INTAKE HANDLERS
  // =====================================================

  function handleSelectSystem(systemId) {
    setIntakeData((prev) => {
      const isSame = prev.bodySystem === systemId;
      return {
        ...prev,
        bodySystem: systemId,
        symptoms: isSame ? prev.symptoms : [],
      };
    });
  }

  function toggleSymptom(symptomId) {
    setIntakeData((prev) => {
      const exists = prev.symptoms.includes(symptomId);
      const updated = exists
        ? prev.symptoms.filter((s) => s !== symptomId)
        : [...prev.symptoms, symptomId];
      return {
        ...prev,
        symptoms: updated,
      };
    });
  }

  function updateIntakeField(field, value) {
    setIntakeData((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  useEffect(() => {
    const result = getRedFlags(intakeData);
    const key = result.flags.map((flag) => flag.id).join(",");
    if (result.redFlagDetected && accessibility.guidedAudio && key !== lastRedFlagKeyRef.current) {
      speak(t("accessibility.redFlagAudio"));
    }
    lastRedFlagKeyRef.current = key;
  }, [intakeData.symptoms, intakeData.severity, accessibility.guidedAudio]);

  const redFlagState = getRedFlags(intakeData);

  useEffect(() => {
    if (page !== "intake" || (!accessibility.guidedAudio && !accessibility.autoReadQuestions)) return;
    const titles = {
      1: t("intakeFlow.step1Title"), 2: t("intakeFlow.step2Title"), 3: t("intakeFlow.step3Title"),
      4: t("intakeFlow.step4Title"), 5: t("intakeFlow.documentsTitle"), 6: t("intakeFlow.step6Title"), 7: t("intakeFlow.step7Title"),
    };
    const timer = window.setTimeout(() => speak(`${titles[intakeStep]}. ${t("accessibility.guidance")}`), 250);
    return () => window.clearTimeout(timer);
  }, [page, intakeStep, accessibility.guidedAudio, accessibility.autoReadQuestions]);

  // Helper: get display label for a symptom ID
  function getSymptomLabel(symptomId) {
    for (const system of BODY_SYSTEMS) {
      const found = system.symptoms.find((s) => s.id === symptomId);
      if (found) return t(found.key);
    }
    return symptomId;
  }

  // Helper: get display label for a duration ID
  function getDurationLabel(durationId) {
    const found = DURATION_OPTIONS.find((d) => d.id === durationId);
    return found ? t(found.key) : durationId;
  }

  // Helper: get display label for a progression ID
  function getProgressionLabel(progressionId) {
    const found = PROGRESSION_OPTIONS.find((p) => p.id === progressionId);
    return found ? t(found.key) : progressionId;
  }

  // Helper: get English label for API payload (stable)
  function getSymptomEnLabel(symptomId) {
    // Map IDs to English display labels for backend payload
    const ENGLISH_LABELS = {
      chest_discomfort: "Chest discomfort",
      palpitations: "Palpitations",
      fast_heartbeat: "Fast heartbeat",
      irregular_pulse: "Irregular pulse",
      dizziness: "Dizziness",
      fainting: "Fainting / lightheadedness",
      ankle_swelling: "Swelling in ankles/legs",
      breath_on_exertion: "Shortness of breath on exertion",
      cold_sweats: "Cold sweats",
      fatigue: "Fatigue",
      cough: "Cough",
      dry_cough: "Dry cough",
      productive_cough: "Productive cough with phlegm",
      shortness_of_breath: "Shortness of breath",
      wheezing: "Wheezing",
      chest_congestion: "Chest congestion",
      sore_throat: "Sore throat",
      runny_nose: "Runny nose",
      fever: "Fever",
      chest_tightness: "Chest tightness during breathing",
      headache: "Headache",
      migraine: "Migraine-like pain",
      dizziness_brain: "Dizziness",
      limb_weakness: "Weakness in arms or legs",
      numbness: "Numbness",
      tingling: "Tingling sensation",
      concentration: "Difficulty concentrating",
      vision_changes: "Vision changes or blurriness",
      tremors: "Tremors or shakiness",
      sleep_disturbance: "Sleep disturbance",
      abdominal_pain: "Abdominal pain",
      stomach_cramps: "Stomach cramps",
      nausea: "Nausea",
      vomiting: "Vomiting",
      diarrhea: "Diarrhea",
      constipation: "Constipation",
      acid_reflux: "Acid reflux / heartburn",
      loss_of_appetite: "Loss of appetite",
      bloating: "Bloating and gas",
      indigestion: "Indigestion",
      joint_pain: "Joint pain",
      muscle_pain: "Muscle pain",
      lower_back_pain: "Lower back pain",
      neck_stiffness: "Neck stiffness",
      joint_swelling: "Swelling around joints",
      morning_stiffness: "Morning stiffness",
      sprain_injury: "Recent sprain or injury",
      muscle_cramps: "Muscle cramps",
      limited_movement: "Limited movement or mobility",
      muscle_weakness: "General muscle weakness",
      skin_rash: "Skin rash",
      severe_itching: "Severe itching",
      redness_irritation: "Redness and irritation",
      swelling_puffiness: "Swelling or puffiness",
      hives: "Hives (urticaria)",
      dry_peeling_skin: "Dry, peeling skin",
      skin_discoloration: "Skin discoloration or lesions",
      blisters: "Blisters or bumps",
      allergic_reaction: "Allergic reaction to food/substance",
      eczema: "Eczema flare-up",
      painful_urination: "Pain or burning while urinating",
      frequent_urge: "Frequent urge to urinate",
      blood_in_urine: "Blood in urine",
      abdominal_heaviness: "Lower abdominal heaviness",
      flank_pain: "Flank or side back pain",
      difficulty_urinating: "Difficulty starting urination",
      dark_urine: "Dark or cloudy urine",
      nighttime_urination: "Nighttime urination frequency",
      reduced_urine_output: "Reduced urine output",
      fever_chills: "Fever or chills",
      unexplained_fatigue: "Unexplained fatigue",
      body_weakness: "General body weakness",
      weight_change: "Significant weight change",
      loss_of_appetite_gen: "Loss of appetite",
      general_discomfort: "General discomfort / malaise",
      night_sweats: "Night sweats",
      body_aches: "Body aches",
      swollen_lymph_nodes: "Swollen lymph nodes",
    };
    return ENGLISH_LABELS[symptomId] || symptomId;
  }

  function getDurationEnLabel(durationId) {
    const labels = {
      less_1h: "Less than 1 hour",
      "1_6h": "1–6 hours",
      "6_24h": "6–24 hours",
      "1_3d": "1–3 days",
      "4_7d": "4–7 days",
      "1_4w": "1–4 weeks",
      over_1m: "More than 1 month",
    };
    return labels[durationId] || durationId;
  }

  function getProgressionEnLabel(progressionId) {
    const labels = {
      getting_better: "Getting better",
      staying_same: "Staying the same",
      getting_worse: "Getting worse",
      fluctuating: "Not sure / fluctuating",
    };
    return labels[progressionId] || progressionId;
  }

  async function runAiAnalysis() {
    setIntakeStep(6);
    setAnalyzingIntake(true);
    setAnalysisError("");
    setClinicalSummarySaveError("");

    const selectedSystemObj = BODY_SYSTEMS.find(
      (s) => s.id === intakeData.bodySystem
    );

    // Payload uses stable English labels for backend compatibility
    const payload = {
      patient: form,
      bodySystem: selectedSystemObj
        ? t(selectedSystemObj.titleKey)
        : intakeData.bodySystem,
      symptoms: intakeData.symptoms.map(getSymptomEnLabel),
      severity: intakeData.severity,
      duration: getDurationEnLabel(intakeData.duration),
      progression: getProgressionEnLabel(intakeData.progression),
      medicalConditions:
        intakeData.medicalConditionsHas === "yes"
          ? intakeData.medicalConditionsText || "Yes (details unspecified)"
          : intakeData.medicalConditionsHas,
      medications:
        intakeData.medicationsHas === "yes"
          ? intakeData.medicationsText || "Yes (details unspecified)"
          : intakeData.medicationsHas,
      allergies:
        intakeData.allergiesHas === "yes"
          ? intakeData.allergiesText || "Yes (details unspecified)"
          : intakeData.allergiesHas,
      previousSimilarSymptoms: intakeData.previousSimilar,
      recentInjuryOrSurgery:
        intakeData.recentInjuryHas === "yes"
          ? intakeData.recentInjuryText || "Yes (details unspecified)"
          : intakeData.recentInjuryHas,
      additionalInformation: intakeData.additionalInformation,
      documents: intakeDocuments
        .filter((document) => document.status === "processed")
        .map(({ name, extractedText, extractedData }) => ({
          name,
          extractedText,
          extractedData,
        })),
    };

    try {
      const response = await fetch(`${API_URL}/api/history/analyze-intake`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || "Unable to complete AI clinical analysis.");
      }

      setClinicalSummary(data.summary);
      await persistClinicalSummary(data.summary);
    } catch (err) {
      console.error("AI Analysis Error:", err);
      setAnalysisError(
        err.message || "Unable to complete AI clinical analysis. Please try again."
      );
    } finally {
      setAnalyzingIntake(false);
    }
  }

  async function persistClinicalSummary(summary) {
    if (savingClinicalSummary) return;
    if (!summary?.bilingual_summary?.english || !summary?.bilingual_summary?.hindi) {
      setClinicalSummarySaveError("The generated clinical summary is incomplete and cannot be saved.");
      return;
    }
    if (!assessmentId) {
      setClinicalSummarySaveError("This assessment is not available. Please start a new assessment.");
      return;
    }

    setSavingClinicalSummary(true);
    setClinicalSummarySaveError("");
    try {
      await assessmentRequest(`/api/assessments/${assessmentId}/clinical-summary`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          englishSummary: summary.bilingual_summary.english,
          hindiSummary: summary.bilingual_summary.hindi,
        }),
      });
      setIntakeStep(7);
    } catch (error) {
      setClinicalSummarySaveError(error.message || "Unable to save the clinical summary.");
    } finally {
      setSavingClinicalSummary(false);
    }
  }

  function formatFileSize(bytes) {
    if (!bytes) return "0 KB";
    const units = ["B", "KB", "MB"];
    const index = Math.min(Math.floor(Math.log(bytes) / Math.log(1024)), units.length - 1);
    return `${(bytes / 1024 ** index).toFixed(index ? 1 : 0)} ${units[index]}`;
  }

  function readDocumentAsBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onerror = () => reject(reader.error || new Error("Unable to read the original document."));
      reader.onload = () => {
        const dataUrl = typeof reader.result === "string" ? reader.result : "";
        const separator = dataUrl.indexOf(",");
        if (separator < 0) return reject(new Error("Unable to read the original document."));
        return resolve(dataUrl.slice(separator + 1));
      };
      reader.readAsDataURL(file);
    });
  }

  async function processIntakeDocument(document) {
    if (document.size > MAX_DOCUMENT_SIZE_BYTES) {
      setIntakeDocuments((previous) => previous.map((item) => (
        item.id === document.id ? { ...item, status: "failed", error: DOCUMENT_SIZE_ERROR } : item
      )));
      return;
    }
    setIntakeDocuments((previous) => previous.map((item) => (
      item.id === document.id ? { ...item, status: "processing", error: "" } : item
    )));

    let processedResult = null;
    try {
      const formData = new FormData();
      const isPdf = document.file.type === "application/pdf" || document.name.toLowerCase().endsWith(".pdf");
      formData.append(isPdf ? "pdf" : "image", document.file);
      const endpoint = isPdf ? "/api/documents/analyze-pdf" : "/api/documents/ocr-analyze";
      const response = await fetch(`${API_URL}${endpoint}`, { method: "POST", credentials: "include", body: formData });
      const data = await response.json();
      if (!response.ok || !data.success) throw new Error(data.error || "Unable to process document.");

      const extractionMethod = isPdf ? "pdf-text" : "ocr-local";
      processedResult = { extractedText: data.extractedText || "", extractedData: data.data || {}, extractionMethod };
      let persistedDocument = null;
      if (!assessmentId) throw new Error("This assessment is not available. Please start a new assessment.");
      const originalFileBase64 = await readDocumentAsBase64(document.file);
      const persistence = await assessmentRequest(`/api/assessments/${assessmentId}/documents`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fileName: document.name,
          fileType: document.type,
          fileSize: document.size,
          extractedText: processedResult.extractedText,
          extractionMethod,
          findings: processedResult.extractedData,
          originalFileBase64,
        }),
      });
      persistedDocument = persistence.document;

      setIntakeDocuments((previous) => previous.map((item) => (
        item.id === document.id
          ? { ...item, status: "processed", ...processedResult, persistedDocumentId: persistedDocument?.id || null }
          : item
      )));
    } catch (error) {
      console.error("Intake document processing error:", error);
      const safeError = error?.message === DOCUMENT_SIZE_ERROR
        ? DOCUMENT_SIZE_ERROR
        : "Unable to process this document. Please try again.";
      setIntakeDocuments((previous) => previous.map((item) => (
        item.id === document.id
          ? { ...item, ...processedResult, status: "failed", error: safeError }
          : item
      )));
    }
  }

  function addIntakeDocuments(fileList) {
    const selectedFiles = Array.from(fileList);
    const supportedFiles = selectedFiles.filter((file) => (
      ["application/pdf", "image/jpeg", "image/png"].includes(file.type)
    ) && file.size <= MAX_DOCUMENT_SIZE_BYTES);
    const oversizedDocuments = selectedFiles.filter((file) => (
      ["application/pdf", "image/jpeg", "image/png"].includes(file.type) && file.size > MAX_DOCUMENT_SIZE_BYTES
    )).map((file) => ({
      id: `${Date.now()}-${file.name}-${Math.random()}`,
      name: file.name,
      type: file.type || "application/octet-stream",
      size: file.size,
      file,
      previewUrl: "",
      status: "failed",
      extractedText: "",
      extractedData: {},
      error: DOCUMENT_SIZE_ERROR,
    }));
    const newDocuments = supportedFiles.map((file) => ({
      id: `${Date.now()}-${file.name}-${Math.random()}`,
      name: file.name,
      type: file.type || "application/octet-stream",
      size: file.size,
      file,
      previewUrl: file.type.startsWith("image/") ? URL.createObjectURL(file) : "",
      status: "processing",
      extractedText: "",
      extractedData: {},
      error: "",
    }));
    setIntakeDocuments((previous) => [...previous, ...oversizedDocuments, ...newDocuments]);
    newDocuments.forEach(processIntakeDocument);
  }

  function removeIntakeDocument(id) {
    setIntakeDocuments((previous) => {
      const removed = previous.find((document) => document.id === id);
      if (removed?.previewUrl) URL.revokeObjectURL(removed.previewUrl);
      return previous.filter((document) => document.id !== id);
    });
  }

  function confirmMedicalHistory() {
    const intakeDoc = {
      id: Date.now(),
      name: "Structured Clinical Intake Report",
      type: "Clinical Intake",
      hospital: "MedFlow Triage Service",
      date: new Date().toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }),
      status: "Verified",
      locked: true,
    };

    setDocuments((prev) => [intakeDoc, ...prev]);
    setPage("find-doctor");
  }

  // =====================================================
  // SPEECH RECOGNITION (SARVAM)
  // =====================================================

  async function startSpeechRecognition() {
    if (isListening) {
      if (mediaRecorderRef.current) {
        mediaRecorderRef.current.stop();
      }
      return;
    }

    try {
      setSpeechError("");

      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
      });

      audioChunksRef.current = [];

      const preferredMimeTypes = ["audio/webm;codecs=opus", "audio/webm"];
      const recorderMimeType = preferredMimeTypes.find((mimeType) => (
        typeof MediaRecorder.isTypeSupported !== "function" || MediaRecorder.isTypeSupported(mimeType)
      ));
      const recorder = recorderMimeType
        ? new MediaRecorder(stream, { mimeType: recorderMimeType })
        : new MediaRecorder(stream);

      recorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      recorder.onstart = () => {
        setIsListening(true);
      };

      recorder.onstop = async () => {
        setIsListening(false);

        stream.getTracks().forEach((track) => track.stop());

        const audioMimeType = recorder.mimeType || audioChunksRef.current[0]?.type || "audio/webm";
        const audioBlob = new Blob(audioChunksRef.current, { type: audioMimeType });
        mediaRecorderRef.current = null;

        if (audioBlob.size === 0) {
          console.warn("Sarvam STT recording completed without audio bytes.");
          setSpeechError(t("speechErrors.convertFailed"));
          return;
        }

        const formData = new FormData();
        formData.append("audio", audioBlob, "recording.webm");
        formData.append("language", form.language);

        try {
          setSpeechError("");
          console.info("Sending voice recording for transcription:", {
            audioSizeBytes: audioBlob.size,
            mimeType: audioBlob.type,
            language: form.language,
          });

          const response = await fetch(`${API_URL}/api/sarvam/stt`, {
            method: "POST",
            body: formData,
          });

          const data = await response.json().catch(() => ({}));

          if (!response.ok || !data.success) {
            throw new Error(data.error || "Speech recognition failed");
          }

          const transcript = String(data.transcript ?? "").trim();
          if (!transcript) {
            throw new Error("Speech recognition returned an empty transcript");
          }
          setVoiceDraft(transcript);
        } catch (error) {
          console.error("Sarvam STT error:", error);
          setSpeechError(t("speechErrors.convertFailed"));
        }
      };

      mediaRecorderRef.current = recorder;
      recorder.start();

      setTimeout(() => {
        if (recorder.state === "recording") {
          recorder.stop();
        }
      }, 10000);
    } catch (error) {
      console.error("Microphone error:", error);
      setIsListening(false);

      if (error.name === "NotAllowedError") {
        setSpeechError(t("speechErrors.permissionDenied"));
      } else if (error.name === "NotFoundError") {
        setSpeechError(t("speechErrors.noMicrophone"));
      } else {
        setSpeechError(t("speechErrors.unable"));
      }
    }
  }

  // Stop recording when leaving intake
  useEffect(() => {
    if (page !== "intake" && mediaRecorderRef.current) {
      if (mediaRecorderRef.current.state === "recording") {
        mediaRecorderRef.current.stop();
      }
      mediaRecorderRef.current = null;
      setIsListening(false);
    }
  }, [page]);

  // =====================================================
  // FILE UPLOAD (PDF & GROQ EXTRACTION)
  // =====================================================

  function handleFileChange(event) {
    const file = event.target.files[0];
    if (file) {
      if (file.size > MAX_DOCUMENT_SIZE_BYTES) {
        setSelectedFile(null);
        setExtractionError(DOCUMENT_SIZE_ERROR);
        event.target.value = "";
        return;
      }
      setExtractionError("");
      setSelectedFile(file);
    }
  }

  async function uploadDocument() {
    if (!selectedFile) return;
    if (selectedFile.size > MAX_DOCUMENT_SIZE_BYTES) {
      setExtractionError(DOCUMENT_SIZE_ERROR);
      return;
    }

    try {
      setExtracting(true);
      setExtractionError("");
      setExtractedData(null);

      const formData = new FormData();
      formData.append("pdf", selectedFile);

      const response = await fetch(`${API_URL}/api/documents/analyze-pdf`, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || "Unable to process document.");
      }

      setExtractedData(data);

      const newDoc = {
        id: Date.now(),
        name: selectedFile.name,
        type: "Medical Document",
        hospital: "Patient Upload",
        date: new Date().toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        }),
        status: "Verified",
        locked: false,
      };

      setDocuments((prev) => [newDoc, ...prev]);
      setSelectedFile(null);
      setShowUpload(false);
    } catch (error) {
      console.error("Document Extraction Error:", error);
      setExtractionError(error.message || "Unable to process document.");
    } finally {
      setExtracting(false);
    }
  }

  // Filter Medical Records
  const filteredDocuments = documents.filter((doc) => {
    const matchSearch =
      doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.hospital.toLowerCase().includes(searchTerm.toLowerCase());

    const matchCat = category === "All" || doc.type === category;

    return matchSearch && matchCat;
  });

  // Body System Icon Helper
  function renderSystemIcon(iconName, size = 22) {
    switch (iconName) {
      case "Activity":
        return <Activity size={size} />;
      case "Wind":
        return <Wind size={size} />;
      case "Brain":
        return <Brain size={size} />;
      case "UtensilsCrossed":
        return <UtensilsCrossed size={size} />;
      case "Bone":
        return <Bone size={size} />;
      case "Sparkles":
        return <Sparkles size={size} />;
      case "Droplets":
        return <Droplets size={size} />;
      case "ShieldAlert":
      default:
        return <ShieldAlert size={size} />;
    }
  }

  function getSeverityClass(score) {
    if (score <= 3) return "severity-badge-mild";
    if (score <= 6) return "severity-badge-moderate";
    return "severity-badge-severe";
  }

  function getSeverityLabel(score) {
    if (score <= 3) return t("intakeFlow.severityMinimal");
    if (score <= 6) return t("intakeFlow.severityModerate");
    return t("intakeFlow.severitySevere");
  }

  function getDisplayedClinicalSummaryValue(bilingualKey, legacyKey) {
    const bilingualSummary = getActiveClinicalSummary();
    const value = bilingualSummary?.[bilingualKey] ?? clinicalSummary?.[legacyKey];
    return Array.isArray(value) ? value.join(", ") : value;
  }

  function getPreferredSummaryLanguage() {
    return MEDFLOW_LANGUAGES.find((language) => language.code === i18n.language) || MEDFLOW_LANGUAGES[0];
  }

  function getActiveClinicalSummary() {
    if (summaryLanguage === "preferred") {
      return translatedClinicalSummaries[getPreferredSummaryLanguage().code] || null;
    }
    return clinicalSummary?.bilingual_summary?.[summaryLanguage] || null;
  }

  async function showPreferredLanguageSummary() {
    const preferredLanguage = getPreferredSummaryLanguage();
    if (preferredLanguage.code === "en-IN") return setSummaryLanguage("english");
    if (preferredLanguage.code === "hi-IN") return setSummaryLanguage("hindi");
    if (!assessmentId) {
      setSummaryTranslationError("This assessment is not available for translation.");
      return;
    }
    if (translatedClinicalSummaries[preferredLanguage.code]) {
      setSummaryLanguage("preferred");
      return;
    }

    setTranslatingSummaryLanguage(preferredLanguage.code);
    setSummaryTranslationError("");
    try {
      const data = await assessmentRequest(`/api/assessments/${assessmentId}/clinical-summary/translation?languageCode=${encodeURIComponent(preferredLanguage.code)}`, { method: "GET" });
      setTranslatedClinicalSummaries((previous) => ({ ...previous, [preferredLanguage.code]: data.summary }));
      setSummaryLanguage("preferred");
    } catch (error) {
      setSummaryTranslationError(error.message || "Unable to translate the clinical summary.");
    } finally {
      setTranslatingSummaryLanguage("");
    }
  }

  async function showPreferredReviewedSummary() {
    const preferredLanguage = getPreferredSummaryLanguage();
    if (preferredLanguage.code === "en-IN") return setReviewSummaryLanguage("english");
    if (!patientClinicalReview?.assessmentId) return;
    if (translatedReviewSummaries[preferredLanguage.code]) {
      setReviewSummaryLanguage("preferred");
      return;
    }
    setTranslatingReviewLanguage(preferredLanguage.code);
    setReviewTranslationError("");
    try {
      const data = await platformRequest(`/api/patient/assessments/${patientClinicalReview.assessmentId}/clinical-review/translation?languageCode=${encodeURIComponent(preferredLanguage.code)}`);
      setTranslatedReviewSummaries((previous) => ({ ...previous, [preferredLanguage.code]: data.summary }));
      setReviewSummaryLanguage("preferred");
    } catch (error) {
      setReviewTranslationError(error.message || "Unable to translate the physician-reviewed summary.");
    } finally {
      setTranslatingReviewLanguage("");
    }
  }

  // Tri-state Yes/No/Not sure helper
  const YES_NO_OPTIONS = [
    { id: "no",       labelKey: "intakeFlow.no" },
    { id: "yes",      labelKey: "intakeFlow.yes" },
    { id: "not_sure", labelKey: "intakeFlow.notSure" },
  ];

  function renderAccessibilityControls() {
    return (
      <div className="accessibility-controls">
        <button type="button" className="accessibility-toggle" onClick={() => setShowAccessibility((value) => !value)} aria-expanded={showAccessibility}>
          <Settings2 size={17} /> {t("accessibility.settings")}
        </button>
        {showAccessibility && <div className="accessibility-panel" role="region" aria-label={t("accessibility.settings")}>
          {["guidedAudio", "largeText", "highContrast", "reduceMotion", "autoReadQuestions"].map((key) => (
            <label key={key}><input type="checkbox" checked={accessibility[key]} onChange={() => updateAccessibility(key)} /> {t(`accessibility.${key}`)}</label>
          ))}
          {accessibility.guidedAudio && <div className="guided-audio-actions"><button type="button" onClick={() => speak(t("accessibility.guidance"))}><Play size={15} />{t("accessibility.replay")}</button><button type="button" onClick={() => window.speechSynthesis?.pause()}><Pause size={15} />{t("accessibility.pause")}</button><button type="button" onClick={stopSpeech}><Square size={15} />{t("accessibility.stop")}</button></div>}
        </div>}
      </div>
    );
  }

  function renderAudioButton(text) {
    return <button type="button" className="read-aloud-button" onClick={() => speak(text)} aria-label={t("accessibility.readAloud")} title={t("accessibility.readAloud")}><Volume2 size={18} /></button>;
  }

  function currentStepPrompt() {
    const prompts = { 1: "intakeFlow.step1Title", 2: "intakeFlow.step2Title", 3: "intakeFlow.step3Title", 4: "intakeFlow.step4Title", 5: "intakeFlow.documentsTitle", 6: "intakeFlow.step6Title", 7: "intakeFlow.step7Title" };
    return t(prompts[intakeStep]);
  }

  // Shared by every patient portal route. Intake and consent deliberately use
  // their dedicated layouts, while portal pages retain this persistent shell.
  function renderPatientSidebar() {
    const patientNav = [["dashboard", LayoutDashboard, t("platform.patientDashboard")], ["records", ClipboardList, t("medicalRecords")], ["find-doctor", Stethoscope, t("platform.findDoctor")], ["documents", FileText, t("platform.medicalDocuments")], ["faq", CircleHelp, t("platform.helpFaq")]];
    return <aside className="patient-sidebar"><div className="logo"><div className="logo-icon"><HeartPulse size={20} /></div><span>Med<span>Flow</span></span></div><nav aria-label={t("platform.patientNavigation")}>{patientNav.map(([target, Icon, label]) => <button type="button" key={target} className={page === target || (target === "faq" && page === "help") ? "active" : ""} aria-current={page === target ? "page" : undefined} onClick={() => setPage(target)}><Icon size={18} /><span>{label}</span></button>)}</nav><div className="patient-sidebar-accessibility">{renderAccessibilityControls()}</div><button type="button" className="patient-logout" onClick={logOut}><LogOut size={18} /><span>{t("auth.logout")}</span></button></aside>;
  }

  function renderPatientHeaderActions() {
    return <div className="patient-header-actions"><LanguageSwitcher setForm={setForm} /><div className="patient-profile-menu"><button type="button" className="patient-profile-trigger" aria-label={t("platform.openProfileMenu")} aria-haspopup="menu" aria-expanded={profileMenuOpen} onClick={() => setProfileMenuOpen((open) => !open)}><UserRound size={17} /><span>{t("auth.profile")}</span></button>{profileMenuOpen && <div className="patient-profile-popover" role="menu" onKeyDown={(event) => { if (event.key === "Escape") setProfileMenuOpen(false); }}><strong>{authenticatedUser?.name || t("platform.patient")}</strong><button type="button" role="menuitem" onClick={() => { setProfileMenuOpen(false); setPage("profile"); }}><UserRound size={16} />{t("auth.profile")}</button><button type="button" role="menuitem" onClick={() => { setProfileMenuOpen(false); setPage("records"); }}><ClipboardList size={16} />{t("medicalRecords")}</button>{authenticatedUser?.demo && <button type="button" role="menuitem" onClick={() => { setProfileMenuOpen(false); setDemoResetNotice(""); setShowDemoResetConfirm(true); setPage("profile"); }}><RotateCcw size={16} />{t("platform.resetDemoData")}</button>}<button type="button" role="menuitem" onClick={() => { setProfileMenuOpen(false); logOut(); }}><LogOut size={16} />{t("auth.logout")}</button></div>}</div></div>;
  }

  function renderDoctorSidebar() {
    const navGroups = [
      ["Workspace", [["doctor-dashboard", LayoutDashboard, t("auth.dashboard")], ["doctor-queue", Ticket, "Patient Queue"], ["doctor-patients", Users, "Current Patient"]]],
      ["Clinical", [["doctor-assessments", ClipboardList, t("platform.assessments")]]],
      ["Account", [["doctor-profile", UserRound, t("auth.profile")]]],
    ];
    return <aside className="doctor-sidebar"><div className="logo"><div className="logo-icon"><HeartPulse size={20} /></div><span>Med<span>Flow</span></span></div><nav aria-label={t("platform.doctorNavigation")}>{navGroups.map(([heading, items]) => <section className="doctor-nav-section" key={heading}><p>{heading}</p>{items.map(([target, Icon, label]) => <button type="button" key={target} className={page === target ? "active" : ""} aria-current={page === target ? "page" : undefined} onClick={() => setPage(target)}><Icon size={18} /><span>{label}</span></button>)}</section>)}</nav><button type="button" className="doctor-logout" onClick={logOut}><LogOut size={18} />{t("auth.logout")}</button></aside>;
  }

  useEffect(() => {
    const paths = { login: "/login", register: "/register", otp: "/otp", "profile-setup": "/profile", dashboard: "/dashboard", documents: "/documents", records: "/medical-records", "find-doctor": "/find-doctor", faq: "/faq", help: "/help", profile: "/profile", "hospital-token": "/hospital-token", "live-queue": "/live-queue", "doctor-dashboard": "/doctor-dashboard", "doctor-queue": "/doctor-queue", "doctor-patients": "/doctor-patients", "doctor-assessments": "/doctor-assessments", "doctor-documents": "/doctor-documents", "doctor-review": "/doctor-review", "doctor-profile": "/doctor-profile", "admin-dashboard": "/admin-dashboard", "admin-hospitals": "/admin-hospitals", "admin-doctors": "/admin-doctors", "admin-queues": "/admin-queues", "admin-patients": "/admin-patients", "admin-reports": "/admin-reports" };
    Object.assign(paths, { "admin-assessments": "/admin-assessments", "admin-profile": "/admin-profile" });
    if (paths[page]) window.history.replaceState(null, "", paths[page]);
  }, [page]);

  if (page === "queue-status") {
    return <div className="queue-page public-queue-page"><nav className="navbar"><div className="logo"><div className="logo-icon"><HeartPulse size={20} /></div><span>Med<span>Flow</span></span></div></nav><main className="queue-container"><section className="live-queue-card" aria-live="polite">{platformLoading ? <LoadingState label={t("platform.loadingQueueStatus")} /> : platformError ? <EmptyState title={t("platform.queueUnavailable")} detail={platformError} /> : publicQueueStatus && <><StatusBadge status="live"><Radio size={14} /> {t("queue.live")}</StatusBadge><p className="eyebrow">{publicQueueStatus.hospitalName}</p><h1>{publicQueueStatus.doctorName}</h1><p>{t("queue.status")}: {publicQueueStatus.queueStatus}</p><div className="live-token-row"><div><span>{t("queue.nowServing")}</span><strong>{publicQueueStatus.currentToken || t("platform.notStarted")}</strong></div><div><span>{t("queue.yourToken")}</span><strong>{publicQueueStatus.displayToken}</strong></div></div><p className="queue-ahead"><Users size={18} />{publicQueueStatus.patientsAhead} {t("queue.patientsAhead")}</p><p className="muted">{t("platform.safeQueueNotice")}</p></>}</section></main></div>;
  }

  if (["login", "register", "otp", "profile-setup"].includes(page)) {
    const isLogin = page === "login";
    return (
      <div className="auth-page">
        <nav className="navbar"><div className="logo"><div className="logo-icon"><HeartPulse size={20} /></div><span>Med<span>Flow</span></span></div><LanguageSwitcher setForm={setForm} /></nav>
        <div className="auth-layout">
        {isLogin && <section className="auth-hero" aria-labelledby="auth-hero-title"><span className="auth-hero-eyebrow"><Sparkles size={15} /> Connected care, thoughtfully organized</span><h1 id="auth-hero-title">A clearer path from symptoms to care.</h1><p>MedFlow helps patients share structured health information, add supporting documents, and coordinate their next care step with confidence.</p><div className="auth-feature-grid"><article><Mic size={19} /><strong>Voice-enabled intake</strong><span>Answer in the way that feels easiest.</span></article><article><FileText size={19} /><strong>Document processing</strong><span>Keep relevant records with your assessment.</span></article><article><Activity size={19} /><strong>Structured summaries</strong><span>Information prepared for clinical review.</span></article><article><Ticket size={19} /><strong>Live queue coordination</strong><span>Follow your OPD token in one place.</span></article></div><p className="auth-hero-note"><ShieldCheck size={16} /> Designed for accessible, patient-controlled care journeys.</p></section>}
        <main className="auth-card">
          <span className="auth-prototype">{t("auth.prototype")}</span>
          {isLogin && <>
            <h1>{t("platform.welcome")}</h1><p className="platform-login-copy">{t("platform.chooseAccess")}</p>
            <div className="role-selector" role="group" aria-label={t("platform.chooseAccess")}>
              <button type="button" className={selectedRole === "patient" ? "active" : ""} onClick={() => setSelectedRole("patient")}><HeartPulse size={18} />{t("platform.patient")}</button>
              <button type="button" className={selectedRole === "staff" ? "active" : ""} onClick={() => setSelectedRole("staff")}><UserCog size={18} />{t("platform.staff")}</button>
              <button type="button" className={selectedRole === "admin" ? "active" : ""} onClick={() => setSelectedRole("admin")}><Shield size={18} />{t("platform.admin")}</button>
            </div>
            {selectedRole === "patient" ? <><div className="auth-field"><label>{t("auth.identityType")}</label><div className="auth-type-toggle">
              {["abha", "aadhaar"].map((type) => <button type="button" key={type} className={authForm.identityType === type ? "active" : ""} onClick={() => updateAuthField("identityType", type)}>{t(`auth.${type}`)}</button>)}
            </div></div>
            <div className="auth-field"><label>{t(`auth.${authForm.identityType}`)}</label><input value={authForm.identity} onChange={(e) => updateAuthField("identity", e.target.value)} placeholder={t(authForm.identityType === "abha" ? "auth.enterAbha" : "auth.enterAadhaar")} /></div>
            <div className="auth-field"><label>{t("auth.password")}</label><input type="password" value={authForm.password} onChange={(e) => updateAuthField("password", e.target.value)} placeholder={t("auth.enterPassword")} /></div>
            {authError && <p className="auth-error">{authError}</p>}
            <button className="btn-primary auth-submit" onClick={() => signIn()}>{t("auth.login")}<ArrowRight size={16} /></button>
            <div className="demo-auth"><strong>{t("auth.demoAccount")}</strong><button type="button" className="btn-secondary" onClick={() => signIn(true)}>{t("auth.useDemo")}</button></div>
            <p className="auth-switch">{t("auth.newToMedx")} <button type="button" onClick={() => { setAuthError(""); setPage("register"); }}>{t("auth.createAccount")}</button></p></> : <div className="role-demo-login"><div className="role-demo-icon">{selectedRole === "staff" ? <UserCog size={30} /> : <Shield size={30} />}</div><h2>{selectedRole === "staff" ? t("platform.staffLogin") : t("platform.adminLogin")}</h2><p>{t("platform.prototypeRoleInfo")}</p><div className="auth-field"><label>{t("platform.loginId")}</label><input autoComplete="username" value={authForm.identity} onChange={(e) => updateAuthField("identity", e.target.value)} /></div><div className="auth-field"><label>{t("auth.password")}</label><input type="password" autoComplete="current-password" value={authForm.password} onChange={(e) => updateAuthField("password", e.target.value)} /></div>{authError && <p className="auth-error">{authError}</p>}<button className="btn-primary auth-submit" onClick={() => signInRoleWithCredentials(selectedRole)}>{t("auth.login")}<ArrowRight size={16} /></button><button className="btn-secondary auth-submit" onClick={() => signInRole(selectedRole)}>{t("auth.useDemo")}</button></div>}
          </>}
          {page === "register" && <>
            <h1>{t("auth.createTitle")}</h1><p>{t("auth.createSubtitle")}</p>
            <div className="auth-field"><label>{t("auth.mobile")}</label><input type="tel" value={authForm.mobile} onChange={(e) => updateAuthField("mobile", e.target.value)} placeholder="+91 0000000000" /></div>
            {authError && <p className="auth-error">{authError}</p>}<button className="btn-primary auth-submit" onClick={sendOtp}>{t("auth.sendOtp")}<ArrowRight size={16} /></button>
          </>}
          {page === "otp" && <>
            <h1>{t("auth.verifyTitle")}</h1><p>{t("auth.verifySubtitle")}</p><p className="demo-otp">{t("auth.demoOtp")}</p>
            <div className="auth-field"><label>{t("auth.enterOtp")}</label><input inputMode="numeric" maxLength="6" value={authForm.otp} onChange={(e) => updateAuthField("otp", e.target.value)} /></div>
            {authError && <p className="auth-error">{authError}</p>}<button className="btn-primary auth-submit" onClick={verifyOtp}>{t("auth.verifyOtp")}</button><button type="button" className="auth-link" onClick={sendOtp}>{t("auth.resendOtp")}</button>
          </>}
          {page === "profile-setup" && <>
            <h1>{t("auth.profileTitle")}</h1><p className="verified-line"><Check size={16} /> {t("auth.mobileVerified")}</p>
            <div className="auth-field"><label>{t("auth.fullName")}</label><input value={authForm.profileName} onChange={(e) => updateAuthField("profileName", e.target.value)} /></div>
            <div className="auth-field"><label>{t("auth.demoAbhaField")}</label><input value={authForm.abhaId} onChange={(e) => updateAuthField("abhaId", e.target.value)} /></div>
            <div className="field-row"><div className="auth-field"><label>{t("auth.dateOfBirth")}</label><input type="date" value={authForm.dateOfBirth} onChange={(e) => updateAuthField("dateOfBirth", e.target.value)} /></div><div className="auth-field"><label>{t("gender")}</label><select value={authForm.gender} onChange={(e) => updateAuthField("gender", e.target.value)}><option value="">{t("genderOptions.select")}</option><option value="Female">{t("genderOptions.female")}</option><option value="Male">{t("genderOptions.male")}</option></select></div></div>
            {authError && <p className="auth-error">{authError}</p>}<button className="btn-primary auth-submit" onClick={createProfile}>{t("auth.createProfile")}</button>
          </>}
          <div className="auth-privacy"><ShieldCheck size={15} />{t("auth.privacy")}</div>
        </main>
        </div>
      </div>
    );
  }

  if (authenticatedUser?.role === "staff" && page === "doctor-assessments" && selectedStaffToken) {
    const documentsForAssessment = selectedStaffToken.documents || [];
    const clinicalSummary = selectedStaffToken.clinicalSummary?.english_summary || null;
    return (
      <div className="doctor-shell">
        {renderDoctorSidebar()}
        <main className="doctor-main">
          <header className="doctor-workspace-header"><div><p className="eyebrow">Clinical</p><strong>{t("platform.patientAssessment")}</strong><span>{selectedStaffToken.patient?.name || t("platform.notReported")}</span></div></header>
          <section className="doctor-content clinical-workspace">
          {platformError && <p className="speech-error" role="alert">{platformError}</p>}
          <button className="btn-secondary doctor-assessment-back" onClick={() => setPage("doctor-assessments")}><ArrowLeft size={17} />Back to Assessments</button>
          <p className="eyebrow">{t("platform.patientAssessment")}</p>
          <h1>{selectedStaffToken.patient?.name || t("platform.notReported")}</h1>
          <p className="muted">{selectedStaffToken.patient?.age || t("platform.notReported")} · {selectedStaffToken.patient?.gender || t("platform.notReported")} · {selectedStaffToken.assessment?.created_at ? new Date(selectedStaffToken.assessment.created_at).toLocaleDateString() : t("platform.notReported")}</p>
          <div className="assessment-detail-grid">
            <Card><SectionHeader title={t("platform.assessment")} /><p><strong>{t("intakeFlow.bodySystem")}:</strong> {selectedStaffToken.assessment?.body_system || t("platform.notReported")}</p><p><strong>{t("intakeFlow.symptoms")}:</strong> {selectedStaffToken.symptoms?.map((item) => item.name).join(", ") || t("platform.notReported")}</p><p><strong>{t("intakeFlow.reviewSeverity")}:</strong> {selectedStaffToken.assessment?.severity ?? t("platform.notReported")}</p><p><strong>{t("intakeFlow.duration")}:</strong> {selectedStaffToken.assessment?.duration || t("platform.notReported")}</p><p><strong>{t("intakeFlow.progression")}:</strong> {selectedStaffToken.assessment?.progression || t("platform.notReported")}</p></Card>
            <Card><SectionHeader title={t("platform.clinicalHistory")} /><p><strong>{t("platform.conditions")}:</strong> {selectedStaffToken.clinicalHistory?.existing_conditions || t("platform.notReported")}</p><p><strong>{t("platform.medications")}:</strong> {selectedStaffToken.clinicalHistory?.medications || t("platform.notReported")}</p><p><strong>{t("platform.allergies")}:</strong> {selectedStaffToken.clinicalHistory?.allergies || t("platform.notReported")}</p><p><strong>{t("platform.previousEpisodes")}:</strong> {selectedStaffToken.clinicalHistory?.previous_similar_symptoms || t("platform.notReported")}</p><p><strong>{t("platform.injurySurgery")}:</strong> {selectedStaffToken.clinicalHistory?.previous_injury_surgery || t("platform.notReported")}</p><p><strong>{t("platform.additionalRemarks")}:</strong> {selectedStaffToken.clinicalHistory?.additional_remarks || t("platform.notReported")}</p></Card>
          </div>
          <Card className="medical-records-card">
            <SectionHeader eyebrow={t("platform.patientAssessment")} title={t("platform.uploadedMedicalRecords")} />
            {documentsForAssessment.length ? <div className="staff-document-list">{documentsForAssessment.map((document) => {
              const hasExtraction = Boolean(document.extracted_text || document.findings?.length);
              return <article key={document.id} className="staff-document-item"><div className="staff-document-title"><FileText size={20} /><div><strong>{document.file_name}</strong><span>{document.file_type || t("platform.medicalDocument")}{document.extraction_method ? ` · ${document.extraction_method}` : ""}</span></div><StatusBadge status={hasExtraction ? "success" : "neutral"}>{hasExtraction ? t("platform.analysed") : t("platform.noFindings")}</StatusBadge></div><button type="button" className="btn-secondary staff-document-view" onClick={() => viewDoctorDocument(document.id)}>View Document</button></article>;
            })}</div> : <EmptyState title={t("platform.noDocumentsForAssessment")} detail={t("platform.noDocumentsForAssessmentDetail")} />}
          </Card>
          <Card className="summary-card"><SectionHeader eyebrow={t("platform.aiGeneratedSummary")} title={t("platform.aiClinicalSummary")} />{clinicalSummary ? <div className="doctor-summary-grid"><div><strong>{t("platform.chiefComplaint")}</strong><p>{clinicalSummary.chiefComplaint || t("platform.notReported")}</p></div><div><strong>{t("platform.historyOfPresentingComplaint")}</strong><p>{clinicalSummary.historyOfPresentingComplaint || t("platform.notReported")}</p></div><div><strong>{t("intakeFlow.symptoms")}</strong><p>{clinicalSummary.symptoms?.join(", ") || t("platform.notReported")}</p></div></div> : <p>{t("platform.noSummary")}</p>}<p className="muted">{t("platform.readOnlyOriginalOutput")}</p></Card>
          <Card className="summary-card"><SectionHeader eyebrow="Physician Review" title={physicianReview?.status === "finalized" ? "✓ Physician Review Finalized" : "Draft"} actions={<StatusBadge status={physicianReview?.status === "finalized" ? "success" : "neutral"}>{physicianReview?.status || "NOT STARTED"}</StatusBadge>} />{physicianReview?.status === "finalized" ? <><div className="doctor-summary-grid">{Object.entries(physicianReview.reviewed_summary || {}).filter(([, value]) => Array.isArray(value) ? value.length : value).map(([key, value]) => <div key={key}><strong>{key.replace(/([A-Z])/g, " $1").replace(/^./, (letter) => letter.toUpperCase())}</strong><p>{Array.isArray(value) ? value.join(", ") : String(value)}</p></div>)}</div><p className="muted">Finalized by {authenticatedUser.name} on {new Date(physicianReview.finalized_at).toLocaleString()}.</p></> : <>{(() => { let fields = {}; try { fields = JSON.parse(reviewDraft || "{}"); } catch { fields = {}; } return <div className="review-field-grid">{Object.entries(fields).map(([key, value]) => <label key={key}><span>{key.replace(/([A-Z])/g, " $1").replace(/^./, (letter) => letter.toUpperCase())}</span><textarea value={Array.isArray(value) ? value.join("\n") : String(value ?? "")} onChange={(event) => { const next = { ...fields, [key]: Array.isArray(value) ? event.target.value.split("\n").filter(Boolean) : event.target.value }; setReviewDraft(JSON.stringify(next)); }} disabled={reviewSaving} rows="3" /></label>)}</div>; })()}<div className="token-actions"><button type="button" className="btn-secondary" onClick={() => setReviewDraft(JSON.stringify(physicianReview?.reviewed_summary || clinicalSummary || {}))} disabled={reviewSaving}>Cancel</button><button type="button" className="btn-secondary" onClick={() => savePhysicianReview(false)} disabled={reviewSaving}>Save Draft</button><button type="button" className="btn-primary" onClick={() => savePhysicianReview(true)} disabled={reviewSaving}>Finalize Review</button></div></>}</Card>
          </section>
        </main>
        {renderDocumentPreview()}
      </div>
    );
  }

  if (authenticatedUser?.role === "staff" && page.startsWith("doctor-")) {
    const staff = staffDashboard;
    const waiting = staff?.waiting || [];
    const current = staff?.current || null;
    const queueTokens = [...(current ? [current] : []), ...waiting];
    const openToken = (token) => openStaffAssessment(token.id);
    const renderQueueRows = (tokens) => tokens.length ? <div className="doctor-queue-list">{tokens.map((token) => <article className="doctor-queue-row" key={token.id}><strong>{token.displayToken}</strong><div><span className="doctor-queue-patient">{token.patientName}</span><small>{t("platform.assessmentAvailable")}</small></div><StatusBadge status={token.status === "in_consultation" ? "success" : token.status === "called" ? "live" : "neutral"}>{t(`platform.tokenStatus.${token.status}`, { defaultValue: token.status })}</StatusBadge><div className="doctor-row-actions">{token.status === "called" && <button type="button" className="btn-secondary" onClick={() => updateStaffToken(token.id, "start")} disabled={platformLoading}>{t("platform.startConsultation")}</button>}<button type="button" className="btn-secondary" onClick={() => openToken(token)} disabled={platformLoading}>{t("platform.viewAssessment")}</button></div></article>)}</div> : <EmptyState title={t("platform.noWaitingPatients")} detail={t("platform.noWaitingPatientsDetail")} />;
    let content;
    if (page === "doctor-queue") {
      content = <><SectionHeader eyebrow={t("platform.clinicalQueue")} title={t("platform.queueWorkspace")} actions={<button type="button" className="btn-secondary" onClick={loadStaffDashboard} disabled={platformLoading}>{t("platform.refresh")}</button>} /><div className="doctor-queue-overview"><Card><span>{t("platform.queueStatus")}</span><StatusBadge status={staff?.queue?.queueStatus === "active" ? "success" : "neutral"}>{staff?.queue?.queueStatus || t("platform.notStarted")}</StatusBadge></Card><Card><span>{t("platform.nowServing")}</span><strong>{staff?.queue?.displayCurrentToken || t("platform.notStarted")}</strong></Card><Card><span>{t("platform.waiting")}</span><strong>{staff?.queue?.waitingCount || 0}</strong></Card></div>{current && <Card className="current-consultation-card"><SectionHeader eyebrow={t("platform.currentConsultation")} title={`${current.displayToken} · ${current.patientName}`} actions={<button type="button" className="btn-secondary" onClick={() => openToken(current)}>{t("platform.openAssessment")}</button>} /><StatusBadge status="live">{t(`platform.tokenStatus.${current.status}`, { defaultValue: current.status })}</StatusBadge>{current.status === "called" && <button type="button" className="btn-primary" onClick={() => updateStaffToken(current.id, "start")} disabled={platformLoading}>{t("platform.startConsultation")}</button>}{current.status === "in_consultation" && <button type="button" className="btn-primary" onClick={() => updateStaffToken(current.id, "complete")} disabled={platformLoading}>{t("platform.completeConsultation")}</button>}</Card>}<Card><SectionHeader eyebrow={t("platform.nextInQueue")} title={t("platform.waitingPatients")} />{renderQueueRows(waiting)}</Card></>;
    } else if (page === "doctor-patients") {
      content = <><SectionHeader eyebrow={t("platform.clinicalQueue")} title={t("platform.authorizedPatients")} /><Card><p className="muted">{t("platform.authorizedPatientsDetail")}</p>{renderQueueRows(queueTokens)}</Card></>;
    } else if (page === "doctor-documents") {
      content = <><SectionHeader eyebrow="Clinical" title="Documents" /><Card><p className="muted">Open an authorized patient assessment to view its uploaded records and extracted findings.</p>{renderQueueRows(queueTokens)}</Card></>;
    } else if (page === "doctor-review") {
      content = <><SectionHeader eyebrow="Clinical" title="Physician Review" /><Card><p className="muted">Open an authorized patient assessment to review, save, or finalize its clinical summary.</p>{renderQueueRows(queueTokens)}</Card></>;
    } else if (page === "doctor-assessments") {
      content = <><SectionHeader eyebrow={t("platform.clinicalQueue")} title={t("platform.assessments")} /><Card><p className="muted">{t("platform.assessmentListDetail")}</p>{renderQueueRows(queueTokens)}</Card></>;
    } else if (page === "doctor-profile") {
      content = <><SectionHeader eyebrow={t("platform.clinicalWorkspace")} title={t("platform.doctorProfile")} /><div className="doctor-profile-grid"><Card><p><strong>{t("platform.doctorName")}:</strong> {staff?.doctor?.name || authenticatedUser.name}</p><p><strong>{t("platform.specialty")}:</strong> {staff?.doctor?.specialization || staff?.doctor?.department || t("platform.notReported")}</p><p><strong>{t("platform.hospital")}:</strong> {staff?.doctor?.hospitalName || t("platform.notReported")}</p><p><strong>{t("platform.role")}:</strong> {t("platform.doctorStaff")}</p></Card><Card><SectionHeader title={t("platform.queueStatus")} /><StatusBadge status={staff?.queue?.queueStatus === "active" ? "success" : "neutral"}>{staff?.queue?.queueStatus || t("platform.notStarted")}</StatusBadge><p className="muted">{t("platform.profileSecurityNote")}</p></Card></div></>;
    } else {
      content = <><SectionHeader eyebrow={t("platform.clinicalWorkspace")} title={t("platform.goodMorning", { name: staff?.doctor?.name || authenticatedUser.name })} actions={<button type="button" className="btn-primary" onClick={callNextPatient} disabled={platformLoading || !waiting.length}><PhoneCall size={17} />{t("platform.callNext")}</button>} /><p className="doctor-page-subtitle">{t("platform.doctorDashboardSubtitle")}</p><div className="doctor-stat-grid"><Card><span>{t("platform.waiting")}</span><strong>{staff?.queue?.waitingCount || 0}</strong></Card><Card><span>{t("platform.inConsultation")}</span><strong>{current?.status === "in_consultation" ? 1 : 0}</strong></Card><Card><span>{t("platform.completedToday")}</span><strong>{staff?.completedToday || 0}</strong></Card></div>{current && <Card className="current-consultation-card"><SectionHeader eyebrow={t("platform.currentConsultation")} title={`${current.displayToken} · ${current.patientName}`} actions={<button type="button" className="btn-secondary" onClick={() => openToken(current)}>{t("platform.openAssessment")}</button>} /><StatusBadge status="live">{t(`platform.tokenStatus.${current.status}`, { defaultValue: current.status })}</StatusBadge>{current.status === "called" ? <button type="button" className="btn-primary" onClick={() => updateStaffToken(current.id, "start")} disabled={platformLoading}>{t("platform.startConsultation")}</button> : <button type="button" className="btn-primary" onClick={() => updateStaffToken(current.id, "complete")} disabled={platformLoading}>{t("platform.completeConsultation")}</button>}</Card>}<Card className="doctor-dashboard-queue"><SectionHeader eyebrow={t("platform.nextInQueue")} title={t("platform.waitingPatients")} actions={<button type="button" className="btn-secondary" onClick={() => setPage("doctor-queue")}>{t("platform.viewQueue")}</button>} />{renderQueueRows(waiting.slice(0, 5))}</Card></>;
    }
    return <div className="doctor-shell">{renderDoctorSidebar()}<main className="doctor-main"><header className="doctor-workspace-header"><div><p className="eyebrow">{t("platform.clinicalWorkspace")}</p><strong>{staff?.doctor?.name || authenticatedUser.name}</strong><span>{staff?.doctor?.specialization || staff?.doctor?.department || t("platform.doctorStaff")} · {staff?.doctor?.hospitalName || t("platform.notReported")}</span></div><StatusBadge status={staff?.queue?.queueStatus === "active" ? "success" : "neutral"}>{staff?.queue?.queueStatus || t("platform.notStarted")}</StatusBadge></header><Toast message={platformNotice} />{platformError && <p className="speech-error" role="alert">{platformError}</p>}{platformLoading && !staff ? <LoadingState label={t("platform.loadingWorkspace")} /> : <section className="doctor-content">{content}</section>}</main></div>;
  }

  if (authenticatedUser?.role === "staff" && page.startsWith("doctor-")) {
    const staff = staffDashboard;
    const queueItems = staff?.waiting || [];
    return <div className="role-workspace"><header className="role-topbar"><div className="logo"><div className="logo-icon"><HeartPulse size={20} /></div><span>Med<span>Flow</span></span></div><nav>{[["doctor-dashboard", t("auth.dashboard")], ["doctor-queue", t("platform.queue")], ["doctor-patients", t("platform.patients")], ["doctor-assessments", t("platform.assessments")]].map(([target, label]) => <button key={target} className={page === target ? "active" : ""} onClick={() => setPage(target)}>{label}</button>)}<button onClick={logOut}>{t("auth.logout")}</button></nav></header><main className="role-main"><Toast message={platformNotice} />{platformError && <p className="speech-error" role="alert">{platformError}</p>}{platformLoading && !staff ? <LoadingState label={t("platform.loadingWorkspace")} /> : page === "doctor-assessments" && selectedStaffToken ? <section className="clinical-workspace"><button className="btn-secondary" onClick={() => setPage("doctor-dashboard")}>{t("back")}</button><p className="eyebrow">{t("platform.patientAssessment")}</p><h1>{selectedStaffToken.patient?.name}</h1><div className="assessment-detail-grid"><Card><h2>{t("platform.assessment")}</h2><p><strong>{t("intakeFlow.bodySystem")}:</strong> {selectedStaffToken.assessment?.body_system}</p><p><strong>{t("intakeFlow.symptoms")}:</strong> {selectedStaffToken.symptoms?.map((item) => item.name).join(", ") || t("platform.notReported")}</p><p><strong>{t("intakeFlow.reviewSeverity")}:</strong> {selectedStaffToken.assessment?.severity}/10</p><p><strong>{t("intakeFlow.duration")}:</strong> {selectedStaffToken.assessment?.duration}</p><p><strong>{t("intakeFlow.progression")}:</strong> {selectedStaffToken.assessment?.progression}</p></Card><Card><h2>{t("platform.clinicalHistory")}</h2><p><strong>{t("platform.conditions")}:</strong> {selectedStaffToken.clinicalHistory?.existing_conditions || t("platform.notReported")}</p><p><strong>{t("platform.medications")}:</strong> {selectedStaffToken.clinicalHistory?.medications || t("platform.notReported")}</p><p><strong>{t("platform.allergies")}:</strong> {selectedStaffToken.clinicalHistory?.allergies || t("platform.notReported")}</p><p><strong>{t("platform.previousEpisodes")}:</strong> {selectedStaffToken.clinicalHistory?.previous_similar_symptoms || t("platform.notReported")}</p></Card><Card className="summary-card"><h2>{t("platform.aiClinicalSummary")}</h2><p>{selectedStaffToken.clinicalSummary?.english_summary?.chiefComplaint || selectedStaffToken.clinicalSummary?.english_summary?.historyOfPresentingComplaint || t("platform.noSummary")}</p><p className="muted">{t("platform.physicianReviewOnly")}</p></Card></div></section> : <><header className="workspace-heading"><div><p className="eyebrow">{t("platform.clinicalQueue")}</p><h1>{t("platform.goodMorning")}, {staff?.doctor?.name || authenticatedUser.name}</h1><p>{staff?.doctor?.department} · {staff?.doctor?.hospitalName}</p></div><button className="btn-primary" onClick={callNextPatient} disabled={platformLoading || !queueItems.length}><PhoneCall size={17} />{t("platform.callNext")}</button></header><div className="metric-grid"><Card><span>{t("platform.nowServing")}</span><strong>{staff?.queue?.displayCurrentToken || t("platform.notStarted")}</strong></Card><Card><span>{t("platform.waiting")}</span><strong>{staff?.queue?.waitingCount || 0}</strong></Card><Card><span>{t("platform.completedToday")}</span><strong>{staff?.completedToday || 0}</strong></Card><Card><span>{t("platform.queueStatus")}</span><StatusBadge status={staff?.queue?.queueStatus === "active" ? "success" : "neutral"}>{staff?.queue?.queueStatus || "—"}</StatusBadge></Card></div><Card className="queue-work-card"><div className="section-heading"><div><p className="eyebrow">{t("platform.liveList")}</p><h2>{t("platform.waitingPatients")}</h2></div><button className="btn-secondary" onClick={loadStaffDashboard}>{t("platform.refresh")}</button></div>{queueItems.length ? <div className="staff-token-list">{queueItems.map((token) => <div key={token.id} className="staff-token-row"><strong>{token.displayToken}</strong><span>{token.patientName}</span><StatusBadge status="neutral">{token.status}</StatusBadge><button className="btn-secondary" onClick={() => openStaffAssessment(token.id)}>{t("platform.viewAssessment")}</button></div>)}</div> : <EmptyState title={t("platform.noWaitingPatients")} detail={t("platform.noWaitingPatientsDetail")} />}{staff?.current && <div className="current-consultation"><strong>{t("platform.currentPatient")}: {staff.current.displayToken}</strong><button className="btn-secondary" onClick={() => updateStaffToken(staff.current.id, "start")}>{t("platform.startConsultation")}</button><button className="btn-primary" onClick={() => updateStaffToken(staff.current.id, "complete")}>{t("platform.completeConsultation")}</button></div>}</Card></>}</main></div>;
  }

  if (authenticatedUser?.role === "admin" && page.startsWith("admin-")) {
    const section = page.replace("admin-", "");
    const query = adminSearch.trim().toLowerCase();
    const navItems = [["admin-dashboard", LayoutDashboard, t("auth.dashboard")], ["admin-hospitals", Hospital, t("platform.hospitals")], ["admin-doctors", Stethoscope, t("platform.doctors")], ["admin-queues", Ticket, t("platform.queues")], ["admin-patients", Users, t("platform.patients")], ["admin-assessments", ClipboardList, t("platform.assessments")], ["admin-reports", BarChart3, t("platform.reports")], ["admin-profile", UserRound, t("auth.profile")]];
    const searchBox = <label className="admin-search"><Search size={17} /><input value={adminSearch} onChange={(event) => setAdminSearch(event.target.value)} placeholder={t("platform.searchAdmin")} aria-label={t("platform.searchAdmin")} /></label>;
    const matches = (...values) => !query || values.filter(Boolean).join(" ").toLowerCase().includes(query);
    let content;
    if (section === "hospitals") {
      const hospitals = adminData.hospitals.filter((hospital) => matches(hospital.name, hospital.address));
      content = <><SectionHeader eyebrow={t("platform.operations")} title={t("platform.hospitalManagement")} actions={searchBox} /><div className="admin-card-grid">{hospitals.length ? hospitals.map((hospital) => <Card key={hospital.id} className="admin-entity-card"><Hospital size={20} /><h3>{hospital.name}</h3><p>{hospital.address || t("platform.notReported")}</p><StatusBadge status="success">{t("platform.connected")}</StatusBadge><p className="muted">{hospital.doctors?.filter((doctor) => doctor.is_active).length || 0} {t("platform.activeDoctors")}</p></Card>) : <EmptyState title={t("platform.noResults")} detail={t("platform.adjustSearch")} />}</div></>;
    } else if (section === "doctors") {
      const doctors = adminData.doctors.filter((doctor) => matches(doctor.name, doctor.department, doctor.specialization, doctor.hospitals?.name));
      content = <><SectionHeader eyebrow={t("platform.operations")} title={t("platform.doctorManagement")} actions={searchBox} /><div className="admin-list">{doctors.length ? doctors.map((doctor) => { const queue = Array.isArray(doctor.doctor_queues) ? doctor.doctor_queues[0] : doctor.doctor_queues; return <Card key={doctor.id} className="admin-list-row"><div><strong>{doctor.name}</strong><span>{doctor.specialization || doctor.department || t("platform.notReported")} · {doctor.hospitals?.name || t("platform.notReported")}</span></div><StatusBadge status={doctor.is_active ? "success" : "neutral"}>{doctor.is_active ? t("platform.active") : t("platform.inactive")}</StatusBadge><StatusBadge status={queue?.queue_status === "active" ? "live" : "neutral"}>{queue?.queue_status || t("platform.notStarted")}</StatusBadge><button type="button" className="btn-secondary" onClick={() => toggleDoctor(doctor)} disabled={platformLoading}>{doctor.is_active ? t("platform.deactivate") : t("platform.activate")}</button></Card>; }) : <EmptyState title={t("platform.noResults")} detail={t("platform.adjustSearch")} />}</div></>;
    } else if (section === "queues") {
      const queues = adminData.queues.filter((queue) => matches(queue.doctorName, queue.department, queue.hospitalName));
      content = <><SectionHeader eyebrow={t("platform.operations")} title={t("platform.queueManagement")} actions={searchBox} /><div className="admin-card-grid">{queues.length ? queues.map((queue) => <Card key={queue.doctorId} className="admin-queue-card"><p>{queue.hospitalName || t("platform.notReported")}</p><h3>{queue.doctorName}</h3><span>{queue.department}</span><div><strong>{queue.currentToken || t("platform.notStarted")}</strong><small>{t("platform.currentToken")}</small></div><StatusBadge status={queue.queueStatus === "active" ? "success" : "neutral"}>{queue.queueStatus}</StatusBadge><p className="muted">{queue.waitingCount} {t("platform.waiting")}</p></Card>) : <EmptyState title={t("platform.noResults")} detail={t("platform.adjustSearch")} />}</div></>;
    } else if (section === "patients") {
      const patients = adminData.patients.filter((patient) => matches(patient.name, patient.id));
      content = <><SectionHeader eyebrow={t("platform.operations")} title={t("platform.patientOperations")} actions={searchBox} /><div className="admin-list">{patients.length ? patients.map((patient) => <Card key={patient.id} className="admin-list-row"><div><strong>{patient.name}</strong><span>{t("platform.assessments")}: {patient.assessmentCount} · {t("platform.lastActivity")}: {patient.lastActivity ? new Date(patient.lastActivity).toLocaleDateString() : t("platform.notReported")}</span></div><StatusBadge status={patient.activeToken ? "live" : "neutral"}>{patient.activeToken ? t("platform.activeToken") : t("platform.noActiveToken")}</StatusBadge></Card>) : <EmptyState title={t("platform.noResults")} detail={t("platform.adjustSearch")} />}</div></>;
    } else if (section === "assessments") {
      content = <><SectionHeader eyebrow={t("platform.operations")} title={t("platform.assessments")} /><EmptyState title={t("platform.assessmentDataUnavailable")} detail={t("platform.assessmentDataUnavailableDetail")} /></>;
    } else if (section === "reports") {
      content = <><SectionHeader eyebrow={t("platform.operations")} title={t("platform.operationalReports")} /><div className="admin-report-grid"><Card><strong>{adminData.overview?.activeDoctors || 0}</strong><span>{t("platform.activeDoctors")}</span></Card><Card><strong>{adminData.overview?.activeQueues || 0}</strong><span>{t("platform.activeQueues")}</span></Card><Card><strong>{adminData.overview?.tokensToday || 0}</strong><span>{t("platform.tokensToday")}</span></Card><Card><strong>{adminData.overview?.completedConsultations || 0}</strong><span>{t("platform.completedConsultations")}</span></Card></div><p className="muted">{t("platform.reportsDescription")}</p></>;
    } else if (section === "profile") {
      content = <><SectionHeader eyebrow={t("platform.operations")} title={t("platform.adminProfile")} /><div className="admin-profile-grid"><Card><p><strong>{t("platform.accountName")}:</strong> {authenticatedUser.name}</p><p><strong>{t("platform.role")}:</strong> {t("platform.administrator")}</p><p><strong>{t("platform.sessionStatus")}:</strong> {t("platform.active")}</p></Card><Card><p className="muted">{t("platform.profileSecurityNote")}</p></Card></div></>;
    } else {
      const overviewCards = [["hospitals", Hospital, t("platform.hospitals")], ["activeDoctors", Stethoscope, t("platform.activeDoctors")], ["activeQueues", Ticket, t("platform.activeQueues")], ["patients", Users, t("platform.totalPatients")], ["tokensToday", Activity, t("platform.tokensToday")], ["completedConsultations", CheckCircle2, t("platform.completedConsultations")]];
      content = <><SectionHeader eyebrow={t("platform.operations")} title={t("platform.adminDashboard")} actions={<button type="button" className="btn-secondary" onClick={prepareDemoQueues} disabled={platformLoading}><BarChart3 size={17} />{t("platform.prepareDemoQueues")}</button>} /><p className="admin-page-subtitle">{t("platform.adminDashboardSubtitle")}</p><div className="admin-stat-grid">{overviewCards.map(([key, Icon, label]) => <Card key={key}><Icon size={20} /><span>{label}</span><strong>{adminData.overview?.[key] || 0}</strong></Card>)}</div><div className="admin-overview-grid"><Card><SectionHeader title={t("platform.hospitalStatus")} /><div className="admin-compact-list">{adminData.hospitals.slice(0, 4).map((hospital) => <div key={hospital.id}><strong>{hospital.name}</strong><span>{hospital.doctors?.filter((doctor) => doctor.is_active).length || 0} {t("platform.activeDoctors")}</span></div>)}</div></Card><Card><SectionHeader title={t("platform.queueActivity")} /><div className="admin-compact-list">{adminData.queues.slice(0, 4).map((queue) => <div key={queue.doctorId}><strong>{queue.doctorName}</strong><span>{queue.currentToken || t("platform.notStarted")} · {queue.waitingCount} {t("platform.waiting")}</span></div>)}</div></Card></div></>;
    }
    return <div className="admin-shell"><aside className="admin-sidebar"><div className="logo"><div className="logo-icon"><HeartPulse size={20} /></div><span>Med<span>Flow</span></span></div><div className="admin-sidebar-profile"><Shield size={18} /><span>{authenticatedUser.name}</span><small>{t("platform.administrator")}</small></div><nav aria-label={t("platform.adminNavigation")}>{navItems.map(([target, Icon, label]) => <button type="button" key={target} className={page === target ? "active" : ""} aria-current={page === target ? "page" : undefined} onClick={() => setPage(target)}><Icon size={18} /><span>{label}</span></button>)}</nav><button type="button" className="admin-logout" onClick={logOut}><LogOut size={18} />{t("auth.logout")}</button></aside><main className="admin-main"><header className="admin-workspace-header"><div><p className="eyebrow">{t("platform.systemOverview")}</p><strong>{t("platform.administration")}</strong><span>{t("platform.adminHeaderSubtitle")}</span></div><StatusBadge status="success">{t("platform.active")}</StatusBadge></header><Toast message={platformNotice} />{platformError && <p className="speech-error" role="alert">{platformError}</p>}{platformLoading && !adminData.overview ? <LoadingState label={t("platform.loadingWorkspace")} /> : <section className="admin-content">{content}</section>}</main></div>;
  }

  if (authenticatedUser?.role === "admin" && page.startsWith("admin-")) {
    const section = page.replace("admin-", "");
    const adminNav = [["admin-dashboard", t("auth.dashboard")], ["admin-hospitals", t("platform.hospitals")], ["admin-doctors", t("platform.doctors")], ["admin-queues", t("platform.queues")], ["admin-patients", t("platform.patients")], ["admin-reports", t("platform.reports")]];
    const renderAdminContent = () => {
      if (section === "doctors") return <Card><h1>{t("platform.doctorManagement")}</h1><div className="responsive-table">{adminData.doctors.map((doctor) => <div className="data-row" key={doctor.id}><strong>{doctor.name}</strong><span>{doctor.department}</span><span>{doctor.hospitals?.name}</span><StatusBadge status={doctor.is_active ? "success" : "neutral"}>{doctor.is_active ? t("platform.active") : t("platform.inactive")}</StatusBadge><button className="btn-secondary" onClick={() => toggleDoctor(doctor)}>{doctor.is_active ? t("platform.deactivate") : t("platform.activate")}</button></div>)}</div></Card>;
      if (section === "hospitals") return <Card><h1>{t("platform.hospitalManagement")}</h1><div className="responsive-table">{adminData.hospitals.map((hospital) => <div className="data-row" key={hospital.id}><strong>{hospital.name}</strong><span>{hospital.address}</span><span>{hospital.doctors?.filter((doctor) => doctor.is_active).length || 0} {t("platform.activeDoctors")}</span></div>)}</div></Card>;
      if (section === "queues") return <Card><h1>{t("platform.queueManagement")}</h1><div className="responsive-table">{adminData.queues.map((queue) => <div className="data-row" key={queue.doctorId}><strong>{queue.doctorName}</strong><span>{queue.hospitalName}</span><span>{queue.department}</span><span>{queue.waitingCount} {t("platform.waiting")}</span><StatusBadge status={queue.queueStatus === "active" ? "success" : "neutral"}>{queue.queueStatus}</StatusBadge></div>)}</div></Card>;
      if (section === "patients") return <Card><h1>{t("platform.patientOperations")}</h1><div className="responsive-table">{adminData.patients.map((patient) => <div className="data-row" key={patient.id}><strong>{patient.name}</strong><span>{patient.assessmentCount} {t("platform.assessments")}</span><StatusBadge status={patient.activeToken ? "live" : "neutral"}>{patient.activeToken ? t("platform.activeToken") : t("platform.noActiveToken")}</StatusBadge><span>{new Date(patient.lastActivity).toLocaleDateString()}</span></div>)}</div></Card>;
      if (section === "reports") return <Card><h1>{t("platform.operationalReports")}</h1><p>{t("platform.reportsDescription")}</p><div className="metric-grid"><Card><span>{t("platform.tokensToday")}</span><strong>{adminData.overview?.tokensToday || 0}</strong></Card><Card><span>{t("platform.completedToday")}</span><strong>{adminData.overview?.completedConsultations || 0}</strong></Card><Card><span>{t("platform.activeQueues")}</span><strong>{adminData.overview?.activeQueues || 0}</strong></Card></div></Card>;
      return <><header className="workspace-heading"><div><p className="eyebrow">{t("platform.operations")}</p><h1>{t("platform.adminDashboard")}</h1><p>{t("platform.operationalOverview")}</p></div><button className="btn-secondary" onClick={prepareDemoQueues} disabled={platformLoading}><BarChart3 size={17} />{t("platform.prepareDemoQueues")}</button></header><div className="metric-grid">{[["patients", t("platform.totalPatients")], ["activeDoctors", t("platform.activeDoctors")], ["hospitals", t("platform.hospitals")], ["activeQueues", t("platform.activeQueues")], ["tokensToday", t("platform.tokensToday")], ["completedConsultations", t("platform.completedConsultations")]].map(([key,label]) => <Card key={key}><span>{label}</span><strong>{adminData.overview?.[key] || 0}</strong></Card>)}</div></>;
    };
    return <div className="role-workspace admin-workspace"><header className="role-topbar"><div className="logo"><div className="logo-icon"><HeartPulse size={20} /></div><span>Med<span>Flow</span></span></div><nav>{adminNav.map(([target,label]) => <button key={target} className={page === target ? "active" : ""} onClick={() => setPage(target)}>{label}</button>)}<button onClick={logOut}>{t("auth.logout")}</button></nav></header><main className="role-main"><Toast message={platformNotice} />{platformError && <p className="speech-error" role="alert">{platformError}</p>}{platformLoading && !adminData.overview ? <LoadingState label={t("platform.loadingWorkspace")} /> : renderAdminContent()}</main></div>;
  }

  if (page === "dashboard") {
    const selectedSystem = BODY_SYSTEMS.find((system) => system.id === intakeData.bodySystem);
    const hasRecentAssessment = Boolean(intakeData.bodySystem || intakeData.symptoms.length || clinicalSummary);
    return <div className="patient-shell">{renderPatientSidebar()}<main className="patient-main"><header className="patient-workspace-header"><div><p className="eyebrow">{t("platform.patientPortal")}</p><h1>{authenticatedUser?.name ? t("platform.goodMorning", { name: `\u2068${authenticatedUser.name}\u2069` }) : t("platform.welcome")}</h1><p>{t("platform.patientDashboardSubtitle")}</p></div>{renderPatientHeaderActions()}</header><Toast message={platformNotice} />{queueError && <p className="speech-error" role="alert">{queueError}</p>}{activeToken ? <Card className="patient-queue-card" aria-live="polite"><SectionHeader eyebrow={t("platform.activeQueue")} title={<bdi dir="ltr">{activeToken.displayToken || activeToken.tokenNumber}</bdi>} actions={<StatusBadge status={activeToken.status === "called" || activeToken.status === "in_consultation" ? "live" : "neutral"}>{t(`platform.tokenStatus.${activeToken.status}`, { defaultValue: activeToken.status })}</StatusBadge>} /><div className="patient-queue-details"><div><span>{t("platform.doctor")}</span><strong><bdi dir="ltr">{activeToken.doctorName || t("platform.notReported")}</bdi></strong></div><div><span>{t("platform.hospital")}</span><strong><bdi dir="ltr">{activeToken.hospitalName || t("platform.notReported")}</bdi></strong></div><div><span>{t("queue.patientsAhead")}</span><strong><bdi dir="ltr">{activeToken.patientsAhead ?? t("platform.notReported")}</bdi></strong></div></div><button type="button" className="btn-secondary" onClick={() => setPage("live-queue")}>{t("queue.viewLiveQueue")}</button></Card> : <Card className="patient-no-queue"><SectionHeader eyebrow={t("platform.activeQueue")} title={t("platform.noActiveQueue")} /><p>{t("platform.noActiveQueueDetail")}</p></Card>}<Card className="patient-assessment-cta"><div><HeartPulse size={28} /><div><h2>{t("platform.startNewAssessment")}</h2><p>{t("platform.startAssessmentFriendlyDescription")}</p></div><button type="button" className="btn-primary" onClick={() => { setIntakeStep(1); setPage("consent"); }}><Activity size={17} />{t("platform.startAssessment")}</button></div></Card><Card className="patient-recent-card"><SectionHeader eyebrow={t("platform.recentAssessment")} title={hasRecentAssessment ? (selectedSystem ? t(selectedSystem.titleKey) : intakeData.bodySystem || t("platform.assessment")) : t("platform.noRecentAssessment")} actions={hasRecentAssessment ? <button type="button" className="btn-secondary" onClick={() => setPage("records")}>{t("platform.viewRecords")}</button> : null} />{hasRecentAssessment ? <div className="patient-recent-details"><span>{t("platform.severity")}: <strong><bdi dir="ltr">{intakeData.severity ?? t("platform.notReported")}</bdi></strong></span><span>{t("platform.status")}: <StatusBadge status="neutral">{clinicalSummary ? t("platform.summaryReady") : t("platform.inProgress")}</StatusBadge></span><span>{t("platform.symptoms")}: <strong><bdi dir="ltr">{intakeData.symptoms.length || t("platform.notReported")}</bdi></strong></span></div> : <p>{t("platform.noRecentAssessmentDetail")}</p>}</Card><section className="patient-quick-actions"><button type="button" onClick={() => setPage("documents")}><FileText size={20} /><span>{t("auth.medicalDocuments")}</span></button><button type="button" onClick={() => setPage("records")}><ClipboardList size={20} /><span>{t("medicalRecords")}</span></button></section></main></div>;
  }

  if (page === "dashboard") {
    const selectedSystem = BODY_SYSTEMS.find((system) => system.id === intakeData.bodySystem);
    const systemColor = SYSTEM_COLORS[intakeData.bodySystem] || SYSTEM_COLORS.general;
    const hasIntake = Boolean(intakeData.bodySystem || intakeData.symptoms.length);
    const dashboardDocuments = intakeDocuments.length ? intakeDocuments : documents.map((document) => ({ ...document, status: "processed" }));
    return (
      <div className="dashboard-page">
        <aside className="dashboard-sidebar"><div className="logo"><div className="logo-icon"><HeartPulse size={20} /></div><span>Med<span>Flow</span></span></div><nav>
          <button className="active"><LayoutDashboard size={18} />{t("auth.dashboard")}</button><button onClick={() => setPage("documents")}><FileText size={18} />{t("auth.medicalDocuments")}</button><button onClick={() => setPage("records")}><ClipboardList size={18} />{t("medicalRecords")}</button><button onClick={() => setPage("profile")}><UserRound size={18} />{t("auth.profile")}</button><button onClick={logOut}><LogOut size={18} />{t("auth.logout")}</button>
        </nav></aside>
        <main className="dashboard-main"><header className="dashboard-header"><div><span className="section-label">{authenticatedUser?.demo && t("auth.demoData")}</span><h1>{t("auth.greeting")}, {authenticatedUser?.name}</h1><p>{t("auth.abha")}: {maskAbha(authenticatedUser?.abhaId)}</p></div><LanguageSwitcher setForm={setForm} /></header>{renderAccessibilityControls()}
          <section className="assessment-cta"><div><h2>{t("auth.startAssessment")}</h2><p>{t("auth.startAssessmentSubtitle")}</p></div><button className="btn-primary" onClick={() => { setIntakeStep(1); setPage("consent"); }}><span>+</span>{t("auth.startAssessmentButton")}</button></section>
          <section><h2>{t("auth.healthOverview")}</h2><div className="overview-grid"><div><span>{t("auth.currentSymptoms")}</span><strong>{intakeData.symptoms.length} {t("auth.recorded")}</strong></div><div><span>{t("auth.documentsUploaded")}</span><strong>{dashboardDocuments.length} {t("auth.recorded")}</strong></div><div><span>{t("auth.historyAvailable")}</span><strong>{hasIntake ? t("auth.available") : t("auth.noHealthInformation")}</strong></div><div><span>{t("auth.latestSummary")}</span><strong>{clinicalSummary ? t("auth.updatedToday") : t("auth.notProvided")}</strong></div></div></section>
          {activeToken && <section className="dashboard-section dashboard-live-queue" aria-live="polite"><span className="live-badge" aria-label={t("queue.liveAria")}><Radio size={13} /> {t("queue.live")}</span><h2>{activeToken.doctorName}</h2><p>{activeToken.department}</p><div><strong>{t("queue.yourToken")}: {activeToken.tokenNumber}</strong><strong>{t("queue.nowServing")}: {activeToken.currentToken}</strong><span>{activeToken.patientsAhead} {t("queue.patientsAhead")}</span></div><button type="button" className="read-aloud-button" onClick={() => speak(`${activeToken.doctorName}. ${t("queue.nowServing")} ${activeToken.currentToken}. ${t("queue.yourToken")} ${activeToken.tokenNumber}. ${activeToken.patientsAhead} ${t("queue.patientsAhead")}`)}><Volume2 size={17} />{t("queue.readQueue")}</button><button type="button" className="btn-secondary" onClick={() => setPage("live-queue")}>{t("queue.viewLiveQueue")}</button></section>}
          <section className="dashboard-section recent-assessment"><h2>{t("auth.recentAssessment")}</h2>{hasIntake ? <div className="recent-assessment-grid"><div><span>{t("intakeFlow.bodySystem")}</span><strong>{selectedSystem ? t(selectedSystem.titleKey) : intakeData.bodySystem}</strong></div><div><span>{t("auth.mainSymptoms")}</span><strong>{intakeData.symptoms.map(getSymptomLabel).join(", ") || t("intakeFlow.notReported")}</strong></div><div><span>{t("intakeFlow.reviewSeverity")}</span><strong>{intakeData.severity}/10</strong></div><div><span>{t("auth.assessmentDate")}</span><strong>{new Date().toLocaleDateString()}</strong></div><div><span>{t("auth.status")}</span><strong className="assessment-status">{t("auth.completed")}</strong></div></div> : <p>{t("auth.noRecentAssessment")}</p>}</section>
          <section className="dashboard-section ai-dashboard"><h2>{t("auth.aiSummary")}</h2><span className="source-badge ai">{t("auth.aiGenerated")}</span><p>{t("auth.aiDisclaimer")}</p>{clinicalSummary ? <div className="clinical-summary-grid"><div><span>{t("intakeFlow.chiefConcern")}</span><strong>{clinicalSummary.chief_concern}</strong></div><div><span>{t("intakeFlow.historyOfPresentIllness")}</span><strong>{clinicalSummary.history_of_present_illness}</strong></div><div><span>{t("intakeFlow.reviewSymptoms")}</span><strong>{clinicalSummary.reported_symptoms?.join(", ") || intakeData.symptoms.map(getSymptomLabel).join(", ")}</strong></div><div><span>{t("intakeFlow.reviewSeverityProgression")}</span><strong>{clinicalSummary.severity} · {clinicalSummary.duration} · {clinicalSummary.symptom_progression}</strong></div><div><span>{t("intakeFlow.reviewMedConditions")}</span><strong>{clinicalSummary.relevant_medical_history}</strong></div><div><span>{t("intakeFlow.reviewMedications")}</span><strong>{clinicalSummary.current_medications}</strong></div><div><span>{t("intakeFlow.reviewAllergies")}</span><strong>{clinicalSummary.allergies}</strong></div><div><span>{t("intakeFlow.documentDerivedInformation")}</span><strong>{clinicalSummary.document_derived_information || t("auth.noDocuments")}</strong></div><div><span>{t("intakeFlow.additionalNotes")}</span><strong>{clinicalSummary.additional_information || t("intakeFlow.notReported")}</strong></div></div> : <p>{t("auth.noHealthInformation")}</p>}</section>
          <section className="dashboard-section"><div className="section-heading"><h2>{t("auth.healthInformation")}</h2><button className="btn-secondary" onClick={() => { setIntakeStep(1); setPage("intake"); }}>{t("auth.editHealthInformation")}</button></div>{hasIntake ? <div className="dashboard-info-grid"><article style={{ borderColor: systemColor.border }}><h3>{t("intakeFlow.bodySystem")}</h3><strong>{selectedSystem ? t(selectedSystem.titleKey) : intakeData.bodySystem}</strong><span className="source-badge patient">{t("auth.patientReported")}</span></article><article><h3>{t("auth.symptoms")}</h3><div className="review-symptoms-list">{intakeData.symptoms.map((id) => <span key={id} className="review-symptom-tag">{getSymptomLabel(id)}</span>)}</div><span className="source-badge patient">{t("auth.patientReported")}</span></article><article><h3>{t("auth.severityDuration")}</h3><p>{intakeData.severity}/10 · {getDurationLabel(intakeData.duration)} · {getProgressionLabel(intakeData.progression)}</p><span className="source-badge patient">{t("auth.patientReported")}</span></article><article><h3>{t("auth.medicalHistory")}</h3><p>{intakeData.medicalConditionsText || t("intakeFlow.notReported")}</p><p>{intakeData.medicationsText || t("intakeFlow.notReported")}</p><p>{intakeData.allergiesText || t("intakeFlow.notReported")}</p><span className="source-badge patient">{t("auth.patientReported")}</span></article><article><h3>{t("auth.additionalRemarks")}</h3><p>{intakeData.additionalInformation || t("intakeFlow.notReported")}</p><span className="source-badge patient">{t("auth.patientReported")}</span></article></div> : <p>{t("auth.noHealthInformation")}</p>}</section>
          <section className="dashboard-section" id="dashboard-documents"><h2>{t("auth.medicalDocuments")}</h2>{dashboardDocuments.length ? <div className="dashboard-documents">{dashboardDocuments.map((doc) => <article key={doc.id}><FileText size={20} /><div><strong>{doc.name}</strong><span>{doc.type}</span></div><span className="source-badge document">{doc.status === "processed" || doc.status === "Verified" ? t("auth.processed") : doc.status === "failed" ? t("auth.failed") : t("auth.processing")}</span></article>)}</div> : <p>{t("auth.noDocuments")}</p>}</section>
          <section className="dashboard-section"><h2>{t("auth.informationFromDocuments")}</h2><span className="source-badge document">{t("auth.fromDocument")}</span><p>{clinicalSummary?.document_derived_information || (dashboardDocuments.length ? t("auth.documentsUploaded") : t("auth.noDocuments"))}</p></section>
          <section className="dashboard-section"><h2>{t("auth.recentActivity")}</h2><p>{t("auth.assessmentSaved")}</p></section>
        </main>
      </div>
    );
  }

  if (page === "find-doctor") {
    const selectedHospital = hospitals.find((hospital) => hospital.id === selectedHospitalId);
    const departments = [...new Set(queueDoctors.map((doctor) => doctor.department).filter(Boolean))];
    const visibleDoctors = selectedDepartment ? queueDoctors.filter((doctor) => doctor.department === selectedDepartment) : [];
    const suggestedDepartments = {
      heart: "Cardiology", lungs: "Pulmonology", brain: "Neurology", digestive: "Gastroenterology",
      muscles: "Orthopedics", skin: "Dermatology", urinary: "Urology", general: "General Medicine",
    };
    const suggestedDepartment = clinicalSummary?.recommended_specialist?.specialty || suggestedDepartments[intakeData.bodySystem];

    return <div className="patient-shell">{renderPatientSidebar()}<main className="patient-main patient-section-main"><div className="care-discovery-container">
      <header className="records-header"><div><p className="eyebrow">{t("patientFind.eyebrow")}</p><h1>{t("patientFind.title")}</h1><p>{t("patientFind.description")}</p></div><div className="patient-header-actions"><button type="button" className="btn-secondary" onClick={() => setPage("dashboard")}>{t("patientFind.skip")}</button>{renderPatientHeaderActions()}</div></header>
      <Card className="recommendation-context"><SectionHeader eyebrow={t("patientFind.recommendedSpecialist")} title={suggestedDepartment || t("patientFind.chooseDepartment")} /><p>{clinicalSummary?.recommended_specialist?.reason || (suggestedDepartment ? t("patientFind.reason", { department: suggestedDepartment }) : t("patientFind.selectCare"))}</p></Card>
      {queueError && <p className="speech-error" role="alert">{queueError}</p>}
      <section className="care-discovery-steps" aria-label={t("patientFind.doctorDiscovery")}>
        <Card><span className="care-step">1</span><label className="queue-select-label">{t("patientFind.chooseHospital")}<select value={selectedHospitalId} onChange={(event) => setSelectedHospitalId(event.target.value)} aria-label={t("patientFind.chooseHospital")}><option value="">{t("patientFind.selectHospital")}</option>{hospitals.map((hospital) => <option key={hospital.id} value={hospital.id}>{hospital.name} — {hospital.address}</option>)}</select></label>{selectedHospital && <p className="queue-address"><Hospital size={17} /> {selectedHospital.address}</p>}</Card>
        <Card><span className="care-step">2</span><label className="queue-select-label">{t("patientFind.chooseDepartmentLabel")}<select value={selectedDepartment} onChange={(event) => setSelectedDepartment(event.target.value)} disabled={!selectedHospitalId || loadingQueueDoctors || !departments.length} aria-label={t("patientFind.chooseDepartmentLabel")}><option value="">{loadingQueueDoctors ? t("patientFind.loadingDepartments") : t("patientFind.selectDepartment")}</option>{departments.map((department) => <option key={department} value={department}>{department}</option>)}</select></label>{selectedHospitalId && !loadingQueueDoctors && !departments.length && <p className="muted">{t("patientFind.noDepartments")}</p>}</Card>
      </section>
      <section aria-live="polite" aria-busy={loadingQueueDoctors}><SectionHeader eyebrow={t("patientFind.step", { number: 3 })} title={t("patientFind.chooseDoctor")} />{loadingQueueDoctors ? <LoadingState label={t("patientFind.loadingDoctors")} /> : selectedDepartment && visibleDoctors.length ? <div className="doctor-queue-grid">{visibleDoctors.map((doctor) => <Card className="doctor-queue-card" key={doctor.id}><div className="doctor-card-title"><span className="doctor-avatar"><Stethoscope size={22} /></span><div><h2>{doctor.name}</h2><p>{doctor.department}</p><small>{doctor.specialization || t("patientFind.specializationMissing")}</small></div></div><StatusBadge status={doctor.queue?.queueStatus === "active" ? "success" : "neutral"}>{doctor.queue?.queueStatus === "active" ? t("patientFind.available") : t("patientFind.queueUnavailable")}</StatusBadge><div className="queue-stat-grid"><div><span>{t("patientFind.nowServing")}</span><strong>{doctor.queue?.displayCurrentToken || t("platform.notStarted")}</strong></div><div><span>{t("patientFind.queue")}</span><strong>{doctor.queue?.waitingCount ?? 0} {t("patientFind.patients")}</strong></div></div><button type="button" className="btn-primary" onClick={() => createToken(doctor.id)} disabled={doctor.queue?.queueStatus !== "active"}>{t("patientFind.confirmToken")} <Ticket size={16} /></button></Card>)}</div> : <EmptyState title={selectedDepartment ? t("patientFind.noDoctors") : t("patientFind.chooseDepartmentDetail")} detail={selectedDepartment ? t("patientFind.tryAnother") : t("patientFind.liveDataDetail")} />}</section>
      {activeToken && <Card className="patient-queue-card live-queue-summary" aria-live="polite"><SectionHeader eyebrow={t("platform.liveList")} title={activeToken.displayToken || activeToken.tokenNumber} actions={<StatusBadge status="live">{t("queue.live")}</StatusBadge>} /><div className="patient-queue-details"><div><span>{t("queue.nowServing")}</span><strong>{activeToken.displayCurrentToken || activeToken.currentToken || t("platform.notStarted")}</strong></div><div><span>{t("queue.patientsAhead")}</span><strong>{activeToken.patientsAhead ?? t("platform.notReported")}</strong></div><div><span>{t("queue.status")}</span><strong>{activeToken.status || t("platform.notReported")}</strong></div></div><p className="queue-updated">{t("platform.lastActivity")}: {lastQueueUpdated ? lastQueueUpdated.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) : t("platform.notReported")}</p><button type="button" className="btn-secondary" onClick={() => setPage("live-queue")}>{t("platform.viewQueue")}</button></Card>}
    </div></main></div>;
  }

  if (page === "faq" || page === "help") {
    const faqItems = t("patientFaq.items", { returnObjects: true });
    const categories = ["general", "assessment", "documents", "doctors", "queue", "privacy", "accessibility"];
    const search = faqSearch.trim().toLowerCase();
    const visibleFaqs = faqItems.filter((item) => item.category === faqCategory && (!search || `${item.question} ${item.answer}`.toLowerCase().includes(search)));
    return <div className="patient-shell">{renderPatientSidebar()}<main className="patient-main patient-section-main"><div className="care-discovery-container"><header className="records-header"><div><p className="eyebrow">{t("patientFaq.eyebrow")}</p><h1>{t("patientFaq.title")}</h1><p>{t("patientFaq.description")}</p></div>{renderPatientHeaderActions()}</header><Card className="faq-search-card"><label className="admin-search"><Search size={17} /><input value={faqSearch} onChange={(event) => { setFaqSearch(event.target.value); setExpandedFaq(null); }} placeholder={t("patientFaq.search")} aria-label={t("patientFaq.search")} /></label></Card><section aria-label={t("patientFaq.categoriesLabel")}><div className="faq-category-tabs" role="tablist" aria-label={t("patientFaq.categoriesLabel")}>{categories.map((category) => <button type="button" role="tab" aria-selected={faqCategory === category} key={category} className={faqCategory === category ? "active" : ""} onClick={() => { setFaqCategory(category); setExpandedFaq(null); }}>{t(`patientFaq.categories.${category}`)}</button>)}</div><div className="faq-list">{visibleFaqs.length ? visibleFaqs.map(({ id: faqId, question, answer }, index) => { const id = `faq-answer-${faqCategory}-${index}`; return <Card key={faqId} className="faq-item"><button type="button" aria-expanded={expandedFaq === faqId} aria-controls={id} onClick={() => setExpandedFaq(expandedFaq === faqId ? null : faqId)}><span>{question}</span><ChevronDown size={20} className={expandedFaq === faqId ? "faq-chevron-open" : ""} /></button>{expandedFaq === faqId && <div id={id} className="faq-answer"><p>{answer}</p><button type="button" className="read-aloud-button" onClick={() => speak(`${question}. ${answer}`)} aria-label={t("patientFaq.readAloudAria", { question })}><Volume2 size={17} />{t("patientFaq.readAloud")}</button></div>}</Card>; }) : <EmptyState title={t("patientFaq.emptyTitle")} detail={t("patientFaq.emptyDetail")} />}</div></section><section className="help-grid"><Card><SectionHeader eyebrow={t("patientFaq.contactEyebrow")} title={t("patientFaq.contactTitle")} /><p><a href="mailto:medflowai@gmail.com">medflowai@gmail.com</a></p><p><a href="tel:+919876543210">+91 98765 43210</a> <span className="muted">({t("patientFaq.demoSupport")})</span></p><p><a href="tel:18001234567">1800-123-4567</a> <span className="muted">({t("patientFaq.demoSupport")})</span></p></Card><Card className="emergency-notice"><SectionHeader eyebrow={t("patientFaq.important")} title={t("patientFaq.emergencyTitle")} /><p>{t("patientFaq.emergencyDetail")}</p></Card></section></div></main></div>;
  }

  if (page === "hospital-token") {
    const selectedHospital = hospitals.find((hospital) => hospital.id === selectedHospitalId);
    return <div className="queue-page"><Navbar setForm={setForm} showBack onBack={() => setPage("dashboard")} /><main className="queue-container platform-queue-container"><header className="queue-header"><Building2 size={28} /><div><p className="eyebrow">{t("platform.carePath")}</p><h1>{t("queue.chooseDoctor")}</h1><p>{t("queue.chooseDoctorDescription")}</p></div></header>{queueError && <div className="speech-error" role="alert">{queueError}</div>}<Card className="hospital-picker"><label className="queue-select-label">{t("queue.hospital")}<select value={selectedHospitalId} onChange={(event) => setSelectedHospitalId(event.target.value)} aria-label={t("queue.hospital")}>{hospitals.map((hospital) => <option key={hospital.id} value={hospital.id}>{hospital.name} — {hospital.address}</option>)}</select></label>{selectedHospital && <p className="queue-address"><Hospital size={17} /> {selectedHospital.address}</p>}</Card><section aria-live="polite" aria-busy={loadingQueueDoctors}><div className="section-heading"><div><p className="eyebrow">{t("platform.availableToday")}</p><h2>{t("platform.doctors")}</h2></div></div>{loadingQueueDoctors ? <LoadingState label={t("platform.loadingDoctors")} /> : queueDoctors.length > 0 ? <div className="doctor-queue-grid">{queueDoctors.map((doctor) => <Card className="doctor-queue-card" key={doctor.id}><div className="doctor-card-title"><span className="doctor-avatar"><Stethoscope size={22} /></span><div><h2>{doctor.name}</h2><p>{doctor.department}</p><small>{doctor.specialization}</small></div></div><StatusBadge status="success"><Radio size={12} /> {t("platform.available")}</StatusBadge><div className="queue-stat-grid"><div><span>{t("queue.nowServing")}</span><strong>{doctor.queue.displayCurrentToken || t("platform.notStarted")}</strong></div><div><span>{t("platform.waiting")}</span><strong>{doctor.queue.waitingCount} {t("platform.patients")}</strong></div></div><button type="button" className="btn-primary" onClick={() => createToken(doctor.id)}>{t("queue.getToken")}<Ticket size={16} /></button></Card>)}</div> : <EmptyState title={t("platform.noDoctors")} detail={t("platform.noDoctorsDetail")} />}</section>{activeToken && <section className="token-confirmation" aria-live="polite"><StatusBadge status="success"><CheckCircle2 size={14} />{t("platform.tokenConfirmed")}</StatusBadge><p className="token-display">{activeToken.displayToken || activeToken.tokenNumber}</p><h2>{activeToken.doctorName}</h2><p>{activeToken.department} · {activeToken.hospitalName}</p><div className="token-metrics"><span>{t("queue.nowServing")}<strong>{activeToken.displayCurrentToken || t("platform.notStarted")}</strong></span><span>{t("queue.patientsAhead")}<strong>{activeToken.patientsAhead}</strong></span></div><div className="token-qr"><QRCodeSVG value={`${window.location.origin}/queue-status/${activeToken.id}`} size={150} level="M" includeMargin /><p>{t("platform.scanQueue")}</p></div><div className="token-actions"><button type="button" className="btn-primary" onClick={() => setPage("live-queue")}>{t("queue.viewLiveQueue")}</button><button type="button" className="btn-secondary" onClick={cancelActiveToken}>{t("platform.cancelToken")}</button></div></section>}</main></div>;
  }

  if (page === "live-queue") {
    const isTurn = activeToken?.status === "called" || activeToken?.status === "in_consultation";
    return <div className="queue-page"><Navbar setForm={setForm} showBack onBack={() => setPage("hospital-token")} /><main className="queue-container"><section className={`live-queue-card ${isTurn ? "your-turn" : ""}`} aria-live="polite"><StatusBadge status={isTurn ? "success" : "live"}><Radio size={14} /> {isTurn ? t("platform.yourTurn") : t("queue.live")}</StatusBadge><p className="eyebrow">{activeToken?.hospitalName}</p><h1>{activeToken?.doctorName}</h1><p>{activeToken?.department}</p>{isTurn && <div className="your-turn-message"><CheckCircle2 size={28} /><strong>{t("platform.pleaseProceed")}</strong></div>}<div className="live-token-row"><div><span>{t("queue.nowServing")}</span><strong>{activeToken?.displayCurrentToken || t("platform.notStarted")}</strong></div><div><span>{t("queue.yourToken")}</span><strong>{activeToken?.displayToken || activeToken?.tokenNumber}</strong></div></div><div className="queue-progress" aria-label={`${activeToken?.displayCurrentToken || 0} to ${activeToken?.displayToken || activeToken?.tokenNumber}`}><span>{activeToken?.displayCurrentToken || t("platform.notStarted")}</span><i /><span>{activeToken?.displayToken || activeToken?.tokenNumber}</span></div><p className="queue-ahead"><Users size={18} />{activeToken?.patientsAhead} {t("queue.patientsAhead")}</p><StatusBadge status={isTurn ? "success" : "neutral"}>{t("queue.status")}: {activeToken?.status}</StatusBadge><div className="token-actions"><button type="button" className="read-aloud-button" onClick={() => speak(`${activeToken?.doctorName}. ${t("queue.nowServing")}: ${activeToken?.displayCurrentToken || t("platform.notStarted")}. ${t("queue.yourToken")}: ${activeToken?.displayToken || activeToken?.tokenNumber}. ${activeToken?.patientsAhead} ${t("queue.patientsAhead")}`)}><Volume2 size={18} />{t("queue.readQueue")}</button>{["waiting", "called"].includes(activeToken?.status) && <button type="button" className="btn-secondary" onClick={cancelActiveToken}>{t("platform.cancelToken")}</button>}</div>{queueError && <p className="speech-error">{queueError}</p>}</section></main></div>;
  }

  // =====================================================
  // 1. WELCOME PAGE
  // =====================================================

  if (page === "welcome") {
    return (
      <div className="welcome-page">
        <nav className="navbar">
          <div className="logo">
            <div className="logo-icon">
              <HeartPulse size={20} />
            </div>
            <span>
              Med<span>Flow</span>
            </span>
          </div>

          <div className="nav-right">
            <LanguageSwitcher setForm={setForm} />
            <div className="secure-badge">
              <ShieldCheck size={15} />
              {t("secure")}
            </div>
          </div>
        </nav>

        <div className="welcome-hero">
          <div className="hero-inner">
            <div className="hero-text">
              <div className="hero-chip">
                <span className="hero-chip-dot" />
                <div className="badge">
                  <span>â—</span>
                  {t("aiHealthcare")}
                </div>
              </div>

              <h1>
                {t("yourHealth")}
                <br />
                {t("yourRecords")}
                <br />
                <span>{t("onePlace")}</span>
              </h1>

              <p>{t("description")}</p>

              <div className="hero-stats">
                <div className="stat-chip">
                  <strong>2.4k+</strong>
                  <span>{t("patients")}</span>
                </div>
                <div className="stat-chip">
                  <strong>98%</strong>
                  <span>{t("accuracy")}</span>
                </div>
                <div className="stat-chip">
                  <strong>3 min</strong>
                  <span>{t("avgIntake")}</span>
                </div>
              </div>
            </div>

            <div className="hero-visual">
              <div className="hero-circle">
                <div className="hero-icon-inner">
                  <HeartPulse size={52} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="welcome-roles">
          <div className="roles-title">
            <h2>{t("whoAreYouToday")}</h2>
            <p>{t("selectRole")}</p>
          </div>

          <div className="role-container">
            <button
              className="role-card"
              onClick={() => setPage("registration")}
            >
              <div className="role-icon">
                <HeartPulse size={28} />
              </div>
              <div className="role-text">
                <span className="role-label">{t("patient")}</span>
                <h2>{t("imPatient")}</h2>
                <p>{t("patientDescription")}</p>
              </div>
              <div className="arrow">
                <ArrowRight size={18} />
              </div>
            </button>

            <button className="role-card doctor-card">
              <div className="role-icon">
                <ShieldCheck size={28} />
              </div>
              <div className="role-text">
                <span className="role-label">
                  {t("healthcareProfessional")}
                </span>
                <h2>{t("imDoctor")}</h2>
                <p>{t("doctorDescription")}</p>
              </div>
              <div className="arrow">
                <ArrowRight size={18} />
              </div>
            </button>
          </div>

          <div className="privacy-note">
            <ShieldCheck size={15} />
            {t("privacyNote")}
          </div>
        </div>
      </div>
    );
  }

  // =====================================================
  // 2. REGISTRATION PAGE
  // =====================================================

  if (page === "registration") {
    return (
      <div className="registration-page">
        <Navbar
          setForm={setForm}
          showBack={true}
          onBack={() => setPage("welcome")}
        />

        <main className="registration-container">
          <button className="back-button" onClick={() => setPage("welcome")}>
            <ArrowLeft size={15} />
            {t("back")}
          </button>

          <div className="progress-area">
            <div className="progress-steps">
              <div className="step-item">
                <div className="step-circle active">1</div>
                <span className="step-label active">{t("profile")}</span>
              </div>
              <div className="step-line" />
              <div className="step-item">
                <div className="step-circle">2</div>
                <span className="step-label">{t("healthIntake")}</span>
              </div>
              <div className="step-line" />
              <div className="step-item">
                <div className="step-circle">3</div>
                <span className="step-label">{t("records")}</span>
              </div>
            </div>
          </div>

          <div className="form-card">
            <div className="form-header">
              <div className="badge">
                <span>â—</span>
                {t("letsGetStarted")}
              </div>
              <h2>{t("tellUsAboutYourself")}</h2>
              <p>{t("basicDetailsDescription")}</p>
            </div>

            <div className="form-body">
              {/* NAME */}
              <div className="field-group">
                <label htmlFor="reg-name">{t("name")}</label>
                <input
                  id="reg-name"
                  type="text"
                  placeholder={t("placeholders.fullName")}
                  value={form.name}
                  onChange={(e) => updateField("name", e.target.value)}
                  className={errors.name ? "input-error" : ""}
                />
                {errors.name && (
                  <span className="error-text">{errors.name}</span>
                )}
              </div>

              {/* AGE & GENDER */}
              <div className="field-row">
                <div className="field-group">
                  <label htmlFor="reg-age">{t("age")}</label>
                  <input
                    id="reg-age"
                    type="number"
                    placeholder={t("placeholders.age")}
                    value={form.age}
                    onChange={(e) => updateField("age", e.target.value)}
                    className={errors.age ? "input-error" : ""}
                  />
                  {errors.age && (
                    <span className="error-text">{errors.age}</span>
                  )}
                </div>

                <div className="field-group">
                  <label htmlFor="reg-gender">{t("gender")}</label>
                  <select
                    id="reg-gender"
                    value={form.gender}
                    onChange={(e) => updateField("gender", e.target.value)}
                    className={errors.gender ? "input-error" : ""}
                  >
                    <option value="">{t("genderOptions.select")}</option>
                    <option value="Male">{t("genderOptions.male")}</option>
                    <option value="Female">{t("genderOptions.female")}</option>
                    <option value="Other">{t("genderOptions.other")}</option>
                    <option value="Prefer not to say">
                      {t("genderOptions.preferNotToSay")}
                    </option>
                  </select>
                  {errors.gender && (
                    <span className="error-text">{errors.gender}</span>
                  )}
                </div>
              </div>

              {/* PHONE */}
              <div className="field-group">
                <label htmlFor="reg-phone">{t("phoneNumber")}</label>
                <input
                  id="reg-phone"
                  type="tel"
                  placeholder={t("placeholders.mobile")}
                  value={form.phone}
                  onChange={(e) => updateField("phone", e.target.value)}
                  className={errors.phone ? "input-error" : ""}
                />
                {errors.phone && (
                  <span className="error-text">{errors.phone}</span>
                )}
              </div>

              <button className="continue-button" onClick={continueToIntake}>
                {t("continueToHealthIntake")}
                <ArrowRight size={17} />
              </button>
            </div>

            <div className="form-security">
              <ShieldCheck size={14} />
              {t("formSecurity")}
            </div>
          </div>
        </main>
      </div>
    );
  }

  if (page === "consent") {
    const allConsentSelected = consent.health && consent.audio && consent.documents;
    return <div className="auth-page"><Navbar setForm={setForm} showBack onBack={() => setPage("dashboard")} /><main className="consent-card"><p className="eyebrow">{t("platform.carePath")}</p><h1>{t("accessibility.beforeBegin")}</h1><div className="consent-explanation"><p>{t("accessibility.consentDescription")}</p><button type="button" className="read-aloud-button consent-read-button" onClick={toggleConsentReadAloud} aria-pressed={isReadingConsent} aria-label={isReadingConsent ? t("platform.stopReading") : t("platform.readAloud")}><Volume2 size={18} />{isReadingConsent ? t("platform.stopReading") : t("platform.readAloud")}</button></div><div className="consent-select-all"><button type="button" className="btn-secondary" onClick={() => setConsent({ health: !allConsentSelected, audio: !allConsentSelected, documents: !allConsentSelected })}>{allConsentSelected ? t("platform.deselectAll") : t("platform.selectAll")}</button></div><div className="consent-options"><label><input type="checkbox" checked={consent.health} onChange={(e) => setConsent((value) => ({ ...value, health: e.target.checked }))} /> {t("accessibility.healthConsent")}</label><label><input type="checkbox" checked={consent.audio} onChange={(e) => setConsent((value) => ({ ...value, audio: e.target.checked }))} /> {t("accessibility.audioConsent")}</label><label><input type="checkbox" checked={consent.documents} onChange={(e) => setConsent((value) => ({ ...value, documents: e.target.checked }))} /> {t("accessibility.documentConsent")}</label></div>{assessmentError && <p className="auth-error">{assessmentError}</p>}<div className="intake-actions-row"><button type="button" className="btn-secondary" onClick={() => setPage("dashboard")} disabled={creatingAssessment}>{t("accessibility.cancel")}</button><button type="button" className="btn-primary" disabled={!consent.health || creatingAssessment} onClick={startNewAssessment}>{creatingAssessment ? t("platform.startingAssessment") : t("continue")}</button></div></main></div>;
  }

  // =====================================================
  // 3. STRUCTURED 7-STEP CLINICAL INTAKE
  // =====================================================

  if (page === "intake") {
    const selectedSystemObj = BODY_SYSTEMS.find(
      (s) => s.id === intakeData.bodySystem
    );
    const availableSymptoms = selectedSystemObj
      ? selectedSystemObj.symptoms
      : [];
    const filteredSymptoms = availableSymptoms.filter((s) =>
      t(s.key).toLowerCase().includes(symptomSearch.toLowerCase().trim())
    );

    return (
      <div className="intake-page">
        <Navbar
          setForm={setForm}
          showBack={true}
          onBack={() => {
            if (intakeStep > 1 && intakeStep !== 6) {
              setIntakeStep((prev) => prev - 1);
            } else {
              setPage(authenticatedUser ? "dashboard" : "login");
            }
          }}
        />

        <main className="structured-intake-wrapper">
          {renderAccessibilityControls()}
          <div className="intake-audio-toolbar">{renderAudioButton(currentStepPrompt())}<span>{t("accessibility.readCurrentQuestion")}</span></div>
          {redFlagState.redFlagDetected && <div className="red-flag-alert" role="alert"><AlertCircle size={26} /><div><strong>{t("accessibility.urgentAttention")}</strong><p>{t("accessibility.redFlagMessage")}</p></div><button type="button" onClick={stopSpeech}>{t("accessibility.acknowledge")}</button><button type="button" onClick={() => setIntakeStep(2)}>{t("accessibility.reviewResponse")}</button></div>}
          {assessmentSaveError && <div className="speech-error" role="alert">{assessmentSaveError}</div>}
          {/* 6-Step Visible Progress Indicator */}
          <IntakeProgress
            currentStep={intakeStep}
            onStepClick={(targetStep) => {
              if (targetStep < intakeStep && intakeStep !== 6) {
                setIntakeStep(targetStep);
              }
            }}
          />

          <div className="intake-step-card">
            {/* ===================================================
                STEP 1: BODY SYSTEM
                =================================================== */}
            {intakeStep === 1 && (
              <>
                <div className="intake-step-header">
                  <span className="intake-step-badge">
                    {t("intakeFlow.stepBadge1")}
                  </span>
                  <h1 className="intake-step-title">
                    {t("intakeFlow.step1Title")}
                  </h1>
                  <p className="intake-step-subtitle">
                    {t("intakeFlow.step1Subtitle")}
                  </p>
                </div>

                <div className="body-systems-grid">
                  {BODY_SYSTEMS.map((system) => {
                    const isSelected = intakeData.bodySystem === system.id;
                    const colors = SYSTEM_COLORS[system.color] || SYSTEM_COLORS.general;
                    return (
                      <div
                        key={system.id}
                        className={`system-card system-card--${system.color} ${isSelected ? "selected" : ""}`}
                        onClick={() => handleSelectSystem(system.id)}
                        role="button"
                        tabIndex={0}
                        aria-pressed={isSelected}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            handleSelectSystem(system.id);
                          }
                        }}
                        style={{
                          "--sys-bg": colors.bg,
                          "--sys-icon-bg": colors.iconBg,
                          "--sys-border": colors.border,
                          "--sys-text": colors.text,
                          "--sys-light": colors.light,
                        }}
                      >
                        <div className="system-icon-wrap">
                          {renderSystemIcon(system.icon)}
                        </div>
                        <h3 className="system-card-title">{t(system.titleKey)}</h3>
                        <p className="system-card-desc">{t(system.descKey)}</p>
                        {isSelected && (
                          <div className="system-card-check">
                            <Check size={14} strokeWidth={3} />
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                <div className="intake-actions-row">
                  <button
                    type="button"
                    className="btn-secondary"
                    onClick={() => setPage("registration")}
                  >
                    <ArrowLeft size={16} />
                    {t("back")}
                  </button>

                  <button
                    type="button"
                    className="btn-primary"
                    disabled={!intakeData.bodySystem || savingAssessment}
                    onClick={() => persistIntakeStep(1)}
                  >
                    {t("continue")}
                    <ArrowRight size={16} />
                  </button>
                </div>
              </>
            )}

            {/* ===================================================
                STEP 2: SYMPTOMS SELECTION
                =================================================== */}
            {intakeStep === 2 && (
              <>
                <div className="intake-step-header">
                  <span className="intake-step-badge">
                    {t("intakeFlow.stepBadge2")}{" "}
                    {selectedSystemObj ? `· ${t(selectedSystemObj.titleKey)}` : ""}
                  </span>
                  <h1 className="intake-step-title">
                    {t("intakeFlow.step2Title")}
                  </h1>
                  <p className="intake-step-subtitle">
                    {t("intakeFlow.step2Subtitle")}
                  </p>
                </div>

                {/* Search */}
                <div className="symptom-search-box">
                  <Search size={18} className="symptom-search-icon" />
                  <input
                    type="text"
                    className="symptom-search-input"
                    placeholder={t("intakeFlow.searchSymptomsPlaceholder")}
                    value={symptomSearch}
                    onChange={(e) => setSymptomSearch(e.target.value)}
                    aria-label={t("intakeFlow.searchSymptomsPlaceholder")}
                  />
                </div>

                {/* Selected Chips */}
                {intakeData.symptoms.length > 0 && (
                  <div className="selected-symptoms-chips">
                    <span className="selected-chips-label">
                      {t("intakeFlow.selectedCount", {
                        count: intakeData.symptoms.length,
                      })}
                      :
                    </span>
                    {intakeData.symptoms.map((symId) => (
                      <button
                        type="button"
                        key={symId}
                        className="symptom-tag-pill"
                        onClick={() => toggleSymptom(symId)}
                        aria-label={`${t("intakeFlow.remove")} ${getSymptomLabel(symId)}`}
                      >
                        {getSymptomLabel(symId)} <X size={12} />
                      </button>
                    ))}
                  </div>
                )}

                {/* Available Symptoms Grid */}
                <div className="symptoms-selector-grid">
                  {filteredSymptoms.map((sym) => {
                    const isSelected = intakeData.symptoms.includes(sym.id);
                    return (
                      <button
                        type="button"
                        key={sym.id}
                        className={`symptom-chip-btn ${isSelected ? "selected" : ""}`}
                        onClick={() => toggleSymptom(sym.id)}
                        aria-pressed={isSelected}
                      >
                        <span>{t(sym.key)}</span>
                        {isSelected && <Check size={14} />}
                      </button>
                    );
                  })}

                  {filteredSymptoms.length === 0 && (
                    <div className="symptoms-empty-msg">
                      {t("intakeFlow.noSymptomsFound")}
                    </div>
                  )}
                </div>

                <div className="intake-actions-row">
                  <button
                    type="button"
                    className="btn-secondary"
                    onClick={() => setIntakeStep(1)}
                  >
                    <ArrowLeft size={16} />
                    {t("back")}
                  </button>

                  <button
                    type="button"
                    className="btn-primary"
                    disabled={intakeData.symptoms.length === 0 || savingAssessment}
                    onClick={() => persistIntakeStep(2)}
                  >
                    {t("continue")}
                    <ArrowRight size={16} />
                  </button>
                </div>
              </>
            )}

            {/* ===================================================
                STEP 3: SEVERITY & DURATION
                =================================================== */}
            {intakeStep === 3 && (
              <>
                <div className="intake-step-header">
                  <span className="intake-step-badge">
                    {t("intakeFlow.stepBadge3")}
                  </span>
                  <h1 className="intake-step-title">
                    {t("intakeFlow.step3Title")}
                  </h1>
                  <p className="intake-step-subtitle">
                    {t("intakeFlow.step3Subtitle")}
                  </p>
                </div>

                {/* Section 1: Severity Slider */}
                <div className="severity-box">
                  <div className="severity-header-row">
                    <span className="severity-title">
                      {t("intakeFlow.severityQuestion")}
                    </span>
                    <span
                      className={`severity-score-badge ${getSeverityClass(
                        intakeData.severity
                      )}`}
                    >
                      {intakeData.severity} / 10 · {getSeverityLabel(intakeData.severity)}
                    </span>
                  </div>

                  <input
                    type="range"
                    id="severity-slider"
                    min="1"
                    max="10"
                    step="1"
                    value={intakeData.severity}
                    onChange={(e) =>
                      updateIntakeField("severity", Number(e.target.value))
                    }
                    className="severity-slider"
                    aria-label={t("intakeFlow.severityQuestion")}
                    aria-valuenow={intakeData.severity}
                    aria-valuemin={1}
                    aria-valuemax={10}
                  />

                  <div className="severity-scale-ticks">
                    <span>1 ({t("intakeFlow.severityMinimal")})</span>
                    <span>5 ({t("intakeFlow.severityModerate")})</span>
                    <span>10 ({t("intakeFlow.severitySevere")})</span>
                  </div>
                </div>

                {/* Section 2: Duration */}
                <div className="duration-section">
                  <h3 className="section-subheading">
                    {t("intakeFlow.durationQuestion")}
                  </h3>
                  <div className="options-pill-grid">
                    {DURATION_OPTIONS.map((dur) => (
                      <button
                        type="button"
                        key={dur.id}
                        className={`option-pill-btn ${
                          intakeData.duration === dur.id ? "selected" : ""
                        }`}
                        onClick={() => updateIntakeField("duration", dur.id)}
                        aria-pressed={intakeData.duration === dur.id}
                      >
                        {t(dur.key)}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Section 3: Progression */}
                <div className="progression-section">
                  <h3 className="section-subheading">
                    {t("intakeFlow.progressionQuestion")}
                  </h3>
                  <div className="options-pill-grid">
                    {PROGRESSION_OPTIONS.map((prog) => (
                      <button
                        type="button"
                        key={prog.id}
                        className={`option-pill-btn ${
                          intakeData.progression === prog.id ? "selected" : ""
                        }`}
                        onClick={() => updateIntakeField("progression", prog.id)}
                        aria-pressed={intakeData.progression === prog.id}
                      >
                        {t(prog.key)}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="intake-actions-row">
                  <button
                    type="button"
                    className="btn-secondary"
                    onClick={() => setIntakeStep(2)}
                  >
                    <ArrowLeft size={16} />
                    {t("back")}
                  </button>

                  <button
                    type="button"
                    className="btn-primary"
                    disabled={!intakeData.duration || !intakeData.progression || savingAssessment}
                    onClick={() => persistIntakeStep(3)}
                  >
                    {t("continue")}
                    <ArrowRight size={16} />
                  </button>
                </div>
              </>
            )}

            {/* ===================================================
                STEP 4: CLINICAL CONTEXT & HISTORY
                =================================================== */}
            {intakeStep === 4 && (
              <>
                <div className="intake-step-header">
                  <span className="intake-step-badge">
                    {t("intakeFlow.stepBadge4")}
                  </span>
                  <h1 className="intake-step-title">
                    {t("intakeFlow.step4Title")}
                  </h1>
                  <p className="intake-step-subtitle">
                    {t("intakeFlow.step4Subtitle")}
                  </p>
                </div>

                {/* Question A: Medical Conditions */}
                <div className="context-question-card">
                  <p className="context-question-title">
                    {t("intakeFlow.conditionsQuestion")}
                  </p>
                  <div className="tri-state-group" role="group" aria-label={t("intakeFlow.conditionsQuestion")}>
                    {YES_NO_OPTIONS.map((opt) => (
                      <button
                        type="button"
                        key={opt.id}
                        className={`tri-state-btn ${
                          intakeData.medicalConditionsHas === opt.id ? "active" : ""
                        }`}
                        onClick={() =>
                          updateIntakeField("medicalConditionsHas", opt.id)
                        }
                        aria-pressed={intakeData.medicalConditionsHas === opt.id}
                      >
                        {t(opt.labelKey)}
                      </button>
                    ))}
                  </div>
                  {intakeData.medicalConditionsHas === "yes" && (
                    <input
                      type="text"
                      className="conditional-text-input"
                      placeholder={t("intakeFlow.specifyPlaceholder")}
                      value={intakeData.medicalConditionsText}
                      onChange={(e) =>
                        updateIntakeField("medicalConditionsText", e.target.value)
                      }
                      aria-label={t("intakeFlow.specifyPlaceholder")}
                    />
                  )}
                </div>

                {/* Question B: Medications */}
                <div className="context-question-card">
                  <p className="context-question-title">
                    {t("intakeFlow.medicationsQuestion")}
                  </p>
                  <div className="tri-state-group" role="group" aria-label={t("intakeFlow.medicationsQuestion")}>
                    {YES_NO_OPTIONS.map((opt) => (
                      <button
                        type="button"
                        key={opt.id}
                        className={`tri-state-btn ${
                          intakeData.medicationsHas === opt.id ? "active" : ""
                        }`}
                        onClick={() =>
                          updateIntakeField("medicationsHas", opt.id)
                        }
                        aria-pressed={intakeData.medicationsHas === opt.id}
                      >
                        {t(opt.labelKey)}
                      </button>
                    ))}
                  </div>
                  {intakeData.medicationsHas === "yes" && (
                    <input
                      type="text"
                      className="conditional-text-input"
                      placeholder={t("intakeFlow.specifyPlaceholder")}
                      value={intakeData.medicationsText}
                      onChange={(e) =>
                        updateIntakeField("medicationsText", e.target.value)
                      }
                      aria-label={t("intakeFlow.specifyPlaceholder")}
                    />
                  )}
                </div>

                {/* Question C: Allergies */}
                <div className="context-question-card">
                  <p className="context-question-title">
                    {t("intakeFlow.allergiesQuestion")}
                  </p>
                  <div className="tri-state-group" role="group" aria-label={t("intakeFlow.allergiesQuestion")}>
                    {YES_NO_OPTIONS.map((opt) => (
                      <button
                        type="button"
                        key={opt.id}
                        className={`tri-state-btn ${
                          intakeData.allergiesHas === opt.id ? "active" : ""
                        }`}
                        onClick={() => updateIntakeField("allergiesHas", opt.id)}
                        aria-pressed={intakeData.allergiesHas === opt.id}
                      >
                        {t(opt.labelKey)}
                      </button>
                    ))}
                  </div>
                  {intakeData.allergiesHas === "yes" && (
                    <input
                      type="text"
                      className="conditional-text-input"
                      placeholder={t("intakeFlow.specifyPlaceholder")}
                      value={intakeData.allergiesText}
                      onChange={(e) =>
                        updateIntakeField("allergiesText", e.target.value)
                      }
                      aria-label={t("intakeFlow.specifyPlaceholder")}
                    />
                  )}
                </div>

                {/* Question D: Previous Similar Symptoms */}
                <div className="context-question-card">
                  <p className="context-question-title">
                    {t("intakeFlow.previousSimilarQuestion")}
                  </p>
                  <div className="tri-state-group" role="group" aria-label={t("intakeFlow.previousSimilarQuestion")}>
                    {YES_NO_OPTIONS.map((opt) => (
                      <button
                        type="button"
                        key={opt.id}
                        className={`tri-state-btn ${
                          intakeData.previousSimilar === opt.id ? "active" : ""
                        }`}
                        onClick={() =>
                          updateIntakeField("previousSimilar", opt.id)
                        }
                        aria-pressed={intakeData.previousSimilar === opt.id}
                      >
                        {t(opt.labelKey)}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Question E: Recent Injury / Surgery */}
                <div className="context-question-card">
                  <p className="context-question-title">
                    {t("intakeFlow.injuryQuestion")}
                  </p>
                  <div className="tri-state-group" role="group" aria-label={t("intakeFlow.injuryQuestion")}>
                    {YES_NO_OPTIONS.map((opt) => (
                      <button
                        type="button"
                        key={opt.id}
                        className={`tri-state-btn ${
                          intakeData.recentInjuryHas === opt.id ? "active" : ""
                        }`}
                        onClick={() =>
                          updateIntakeField("recentInjuryHas", opt.id)
                        }
                        aria-pressed={intakeData.recentInjuryHas === opt.id}
                      >
                        {t(opt.labelKey)}
                      </button>
                    ))}
                  </div>
                  {intakeData.recentInjuryHas === "yes" && (
                    <input
                      type="text"
                      className="conditional-text-input"
                      placeholder={t("intakeFlow.specifyPlaceholder")}
                      value={intakeData.recentInjuryText}
                      onChange={(e) =>
                        updateIntakeField("recentInjuryText", e.target.value)
                      }
                      aria-label={t("intakeFlow.specifyPlaceholder")}
                    />
                  )}
                </div>

                {/* Question F: Additional Notes with Microphone */}
                <div className="context-question-card">
                  <p className="context-question-title">
                    {t("intakeFlow.additionalQuestion")}
                  </p>
                  <div className="notes-input-wrapper">
                    <label htmlFor="additional-notes" className="sr-only">
                      {t("intakeFlow.additionalQuestion")}
                    </label>
                    <textarea
                      id="additional-notes"
                      className="notes-textarea"
                      placeholder={t("intakeFlow.additionalPlaceholder")}
                      value={intakeData.additionalInformation}
                      onChange={(e) =>
                        updateIntakeField("additionalInformation", e.target.value)
                      }
                    />
                    <button
                      type="button"
                      className={`notes-mic-button ${isListening ? "listening" : ""}`}
                      title={
                        isListening
                          ? t("voice.stopListening")
                          : t("voice.input")
                      }
                      aria-label={
                        isListening
                          ? t("voice.stopListening")
                          : t("voice.input")
                      }
                      onClick={startSpeechRecognition}
                    >
                      <Mic size={18} />
                    </button>
                  </div>
                  {isListening && (
                    <div className="listening-indicator">
                      <span className="speech-dot" /> {t("listening")}
                    </div>
                  )}
                  {speechError && (
                    <div className="speech-error" style={{ marginTop: 8 }}>
                      {speechError}
                    </div>
                  )}
                  {voiceDraft && (
                    <div className="voice-confirmation">
                      <strong>{t("accessibility.voiceResponse")}:</strong> {voiceDraft}
                      <button type="button" onClick={() => { const existingNotes = String(intakeData.additionalInformation ?? "").trim(); const confirmedVoiceDraft = String(voiceDraft ?? "").trim(); updateIntakeField("additionalInformation", existingNotes && confirmedVoiceDraft ? `${existingNotes} ${confirmedVoiceDraft}` : existingNotes || confirmedVoiceDraft); setVoiceDraft(""); }}><Check size={15} /> {t("accessibility.accept")}</button>
                      <button type="button" onClick={() => { setVoiceDraft(""); startSpeechRecognition(); }}><RotateCcw size={15} /> {t("accessibility.tryAgain")}</button>
                    </div>
                  )}
                </div>

                <div className="intake-actions-row">
                  <button
                    type="button"
                    className="btn-secondary"
                    onClick={() => setIntakeStep(3)}
                  >
                    <ArrowLeft size={16} />
                    {t("back")}
                  </button>

                  <button
                    type="button"
                    className="btn-primary"
                    disabled={savingAssessment}
                    onClick={persistClinicalHistory}
                  >
                    {t("continue")}
                    <ArrowRight size={16} />
                  </button>
                </div>
              </>
            )}

            {/* ===================================================
                STEP 5: MEDICAL DOCUMENTS
                =================================================== */}
            {intakeStep === 5 && (
              <>
                <div className="intake-step-header">
                  <span className="intake-step-badge">{t("intakeFlow.stepBadge5")}</span>
                  <h1 className="intake-step-title">{t("intakeFlow.documentsTitle")}</h1>
                  <p className="intake-step-subtitle">{t("intakeFlow.documentsSubtitle")}</p>
                </div>

                {!consent.documents && <div className="document-consent-notice"><AlertCircle size={18} /><span>{t("accessibility.documentNotice")}</span><button type="button" className="btn-secondary" onClick={() => setConsent((value) => ({ ...value, documents: true }))}>{t("accessibility.continueUpload")}</button></div>}
                {consent.documents && <label className="intake-document-dropzone">
                  <Upload size={26} />
                  <strong>{t("intakeFlow.selectFiles")}</strong>
                  <span>{t("intakeFlow.documentsFormats")}</span>
                  <input
                    type="file"
                    accept=".pdf,image/jpeg,image/png"
                    multiple
                    onChange={(event) => {
                      addIntakeDocuments(event.target.files);
                      event.target.value = "";
                    }}
                  />
                </label>}

                {intakeDocuments.length > 0 && (
                  <div className="intake-document-list">
                    {intakeDocuments.map((document) => (
                      <div className={`intake-document-card ${document.status}`} key={document.id}>
                        <FileText size={20} />
                        <div className="intake-document-meta">
                          <strong>{document.name}</strong>
                          <span>{document.type.replace("image/", "").toUpperCase()} · {formatFileSize(document.size)}</span>
                          <span className="intake-document-status">
                            {document.status === "processing" && t("intakeFlow.processing")}
                            {document.status === "processed" && t("intakeFlow.processed")}
                            {document.status === "failed" && (document.error || t("intakeFlow.unableToProcess"))}
                          </span>
                        </div>
                        {document.status === "processing" && renderDocumentScanner(document)}
                        {document.status === "failed" && (
                          <button type="button" className="document-action" onClick={() => processIntakeDocument(document)}>
                            <RotateCcw size={15} /> {t("intakeFlow.retry")}
                          </button>
                        )}
                        <button type="button" className="document-action" onClick={() => removeIntakeDocument(document.id)} aria-label={t("intakeFlow.remove")}>
                          <X size={17} /> <span>{t("intakeFlow.remove")}</span>
                        </button>
                      </div>
                    ))}
                  </div>
                )}

                <div className="intake-actions-row">
                  <button type="button" className="btn-secondary" onClick={() => setIntakeStep(4)}>
                    <ArrowLeft size={16} />{t("back")}
                  </button>
                  <div className="intake-document-continue-actions">
                    <button type="button" className="btn-secondary" onClick={runAiAnalysis} disabled={intakeDocuments.some((document) => document.status === "processing")}>
                      {t("intakeFlow.skipForNow")}<ArrowRight size={16} />
                    </button>
                    <button type="button" className="btn-primary" onClick={runAiAnalysis} disabled={intakeDocuments.some((document) => document.status === "processing")}>
                      {t("intakeFlow.continueToAnalysis")}<ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </>
            )}

            {/* ===================================================
                STEP 6: AI ANALYSIS
                =================================================== */}
            {intakeStep === 6 && (
              <div className="ai-analyzing-card">
                <div className="ai-documents-included">
                  <strong>{t("intakeFlow.medicalDocumentsIncluded")}</strong>
                  {intakeDocuments.filter((document) => document.status === "processed").length ? (
                    <span>{intakeDocuments.filter((document) => document.status === "processed").map((document) => document.name).join(", ")}</span>
                  ) : (
                    <span>{t("intakeFlow.noMedicalDocuments")}</span>
                  )}
                </div>
                {analyzingIntake ? (
                  <div className="ai-analysis-layout">
                    <div className="ai-analysis-copy">
                      <div className="ai-pulse-orb"><Sparkles size={36} /></div>
                      <p className="ai-analysis-status"><span /> Preparing your structured summary</p>
                      <h2 className="ai-analyzing-title">{t("intakeFlow.step6Title")}</h2>
                      <p className="ai-analyzing-desc">{t("intakeFlow.step6Subtitle")}</p>
                      <div className="ai-analysis-steps"><span>Reading the information you provided</span><span>Organizing document context</span><span>Preparing a clinician-readable summary</span></div>
                      <div className="summary-loading-bar" style={{ marginTop: 30 }}><div /></div>
                    </div>
                    {renderDocumentScanner(intakeDocuments.find((document) => document.status === "processed") || intakeDocuments[0], "feature")}
                  </div>
                ) : (
                  <>
                    <AlertCircle
                      size={44}
                      color="#f59e0b"
                      style={{ margin: "0 auto 16px" }}
                    />
                    <h2 className="ai-analyzing-title">
                      {t("intakeFlow.analysisFailed")}
                    </h2>
                    <p className="ai-analyzing-desc" style={{ marginBottom: 28 }}>
                      {analysisError || clinicalSummarySaveError ||
                        t("intakeFlow.analysisFailedDesc")}
                    </p>

                    <div className="ai-error-actions">
                      <button
                        type="button"
                        className="btn-primary"
                        onClick={clinicalSummary && clinicalSummarySaveError ? () => persistClinicalSummary(clinicalSummary) : runAiAnalysis}
                        disabled={savingClinicalSummary}
                      >
                        <RotateCcw size={16} />
                        {clinicalSummary && clinicalSummarySaveError ? "Retry saving summary" : t("intakeFlow.retryAnalysis")}
                      </button>

                      <button
                        type="button"
                        className="btn-secondary"
                        onClick={() => setIntakeStep(6)}
                      >
                        {t("intakeFlow.proceedWithoutAi")}
                        <ArrowRight size={16} />
                      </button>
                    </div>
                  </>
                )}
              </div>
            )}

            {/* ===================================================
                STEP 7: REVIEW & CONFIRM
                =================================================== */}
            {intakeStep === 7 && (
              <>
                <div className="intake-step-header">
                  <span className="intake-step-badge">
                    {t("intakeFlow.stepBadge7")}
                  </span>
                  <h1 className="intake-step-title">
                    {t("intakeFlow.step7Title")}
                  </h1>
                  <p className="intake-step-subtitle">
                    {t("intakeFlow.step7Subtitle")}
                  </p>
                </div>

                <div className="review-sections-wrap">
                  {/* PATIENT-PROVIDED INFORMATION */}
                  <div className="review-section-box">
                    <div className="review-box-header">
                      <h3 className="review-box-title">
                        <FileText size={18} color="var(--teal)" />
                        {t("intakeFlow.patientProvidedSection")}
                      </h3>
                      <button
                        type="button"
                        className="edit-step-link"
                        onClick={() => setIntakeStep(1)}
                        aria-label={t("intakeFlow.edit")}
                      >
                        <Edit3 size={13} style={{ marginRight: 4 }} />
                        {t("intakeFlow.edit")}
                      </button>
                    </div>

                    <div className="review-data-grid">
                      <div className="review-item">
                        <span className="review-label">{t("intakeFlow.reviewPatient")}</span>
                        <span className="review-val">
                          {form.name} ({form.age}{t("intakeFlow.reviewYears")}, {form.gender})
                        </span>
                      </div>

                      <div className="review-item">
                        <span className="review-label">{t("intakeFlow.reviewLanguage")}</span>
                        <span className="review-val">{form.language}</span>
                      </div>

                      <div className="review-item">
                        <span className="review-label">{t("intakeFlow.reviewBodyArea")}</span>
                        <span className="review-val">
                          {selectedSystemObj ? t(selectedSystemObj.titleKey) : intakeData.bodySystem}
                        </span>
                      </div>

                      <div className="review-item">
                        <span className="review-label">{t("intakeFlow.reviewSeverity")}</span>
                        <span className="review-val">
                          {intakeData.severity} / 10 ({getSeverityLabel(intakeData.severity)})
                        </span>
                      </div>

                      <div className="review-item">
                        <span className="review-label">{t("intakeFlow.reviewDuration")}</span>
                        <span className="review-val">{getDurationLabel(intakeData.duration)}</span>
                      </div>

                      <div className="review-item">
                        <span className="review-label">{t("intakeFlow.reviewProgression")}</span>
                        <span className="review-val">{getProgressionLabel(intakeData.progression)}</span>
                      </div>
                    </div>

                    <div style={{ marginTop: 16 }}>
                      <span className="review-label">{t("intakeFlow.reviewSymptoms")}</span>
                      <div className="review-symptoms-list">
                        {intakeData.symptoms.map((symId) => (
                          <span key={symId} className="review-symptom-tag">
                            {getSymptomLabel(symId)}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="review-data-grid" style={{ marginTop: 16 }}>
                      <div className="review-item">
                        <span className="review-label">{t("intakeFlow.reviewMedConditions")}</span>
                        <span className="review-val">
                          {intakeData.medicalConditionsHas === "yes"
                            ? intakeData.medicalConditionsText || t("intakeFlow.yes")
                            : t(`intakeFlow.${intakeData.medicalConditionsHas === "no" ? "no" : "notSure"}`)}
                        </span>
                      </div>

                      <div className="review-item">
                        <span className="review-label">{t("intakeFlow.reviewMedications")}</span>
                        <span className="review-val">
                          {intakeData.medicationsHas === "yes"
                            ? intakeData.medicationsText || t("intakeFlow.yes")
                            : t(`intakeFlow.${intakeData.medicationsHas === "no" ? "no" : "notSure"}`)}
                        </span>
                      </div>

                      <div className="review-item">
                        <span className="review-label">{t("intakeFlow.reviewAllergies")}</span>
                        <span className="review-val">
                          {intakeData.allergiesHas === "yes"
                            ? intakeData.allergiesText || t("intakeFlow.yes")
                            : t(`intakeFlow.${intakeData.allergiesHas === "no" ? "no" : "notSure"}`)}
                        </span>
                      </div>

                      <div className="review-item">
                        <span className="review-label">{t("intakeFlow.reviewPrevious")}</span>
                        <span className="review-val">
                          {t(`intakeFlow.${intakeData.previousSimilar === "no" ? "no" : intakeData.previousSimilar === "yes" ? "yes" : "notSure"}`)}
                        </span>
                      </div>

                      <div className="review-item">
                        <span className="review-label">{t("intakeFlow.reviewInjury")}</span>
                        <span className="review-val">
                          {intakeData.recentInjuryHas === "yes"
                            ? intakeData.recentInjuryText || t("intakeFlow.yes")
                            : t(`intakeFlow.${intakeData.recentInjuryHas === "no" ? "no" : "notSure"}`)}
                        </span>
                      </div>

                      {intakeData.additionalInformation && (
                        <div className="review-item" style={{ gridColumn: "1 / -1" }}>
                          <span className="review-label">{t("intakeFlow.reviewAdditional")}</span>
                          <span className="review-val">
                            {intakeData.additionalInformation}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* UPLOADED MEDICAL DOCUMENTS */}
                  <div className="review-section-box">
                    <div className="review-box-header">
                      <h3 className="review-box-title">
                        <Upload size={18} color="var(--teal)" />
                        {t("intakeFlow.uploadedDocumentsSection")}
                      </h3>
                      <button type="button" className="edit-step-link" onClick={() => setIntakeStep(5)}>
                        <Edit3 size={13} style={{ marginRight: 4 }} />{t("intakeFlow.edit")}
                      </button>
                    </div>
                    {intakeDocuments.length ? (
                      <div className="review-document-list">
                        {intakeDocuments.map((document) => (
                          <div className="review-document-item" key={document.id}>
                            <FileText size={16} />
                            <span>{document.name}</span>
                            <span className={`document-status-${document.status}`}>{t(`intakeFlow.${document.status === "processed" ? "processed" : document.status === "failed" ? "failed" : "processing"}`)}</span>
                          </div>
                        ))}
                      </div>
                    ) : <p className="review-val">{t("intakeFlow.noMedicalDocuments")}</p>}
                  </div>

                  {/* AI-GENERATED CLINICAL SUMMARY */}
                  <div className="review-section-box ai-section">
                    <div className="review-box-header ai-header">
                      <h3 className="review-box-title">
                        <Sparkles size={18} color="var(--teal)" />
                        {t("intakeFlow.aiSummarySection")}
                      </h3>
                      <span className="ai-synthesized-badge">
                        {t("intakeFlow.aiSynthesizedBadge")}
                      </span>
                    </div>

                    {clinicalSummary ? (
                      <div>
                        {clinicalSummary.bilingual_summary && <><div className="summary-language-controls"><button type="button" className={summaryLanguage === "english" ? "active" : ""} onClick={() => setSummaryLanguage("english")}>{t("accessibility.english")}</button><button type="button" className={summaryLanguage === "hindi" ? "active" : ""} onClick={() => setSummaryLanguage("hindi")}>{t("accessibility.hindi")}</button>{!['en-IN', 'hi-IN'].includes(getPreferredSummaryLanguage().code) && <button type="button" className={summaryLanguage === "preferred" ? "active" : ""} onClick={showPreferredLanguageSummary} disabled={Boolean(translatingSummaryLanguage)} aria-busy={translatingSummaryLanguage === getPreferredSummaryLanguage().code}>{getPreferredSummaryLanguage().name}{translatingSummaryLanguage === getPreferredSummaryLanguage().code ? "…" : ""}</button>}{getActiveClinicalSummary() && renderAudioButton(Object.values(getActiveClinicalSummary()).flat().join(". "))}</div>{(summaryTranslationError || speechError) && <p className="speech-error" role="alert">{summaryTranslationError || speechError}</p>}</>}
                        <div className="review-data-grid">
                          <div className="review-item" style={{ gridColumn: "1 / -1" }}>
                            <span className="review-label">{t("intakeFlow.chiefConcern")}</span>
                            <span className="review-val" style={{ fontSize: 16 }}>
                              {getDisplayedClinicalSummaryValue("chiefComplaint", "chief_concern") || t("intakeFlow.notReported")}
                            </span>
                          </div>

                          <div className="review-item" style={{ gridColumn: "1 / -1" }}>
                            <span className="review-label">{t("intakeFlow.clinicalPresentation")}</span>
                            <span className="review-val">
                              {getDisplayedClinicalSummaryValue("historyOfPresentingComplaint", "clinical_presentation") || t("intakeFlow.notReported")}
                            </span>
                          </div>

                          <div className="review-item" style={{ gridColumn: "1 / -1" }}>
                            <span className="review-label">{t("intakeFlow.historyOfPresentIllness")}</span>
                            <span className="review-val">
                              {getDisplayedClinicalSummaryValue("historyOfPresentingComplaint", "history_of_present_illness") || t("intakeFlow.notReported")}
                            </span>
                          </div>

                          <div className="review-item">
                            <span className="review-label">{t("intakeFlow.reviewMedConditions")}</span>
                            <span className="review-val">
                              {getDisplayedClinicalSummaryValue("pastMedicalHistory", "relevant_medical_history") || t("intakeFlow.notReported")}
                            </span>
                          </div>

                          <div className="review-item">
                            <span className="review-label">{t("intakeFlow.reviewMedications")}</span>
                            <span className="review-val">
                              {getDisplayedClinicalSummaryValue("medications", "current_medications") || t("intakeFlow.notReported")}
                            </span>
                          </div>

                          <div className="review-item">
                            <span className="review-label">{t("intakeFlow.reviewAllergies")}</span>
                            <span className="review-val">
                              {getDisplayedClinicalSummaryValue("allergies", "allergies") || t("intakeFlow.notReported")}
                            </span>
                          </div>

                          <div className="review-item" style={{ gridColumn: "1 / -1" }}>
                            <span className="review-label">{t("intakeFlow.documentDerivedInformation")}</span>
                            <span className="review-val">
                              {getDisplayedClinicalSummaryValue("relevantDocumentFindings", "document_derived_information") || t("intakeFlow.noMedicalDocuments")}
                            </span>
                          </div>
                        </div>

                        {clinicalSummary.clinician_review_notes && (
                          <div className="clinician-notes-banner">
                            <strong>{t("intakeFlow.clinicianNote")}</strong>{" "}
                            {clinicalSummary.clinician_review_notes}
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="ai-summary-skipped">
                        {t("intakeFlow.aiSummarySkipped")}
                      </div>
                    )}
                  </div>
                </div>

                <section className="recommended-care-card" aria-labelledby="recommended-care-title">
                  <p className="eyebrow">Next step (optional)</p>
                  <h2 id="recommended-care-title">Recommended Specialist: {clinicalSummary?.recommended_specialist?.specialty || "Care team review"}</h2>
                  <p>{clinicalSummary?.recommended_specialist?.reason || "Based on the body system and symptoms you selected, you may consider consulting a relevant department."} This is informational guidance, not a diagnosis.</p>
                  <button type="button" className="btn-secondary" onClick={() => setPage("find-doctor")}>
                    <Stethoscope size={17} /> Find a Doctor
                  </button>
                </section>

                {/* Safety Disclaimer */}
                <div className="summary-notice" style={{ marginBottom: 24 }}>
                  <AlertCircle size={16} />
                  {t("patientHistoryNotice")}
                </div>

                <div className="intake-actions-row">
                  <button
                    type="button"
                    className="btn-secondary"
                    onClick={() => setIntakeStep(5)}
                  >
                    <ArrowLeft size={16} />
                    {t("back")}
                  </button>

                  <button
                    type="button"
                    className="btn-primary"
                    onClick={confirmMedicalHistory}
                  >
                    <Check size={16} />
                    {t("intakeFlow.confirmHistory")}
                  </button>
                </div>
              </>
            )}
          </div>
        </main>
      </div>
    );
  }

  // =====================================================
  // 4. MEDICAL RECORDS PAGE
  // =====================================================

  if (page === "documents") {
    return <div className="patient-shell">{renderPatientSidebar()}<main className="patient-main patient-section-main"><div className="records-container"><header className="records-header"><div><p className="eyebrow">{t("platform.patientPortal")}</p><h1>{t("auth.medicalDocuments")}</h1><p>{t("platform.documentsDescription")}</p></div><div className="records-header-actions">{renderPatientHeaderActions()}<button type="button" className="btn-primary" onClick={() => { setIntakeStep(5); setPage("intake"); }}><Upload size={17} />{t("platform.uploadDocument")}</button></div></header><section className="patient-document-grid">{intakeDocuments.length ? intakeDocuments.map((document) => <Card key={document.id} className="patient-document-card"><div className="document-card-heading"><FileText size={20} /><div><strong>{document.name}</strong><p>{document.type || t("platform.medicalDocument")}</p></div><StatusBadge status={document.status === "processed" ? "success" : document.status === "failed" ? "danger" : "neutral"}>{document.status === "processed" ? t("auth.processed") : document.status === "failed" ? t("auth.failed") : t("auth.processing")}</StatusBadge></div>{document.extractedText && <div className="document-extract"><strong>{t("platform.extractedInformation")}</strong><p>{document.extractedText}</p></div>}{document.error && <p className="speech-error">{document.error}</p>}</Card>) : <EmptyState title={t("platform.noDocuments")} detail={t("platform.noDocumentsDetail")} />}</section><button type="button" className="btn-secondary" onClick={() => setPage("records")}>{t("medicalRecords")}</button></div></main></div>;
  }

  if (page === "profile") {
    return <div className="patient-shell">{renderPatientSidebar()}<main className="patient-main patient-section-main"><div className="records-container"><header className="records-header"><div><p className="eyebrow">{t("platform.patientPortal")}</p><h1>{t("auth.profile")}</h1><p>{t("platform.profileDescription")}</p></div>{renderPatientHeaderActions()}</header>{demoResetNotice && <p className="demo-reset-notice" role="status">{demoResetNotice}</p>}<div className="profile-card-grid"><Card><h2>{t("platform.profileInformation")}</h2><p><strong>{t("platform.profileName")}:</strong> {authenticatedUser?.name || form.name || t("platform.notReported")}</p><p><strong>{t("auth.abha")}:</strong> {maskAbha(authenticatedUser?.abhaId)}</p><p><strong>{t("platform.language")}:</strong> {form.language}</p></Card><Card><h2>{t("platform.accessibility")}</h2>{renderAccessibilityControls()}</Card>{authenticatedUser?.demo && <Card className="demo-environment-card"><SectionHeader eyebrow={t("platform.demoEnvironment")} title={t("platform.demoDataControls")} /><p>{t("platform.resetDemoDescription")}</p><button type="button" className="btn-secondary" onClick={() => { setDemoResetNotice(""); setShowDemoResetConfirm(true); }} disabled={resettingDemo}><RotateCcw size={17} />{t("platform.resetDemoData")}</button></Card>}</div></div>{showDemoResetConfirm && <div className="demo-reset-modal-backdrop" role="presentation"><section className="demo-reset-modal" role="dialog" aria-modal="true" aria-labelledby="demo-reset-title"><h2 id="demo-reset-title">{t("platform.resetAllDemoData")}</h2><p>{t("platform.resetDemoDescription")}</p><div className="token-actions"><button type="button" className="btn-secondary" onClick={() => setShowDemoResetConfirm(false)} disabled={resettingDemo}>{t("accessibility.cancel")}</button><button type="button" className="btn-primary" onClick={resetDemoData} disabled={resettingDemo}>{resettingDemo ? t("platform.resetting") : t("platform.resetDemo")}</button></div></section></div>}</main></div>;
  }

  if (page === "records") {
    const isPatientPortal = authenticatedUser?.role === "patient";
    return (
      <div className={isPatientPortal ? "patient-shell" : "records-page"}>
        {isPatientPortal ? renderPatientSidebar() : <Navbar
          setForm={setForm}
          showBack={true}
          onBack={() => {
            if (authenticatedUser) {
              setPage("dashboard");
            } else {
              setPage("intake");
              setIntakeStep(7);
            }
          }}
        />}

        <main className={isPatientPortal ? "patient-main patient-section-main" : "records-container"}>
          <div className={isPatientPortal ? "records-container" : undefined}>
          {/* HEADER */}
          <div className="records-header">
            <div>
              <span className="section-label">{t("patientPortal")}</span>
              <h1>{t("medicalRecords")}</h1>
              <p>{t("medicalRecordsDescription")}</p>
            </div>

            <div className="records-header-actions">
              {isPatientPortal && renderPatientHeaderActions()}
              <button
                className="upload-main-button"
                onClick={() => setShowUpload(true)}
              >
                <Upload size={16} />
                {t("uploadDocument")}
              </button>
            </div>
          </div>

          {/* SECURITY */}
          <div className="records-security">
            <div className="security-icon">
              <ShieldCheck size={20} />
            </div>
            <div>
              <strong>{t("recordsProtected")}</strong>
              <p>{t("recordsProtectedDescription")}</p>
            </div>
            <Lock size={18} />
          </div>

          {isPatientPortal && <Card className="patient-physician-review"><SectionHeader eyebrow="Physician Review" title={patientClinicalReview?.status === "finalized" ? "Physician Reviewed Summary" : "Physician review"} actions={<StatusBadge status={patientClinicalReview?.status === "finalized" ? "success" : "neutral"}>{patientClinicalReview?.status === "finalized" ? "FINALIZED" : patientClinicalReview?.status === "draft" ? "UNDER REVIEW" : "AWAITING REVIEW"}</StatusBadge>} />{patientClinicalReviewState === "loading" ? <LoadingState label="Loading physician review…" /> : patientClinicalReview?.status === "finalized" ? <>{!['en-IN'].includes(getPreferredSummaryLanguage().code) && <div className="summary-language-controls"><button type="button" className={reviewSummaryLanguage === "english" ? "active" : ""} onClick={() => setReviewSummaryLanguage("english")}>{t("accessibility.english")}</button><button type="button" className={reviewSummaryLanguage === "preferred" ? "active" : ""} onClick={showPreferredReviewedSummary} disabled={Boolean(translatingReviewLanguage)}>{getPreferredSummaryLanguage().name}{translatingReviewLanguage === getPreferredSummaryLanguage().code ? "…" : ""}</button></div>}<p className="muted">Finalized {patientClinicalReview.finalizedAt ? new Date(patientClinicalReview.finalizedAt).toLocaleString() : ""}{patientClinicalReview.finalizedBy ? ` by ${patientClinicalReview.finalizedBy}` : ""}.</p>{reviewTranslationError && <p className="speech-error" role="alert">{reviewTranslationError}</p>}<div className="doctor-summary-grid">{Object.entries(reviewSummaryLanguage === "preferred" ? (translatedReviewSummaries[getPreferredSummaryLanguage().code] || patientClinicalReview.reviewedSummary || {}) : (patientClinicalReview.reviewedSummary || {})).filter(([, value]) => Array.isArray(value) ? value.length : value).map(([key, value]) => <div key={key}><strong>{key.replace(/([A-Z])/g, " $1").replace(/^./, (letter) => letter.toUpperCase())}</strong><p>{Array.isArray(value) ? value.join(", ") : String(value)}</p></div>)}</div></> : <p className="muted">{patientClinicalReview?.status === "draft" ? "A physician is reviewing this assessment. The reviewed summary will appear here after finalization." : "Awaiting physician review."}</p>}</Card>}

          {/* CONTROLS */}
          <div className="records-controls">
            <div className="records-search">
              <Search size={16} />
              <input
                type="text"
                placeholder={t("searchRecords")}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                aria-label={t("searchRecords")}
              />
            </div>

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="category-select"
              aria-label={t("categories.all")}
            >
              <option value="All">{t("categories.all")}</option>
              <option value="Clinical Intake">{t("intakeFlow.clinicalIntakeLabel")}</option>
              <option value="Lab Report">{t("categories.labReports")}</option>
              <option value="Prescription">{t("categories.prescriptions")}</option>
              <option value="Discharge">{t("categories.discharge")}</option>
              <option value="Medical Document">{t("categories.other")}</option>
            </select>
          </div>

          {/* COUNT */}
          <div className="records-count">
            <span>
              {filteredDocuments.length} {t("documents")}
            </span>
          </div>

          {/* DOCUMENT LIST */}
          <div className="records-list">
            {filteredDocuments.map((doc) => (
              <div className="record-item" key={doc.id}>
                <div className="record-left">
                  <div className="record-icon">
                    <FileText size={20} />
                  </div>
                  <div className="record-meta">
                    <strong>{doc.name}</strong>
                    <div className="record-sub">
                      <span>{doc.hospital}</span>
                      <span>•</span>
                      <span>{doc.date}</span>
                    </div>
                  </div>
                </div>

                <div className="record-right">
                  <span className="record-badge">{doc.type}</span>
                  {doc.locked ? (
                    <div className="status-badge status-badge--verified">
                      <Lock size={13} />
                      {t("verified")}
                    </div>
                  ) : (
                    <div className="status-badge status-badge--active">
                      <ShieldCheck size={13} />
                      {t("active")}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {filteredDocuments.length === 0 && (
              <div className="records-empty">
                <FileText size={36} />
                <p>{t("noRecordsFound")}</p>
                <span>{t("noRecordsDescription")}</span>
              </div>
            )}
          </div>

          {/* EXTRACTED DOCUMENT DATA DISPLAY */}
          {extractedData && (
            <div className="extracted-data-card">
              <div className="extracted-header">
                <FileText size={20} />
                <strong>{t("intakeFlow.extractedInfo")}: {extractedData.filename}</strong>
              </div>

              {extractedData.data && (
                <div className="extracted-grid">
                  {extractedData.data.patient && (
                    <div className="extracted-section">
                      <span className="extracted-label">{t("intakeFlow.reviewPatient")}</span>
                      <p>
                        {extractedData.data.patient.name || "N/A"} ·{" "}
                        {extractedData.data.patient.age || "N/A"} ·{" "}
                        {extractedData.data.patient.gender || "N/A"}
                      </p>
                    </div>
                  )}

                  {extractedData.data.symptoms?.length > 0 && (
                    <div className="extracted-section">
                      <span className="extracted-label">{t("intakeFlow.symptoms")}</span>
                      <p>{extractedData.data.symptoms.join(", ")}</p>
                    </div>
                  )}

                  {extractedData.data.vitals &&
                    Object.keys(extractedData.data.vitals).length > 0 && (
                      <div className="extracted-section">
                        <span className="extracted-label">{t("intakeFlow.vitals")}</span>
                        <p>
                          {Object.entries(extractedData.data.vitals)
                            .map(([k, v]) => `${k}: ${v}`)
                            .join(", ")}
                        </p>
                      </div>
                    )}
                </div>
              )}
            </div>
          )}
          </div>
        </main>

        {/* UPLOAD MODAL */}
        {showUpload && (
          <div className="upload-modal-overlay" role="dialog" aria-modal="true" aria-labelledby="upload-modal-title">
            <div className="upload-modal">
              <div className="upload-modal-header">
                <h2 id="upload-modal-title">{t("uploadMedicalDocument")}</h2>
                <button
                  className="close-button"
                  onClick={() => setShowUpload(false)}
                  aria-label={t("intakeFlow.closeModal")}
                >
                  <X size={18} />
                </button>
              </div>

              <p className="upload-description">
                {t("uploadModalDescription")}
              </p>

              <div className="upload-dropzone">
                <Upload size={32} />
                <p>
                  <strong>{t("chooseFile")}</strong>
                </p>
                <span>{t("supportedFormats")}</span>
                <input
                  type="file"
                  accept=".pdf,.png,.jpg,.jpeg"
                  onChange={handleFileChange}
                  aria-label={t("chooseFile")}
                />
              </div>

              {selectedFile && (
                <div className="selected-file">
                  <FileText size={16} />
                  <span>{selectedFile.name}</span>
                </div>
              )}

              {extracting && (
                <div className="extraction-status">
                  <span className="extraction-spinner" />
                  <span>{t("intakeFlow.processingDoc")}</span>
                </div>
              )}

              {extractionError && (
                <div className="extraction-error">{extractionError}</div>
              )}

              <div className="upload-warning">
                <AlertCircle size={15} />
                {t("uploadVerificationWarning")}
              </div>

              <button
                className="confirm-upload-button"
                onClick={uploadDocument}
                disabled={!selectedFile || extracting}
              >
                <Upload size={16} />
                {t("uploadDocument")}
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }

  return null;
}

export default App;
