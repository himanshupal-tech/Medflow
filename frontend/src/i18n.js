import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { applyIntakeTranslations } from "./data/intakeTranslations.js";

const resources = {
  // =====================================================
  // ENGLISH
  // =====================================================

  en: {
    translation: {
      secure: "Secure",
      aiHealthcare: "AI-POWERED HEALTHCARE",

      yourHealth: "Your Health.",
      yourRecords: "Your Records.",
      onePlace: "One Place.",
      description:
        "MedFlow brings your health history and medical records together in one secure, intelligent platform.",

      patients: "PATIENTS",
      accuracy: "ACCURACY",
      avgIntake: "AVG INTAKE",

      whoAreYouToday: "Who are you today?",
      selectRole: "Select your role to get started",

      patient: "PATIENT",
      imPatient: "I'm a Patient",
      patientDescription:
        "Record your health history and manage your medical records.",

      healthcareProfessional:
        "HEALTHCARE PROFESSIONAL",
      imDoctor: "I'm a Doctor",
      doctorDescription:
        "Review patient histories and manage clinical records.",

      privacyNote:
        "Your health information is handled with privacy and consent in mind.",

      back: "Back",
      profile: "Profile",
      healthIntake: "Health Intake",
      records: "Records",

      letsGetStarted: "LET'S GET STARTED",
      tellUsAboutYourself:
        "Tell us about yourself",
      basicDetailsDescription:
        "We only need a few basic details before your health intake.",

      name: "Name",
      age: "Age",
      gender: "Gender",
      phoneNumber: "Phone Number",

      placeholders: {
        fullName: "Enter your full name",
        age: "Your age",
        mobile: "10-digit mobile number",
        response:
          "Tell me in your own words...",
      },

      genderOptions: {
        select: "Select gender",
        male: "Male",
        female: "Female",
        other: "Other",
        preferNotToSay:
          "Prefer not to say",
      },

      continueToHealthIntake:
        "Continue to Health Intake",

      formSecurity:
        "Your information will only be used for your healthcare journey.",

      medxAiAssistant: "MedFlow AI Assistant",

      understandFeeling:
        "Let's understand how you're feeling.",

      answerQuestionsDescription:
        "Answer the questions by selecting an option or typing your response.",

      medxClinicalAssistant:
        "MedFlow Clinical Assistant",

      onlineAiPowered:
        "Online · AI-powered intake",

      connectionIssue: "Connection issue",
      tryAgain: "Try Again",
      continue: "Continue",

      intake: {
        selectOption:
          "Select one of the options below.",
        selectYesNo:
          "Please select Yes or No.",
        typeOrVoice:
          "Type your response or use voice input.",
      },

      intakeFlow: {
        step1Title: "What area is affected?",
        step1Subtitle: "Select the body system closest to your main concern.",
        step2Title: "What symptoms are you experiencing?",
        step2Subtitle: "Select all symptoms that apply to your condition.",
        searchSymptomsPlaceholder: "Search symptoms (e.g. pain, cough, fever)...",
        noSymptomsFound: "No matching symptoms found.",
        selectedCount: "Selected ({{count}})",
        step3Title: "Severity & Duration",
        step3Subtitle: "Indicate how intense and persistent your symptoms are.",
        severityQuestion: "How severe are your symptoms?",
        severityMinimal: "Minimal / Mild",
        severityModerate: "Moderate",
        severitySevere: "Severe",
        durationQuestion: "How long have you had these symptoms?",
        progressionQuestion: "How are your symptoms progressing?",
        step4Title: "Clinical Context & History",
        step4Subtitle: "Provide brief background details to help the clinical team.",
        conditionsQuestion: "Do you have any existing medical conditions?",
        medicationsQuestion: "Are you currently taking any medications?",
        allergiesQuestion: "Do you have any known allergies?",
        previousSimilarQuestion: "Have you experienced similar symptoms before?",
        injuryQuestion: "Have you recently had an injury or surgery related to this concern?",
        additionalQuestion: "Is there anything else you would like the medical team to know?",
        specifyPlaceholder: "Please specify details...",
        additionalPlaceholder: "Type any extra symptoms or notes, or use microphone...",
        yes: "Yes",
        no: "No",
        notSure: "Not sure",
        step5Title: "Synthesizing Clinical Intake",
        step5Subtitle: "MedFlow AI is structuring your responses into a clinical summary for medical review...",
        analysisFailed: "AI analysis could not be completed at this time.",
        retryAnalysis: "Retry Analysis",
        proceedWithoutAi: "Proceed to Review with Collected Data",
        step6Title: "Review & Confirm Medical History",
        step6Subtitle: "Please review your reported details and the AI summary before submitting.",
        patientProvidedSection: "Patient-Provided Information",
        aiSummarySection: "AI-Generated Clinical Summary",
        edit: "Edit",
        confirmHistory: "Confirm Medical History",
        patientDetails: "Patient Details",
        bodySystem: "Affected Body System",
        symptoms: "Reported Symptoms",
        severityAndDuration: "Severity, Duration & Progression",
        clinicalBackground: "Medical Background & Context",
        additionalNotes: "Additional Notes",
        chiefConcern: "Chief Concern",
        clinicianReviewNotes: "Clinician Review Notes",
      },

      voice: {
        stopListening: "Stop listening",
        input: "Voice input",
      },

      listening:
        "Listening... Speak now",

      intakeFooter:
        "Your responses are private and reviewed by a healthcare professional.",

      historyReady:
        "Your health history is ready.",

      historyReadyDescription:
        "MedFlow has organized your information for healthcare professional review.",

      healthIntakeSummary:
        "HEALTH INTAKE SUMMARY",

      patientHistoryNotice:
        "This is a patient-reported history and is not a medical diagnosis. Please consult a licensed healthcare professional.",

      continueToMedicalRecords:
        "Continue to Medical Records",

      patientPortal: "PATIENT PORTAL",
      medicalRecords: "Medical Records",

      medicalRecordsDescription:
        "Your medical history, securely organized in one place.",

      uploadDocument: "Upload Document",

      recordsProtected:
        "Your medical records are protected",

      recordsProtectedDescription:
        "Verified records become read-only and cannot be modified.",

      searchRecords:
        "Search your medical records...",

      categories: {
        all: "All documents",
        labReports: "Lab Reports",
        prescriptions: "Prescriptions",
        discharge: "Discharge Summaries",
        other: "Other Documents",
      },

      documents: "documents",
      allYourRecords: "All your records",

      readOnly: "Read-only",
      pending: "Pending",
      source: "SOURCE",
      date: "DATE",
      verified: "Verified",
      pendingVerification:
        "Pending Verification",
      view: "View",

      noRecordsFound: "No records found",

      noRecordsDescription:
        "Try changing your search or upload a new document.",

      medicalDocument: "MEDICAL DOCUMENT",

      uploadRecord: "Upload a record",

      uploadRecordDescription:
        "Add a previous medical document to your MedFlow health history.",

      fileSelected:
        "File selected · ready to upload",

      chooseDocument: "Choose a document",

      acceptedFormats:
        "PDF, JPG or PNG accepted",

      uploadVerificationWarning:
        "Uploaded documents will require verification before being marked as verified.",

      errors: {
        enterName: "Please enter your name",
        enterAge: "Please enter your age",
        validAge: "Please enter a valid age",
        selectGender: "Please select your gender",
        enterPhone:
          "Please enter your phone number",
        validPhone:
          "Enter a valid 10-digit number",
      },

      speechErrors: {
        convertFailed:
          "Could not convert your speech to text. Please try again.",

        permissionDenied:
          "Microphone permission denied. Please allow microphone access.",

        noMicrophone:
          "No microphone detected.",

        unable:
          "Unable to access the microphone.",
      },

      aiErrors: {
        timeout:
          "MedFlow is taking too long to respond. Please check your connection and try again.",

        connection:
          "MedFlow could not connect to the clinical intake server. Please try again.",
      },
    },
  },

  // =====================================================
  // HINDI
  // =====================================================

  hi: {
    translation: {
      secure: "सुरक्षित",
      aiHealthcare: "AI-संचालित स्वास्थ्य सेवा",

      yourHealth: "आपका स्वास्थ्य।",
      yourRecords: "आपके रिकॉर्ड।",
      onePlace: "एक ही जगह।",

      description:
        "MedFlow आपके स्वास्थ्य इतिहास और मेडिकल रिकॉर्ड को एक सुरक्षित और बुद्धिमान प्लेटफ़ॉर्म पर एक साथ लाता है।",

      patients: "मरीज़",
      accuracy: "सटीकता",
      avgIntake: "औसत समय",

      whoAreYouToday: "आज आप कौन हैं?",
      selectRole:
        "शुरू करने के लिए अपनी भूमिका चुनें",

      patient: "मरीज़",
      imPatient: "मैं एक मरीज़ हूँ",

      patientDescription:
        "अपना स्वास्थ्य इतिहास दर्ज करें और अपने मेडिकल रिकॉर्ड प्रबंधित करें।",

      healthcareProfessional:
        "स्वास्थ्य सेवा पेशेवर",

      imDoctor: "मैं डॉक्टर हूँ",

      doctorDescription:
        "मरीज़ों के इतिहास की समीक्षा करें और क्लिनिकल रिकॉर्ड प्रबंधित करें।",

      privacyNote:
        "आपकी स्वास्थ्य जानकारी को गोपनीयता और आपकी सहमति को ध्यान में रखते हुए संभाला जाता है।",

      back: "वापस",
      profile: "प्रोफ़ाइल",
      healthIntake: "स्वास्थ्य जानकारी",
      records: "रिकॉर्ड",

      letsGetStarted: "शुरू करते हैं",

      tellUsAboutYourself:
        "अपने बारे में बताएं",

      basicDetailsDescription:
        "स्वास्थ्य जानकारी शुरू करने से पहले हमें केवल कुछ बुनियादी जानकारी चाहिए।",

      name: "नाम",
      age: "उम्र",
      gender: "लिंग",
      phoneNumber: "फ़ोन नंबर",

      placeholders: {
        fullName: "अपना पूरा नाम दर्ज करें",
        age: "अपनी उम्र",
        mobile: "10 अंकों का मोबाइल नंबर",
        response:
          "अपने शब्दों में बताएं...",
      },

      genderOptions: {
        select: "लिंग चुनें",
        male: "पुरुष",
        female: "महिला",
        other: "अन्य",
        preferNotToSay:
          "बताना पसंद नहीं करेंगे",
      },

      continueToHealthIntake:
        "स्वास्थ्य जानकारी पर जाएं",

      formSecurity:
        "आपकी जानकारी का उपयोग केवल आपकी स्वास्थ्य यात्रा के लिए किया जाएगा।",

      medxAiAssistant:
        "MedFlow AI सहायक",

      understandFeeling:
        "आइए समझते हैं कि आप कैसा महसूस कर रहे हैं।",

      answerQuestionsDescription:
        "किसी विकल्प को चुनकर या अपना उत्तर लिखकर सवालों का जवाब दें।",

      medxClinicalAssistant:
        "MedFlow क्लिनिकल सहायक",

      onlineAiPowered:
        "ऑनलाइन · AI-संचालित स्वास्थ्य जानकारी",

      connectionIssue:
        "कनेक्शन की समस्या",

      tryAgain: "फिर कोशिश करें",
      continue: "जारी रखें",

      intake: {
        selectOption:
          "नीचे दिए गए विकल्पों में से एक चुनें।",

        selectYesNo:
          "कृपया हाँ या नहीं चुनें।",

        typeOrVoice:
          "अपना उत्तर लिखें या आवाज़ का उपयोग करें।",
      },

      voice: {
        stopListening: "सुनना बंद करें",
        input: "आवाज़ से इनपुट",
      },

      listening:
        "सुन रहा है... अभी बोलें",

      intakeFooter:
        "आपके उत्तर निजी हैं और स्वास्थ्य सेवा पेशेवर द्वारा समीक्षा किए जाएंगे।",

      historyReady:
        "आपका स्वास्थ्य इतिहास तैयार है।",

      historyReadyDescription:
        "MedFlow ने आपकी जानकारी को स्वास्थ्य सेवा पेशेवर की समीक्षा के लिए व्यवस्थित कर दिया है।",

      healthIntakeSummary:
        "स्वास्थ्य जानकारी का सारांश",

      patientHistoryNotice:
        "यह मरीज़ द्वारा दी गई स्वास्थ्य जानकारी है और मेडिकल निदान नहीं है। कृपया लाइसेंस प्राप्त स्वास्थ्य सेवा पेशेवर से सलाह लें।",

      continueToMedicalRecords:
        "मेडिकल रिकॉर्ड पर जाएं",

      patientPortal: "मरीज़ पोर्टल",
      medicalRecords: "मेडिकल रिकॉर्ड",

      medicalRecordsDescription:
        "आपका स्वास्थ्य इतिहास सुरक्षित रूप से एक ही जगह व्यवस्थित है।",

      uploadDocument:
        "दस्तावेज़ अपलोड करें",

      recordsProtected:
        "आपके मेडिकल रिकॉर्ड सुरक्षित हैं",

      recordsProtectedDescription:
        "सत्यापित रिकॉर्ड केवल पढ़ने योग्य हो जाते हैं और उनमें बदलाव नहीं किया जा सकता।",

      searchRecords:
        "अपने मेडिकल रिकॉर्ड खोजें...",

      categories: {
        all: "सभी दस्तावेज़",
        labReports: "लैब रिपोर्ट",
        prescriptions: "प्रिस्क्रिप्शन",
        discharge: "डिस्चार्ज सारांश",
        other: "अन्य दस्तावेज़",
      },

      documents: "दस्तावेज़",
      allYourRecords: "आपके सभी रिकॉर्ड",

      readOnly: "केवल पढ़ने योग्य",
      pending: "लंबित",
      source: "स्रोत",
      date: "तारीख",
      verified: "सत्यापित",
      pendingVerification:
        "सत्यापन लंबित",

      view: "देखें",

      noRecordsFound:
        "कोई रिकॉर्ड नहीं मिला",

      noRecordsDescription:
        "अपनी खोज बदलें या नया दस्तावेज़ अपलोड करें।",

      medicalDocument:
        "मेडिकल दस्तावेज़",

      uploadRecord:
        "एक रिकॉर्ड अपलोड करें",

      uploadRecordDescription:
        "अपने MedFlow स्वास्थ्य इतिहास में पिछला मेडिकल दस्तावेज़ जोड़ें।",

      fileSelected:
        "फ़ाइल चुनी गई · अपलोड के लिए तैयार",

      chooseDocument:
        "एक दस्तावेज़ चुनें",

      acceptedFormats:
        "PDF, JPG या PNG स्वीकार किए जाते हैं",

      uploadVerificationWarning:
        "अपलोड किए गए दस्तावेज़ों को सत्यापित किए जाने से पहले समीक्षा की आवश्यकता होगी।",

      errors: {
        enterName:
          "कृपया अपना नाम दर्ज करें",

        enterAge:
          "कृपया अपनी उम्र दर्ज करें",

        validAge:
          "कृपया सही उम्र दर्ज करें",

        selectGender:
          "कृपया अपना लिंग चुनें",

        enterPhone:
          "कृपया अपना फ़ोन नंबर दर्ज करें",

        validPhone:
          "10 अंकों का सही नंबर दर्ज करें",
      },

      speechErrors: {
        convertFailed:
          "आपकी आवाज़ को टेक्स्ट में बदल नहीं सके। कृपया फिर से प्रयास करें।",

        permissionDenied:
          "माइक्रोफ़ोन की अनुमति नहीं मिली। कृपया माइक्रोफ़ोन की अनुमति दें।",

        noMicrophone:
          "कोई माइक्रोफ़ोन नहीं मिला।",

        unable:
          "माइक्रोफ़ोन तक पहुंच नहीं हो सकी।",
      },

      aiErrors: {
        timeout:
          "MedFlow प्रतिक्रिया देने में बहुत समय ले रहा है। कृपया अपना कनेक्शन जांचें और फिर कोशिश करें।",

        connection:
          "MedFlow क्लिनिकल इनटेक सर्वर से कनेक्ट नहीं हो सका। कृपया फिर से प्रयास करें।",
      },
    },
  },

  // =====================================================
  // BENGALI
  // =====================================================

  bn: {
    translation: {
      secure: "নিরাপদ",
      aiHealthcare: "AI-চালিত স্বাস্থ্যসেবা",
      yourHealth: "আপনার স্বাস্থ্য।",
      yourRecords: "আপনার রেকর্ড।",
      onePlace: "এক জায়গায়।",
      description:
        "MedFlow আপনার স্বাস্থ্য ইতিহাস এবং চিকিৎসা রেকর্ডকে একটি নিরাপদ ও বুদ্ধিমান প্ল্যাটফর্মে একত্রিত করে।",
      patients: "রোগী",
      accuracy: "নির্ভুলতা",
      avgIntake: "গড় সময়",
      whoAreYouToday: "আজ আপনি কে?",
      selectRole: "শুরু করতে আপনার ভূমিকা নির্বাচন করুন",
      patient: "রোগী",
      imPatient: "আমি একজন রোগী",
      patientDescription:
        "আপনার স্বাস্থ্য ইতিহাস রেকর্ড করুন এবং চিকিৎসা রেকর্ড পরিচালনা করুন।",
      healthcareProfessional:
        "স্বাস্থ্যসেবা পেশাদার",
      imDoctor: "আমি একজন ডাক্তার",
      doctorDescription:
        "রোগীর ইতিহাস পর্যালোচনা করুন এবং ক্লিনিক্যাল রেকর্ড পরিচালনা করুন।",
      privacyNote:
        "আপনার স্বাস্থ্য তথ্য গোপনীয়তা ও সম্মতির কথা মাথায় রেখে পরিচালনা করা হয়।",
      back: "পিছনে",
      profile: "প্রোফাইল",
      healthIntake: "স্বাস্থ্য তথ্য",
      records: "রেকর্ড",
      letsGetStarted: "শুরু করা যাক",
      tellUsAboutYourself:
        "আপনার সম্পর্কে বলুন",
      basicDetailsDescription:
        "স্বাস্থ্য তথ্য শুরু করার আগে আমাদের কিছু মৌলিক তথ্য প্রয়োজন।",
      name: "নাম",
      age: "বয়স",
      gender: "লিঙ্গ",
      phoneNumber: "ফোন নম্বর",
      placeholders: {
        fullName: "আপনার পুরো নাম লিখুন",
        age: "আপনার বয়স",
        mobile: "১০ সংখ্যার মোবাইল নম্বর",
        response: "নিজের ভাষায় বলুন...",
      },
      genderOptions: {
        select: "লিঙ্গ নির্বাচন করুন",
        male: "পুরুষ",
        female: "মহিলা",
        other: "অন্যান্য",
        preferNotToSay:
          "বলতে পছন্দ করি না",
      },
      continueToHealthIntake:
        "স্বাস্থ্য তথ্যে যান",
      formSecurity:
        "আপনার তথ্য শুধুমাত্র আপনার স্বাস্থ্যসেবার জন্য ব্যবহার করা হবে।",
      medxAiAssistant: "MedFlow AI সহকারী",
      understandFeeling:
        "আপনি কেমন অনুভব করছেন তা বুঝে নেওয়া যাক।",
      answerQuestionsDescription:
        "একটি বিকল্প নির্বাচন করে অথবা আপনার উত্তর লিখে প্রশ্নগুলির উত্তর দিন।",
      medxClinicalAssistant:
        "MedFlow ক্লিনিক্যাল সহকারী",
      onlineAiPowered:
        "অনলাইন · AI-চালিত স্বাস্থ্য তথ্য",
      connectionIssue: "সংযোগ সমস্যা",
      tryAgain: "আবার চেষ্টা করুন",
      continue: "চালিয়ে যান",
      intake: {
        selectOption:
          "নিচের বিকল্পগুলির মধ্যে একটি নির্বাচন করুন।",
        selectYesNo:
          "অনুগ্রহ করে হ্যাঁ অথবা না নির্বাচন করুন।",
        typeOrVoice:
          "আপনার উত্তর লিখুন অথবা ভয়েস ইনপুট ব্যবহার করুন।",
      },
      voice: {
        stopListening: "শোনা বন্ধ করুন",
        input: "ভয়েস ইনপুট",
      },
      listening:
        "শোনা হচ্ছে... এখন কথা বলুন",
      intakeFooter:
        "আপনার উত্তর ব্যক্তিগত এবং একজন স্বাস্থ্যসেবা পেশাদার তা পর্যালোচনা করবেন।",
      historyReady:
        "আপনার স্বাস্থ্য ইতিহাস প্রস্তুত।",
      historyReadyDescription:
        "MedFlow স্বাস্থ্যসেবা পেশাদারের পর্যালোচনার জন্য আপনার তথ্য সংগঠিত করেছে।",
      healthIntakeSummary:
        "স্বাস্থ্য তথ্যের সারাংশ",
      patientHistoryNotice:
        "এটি রোগীর দেওয়া স্বাস্থ্য ইতিহাস এবং এটি কোনো চিকিৎসা নির্ণয় নয়। একজন লাইসেন্সপ্রাপ্ত স্বাস্থ্যসেবা পেশাদারের পরামর্শ নিন।",
      continueToMedicalRecords:
        "চিকিৎসা রেকর্ডে যান",
      patientPortal: "রোগী পোর্টাল",
      medicalRecords: "চিকিৎসা রেকর্ড",
      medicalRecordsDescription:
        "আপনার স্বাস্থ্য ইতিহাস নিরাপদভাবে এক জায়গায় সংগঠিত।",
      uploadDocument: "ডকুমেন্ট আপলোড করুন",
      recordsProtected:
        "আপনার চিকিৎসা রেকর্ড সুরক্ষিত",
      recordsProtectedDescription:
        "যাচাইকৃত রেকর্ড শুধুমাত্র পড়া যায় এবং পরিবর্তন করা যায় না।",
      searchRecords:
        "আপনার চিকিৎসা রেকর্ড খুঁজুন...",
      categories: {
        all: "সব ডকুমেন্ট",
        labReports: "ল্যাব রিপোর্ট",
        prescriptions: "প্রেসক্রিপশন",
        discharge: "ডিসচার্জ সারাংশ",
        other: "অন্যান্য ডকুমেন্ট",
      },
      documents: "ডকুমেন্ট",
      allYourRecords: "আপনার সব রেকর্ড",
      readOnly: "শুধু পড়ার জন্য",
      pending: "অপেক্ষমাণ",
      source: "উৎস",
      date: "তারিখ",
      verified: "যাচাইকৃত",
      pendingVerification:
        "যাচাইকরণ অপেক্ষমাণ",
      view: "দেখুন",
      noRecordsFound:
        "কোনো রেকর্ড পাওয়া যায়নি",
      noRecordsDescription:
        "আপনার অনুসন্ধান পরিবর্তন করুন অথবা একটি নতুন ডকুমেন্ট আপলোড করুন।",
      medicalDocument: "চিকিৎসা ডকুমেন্ট",
      uploadRecord: "একটি রেকর্ড আপলোড করুন",
      uploadRecordDescription:
        "আপনার MedFlow স্বাস্থ্য ইতিহাসে একটি পূর্ববর্তী চিকিৎসা ডকুমেন্ট যোগ করুন।",
      fileSelected:
        "ফাইল নির্বাচিত · আপলোডের জন্য প্রস্তুত",
      chooseDocument: "একটি ডকুমেন্ট নির্বাচন করুন",
      acceptedFormats:
        "PDF, JPG বা PNG গ্রহণযোগ্য",
      uploadVerificationWarning:
        "আপলোড করা ডকুমেন্ট যাচাইকৃত হওয়ার আগে পর্যালোচনা করা হবে.",
      errors: {
        enterName: "আপনার নাম লিখুন",
        enterAge: "আপনার বয়স লিখুন",
        validAge: "সঠিক বয়স লিখুন",
        selectGender: "আপনার লিঙ্গ নির্বাচন করুন",
        enterPhone: "আপনার ফোন নম্বর লিখুন",
        validPhone: "সঠিক ১০ সংখ্যার নম্বর লিখুন",
      },
      speechErrors: {
        convertFailed:
          "আপনার কথাকে টেক্সটে রূপান্তর করা যায়নি। আবার চেষ্টা করুন।",
        permissionDenied:
          "মাইক্রোফোনের অনুমতি নেই। অনুগ্রহ করে অনুমতি দিন।",
        noMicrophone:
          "কোনো মাইক্রোফোন পাওয়া যায়নি।",
        unable:
          "মাইক্রোফোন ব্যবহার করা যাচ্ছে না।",
      },
      aiErrors: {
        timeout:
          "MedFlow উত্তর দিতে বেশি সময় নিচ্ছে। আপনার সংযোগ পরীক্ষা করে আবার চেষ্টা করুন।",
        connection:
          "MedFlow ক্লিনিক্যাল ইনটেক সার্ভারে সংযোগ করতে পারেনি। আবার চেষ্টা করুন।",
      },
    },
  },

  // =====================================================
  // GUJARATI
  // =====================================================

  gu: {
    translation: {
      secure: "સુરક્ષિત",
      aiHealthcare: "AI આધારિત આરોગ્ય સેવા",
      yourHealth: "તમારું આરોગ્ય.",
      yourRecords: "તમારા રેકોર્ડ.",
      onePlace: "એક જ જગ્યાએ.",
      description:
        "MedFlow તમારા આરોગ્ય ઇતિહાસ અને તબીબી રેકોર્ડને એક સુરક્ષિત અને બુદ્ધિશાળી પ્લેટફોર્મ પર એકસાથે લાવે છે.",
      patients: "દર્દીઓ",
      accuracy: "ચોકસાઈ",
      avgIntake: "સરેરાશ સમય",
      whoAreYouToday: "આજે તમે કોણ છો?",
      selectRole:
        "શરૂ કરવા માટે તમારી ભૂમિકા પસંદ કરો",
      patient: "દર્દી",
      imPatient: "હું દર્દી છું",
      patientDescription:
        "તમારો આરોગ્ય ઇતિહાસ નોંધો અને તમારા તબીબી રેકોર્ડનું સંચાલન કરો.",
      healthcareProfessional:
        "આરોગ્ય સેવા વ્યાવસાયિક",
      imDoctor: "હું ડૉક્ટર છું",
      doctorDescription:
        "દર્દીના ઇતિહાસની સમીક્ષા કરો અને ક્લિનિકલ રેકોર્ડનું સંચાલન કરો.",
      privacyNote:
        "તમારી આરોગ્ય માહિતી ગોપનીયતા અને સંમતિને ધ્યાનમાં રાખીને સંભાળવામાં આવે છે.",
      back: "પાછા",
      profile: "પ્રોફાઇલ",
      healthIntake: "આરોગ્ય માહિતી",
      records: "રેકોર્ડ",
      letsGetStarted: "ચાલો શરૂ કરીએ",
      tellUsAboutYourself:
        "તમારા વિશે જણાવો",
      basicDetailsDescription:
        "આરોગ્ય માહિતી શરૂ કરતા પહેલા અમને કેટલીક મૂળભૂત વિગતોની જરૂર છે.",
      name: "નામ",
      age: "ઉંમર",
      gender: "લિંગ",
      phoneNumber: "ફોન નંબર",
      placeholders: {
        fullName: "તમારું પૂરું નામ દાખલ કરો",
        age: "તમારી ઉંમર",
        mobile: "10 અંકનો મોબાઇલ નંબર",
        response: "તમારા પોતાના શબ્દોમાં કહો...",
      },
      genderOptions: {
        select: "લિંગ પસંદ કરો",
        male: "પુરુષ",
        female: "સ્ત્રી",
        other: "અન્ય",
        preferNotToSay:
          "કહેવાનું પસંદ નથી",
      },
      continueToHealthIntake:
        "આરોગ્ય માહિતી પર જાઓ",
      formSecurity:
        "તમારી માહિતીનો ઉપયોગ માત્ર તમારી આરોગ્ય યાત્રા માટે કરવામાં આવશે.",
      medxAiAssistant: "MedFlow AI સહાયક",
      understandFeeling:
        "ચાલો સમજીએ કે તમે કેવું અનુભવી રહ્યા છો.",
      answerQuestionsDescription:
        "વિકલ્પ પસંદ કરીને અથવા તમારો જવાબ લખીને પ્રશ્નોના જવાબ આપો.",
      medxClinicalAssistant:
        "MedFlow ક્લિનિકલ સહાયક",
      onlineAiPowered:
        "ઓનલાઇન · AI આધારિત માહિતી",
      connectionIssue: "કનેક્શન સમસ્યા",
      tryAgain: "ફરી પ્રયાસ કરો",
      continue: "ચાલુ રાખો",
      intake: {
        selectOption:
          "નીચેના વિકલ્પોમાંથી એક પસંદ કરો.",
        selectYesNo:
          "કૃપા કરીને હા અથવા ના પસંદ કરો.",
        typeOrVoice:
          "તમારો જવાબ લખો અથવા અવાજનો ઉપયોગ કરો.",
      },
      voice: {
        stopListening: "સાંભળવાનું બંધ કરો",
        input: "વૉઇસ ઇનપુટ",
      },
      listening:
        "સાંભળી રહ્યા છીએ... હવે બોલો",
      intakeFooter:
        "તમારા જવાબો ખાનગી છે અને આરોગ્ય સેવા વ્યાવસાયિક દ્વારા સમીક્ષા કરવામાં આવશે.",
      historyReady:
        "તમારો આરોગ્ય ઇતિહાસ તૈયાર છે.",
      historyReadyDescription:
        "MedFlow એ આરોગ્ય સેવા વ્યાવસાયિકની સમીક્ષા માટે તમારી માહિતી ગોઠવી છે.",
      healthIntakeSummary:
        "આરોગ્ય માહિતીનો સારાંશ",
      patientHistoryNotice:
        "આ દર્દી દ્વારા આપવામાં આવેલ ઇતિહાસ છે અને તબીબી નિદાન નથી. લાઇસન્સ પ્રાપ્ત આરોગ્ય સેવા વ્યાવસાયિકની સલાહ લો.",
      continueToMedicalRecords:
        "તબીબી રેકોર્ડ પર જાઓ",
      patientPortal: "દર્દી પોર્ટલ",
      medicalRecords: "તબીબી રેકોર્ડ",
      medicalRecordsDescription:
        "તમારો આરોગ્ય ઇતિહાસ સુરક્ષિત રીતે એક જગ્યાએ ગોઠવાયેલ છે.",
      uploadDocument: "દસ્તાવેજ અપલોડ કરો",
      recordsProtected:
        "તમારા તબીબી રેકોર્ડ સુરક્ષિત છે",
      recordsProtectedDescription:
        "ચકાસાયેલ રેકોર્ડ માત્ર વાંચી શકાય છે અને તેમાં ફેરફાર કરી શકાતો નથી.",
      searchRecords:
        "તમારા તબીબી રેકોર્ડ શોધો...",
      categories: {
        all: "બધા દસ્તાવેજો",
        labReports: "લેબ રિપોર્ટ્સ",
        prescriptions: "પ્રિસ્ક્રિપ્શન",
        discharge: "ડિસ્ચાર્જ સારાંશ",
        other: "અન્ય દસ્તાવેજો",
      },
      documents: "દસ્તાવેજો",
      allYourRecords: "તમારા બધા રેકોર્ડ",
      readOnly: "ફક્ત વાંચવા માટે",
      pending: "બાકી",
      source: "સ્રોત",
      date: "તારીખ",
      verified: "ચકાસાયેલ",
      pendingVerification:
        "ચકાસણી બાકી",
      view: "જુઓ",
      noRecordsFound:
        "કોઈ રેકોર્ડ મળ્યો નથી",
      noRecordsDescription:
        "તમારી શોધ બદલો અથવા નવો દસ્તાવેજ અપલોડ કરો.",
      medicalDocument: "તબીબી દસ્તાવેજ",
      uploadRecord: "રેકોર્ડ અપલોડ કરો",
      uploadRecordDescription:
        "તમારા MedFlow આરોગ્ય ઇતિહાસમાં અગાઉનો તબીબી દસ્તાવેજ ઉમેરો.",
      fileSelected:
        "ફાઇલ પસંદ થઈ · અપલોડ માટે તૈયાર",
      chooseDocument: "દસ્તાવેજ પસંદ કરો",
      acceptedFormats:
        "PDF, JPG અથવા PNG સ્વીકાર્ય છે",
      uploadVerificationWarning:
        "અપલોડ કરેલા દસ્તાવેજોને ચકાસાયેલ તરીકે ચિહ્નિત કરતા પહેલાં ચકાસણી જરૂરી રહેશે.",
      errors: {
        enterName: "કૃપા કરીને તમારું નામ દાખલ કરો",
        enterAge: "કૃપા કરીને તમારી ઉંમર દાખલ કરો",
        validAge: "કૃપા કરીને માન્ય ઉંમર દાખલ કરો",
        selectGender: "કૃપા કરીને તમારું લિંગ પસંદ કરો",
        enterPhone:
          "કૃપા કરીને તમારો ફોન નંબર દાખલ કરો",
        validPhone:
          "માન્ય 10 અંકનો નંબર દાખલ કરો",
      },
      speechErrors: {
        convertFailed:
          "તમારા અવાજને ટેક્સ્ટમાં બદલી શકાયો નથી. ફરી પ્રયાસ કરો.",
        permissionDenied:
          "માઇક્રોફોનની પરવાનગી નકારી દેવામાં આવી છે.",
        noMicrophone:
          "કોઈ માઇક્રોફોન મળ્યો નથી.",
        unable:
          "માઇક્રોફોન ઍક્સેસ કરી શકાયો નથી.",
      },
      aiErrors: {
        timeout:
          "MedFlow પ્રતિસાદ આપવામાં વધુ સમય લઈ રહ્યું છે. તમારું કનેક્શન તપાસો અને ફરી પ્રયાસ કરો.",
        connection:
          "MedFlow ક્લિનિકલ ઇનટેક સર્વર સાથે કનેક્ટ થઈ શક્યું નથી. ફરી પ્રયાસ કરો.",
      },
    },
  },

  // =====================================================
  // MARATHI
  // =====================================================

  mr: {
    translation: {
      secure: "सुरक्षित",
      aiHealthcare: "AI-आधारित आरोग्य सेवा",
      yourHealth: "तुमचे आरोग्य.",
      yourRecords: "तुमचे रेकॉर्ड.",
      onePlace: "एका ठिकाणी.",
      description:
        "MedFlow तुमचा आरोग्य इतिहास आणि वैद्यकीय रेकॉर्ड एका सुरक्षित आणि बुद्धिमान प्लॅटफॉर्मवर एकत्र आणते.",
      patients: "रुग्ण",
      accuracy: "अचूकता",
      avgIntake: "सरासरी वेळ",
      whoAreYouToday: "आज तुम्ही कोण आहात?",
      selectRole:
        "सुरुवात करण्यासाठी तुमची भूमिका निवडा",
      patient: "रुग्ण",
      imPatient: "मी रुग्ण आहे",
      patientDescription:
        "तुमचा आरोग्य इतिहास नोंदवा आणि तुमचे वैद्यकीय रेकॉर्ड व्यवस्थापित करा.",
      healthcareProfessional:
        "आरोग्य सेवा व्यावसायिक",
      imDoctor: "मी डॉक्टर आहे",
      doctorDescription:
        "रुग्णांच्या इतिहासाचे पुनरावलोकन करा आणि क्लिनिकल रेकॉर्ड व्यवस्थापित करा.",
      privacyNote:
        "तुमची आरोग्य माहिती गोपनीयता आणि संमती लक्षात घेऊन हाताळली जाते.",
      back: "मागे",
      profile: "प्रोफाइल",
      healthIntake: "आरोग्य माहिती",
      records: "रेकॉर्ड",
      letsGetStarted: "चला सुरुवात करूया",
      tellUsAboutYourself:
        "तुमच्याबद्दल सांगा",
      basicDetailsDescription:
        "आरोग्य माहिती सुरू करण्यापूर्वी आम्हाला काही मूलभूत माहिती आवश्यक आहे.",
      name: "नाव",
      age: "वय",
      gender: "लिंग",
      phoneNumber: "फोन नंबर",
      placeholders: {
        fullName: "तुमचे पूर्ण नाव प्रविष्ट करा",
        age: "तुमचे वय",
        mobile: "10 अंकी मोबाइल नंबर",
        response: "तुमच्या शब्दांत सांगा...",
      },
      genderOptions: {
        select: "लिंग निवडा",
        male: "पुरुष",
        female: "स्त्री",
        other: "इतर",
        preferNotToSay:
          "सांगणे पसंत नाही",
      },
      continueToHealthIntake:
        "आरोग्य माहितीकडे जा",
      formSecurity:
        "तुमची माहिती फक्त तुमच्या आरोग्यसेवेसाठी वापरली जाईल.",
      medxAiAssistant: "MedFlow AI सहाय्यक",
      understandFeeling:
        "तुम्हाला कसे वाटत आहे ते समजून घेऊया.",
      answerQuestionsDescription:
        "पर्याय निवडून किंवा तुमचे उत्तर टाइप करून प्रश्नांची उत्तरे द्या.",
      medxClinicalAssistant:
        "MedFlow क्लिनिकल सहाय्यक",
      onlineAiPowered:
        "ऑनलाइन · AI-आधारित माहिती",
      connectionIssue: "कनेक्शन समस्या",
      tryAgain: "पुन्हा प्रयत्न करा",
      continue: "पुढे जा",
      intake: {
        selectOption:
          "खालील पर्यायांपैकी एक निवडा.",
        selectYesNo:
          "कृपया होय किंवा नाही निवडा.",
        typeOrVoice:
          "तुमचे उत्तर टाइप करा किंवा आवाजाचा वापर करा.",
      },
      voice: {
        stopListening: "ऐकणे थांबवा",
        input: "आवाज इनपुट",
      },
      listening:
        "ऐकत आहे... आता बोला",
      intakeFooter:
        "तुमची उत्तरे खाजगी आहेत आणि आरोग्य सेवा व्यावसायिक त्यांचे पुनरावलोकन करतील.",
      historyReady:
        "तुमचा आरोग्य इतिहास तयार आहे.",
      historyReadyDescription:
        "MedFlow ने आरोग्य सेवा व्यावसायिकांच्या पुनरावलोकनासाठी तुमची माहिती व्यवस्थित केली आहे.",
      healthIntakeSummary:
        "आरोग्य माहितीचा सारांश",
      patientHistoryNotice:
        "हा रुग्णाने दिलेला इतिहास आहे आणि हे वैद्यकीय निदान नाही. परवानाधारक आरोग्य सेवा व्यावसायिकांचा सल्ला घ्या.",
      continueToMedicalRecords:
        "वैद्यकीय रेकॉर्डकडे जा",
      patientPortal: "रुग्ण पोर्टल",
      medicalRecords: "वैद्यकीय रेकॉर्ड",
      medicalRecordsDescription:
        "तुमचा आरोग्य इतिहास सुरक्षितपणे एका ठिकाणी व्यवस्थित केला आहे.",
      uploadDocument: "दस्तऐवज अपलोड करा",
      recordsProtected:
        "तुमचे वैद्यकीय रेकॉर्ड सुरक्षित आहेत",
      recordsProtectedDescription:
        "सत्यापित रेकॉर्ड फक्त वाचता येतात आणि त्यात बदल करता येत नाही.",
      searchRecords:
        "तुमचे वैद्यकीय रेकॉर्ड शोधा...",
      categories: {
        all: "सर्व दस्तऐवज",
        labReports: "लॅब रिपोर्ट",
        prescriptions: "प्रिस्क्रिप्शन",
        discharge: "डिस्चार्ज सारांश",
        other: "इतर दस्तऐवज",
      },
      documents: "दस्तऐवज",
      allYourRecords: "तुमचे सर्व रेकॉर्ड",
      readOnly: "फक्त वाचण्यासाठी",
      pending: "प्रलंबित",
      source: "स्रोत",
      date: "तारीख",
      verified: "सत्यापित",
      pendingVerification:
        "सत्यापन प्रलंबित",
      view: "पहा",
      noRecordsFound:
        "कोणतेही रेकॉर्ड सापडले नाहीत",
      noRecordsDescription:
        "तुमचा शोध बदला किंवा नवीन दस्तऐवज अपलोड करा.",
      medicalDocument: "वैद्यकीय दस्तऐवज",
      uploadRecord: "रेकॉर्ड अपलोड करा",
      uploadRecordDescription:
        "तुमच्या MedFlow आरोग्य इतिहासात मागील वैद्यकीय दस्तऐवज जोडा.",
      fileSelected:
        "फाइल निवडली · अपलोडसाठी तयार",
      chooseDocument: "दस्तऐवज निवडा",
      acceptedFormats:
        "PDF, JPG किंवा PNG स्वीकारले जातात",
      uploadVerificationWarning:
        "अपलोड केलेल्या दस्तऐवजांना सत्यापित म्हणून चिन्हांकित करण्यापूर्वी पडताळणी आवश्यक आहे.",
      errors: {
        enterName: "कृपया तुमचे नाव प्रविष्ट करा",
        enterAge: "कृपया तुमचे वय प्रविष्ट करा",
        validAge: "कृपया योग्य वय प्रविष्ट करा",
        selectGender: "कृपया तुमचे लिंग निवडा",
        enterPhone:
          "कृपया तुमचा फोन नंबर प्रविष्ट करा",
        validPhone:
          "योग्य 10 अंकी नंबर प्रविष्ट करा",
      },
      speechErrors: {
        convertFailed:
          "तुमचा आवाज मजकुरात रूपांतरित करता आला नाही. पुन्हा प्रयत्न करा.",
        permissionDenied:
          "मायक्रोफोनची परवानगी नाकारली आहे.",
        noMicrophone:
          "मायक्रोफोन आढळला नाही.",
        unable:
          "मायक्रोफोन वापरता आला नाही.",
      },
      aiErrors: {
        timeout:
          "MedFlow प्रतिसाद देण्यासाठी जास्त वेळ घेत आहे. तुमचे कनेक्शन तपासा आणि पुन्हा प्रयत्न करा.",
        connection:
          "MedFlow क्लिनिकल इनटेक सर्व्हरशी कनेक्ट होऊ शकले नाही. पुन्हा प्रयत्न करा.",
      },
    },
  },

  // =====================================================
  // TAMIL
  // =====================================================

  ta: {
    translation: {
      secure: "பாதுகாப்பானது",
      aiHealthcare: "AI சார்ந்த சுகாதார சேவை",
      yourHealth: "உங்கள் உடல்நலம்.",
      yourRecords: "உங்கள் பதிவுகள்.",
      onePlace: "ஒரே இடத்தில்.",
      description:
        "MedFlow உங்கள் உடல்நல வரலாறு மற்றும் மருத்துவப் பதிவுகளை பாதுகாப்பான மற்றும் அறிவார்ந்த தளத்தில் ஒன்றிணைக்கிறது.",
      patients: "நோயாளிகள்",
      accuracy: "துல்லியம்",
      avgIntake: "சராசரி நேரம்",
      whoAreYouToday: "இன்று நீங்கள் யார்?",
      selectRole:
        "தொடங்க உங்கள் பங்கைத் தேர்ந்தெடுக்கவும்",
      patient: "நோயாளி",
      imPatient: "நான் ஒரு நோயாளி",
      patientDescription:
        "உங்கள் உடல்நல வரலாற்றைப் பதிவு செய்து மருத்துவப் பதிவுகளை நிர்வகிக்கவும்.",
      healthcareProfessional:
        "சுகாதார நிபுணர்",
      imDoctor: "நான் ஒரு மருத்துவர்",
      doctorDescription:
        "நோயாளிகளின் வரலாற்றை மதிப்பாய்வு செய்து மருத்துவப் பதிவுகளை நிர்வகிக்கவும்.",
      privacyNote:
        "உங்கள் உடல்நலத் தகவல்கள் தனியுரிமை மற்றும் சம்மதத்தை கருத்தில் கொண்டு கையாளப்படுகின்றன.",
      back: "பின்செல்",
      profile: "சுயவிவரம்",
      healthIntake: "உடல்நல தகவல்",
      records: "பதிவுகள்",
      letsGetStarted: "தொடங்கலாம்",
      tellUsAboutYourself:
        "உங்களைப் பற்றி சொல்லுங்கள்",
      basicDetailsDescription:
        "உடல்நல தகவலைத் தொடங்குவதற்கு முன் சில அடிப்படை விவரங்கள் மட்டுமே தேவை.",
      name: "பெயர்",
      age: "வயது",
      gender: "பாலினம்",
      phoneNumber: "தொலைபேசி எண்",
      placeholders: {
        fullName: "உங்கள் முழுப் பெயரை உள்ளிடவும்",
        age: "உங்கள் வயது",
        mobile: "10 இலக்க மொபைல் எண்",
        response: "உங்கள் சொந்த வார்த்தைகளில் சொல்லுங்கள்...",
      },
      genderOptions: {
        select: "பாலினத்தைத் தேர்ந்தெடுக்கவும்",
        male: "ஆண்",
        female: "பெண்",
        other: "மற்றவை",
        preferNotToSay:
          "சொல்ல விரும்பவில்லை",
      },
      continueToHealthIntake:
        "உடல்நல தகவலுக்குச் செல்லவும்",
      formSecurity:
        "உங்கள் தகவல்கள் உங்கள் சுகாதாரப் பயணத்திற்காக மட்டுமே பயன்படுத்தப்படும்.",
      medxAiAssistant: "MedFlow AI உதவியாளர்",
      understandFeeling:
        "நீங்கள் எப்படி உணர்கிறீர்கள் என்பதைப் புரிந்துகொள்வோம்.",
      answerQuestionsDescription:
        "ஒரு விருப்பத்தைத் தேர்ந்தெடுத்து அல்லது உங்கள் பதிலைத் தட்டச்சு செய்து கேள்விகளுக்கு பதிலளிக்கவும்.",
      medxClinicalAssistant:
        "MedFlow மருத்துவ உதவியாளர்",
      onlineAiPowered:
        "ஆன்லைன் · AI சார்ந்த தகவல்",
      connectionIssue: "இணைப்பு சிக்கல்",
      tryAgain: "மீண்டும் முயற்சிக்கவும்",
      continue: "தொடரவும்",
      intake: {
        selectOption:
          "கீழே உள்ள விருப்பங்களில் ஒன்றைத் தேர்ந்தெடுக்கவும்.",
        selectYesNo:
          "ஆம் அல்லது இல்லை என்பதைத் தேர்ந்தெடுக்கவும்.",
        typeOrVoice:
          "உங்கள் பதிலைத் தட்டச்சு செய்யவும் அல்லது குரல் உள்ளீட்டைப் பயன்படுத்தவும்.",
      },
      voice: {
        stopListening: "கேட்பதை நிறுத்தவும்",
        input: "குரல் உள்ளீடு",
      },
      listening:
        "கேட்கிறது... இப்போது பேசுங்கள்",
      intakeFooter:
        "உங்கள் பதில்கள் தனிப்பட்டவை மற்றும் சுகாதார நிபுணரால் மதிப்பாய்வு செய்யப்படும்.",
      historyReady:
        "உங்கள் உடல்நல வரலாறு தயாராக உள்ளது.",
      historyReadyDescription:
        "சுகாதார நிபுணரின் மதிப்பாய்விற்காக MedFlow உங்கள் தகவல்களை ஒழுங்குபடுத்தியுள்ளது.",
      healthIntakeSummary:
        "உடல்நல தகவல் சுருக்கம்",
      patientHistoryNotice:
        "இது நோயாளி வழங்கிய வரலாறு மட்டுமே; இது மருத்துவ நோயறிதல் அல்ல. உரிமம் பெற்ற சுகாதார நிபுணரை அணுகவும்.",
      continueToMedicalRecords:
        "மருத்துவப் பதிவுகளுக்குச் செல்லவும்",
      patientPortal: "நோயாளி போர்டல்",
      medicalRecords: "மருத்துவப் பதிவுகள்",
      medicalRecordsDescription:
        "உங்கள் உடல்நல வரலாறு பாதுகாப்பாக ஒரே இடத்தில் ஒழுங்குபடுத்தப்பட்டுள்ளது.",
      uploadDocument: "ஆவணத்தைப் பதிவேற்றவும்",
      recordsProtected:
        "உங்கள் மருத்துவப் பதிவுகள் பாதுகாக்கப்பட்டுள்ளன",
      recordsProtectedDescription:
        "சரிபார்க்கப்பட்ட பதிவுகள் வாசிக்க மட்டுமே முடியும்; அவற்றை மாற்ற முடியாது.",
      searchRecords:
        "உங்கள் மருத்துவப் பதிவுகளைத் தேடுங்கள்...",
      categories: {
        all: "அனைத்து ஆவணங்கள்",
        labReports: "ஆய்வக அறிக்கைகள்",
        prescriptions: "மருந்துச் சீட்டுகள்",
        discharge: "விடுவிப்பு சுருக்கங்கள்",
        other: "பிற ஆவணங்கள்",
      },
      documents: "ஆவணங்கள்",
      allYourRecords: "உங்கள் அனைத்து பதிவுகளும்",
      readOnly: "வாசிக்க மட்டும்",
      pending: "நிலுவையில்",
      source: "மூலம்",
      date: "தேதி",
      verified: "சரிபார்க்கப்பட்டது",
      pendingVerification:
        "சரிபார்ப்பு நிலுவையில்",
      view: "பார்க்க",
      noRecordsFound:
        "பதிவுகள் எதுவும் கிடைக்கவில்லை",
      noRecordsDescription:
        "உங்கள் தேடலை மாற்றவும் அல்லது புதிய ஆவணத்தைப் பதிவேற்றவும்.",
      medicalDocument: "மருத்துவ ஆவணம்",
      uploadRecord: "ஒரு பதிவைப் பதிவேற்றவும்",
      uploadRecordDescription:
        "உங்கள் MedFlow உடல்நல வரலாற்றில் முந்தைய மருத்துவ ஆவணத்தைச் சேர்க்கவும்.",
      fileSelected:
        "கோப்பு தேர்ந்தெடுக்கப்பட்டது · பதிவேற்றத் தயாராக உள்ளது",
      chooseDocument: "ஆவணத்தைத் தேர்ந்தெடுக்கவும்",
      acceptedFormats:
        "PDF, JPG அல்லது PNG ஏற்கப்படும்",
      uploadVerificationWarning:
        "பதிவேற்றப்பட்ட ஆவணங்கள் சரிபார்க்கப்பட்டதாகக் குறிக்கப்படுவதற்கு முன் சரிபார்ப்பு தேவைப்படும்.",
      errors: {
        enterName: "உங்கள் பெயரை உள்ளிடவும்",
        enterAge: "உங்கள் வயதை உள்ளிடவும்",
        validAge: "சரியான வயதை உள்ளிடவும்",
        selectGender: "உங்கள் பாலினத்தைத் தேர்ந்தெடுக்கவும்",
        enterPhone: "உங்கள் தொலைபேசி எண்ணை உள்ளிடவும்",
        validPhone:
          "சரியான 10 இலக்க எண்ணை உள்ளிடவும்",
      },
      speechErrors: {
        convertFailed:
          "உங்கள் குரலை உரையாக மாற்ற முடியவில்லை. மீண்டும் முயற்சிக்கவும்.",
        permissionDenied:
          "மைக்ரோஃபோன் அனுமதி மறுக்கப்பட்டது.",
        noMicrophone:
          "மைக்ரோஃபோன் எதுவும் கண்டறியப்படவில்லை.",
        unable:
          "மைக்ரோஃபோனை அணுக முடியவில்லை.",
      },
      aiErrors: {
        timeout:
          "MedFlow பதிலளிக்க அதிக நேரம் எடுத்துக்கொள்கிறது. உங்கள் இணைப்பைச் சரிபார்த்து மீண்டும் முயற்சிக்கவும்.",
        connection:
          "MedFlow மருத்துவ தகவல் சேவையகத்துடன் இணைக்க முடியவில்லை. மீண்டும் முயற்சிக்கவும்.",
      },
    },
  },

  // =====================================================
  // TELUGU
  // =====================================================

  te: {
    translation: {
      secure: "సురక్షితం",
      aiHealthcare: "AI ఆధారిత ఆరోగ్య సేవ",
      yourHealth: "మీ ఆరోగ్యం.",
      yourRecords: "మీ రికార్డులు.",
      onePlace: "ఒకే చోట.",
      description:
        "MedFlow మీ ఆరోగ్య చరిత్ర మరియు వైద్య రికార్డులను ఒక సురక్షితమైన, తెలివైన ప్లాట్‌ఫారమ్‌లో ఒకచోట చేర్చుతుంది.",
      patients: "రోగులు",
      accuracy: "ఖచ్చితత్వం",
      avgIntake: "సగటు సమయం",
      whoAreYouToday: "ఈ రోజు మీరు ఎవరు?",
      selectRole:
        "ప్రారంభించడానికి మీ పాత్రను ఎంచుకోండి",
      patient: "రోగి",
      imPatient: "నేను రోగిని",
      patientDescription:
        "మీ ఆరోగ్య చరిత్రను నమోదు చేసి, మీ వైద్య రికార్డులను నిర్వహించండి.",
      healthcareProfessional:
        "ఆరోగ్య సేవా నిపుణుడు",
      imDoctor: "నేను వైద్యుడిని",
      doctorDescription:
        "రోగుల చరిత్రలను సమీక్షించి, క్లినికల్ రికార్డులను నిర్వహించండి.",
      privacyNote:
        "మీ ఆరోగ్య సమాచారాన్ని గోప్యత మరియు సమ్మతిని దృష్టిలో ఉంచుకుని నిర్వహిస్తాము.",
      back: "వెనుకకు",
      profile: "ప్రొఫైల్",
      healthIntake: "ఆరోగ్య సమాచారం",
      records: "రికార్డులు",
      letsGetStarted: "ప్రారంభిద్దాం",
      tellUsAboutYourself:
        "మీ గురించి చెప్పండి",
      basicDetailsDescription:
        "ఆరోగ్య సమాచారాన్ని ప్రారంభించే ముందు మాకు కొన్ని ప్రాథమిక వివరాలు మాత్రమే అవసరం.",
      name: "పేరు",
      age: "వయస్సు",
      gender: "లింగం",
      phoneNumber: "ఫోన్ నంబర్",
      placeholders: {
        fullName: "మీ పూర్తి పేరు నమోదు చేయండి",
        age: "మీ వయస్సు",
        mobile: "10 అంకెల మొబైల్ నంబర్",
        response: "మీ మాటల్లో చెప్పండి...",
      },
      genderOptions: {
        select: "లింగాన్ని ఎంచుకోండి",
        male: "పురుషుడు",
        female: "స్త్రీ",
        other: "ఇతర",
        preferNotToSay:
          "చెప్పడానికి ఇష్టపడను",
      },
      continueToHealthIntake:
        "ఆరోగ్య సమాచారానికి కొనసాగండి",
      formSecurity:
        "మీ సమాచారం మీ ఆరోగ్య ప్రయాణం కోసం మాత్రమే ఉపయోగించబడుతుంది.",
      medxAiAssistant: "MedFlow AI సహాయకుడు",
      understandFeeling:
        "మీరు ఎలా అనుభవిస్తున్నారో తెలుసుకుందాం.",
      answerQuestionsDescription:
        "ఒక ఎంపికను ఎంచుకుని లేదా మీ సమాధానాన్ని టైప్ చేసి ప్రశ్నలకు సమాధానం ఇవ్వండి.",
      medxClinicalAssistant:
        "MedFlow క్లినికల్ సహాయకుడు",
      onlineAiPowered:
        "ఆన్‌లైన్ · AI ఆధారిత సమాచారం",
      connectionIssue: "కనెక్షన్ సమస్య",
      tryAgain: "మళ్లీ ప్రయత్నించండి",
      continue: "కొనసాగించండి",
      intake: {
        selectOption:
          "క్రింద ఉన్న ఎంపికలలో ఒకదాన్ని ఎంచుకోండి.",
        selectYesNo:
          "దయచేసి అవును లేదా కాదు ఎంచుకోండి.",
        typeOrVoice:
          "మీ సమాధానాన్ని టైప్ చేయండి లేదా వాయిస్ ఇన్‌పుట్ ఉపయోగించండి.",
      },
      voice: {
        stopListening: "వినడం ఆపండి",
        input: "వాయిస్ ఇన్‌పుట్",
      },
      listening:
        "వింటోంది... ఇప్పుడు మాట్లాడండి",
      intakeFooter:
        "మీ సమాధానాలు ప్రైవేట్‌గా ఉంటాయి మరియు ఆరోగ్య సేవా నిపుణుడు వాటిని సమీక్షిస్తారు.",
      historyReady:
        "మీ ఆరోగ్య చరిత్ర సిద్ధంగా ఉంది.",
      historyReadyDescription:
        "ఆరోగ్య సేవా నిపుణుడి సమీక్ష కోసం MedFlow మీ సమాచారాన్ని క్రమబద్ధీకరించింది.",
      healthIntakeSummary:
        "ఆరోగ్య సమాచారం సారాంశం",
      patientHistoryNotice:
        "ఇది రోగి అందించిన చరిత్ర మాత్రమే, వైద్య నిర్ధారణ కాదు. లైసెన్స్ పొందిన ఆరోగ్య సేవా నిపుణుడిని సంప్రదించండి.",
      continueToMedicalRecords:
        "వైద్య రికార్డులకు కొనసాగండి",
      patientPortal: "రోగి పోర్టల్",
      medicalRecords: "వైద్య రికార్డులు",
      medicalRecordsDescription:
        "మీ ఆరోగ్య చరిత్రను సురక్షితంగా ఒకే చోట క్రమబద్ధీకరించాము.",
      uploadDocument: "పత్రాన్ని అప్‌లోడ్ చేయండి",
      recordsProtected:
        "మీ వైద్య రికార్డులు రక్షించబడ్డాయి",
      recordsProtectedDescription:
        "ధృవీకరించిన రికార్డులు చదవడానికి మాత్రమే ఉంటాయి మరియు మార్చలేరు.",
      searchRecords:
        "మీ వైద్య రికార్డులను శోధించండి...",
      categories: {
        all: "అన్ని పత్రాలు",
        labReports: "ల్యాబ్ నివేదికలు",
        prescriptions: "ప్రిస్క్రిప్షన్లు",
        discharge: "డిశ్చార్జ్ సారాంశాలు",
        other: "ఇతర పత్రాలు",
      },
      documents: "పత్రాలు",
      allYourRecords: "మీ అన్ని రికార్డులు",
      readOnly: "చదవడానికి మాత్రమే",
      pending: "పెండింగ్",
      source: "మూలం",
      date: "తేదీ",
      verified: "ధృవీకరించబడింది",
      pendingVerification:
        "ధృవీకరణ పెండింగ్‌లో ఉంది",
      view: "చూడండి",
      noRecordsFound:
        "రికార్డులు కనుగొనబడలేదు",
      noRecordsDescription:
        "మీ శోధనను మార్చండి లేదా కొత్త పత్రాన్ని అప్‌లోడ్ చేయండి.",
      medicalDocument: "వైద్య పత్రం",
      uploadRecord: "రికార్డును అప్‌లోడ్ చేయండి",
      uploadRecordDescription:
        "మీ MedFlow ఆరోగ్య చరిత్రలో మునుపటి వైద్య పత్రాన్ని జోడించండి.",
      fileSelected:
        "ఫైల్ ఎంచుకోబడింది · అప్‌లోడ్‌కు సిద్ధంగా ఉంది",
      chooseDocument: "పత్రాన్ని ఎంచుకోండి",
      acceptedFormats:
        "PDF, JPG లేదా PNG ఆమోదించబడతాయి",
      uploadVerificationWarning:
        "అప్‌లోడ్ చేసిన పత్రాలను ధృవీకరించబడినవిగా గుర్తించే ముందు ధృవీకరణ అవసరం.",
      errors: {
        enterName: "దయచేసి మీ పేరు నమోదు చేయండి",
        enterAge: "దయచేసి మీ వయస్సు నమోదు చేయండి",
        validAge: "దయచేసి సరైన వయస్సు నమోదు చేయండి",
        selectGender: "దయచేసి మీ లింగాన్ని ఎంచుకోండి",
        enterPhone: "దయచేసి మీ ఫోన్ నంబర్ నమోదు చేయండి",
        validPhone:
          "సరైన 10 అంకెల నంబర్ నమోదు చేయండి",
      },
      speechErrors: {
        convertFailed:
          "మీ మాటలను టెక్స్ట్‌గా మార్చలేకపోయాం. మళ్లీ ప్రయత్నించండి.",
        permissionDenied:
          "మైక్రోఫోన్ అనుమతి నిరాకరించబడింది.",
        noMicrophone:
          "మైక్రోఫోన్ కనుగొనబడలేదు.",
        unable:
          "మైక్రోఫోన్‌ను యాక్సెస్ చేయలేకపోయాం.",
      },
      aiErrors: {
        timeout:
          "MedFlow స్పందించడానికి ఎక్కువ సమయం తీసుకుంటోంది. మీ కనెక్షన్‌ను తనిఖీ చేసి మళ్లీ ప్రయత్నించండి.",
        connection:
          "MedFlow క్లినికల్ ఇన్‌టేక్ సర్వర్‌కు కనెక్ట్ కాలేకపోయింది. మళ్లీ ప్రయత్నించండి.",
      },
    },
  },

  // =====================================================
  // KANNADA
  // =====================================================

  kn: {
    translation: {
      secure: "ಸುರಕ್ಷಿತ",
      aiHealthcare: "AI ಆಧಾರಿತ ಆರೋಗ್ಯ ಸೇವೆ",
      yourHealth: "ನಿಮ್ಮ ಆರೋಗ್ಯ.",
      yourRecords: "ನಿಮ್ಮ ದಾಖಲೆಗಳು.",
      onePlace: "ಒಂದೇ ಸ್ಥಳದಲ್ಲಿ.",
      description:
        "MedFlow ನಿಮ್ಮ ಆರೋಗ್ಯ ಇತಿಹಾಸ ಮತ್ತು ವೈದ್ಯಕೀಯ ದಾಖಲೆಗಳನ್ನು ಸುರಕ್ಷಿತ ಮತ್ತು ಬುದ್ಧಿವಂತ ವೇದಿಕೆಯಲ್ಲಿ ಒಟ್ಟುಗೂಡಿಸುತ್ತದೆ.",
      patients: "ರೋಗಿಗಳು",
      accuracy: "ನಿಖರತೆ",
      avgIntake: "ಸರಾಸರಿ ಸಮಯ",
      whoAreYouToday: "ಇಂದು ನೀವು ಯಾರು?",
      selectRole:
        "ಪ್ರಾರಂಭಿಸಲು ನಿಮ್ಮ ಪಾತ್ರವನ್ನು ಆಯ್ಕೆಮಾಡಿ",
      patient: "ರೋಗಿ",
      imPatient: "ನಾನು ರೋಗಿ",
      patientDescription:
        "ನಿಮ್ಮ ಆರೋಗ್ಯ ಇತಿಹಾಸವನ್ನು ದಾಖಲಿಸಿ ಮತ್ತು ವೈದ್ಯಕೀಯ ದಾಖಲೆಗಳನ್ನು ನಿರ್ವಹಿಸಿ.",
      healthcareProfessional:
        "ಆರೋಗ್ಯ ಸೇವಾ ವೃತ್ತಿಪರ",
      imDoctor: "ನಾನು ವೈದ್ಯ",
      doctorDescription:
        "ರೋಗಿಗಳ ಇತಿಹಾಸವನ್ನು ಪರಿಶೀಲಿಸಿ ಮತ್ತು ಕ್ಲಿನಿಕಲ್ ದಾಖಲೆಗಳನ್ನು ನಿರ್ವಹಿಸಿ.",
      privacyNote:
        "ನಿಮ್ಮ ಆರೋಗ್ಯ ಮಾಹಿತಿಯನ್ನು ಗೌಪ್ಯತೆ ಮತ್ತು ಒಪ್ಪಿಗೆಯನ್ನು ಗಮನದಲ್ಲಿಟ್ಟುಕೊಂಡು ನಿರ್ವಹಿಸಲಾಗುತ್ತದೆ.",
      back: "ಹಿಂದೆ",
      profile: "ಪ್ರೊಫೈಲ್",
      healthIntake: "ಆರೋಗ್ಯ ಮಾಹಿತಿ",
      records: "ದಾಖಲೆಗಳು",
      letsGetStarted: "ಪ್ರಾರಂಭಿಸೋಣ",
      tellUsAboutYourself:
        "ನಿಮ್ಮ ಬಗ್ಗೆ ತಿಳಿಸಿ",
      basicDetailsDescription:
        "ಆರೋಗ್ಯ ಮಾಹಿತಿಯನ್ನು ಪ್ರಾರಂಭಿಸುವ ಮೊದಲು ನಮಗೆ ಕೆಲವು ಮೂಲಭೂತ ವಿವರಗಳು ಮಾತ್ರ ಬೇಕಾಗುತ್ತವೆ.",
      name: "ಹೆಸರು",
      age: "ವಯಸ್ಸು",
      gender: "ಲಿಂಗ",
      phoneNumber: "ಫೋನ್ ಸಂಖ್ಯೆ",
      placeholders: {
        fullName: "ನಿಮ್ಮ ಪೂರ್ಣ ಹೆಸರನ್ನು ನಮೂದಿಸಿ",
        age: "ನಿಮ್ಮ ವಯಸ್ಸು",
        mobile: "10 ಅಂಕಿಯ ಮೊಬೈಲ್ ಸಂಖ್ಯೆ",
        response: "ನಿಮ್ಮ ಸ್ವಂತ ಮಾತುಗಳಲ್ಲಿ ತಿಳಿಸಿ...",
      },
      genderOptions: {
        select: "ಲಿಂಗ ಆಯ್ಕೆಮಾಡಿ",
        male: "ಪುರುಷ",
        female: "ಮಹಿಳೆ",
        other: "ಇತರೆ",
        preferNotToSay:
          "ಹೇಳಲು ಇಷ್ಟವಿಲ್ಲ",
      },
      continueToHealthIntake:
        "ಆರೋಗ್ಯ ಮಾಹಿತಿಗೆ ಮುಂದುವರಿಯಿರಿ",
      formSecurity:
        "ನಿಮ್ಮ ಮಾಹಿತಿಯನ್ನು ನಿಮ್ಮ ಆರೋಗ್ಯ ಪ್ರಯಾಣಕ್ಕಾಗಿ ಮಾತ್ರ ಬಳಸಲಾಗುತ್ತದೆ.",
      medxAiAssistant: "MedFlow AI ಸಹಾಯಕ",
      understandFeeling:
        "ನೀವು ಹೇಗೆ ಅನುಭವಿಸುತ್ತಿದ್ದೀರಿ ಎಂಬುದನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳೋಣ.",
      answerQuestionsDescription:
        "ಆಯ್ಕೆಯನ್ನು ಆರಿಸುವ ಮೂಲಕ ಅಥವಾ ನಿಮ್ಮ ಉತ್ತರವನ್ನು ಟೈಪ್ ಮಾಡುವ ಮೂಲಕ ಪ್ರಶ್ನೆಗಳಿಗೆ ಉತ್ತರಿಸಿ.",
      medxClinicalAssistant:
        "MedFlow ಕ್ಲಿನಿಕಲ್ ಸಹಾಯಕ",
      onlineAiPowered:
        "ಆನ್‌ಲೈನ್ · AI ಆಧಾರಿತ ಮಾಹಿತಿ",
      connectionIssue: "ಸಂಪರ್ಕ ಸಮಸ್ಯೆ",
      tryAgain: "ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ",
      continue: "ಮುಂದುವರಿಸಿ",
      intake: {
        selectOption:
          "ಕೆಳಗಿನ ಆಯ್ಕೆಗಳಲ್ಲಿ ಒಂದನ್ನು ಆರಿಸಿ.",
        selectYesNo:
          "ದಯವಿಟ್ಟು ಹೌದು ಅಥವಾ ಇಲ್ಲ ಆಯ್ಕೆಮಾಡಿ.",
        typeOrVoice:
          "ನಿಮ್ಮ ಉತ್ತರವನ್ನು ಟೈಪ್ ಮಾಡಿ ಅಥವಾ ಧ್ವನಿ ಇನ್‌ಪುಟ್ ಬಳಸಿ.",
      },
      voice: {
        stopListening: "ಕೇಳುವುದನ್ನು ನಿಲ್ಲಿಸಿ",
        input: "ಧ್ವನಿ ಇನ್‌ಪುಟ್",
      },
      listening:
        "ಕೇಳುತ್ತಿದೆ... ಈಗ ಮಾತನಾಡಿ",
      intakeFooter:
        "ನಿಮ್ಮ ಉತ್ತರಗಳು ಖಾಸಗಿಯಾಗಿದ್ದು ಆರೋಗ್ಯ ಸೇವಾ ವೃತ್ತಿಪರರಿಂದ ಪರಿಶೀಲಿಸಲಾಗುತ್ತದೆ.",
      historyReady:
        "ನಿಮ್ಮ ಆರೋಗ್ಯ ಇತಿಹಾಸ ಸಿದ್ಧವಾಗಿದೆ.",
      historyReadyDescription:
        "ಆರೋಗ್ಯ ಸೇವಾ ವೃತ್ತಿಪರರ ಪರಿಶೀಲನೆಗಾಗಿ MedFlow ನಿಮ್ಮ ಮಾಹಿತಿಯನ್ನು ವ್ಯವಸ್ಥೆಗೊಳಿಸಿದೆ.",
      healthIntakeSummary:
        "ಆರೋಗ್ಯ ಮಾಹಿತಿ ಸಾರಾಂಶ",
      patientHistoryNotice:
        "ಇದು ರೋಗಿಯು ನೀಡಿದ ಇತಿಹಾಸ ಮಾತ್ರ ಮತ್ತು ವೈದ್ಯಕೀಯ ರೋಗನಿರ್ಣಯವಲ್ಲ. ಪರವಾನಗಿ ಪಡೆದ ಆರೋಗ್ಯ ಸೇವಾ ವೃತ್ತಿಪರರನ್ನು ಸಂಪರ್ಕಿಸಿ.",
      continueToMedicalRecords:
        "ವೈದ್ಯಕೀಯ ದಾಖಲೆಗಳಿಗೆ ಮುಂದುವರಿಯಿರಿ",
      patientPortal: "ರೋಗಿ ಪೋರ್ಟಲ್",
      medicalRecords: "ವೈದ್ಯಕೀಯ ದಾಖಲೆಗಳು",
      medicalRecordsDescription:
        "ನಿಮ್ಮ ಆರೋಗ್ಯ ಇತಿಹಾಸವನ್ನು ಸುರಕ್ಷಿತವಾಗಿ ಒಂದೇ ಸ್ಥಳದಲ್ಲಿ ವ್ಯವಸ್ಥೆಗೊಳಿಸಲಾಗಿದೆ.",
      uploadDocument: "ದಾಖಲೆ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ",
      recordsProtected:
        "ನಿಮ್ಮ ವೈದ್ಯಕೀಯ ದಾಖಲೆಗಳು ಸುರಕ್ಷಿತವಾಗಿವೆ",
      recordsProtectedDescription:
        "ಪರಿಶೀಲಿಸಿದ ದಾಖಲೆಗಳು ಓದಲು ಮಾತ್ರ ಲಭ್ಯವಿದ್ದು ಬದಲಾಯಿಸಲಾಗುವುದಿಲ್ಲ.",
      searchRecords:
        "ನಿಮ್ಮ ವೈದ್ಯಕೀಯ ದಾಖಲೆಗಳನ್ನು ಹುಡುಕಿ...",
      categories: {
        all: "ಎಲ್ಲಾ ದಾಖಲೆಗಳು",
        labReports: "ಲ್ಯಾಬ್ ವರದಿಗಳು",
        prescriptions: "ಪ್ರಿಸ್ಕ್ರಿಪ್ಶನ್‌ಗಳು",
        discharge: "ಡಿಸ್ಚಾರ್ಜ್ ಸಾರಾಂಶಗಳು",
        other: "ಇತರೆ ದಾಖಲೆಗಳು",
      },
      documents: "ದಾಖಲೆಗಳು",
      allYourRecords: "ನಿಮ್ಮ ಎಲ್ಲಾ ದಾಖಲೆಗಳು",
      readOnly: "ಓದಲು ಮಾತ್ರ",
      pending: "ಬಾಕಿ",
      source: "ಮೂಲ",
      date: "ದಿನಾಂಕ",
      verified: "ಪರಿಶೀಲಿಸಲಾಗಿದೆ",
      pendingVerification:
        "ಪರಿಶೀಲನೆ ಬಾಕಿಯಿದೆ",
      view: "ನೋಡಿ",
      noRecordsFound:
        "ಯಾವುದೇ ದಾಖಲೆಗಳು ಕಂಡುಬಂದಿಲ್ಲ",
      noRecordsDescription:
        "ನಿಮ್ಮ ಹುಡುಕಾಟವನ್ನು ಬದಲಾಯಿಸಿ ಅಥವಾ ಹೊಸ ದಾಖಲೆಯನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ.",
      medicalDocument: "ವೈದ್ಯಕೀಯ ದಾಖಲೆ",
      uploadRecord: "ಒಂದು ದಾಖಲೆಯನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ",
      uploadRecordDescription:
        "ನಿಮ್ಮ MedFlow ಆರೋಗ್ಯ ಇತಿಹಾಸಕ್ಕೆ ಹಿಂದಿನ ವೈದ್ಯಕೀಯ ದಾಖಲೆಯನ್ನು ಸೇರಿಸಿ.",
      fileSelected:
        "ಫೈಲ್ ಆಯ್ಕೆಮಾಡಲಾಗಿದೆ · ಅಪ್‌ಲೋಡ್‌ಗೆ ಸಿದ್ಧವಾಗಿದೆ",
      chooseDocument: "ದಾಖಲೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ",
      acceptedFormats:
        "PDF, JPG ಅಥವಾ PNG ಸ್ವೀಕರಿಸಲಾಗುತ್ತದೆ",
      uploadVerificationWarning:
        "ಅಪ್‌ಲೋಡ್ ಮಾಡಿದ ದಾಖಲೆಗಳನ್ನು ಪರಿಶೀಲಿಸಲಾಗಿದೆ ಎಂದು ಗುರುತಿಸುವ ಮೊದಲು ಪರಿಶೀಲನೆ ಅಗತ್ಯವಿರುತ್ತದೆ.",
      errors: {
        enterName: "ದಯವಿಟ್ಟು ನಿಮ್ಮ ಹೆಸರನ್ನು ನಮೂದಿಸಿ",
        enterAge: "ದಯವಿಟ್ಟು ನಿಮ್ಮ ವಯಸ್ಸನ್ನು ನಮೂದಿಸಿ",
        validAge: "ದಯವಿಟ್ಟು ಮಾನ್ಯ ವಯಸ್ಸನ್ನು ನಮೂದಿಸಿ",
        selectGender: "ದಯವಿಟ್ಟು ನಿಮ್ಮ ಲಿಂಗವನ್ನು ಆಯ್ಕೆಮಾಡಿ",
        enterPhone:
          "ದಯವಿಟ್ಟು ನಿಮ್ಮ ಫೋನ್ ಸಂಖ್ಯೆಯನ್ನು ನಮೂದಿಸಿ",
        validPhone:
          "ಮಾನ್ಯವಾದ 10 ಅಂಕಿಯ ಸಂಖ್ಯೆಯನ್ನು ನಮೂದಿಸಿ",
      },
      speechErrors: {
        convertFailed:
          "ನಿಮ್ಮ ಧ್ವನಿಯನ್ನು ಪಠ್ಯಕ್ಕೆ ಪರಿವರ್ತಿಸಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ. ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.",
        permissionDenied:
          "ಮೈಕ್ರೊಫೋನ್ ಅನುಮತಿ ನಿರಾಕರಿಸಲಾಗಿದೆ.",
        noMicrophone:
          "ಯಾವುದೇ ಮೈಕ್ರೊಫೋನ್ ಕಂಡುಬಂದಿಲ್ಲ.",
        unable:
          "ಮೈಕ್ರೊಫೋನ್ ಅನ್ನು ಪ್ರವೇಶಿಸಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ.",
      },
      aiErrors: {
        timeout:
          "MedFlow ಪ್ರತಿಕ್ರಿಯಿಸಲು ಹೆಚ್ಚು ಸಮಯ ತೆಗೆದುಕೊಳ್ಳುತ್ತಿದೆ. ನಿಮ್ಮ ಸಂಪರ್ಕವನ್ನು ಪರಿಶೀಲಿಸಿ ಮತ್ತು ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.",
        connection:
          "MedFlow ಕ್ಲಿನಿಕಲ್ ಇನ್‌ಟೇಕ್ ಸರ್ವರ್‌ಗೆ ಸಂಪರ್ಕಿಸಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ. ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.",
      },
    },
  },

  // =====================================================
  // MALAYALAM
  // =====================================================

  ml: {
    translation: {
      secure: "സുരക്ഷിതം",
      aiHealthcare: "AI അധിഷ്ഠിത ആരോഗ്യ സേവനം",
      yourHealth: "നിങ്ങളുടെ ആരോഗ്യം.",
      yourRecords: "നിങ്ങളുടെ രേഖകൾ.",
      onePlace: "ഒരിടത്ത്.",
      description:
        "MedFlow നിങ്ങളുടെ ആരോഗ്യ ചരിത്രവും മെഡിക്കൽ രേഖകളും സുരക്ഷിതവും ബുദ്ധിപരവുമായ ഒരു പ്ലാറ്റ്‌ഫോമിൽ ഒരുമിച്ച് കൊണ്ടുവരുന്നു.",
      patients: "രോഗികൾ",
      accuracy: "കൃത്യത",
      avgIntake: "ശരാശരി സമയം",
      whoAreYouToday: "ഇന്ന് നിങ്ങൾ ആരാണ്?",
      selectRole:
        "ആരംഭിക്കാൻ നിങ്ങളുടെ പങ്ക് തിരഞ്ഞെടുക്കുക",
      patient: "രോഗി",
      imPatient: "ഞാൻ ഒരു രോഗിയാണ്",
      patientDescription:
        "നിങ്ങളുടെ ആരോഗ്യ ചരിത്രം രേഖപ്പെടുത്തുകയും മെഡിക്കൽ രേഖകൾ കൈകാര്യം ചെയ്യുകയും ചെയ്യുക.",
      healthcareProfessional:
        "ആരോഗ്യ സേവന പ്രൊഫഷണൽ",
      imDoctor: "ഞാൻ ഒരു ഡോക്ടറാണ്",
      doctorDescription:
        "രോഗികളുടെ ചരിത്രങ്ങൾ പരിശോധിക്കുകയും ക്ലിനിക്കൽ രേഖകൾ കൈകാര്യം ചെയ്യുകയും ചെയ്യുക.",
      privacyNote:
        "നിങ്ങളുടെ ആരോഗ്യ വിവരങ്ങൾ സ്വകാര്യതയും സമ്മതവും പരിഗണിച്ച് കൈകാര്യം ചെയ്യുന്നു.",
      back: "തിരികെ",
      profile: "പ്രൊഫൈൽ",
      healthIntake: "ആരോഗ്യ വിവരം",
      records: "രേഖകൾ",
      letsGetStarted: "ആരംഭിക്കാം",
      tellUsAboutYourself:
        "നിങ്ങളെക്കുറിച്ച് പറയൂ",
      basicDetailsDescription:
        "ആരോഗ്യ വിവരങ്ങൾ ആരംഭിക്കുന്നതിന് മുമ്പ് കുറച്ച് അടിസ്ഥാന വിവരങ്ങൾ മാത്രം ആവശ്യമാണ്.",
      name: "പേര്",
      age: "വയസ്സ്",
      gender: "ലിംഗം",
      phoneNumber: "ഫോൺ നമ്പർ",
      placeholders: {
        fullName: "നിങ്ങളുടെ പൂർണ്ണ പേര് നൽകുക",
        age: "നിങ്ങളുടെ വയസ്സ്",
        mobile: "10 അക്ക മൊബൈൽ നമ്പർ",
        response: "നിങ്ങളുടെ സ്വന്തം വാക്കുകളിൽ പറയൂ...",
      },
      genderOptions: {
        select: "ലിംഗം തിരഞ്ഞെടുക്കുക",
        male: "പുരുഷൻ",
        female: "സ്ത്രീ",
        other: "മറ്റുള്ളവ",
        preferNotToSay:
          "പറയാൻ ആഗ്രഹിക്കുന്നില്ല",
      },
      continueToHealthIntake:
        "ആരോഗ്യ വിവരത്തിലേക്ക് തുടരുക",
      formSecurity:
        "നിങ്ങളുടെ വിവരങ്ങൾ നിങ്ങളുടെ ആരോഗ്യ യാത്രയ്ക്കായി മാത്രം ഉപയോഗിക്കും.",
      medxAiAssistant: "MedFlow AI സഹായി",
      understandFeeling:
        "നിങ്ങൾക്ക് എങ്ങനെ അനുഭവപ്പെടുന്നു എന്ന് മനസ്സിലാക്കാം.",
      answerQuestionsDescription:
        "ഒരു ഓപ്ഷൻ തിരഞ്ഞെടുക്കുകയോ നിങ്ങളുടെ ഉത്തരം ടൈപ്പ് ചെയ്യുകയോ ചെയ്ത് ചോദ്യങ്ങൾക്ക് മറുപടി നൽകുക.",
      medxClinicalAssistant:
        "MedFlow ക്ലിനിക്കൽ സഹായി",
      onlineAiPowered:
        "ഓൺലൈൻ · AI അധിഷ്ഠിത വിവരം",
      connectionIssue: "കണക്ഷൻ പ്രശ്നം",
      tryAgain: "വീണ്ടും ശ്രമിക്കുക",
      continue: "തുടരുക",
      intake: {
        selectOption:
          "താഴെയുള്ള ഓപ്ഷനുകളിൽ ഒന്ന് തിരഞ്ഞെടുക്കുക.",
        selectYesNo:
          "ദയവായി അതെ അല്ലെങ്കിൽ ഇല്ല തിരഞ്ഞെടുക്കുക.",
        typeOrVoice:
          "നിങ്ങളുടെ ഉത്തരം ടൈപ്പ് ചെയ്യുക അല്ലെങ്കിൽ വോയ്സ് ഇൻപുട്ട് ഉപയോഗിക്കുക.",
      },
      voice: {
        stopListening: "കേൾക്കുന്നത് നിർത്തുക",
        input: "വോയ്സ് ഇൻപുട്ട്",
      },
      listening:
        "കേൾക്കുന്നു... ഇപ്പോൾ സംസാരിക്കുക",
      intakeFooter:
        "നിങ്ങളുടെ ഉത്തരങ്ങൾ സ്വകാര്യമാണ്, ആരോഗ്യ സേവന പ്രൊഫഷണൽ അവ പരിശോധിക്കും.",
      historyReady:
        "നിങ്ങളുടെ ആരോഗ്യ ചരിത്രം തയ്യാറാണ്.",
      historyReadyDescription:
        "ആരോഗ്യ സേവന പ്രൊഫഷണലിന്റെ പരിശോധനയ്ക്കായി MedFlow നിങ്ങളുടെ വിവരങ്ങൾ ക്രമീകരിച്ചു.",
      healthIntakeSummary:
        "ആരോഗ്യ വിവര സംഗ്രഹം",
      patientHistoryNotice:
        "ഇത് രോഗി നൽകിയ ചരിത്രമാണ്, മെഡിക്കൽ രോഗനിർണയം അല്ല. ലൈസൻസുള്ള ആരോഗ്യ സേവന പ്രൊഫഷണലിനെ സമീപിക്കുക.",
      continueToMedicalRecords:
        "മെഡിക്കൽ രേഖകളിലേക്ക് തുടരുക",
      patientPortal: "രോഗി പോർട്ടൽ",
      medicalRecords: "മെഡിക്കൽ രേഖകൾ",
      medicalRecordsDescription:
        "നിങ്ങളുടെ ആരോഗ്യ ചരിത്രം സുരക്ഷിതമായി ഒരിടത്ത് ക്രമീകരിച്ചിരിക്കുന്നു.",
      uploadDocument: "രേഖ അപ്‌ലോഡ് ചെയ്യുക",
      recordsProtected:
        "നിങ്ങളുടെ മെഡിക്കൽ രേഖകൾ സംരക്ഷിക്കപ്പെട്ടിരിക്കുന്നു",
      recordsProtectedDescription:
        "പരിശോധിച്ച രേഖകൾ വായിക്കാൻ മാത്രം സാധിക്കും, അവ മാറ്റാൻ കഴിയില്ല.",
      searchRecords:
        "നിങ്ങളുടെ മെഡിക്കൽ രേഖകൾ തിരയുക...",
      categories: {
        all: "എല്ലാ രേഖകളും",
        labReports: "ലാബ് റിപ്പോർട്ടുകൾ",
        prescriptions: "പ്രിസ്ക്രിപ്ഷനുകൾ",
        discharge: "ഡിസ്ചാർജ് സംഗ്രഹങ്ങൾ",
        other: "മറ്റ് രേഖകൾ",
      },
      documents: "രേഖകൾ",
      allYourRecords: "നിങ്ങളുടെ എല്ലാ രേഖകളും",
      readOnly: "വായിക്കാൻ മാത്രം",
      pending: "തീർപ്പാക്കാത്തത്",
      source: "ഉറവിടം",
      date: "തീയതി",
      verified: "പരിശോധിച്ചു",
      pendingVerification:
        "പരിശോധന കാത്തിരിക്കുന്നു",
      view: "കാണുക",
      noRecordsFound:
        "രേഖകളൊന്നും കണ്ടെത്തിയില്ല",
      noRecordsDescription:
        "നിങ്ങളുടെ തിരയൽ മാറ്റുക അല്ലെങ്കിൽ പുതിയ രേഖ അപ്‌ലോഡ് ചെയ്യുക.",
      medicalDocument: "മെഡിക്കൽ രേഖ",
      uploadRecord: "ഒരു രേഖ അപ്‌ലോഡ് ചെയ്യുക",
      uploadRecordDescription:
        "നിങ്ങളുടെ MedFlow ആരോഗ്യ ചരിത്രത്തിലേക്ക് മുമ്പത്തെ മെഡിക്കൽ രേഖ ചേർക്കുക.",
      fileSelected:
        "ഫയൽ തിരഞ്ഞെടുത്തു · അപ്‌ലോഡ് ചെയ്യാൻ തയ്യാറാണ്",
      chooseDocument: "ഒരു രേഖ തിരഞ്ഞെടുക്കുക",
      acceptedFormats:
        "PDF, JPG അല്ലെങ്കിൽ PNG സ്വീകരിക്കും",
      uploadVerificationWarning:
        "അപ്‌ലോഡ് ചെയ്ത രേഖകൾ സ്ഥിരീകരിച്ചതായി അടയാളപ്പെടുത്തുന്നതിന് മുമ്പ് പരിശോധന ആവശ്യമാണ്.",
      errors: {
        enterName: "ദയവായി നിങ്ങളുടെ പേര് നൽകുക",
        enterAge: "ദയവായി നിങ്ങളുടെ വയസ്സ് നൽകുക",
        validAge: "ദയവായി സാധുവായ വയസ്സ് നൽകുക",
        selectGender: "ദയവായി നിങ്ങളുടെ ലിംഗം തിരഞ്ഞെടുക്കുക",
        enterPhone:
          "ദയവായി നിങ്ങളുടെ ഫോൺ നമ്പർ നൽകുക",
        validPhone:
          "സാധുവായ 10 അക്ക നമ്പർ നൽകുക",
      },
      speechErrors: {
        convertFailed:
          "നിങ്ങളുടെ ശബ്ദം ടെക്സ്റ്റിലേക്ക് മാറ്റാൻ കഴിഞ്ഞില്ല. വീണ്ടും ശ്രമിക്കുക.",
        permissionDenied:
          "മൈക്രോഫോൺ അനുമതി നിരസിച്ചു.",
        noMicrophone:
          "മൈക്രോഫോൺ കണ്ടെത്തിയില്ല.",
        unable:
          "മൈക്രോഫോൺ ആക്സസ് ചെയ്യാൻ കഴിഞ്ഞില്ല.",
      },
      aiErrors: {
        timeout:
          "MedFlow പ്രതികരിക്കാൻ കൂടുതൽ സമയം എടുക്കുന്നു. നിങ്ങളുടെ കണക്ഷൻ പരിശോധിച്ച് വീണ്ടും ശ്രമിക്കുക.",
        connection:
          "MedFlow ക്ലിനിക്കൽ ഇൻടേക്ക് സെർവറുമായി ബന്ധിപ്പിക്കാൻ കഴിഞ്ഞില്ല. വീണ്ടും ശ്രമിക്കുക.",
      },
    },
  },

  // =====================================================
  // ODIA
  // =====================================================

  or: {
    translation: {
      secure: "ସୁରକ୍ଷିତ",
      aiHealthcare: "AI ଆଧାରିତ ସ୍ୱାସ୍ଥ୍ୟ ସେବା",
      yourHealth: "ଆପଣଙ୍କ ସ୍ୱାସ୍ଥ୍ୟ।",
      yourRecords: "ଆପଣଙ୍କ ରେକର୍ଡ।",
      onePlace: "ଗୋଟିଏ ସ୍ଥାନରେ।",
      description:
        "MedFlow ଆପଣଙ୍କ ସ୍ୱାସ୍ଥ୍ୟ ଇତିହାସ ଏବଂ ଚିକିତ୍ସା ରେକର୍ଡକୁ ଏକ ସୁରକ୍ଷିତ ଏବଂ ବୁଦ୍ଧିମାନ ପ୍ଲାଟଫର୍ମରେ ଏକତ୍ର କରେ।",
      patients: "ରୋଗୀ",
      accuracy: "ସଠିକତା",
      avgIntake: "ହାରାହାରି ସମୟ",
      whoAreYouToday: "ଆଜି ଆପଣ କିଏ?",
      selectRole:
        "ଆରମ୍ଭ କରିବା ପାଇଁ ଆପଣଙ୍କ ଭୂମିକା ବାଛନ୍ତୁ",
      patient: "ରୋଗୀ",
      imPatient: "ମୁଁ ଜଣେ ରୋଗୀ",
      patientDescription:
        "ଆପଣଙ୍କ ସ୍ୱାସ୍ଥ୍ୟ ଇତିହାସ ରେକର୍ଡ କରନ୍ତୁ ଏବଂ ଚିକିତ୍ସା ରେକର୍ଡ ପରିଚାଳନା କରନ୍ତୁ।",
      healthcareProfessional:
        "ସ୍ୱାସ୍ଥ୍ୟ ସେବା ବୃତ୍ତିଗତ",
      imDoctor: "ମୁଁ ଜଣେ ଡାକ୍ତର",
      doctorDescription:
        "ରୋଗୀଙ୍କ ଇତିହାସ ସମୀକ୍ଷା କରନ୍ତୁ ଏବଂ କ୍ଲିନିକାଲ୍ ରେକର୍ଡ ପରିଚାଳନା କରନ୍ତୁ।",
      privacyNote:
        "ଆପଣଙ୍କ ସ୍ୱାସ୍ଥ୍ୟ ସୂଚନା ଗୋପନୀୟତା ଏବଂ ସମ୍ମତିକୁ ଧ୍ୟାନରେ ରଖି ପରିଚାଳିତ ହୁଏ।",
      back: "ପଛକୁ",
      profile: "ପ୍ରୋଫାଇଲ୍",
      healthIntake: "ସ୍ୱାସ୍ଥ୍ୟ ସୂଚନା",
      records: "ରେକର୍ଡ",
      letsGetStarted: "ଆରମ୍ଭ କରିବା",
      tellUsAboutYourself:
        "ଆପଣଙ୍କ ବିଷୟରେ କୁହନ୍ତୁ",
      basicDetailsDescription:
        "ସ୍ୱାସ୍ଥ୍ୟ ସୂଚନା ଆରମ୍ଭ କରିବା ପୂର୍ବରୁ ଆମକୁ କିଛି ମୌଳିକ ତଥ୍ୟ ଆବଶ୍ୟକ।",
      name: "ନାମ",
      age: "ବୟସ",
      gender: "ଲିଙ୍ଗ",
      phoneNumber: "ଫୋନ୍ ନମ୍ବର",
      placeholders: {
        fullName: "ଆପଣଙ୍କ ପୂର୍ଣ୍ଣ ନାମ ଦିଅନ୍ତୁ",
        age: "ଆପଣଙ୍କ ବୟସ",
        mobile: "10 ଅଙ୍କର ମୋବାଇଲ୍ ନମ୍ବର",
        response: "ନିଜ ଶବ୍ଦରେ କୁହନ୍ତୁ...",
      },
      genderOptions: {
        select: "ଲିଙ୍ଗ ବାଛନ୍ତୁ",
        male: "ପୁରୁଷ",
        female: "ମହିଳା",
        other: "ଅନ୍ୟ",
        preferNotToSay:
          "କହିବାକୁ ଇଚ୍ଛା ନାହିଁ",
      },
      continueToHealthIntake:
        "ସ୍ୱାସ୍ଥ୍ୟ ସୂଚନାକୁ ଯାଆନ୍ତୁ",
      formSecurity:
        "ଆପଣଙ୍କ ସୂଚନା କେବଳ ଆପଣଙ୍କ ସ୍ୱାସ୍ଥ୍ୟ ଯାତ୍ରା ପାଇଁ ବ୍ୟବହୃତ ହେବ।",
      medxAiAssistant: "MedFlow AI ସହାୟକ",
      understandFeeling:
        "ଆପଣ କିପରି ଅନୁଭବ କରୁଛନ୍ତି ବୁଝିବା।",
      answerQuestionsDescription:
        "ଏକ ବିକଳ୍ପ ବାଛି କିମ୍ବା ଆପଣଙ୍କ ଉତ୍ତର ଟାଇପ୍ କରି ପ୍ରଶ୍ନର ଉତ୍ତର ଦିଅନ୍ତୁ।",
      medxClinicalAssistant:
        "MedFlow କ୍ଲିନିକାଲ୍ ସହାୟକ",
      onlineAiPowered:
        "ଅନଲାଇନ୍ · AI ଆଧାରିତ ସୂଚନା",
      connectionIssue: "ସଂଯୋଗ ସମସ୍ୟା",
      tryAgain: "ପୁଣି ଚେଷ୍ଟା କରନ୍ତୁ",
      continue: "ଜାରି ରଖନ୍ତୁ",
      intake: {
        selectOption:
          "ନିମ୍ନରେ ଥିବା ବିକଳ୍ପଗୁଡ଼ିକରୁ ଗୋଟିଏ ବାଛନ୍ତୁ।",
        selectYesNo:
          "ଦୟାକରି ହଁ କିମ୍ବା ନା ବାଛନ୍ତୁ।",
        typeOrVoice:
          "ଆପଣଙ୍କ ଉତ୍ତର ଟାଇପ୍ କରନ୍ତୁ କିମ୍ବା ଭଏସ୍ ଇନପୁଟ୍ ବ୍ୟବହାର କରନ୍ତୁ।",
      },
      voice: {
        stopListening: "ଶୁଣିବା ବନ୍ଦ କରନ୍ତୁ",
        input: "ଭଏସ୍ ଇନପୁଟ୍",
      },
      listening:
        "ଶୁଣୁଛି... ବର୍ତ୍ତମାନ କୁହନ୍ତୁ",
      intakeFooter:
        "ଆପଣଙ୍କ ଉତ୍ତରଗୁଡ଼ିକ ବ୍ୟକ୍ତିଗତ ଏବଂ ଜଣେ ସ୍ୱାସ୍ଥ୍ୟ ସେବା ବୃତ୍ତିଗତଙ୍କ ଦ୍ୱାରା ସମୀକ୍ଷା କରାଯିବ।",
      historyReady:
        "ଆପଣଙ୍କ ସ୍ୱାସ୍ଥ୍ୟ ଇତିହାସ ପ୍ରସ୍ତୁତ।",
      historyReadyDescription:
        "ସ୍ୱାସ୍ଥ୍ୟ ସେବା ବୃତ୍ତିଗତଙ୍କ ସମୀକ୍ଷା ପାଇଁ MedFlow ଆପଣଙ୍କ ସୂଚନାକୁ ସଂଗଠିତ କରିଛି।",
      healthIntakeSummary:
        "ସ୍ୱାସ୍ଥ୍ୟ ସୂଚନା ସାରାଂଶ",
      patientHistoryNotice:
        "ଏହା ରୋଗୀଙ୍କ ଦ୍ୱାରା ଦିଆଯାଇଥିବା ଇତିହାସ ଏବଂ ଏହା ଚିକିତ୍ସା ନିର୍ଣ୍ଣୟ ନୁହେଁ। ଜଣେ ଲାଇସେନ୍ସପ୍ରାପ୍ତ ସ୍ୱାସ୍ଥ୍ୟ ସେବା ବୃତ୍ତିଗତଙ୍କ ପରାମର୍ଶ ନିଅନ୍ତୁ।",
      continueToMedicalRecords:
        "ମେଡିକାଲ୍ ରେକର୍ଡକୁ ଯାଆନ୍ତୁ",
      patientPortal: "ରୋଗୀ ପୋର୍ଟାଲ୍",
      medicalRecords: "ଚିକିତ୍ସା ରେକର୍ଡ",
      medicalRecordsDescription:
        "ଆପଣଙ୍କ ସ୍ୱାସ୍ଥ୍ୟ ଇତିହାସ ସୁରକ୍ଷିତ ଭାବେ ଗୋଟିଏ ସ୍ଥାନରେ ସଂଗଠିତ।",
      uploadDocument: "ଦଲିଲ ଅପଲୋଡ୍ କରନ୍ତୁ",
      recordsProtected:
        "ଆପଣଙ୍କ ଚିକିତ୍ସା ରେକର୍ଡ ସୁରକ୍ଷିତ",
      recordsProtectedDescription:
        "ଯାଞ୍ଚ ହୋଇଥିବା ରେକର୍ଡଗୁଡ଼ିକ କେବଳ ପଢ଼ାଯାଇପାରିବ ଏବଂ ପରିବର୍ତ୍ତନ କରାଯାଇପାରିବ ନାହିଁ।",
      searchRecords:
        "ଆପଣଙ୍କ ଚିକିତ୍ସା ରେକର୍ଡ ଖୋଜନ୍ତୁ...",
      categories: {
        all: "ସମସ୍ତ ଦଲିଲ",
        labReports: "ଲ୍ୟାବ୍ ରିପୋର୍ଟ",
        prescriptions: "ପ୍ରେସକ୍ରିପସନ୍",
        discharge: "ଡିସଚାର୍ଜ ସାରାଂଶ",
        other: "ଅନ୍ୟ ଦଲିଲ",
      },
      documents: "ଦଲିଲ",
      allYourRecords: "ଆପଣଙ୍କ ସମସ୍ତ ରେକର୍ଡ",
      readOnly: "କେବଳ ପଢ଼ିବା ପାଇଁ",
      pending: "ବିଚାରାଧୀନ",
      source: "ଉତ୍ସ",
      date: "ତାରିଖ",
      verified: "ଯାଞ୍ଚ ହୋଇଛି",
      pendingVerification:
        "ଯାଞ୍ଚ ବିଚାରାଧୀନ",
      view: "ଦେଖନ୍ତୁ",
      noRecordsFound:
        "କୌଣସି ରେକର୍ଡ ମିଳିଲା ନାହିଁ",
      noRecordsDescription:
        "ଆପଣଙ୍କ ସନ୍ଧାନ ବଦଳାନ୍ତୁ କିମ୍ବା ଏକ ନୂଆ ଦଲିଲ ଅପଲୋଡ୍ କରନ୍ତୁ।",
      medicalDocument: "ଚିକିତ୍ସା ଦଲିଲ",
      uploadRecord: "ଏକ ରେକର୍ଡ ଅପଲୋଡ୍ କରନ୍ତୁ",
      uploadRecordDescription:
        "ଆପଣଙ୍କ MedFlow ସ୍ୱାସ୍ଥ୍ୟ ଇତିହାସରେ ପୂର୍ବରୁ ଥିବା ଚିକିତ୍ସା ଦଲିଲ ଯୋଡନ୍ତୁ।",
      fileSelected:
        "ଫାଇଲ୍ ଚୟନ ହୋଇଛି · ଅପଲୋଡ୍ ପାଇଁ ପ୍ରସ୍ତୁତ",
      chooseDocument: "ଦଲିଲ ବାଛନ୍ତୁ",
      acceptedFormats:
        "PDF, JPG କିମ୍ବା PNG ଗ୍ରହଣଯୋଗ୍ୟ",
      uploadVerificationWarning:
        "ଅପଲୋଡ୍ ହୋଇଥିବା ଦଲିଲଗୁଡ଼ିକୁ ଯାଞ୍ଚ ହୋଇଛି ବୋଲି ଚିହ୍ନିତ କରିବା ପୂର୍ବରୁ ଯାଞ୍ଚ ଆବଶ୍ୟକ।",
      errors: {
        enterName: "ଦୟାକରି ଆପଣଙ୍କ ନାମ ଦିଅନ୍ତୁ",
        enterAge: "ଦୟାକରି ଆପଣଙ୍କ ବୟସ ଦିଅନ୍ତୁ",
        validAge: "ଦୟାକରି ସଠିକ ବୟସ ଦିଅନ୍ତୁ",
        selectGender: "ଦୟାକରି ଆପଣଙ୍କ ଲିଙ୍ଗ ବାଛନ୍ତୁ",
        enterPhone: "ଦୟାକରି ଫୋନ୍ ନମ୍ବର ଦିଅନ୍ତୁ",
        validPhone:
          "ଏକ ସଠିକ 10 ଅଙ୍କର ନମ୍ବର ଦିଅନ୍ତୁ",
      },
      speechErrors: {
        convertFailed:
          "ଆପଣଙ୍କ କଥାକୁ ଟେକ୍ସଟରେ ପରିବର୍ତ୍ତନ କରିପାରିଲୁ ନାହିଁ। ପୁଣି ଚେଷ୍ଟା କରନ୍ତୁ।",
        permissionDenied:
          "ମାଇକ୍ରୋଫୋନ୍ ଅନୁମତି ପ୍ରତ୍ୟାଖ୍ୟାନ ହୋଇଛି।",
        noMicrophone:
          "କୌଣସି ମାଇକ୍ରୋଫୋନ୍ ମିଳିଲା ନାହିଁ।",
        unable:
          "ମାଇକ୍ରୋଫୋନ୍ ପ୍ରବେଶ କରିପାରିଲୁ ନାହିଁ।",
      },
      aiErrors: {
        timeout:
          "MedFlow ଉତ୍ତର ଦେବାକୁ ଅଧିକ ସମୟ ନେଉଛି। ଆପଣଙ୍କ କନେକ୍ସନ୍ ଯାଞ୍ଚ କରି ପୁଣି ଚେଷ୍ଟା କରନ୍ତୁ।",
        connection:
          "MedFlow କ୍ଲିନିକାଲ୍ ଇନଟେକ୍ ସର୍ଭର ସହିତ ସଂଯୋଗ କରିପାରିଲା ନାହିଁ। ପୁଣି ଚେଷ୍ଟା କରନ୍ତୁ।",
      },
    },
  },

  // =====================================================
  // PUNJABI
  // =====================================================

  pa: {
    translation: {
      secure: "ਸੁਰੱਖਿਅਤ",
      aiHealthcare: "AI-ਅਧਾਰਿਤ ਸਿਹਤ ਸੇਵਾ",
      yourHealth: "ਤੁਹਾਡੀ ਸਿਹਤ।",
      yourRecords: "ਤੁਹਾਡੇ ਰਿਕਾਰਡ।",
      onePlace: "ਇੱਕੋ ਥਾਂ।",
      description:
        "MedFlow ਤੁਹਾਡੇ ਸਿਹਤ ਇਤਿਹਾਸ ਅਤੇ ਮੈਡੀਕਲ ਰਿਕਾਰਡਾਂ ਨੂੰ ਇੱਕ ਸੁਰੱਖਿਅਤ ਅਤੇ ਬੁੱਧੀਮਾਨ ਪਲੇਟਫਾਰਮ ਵਿੱਚ ਇਕੱਠਾ ਕਰਦਾ ਹੈ।",
      patients: "ਮਰੀਜ਼",
      accuracy: "ਸ਼ੁੱਧਤਾ",
      avgIntake: "ਔਸਤ ਸਮਾਂ",
      whoAreYouToday: "ਅੱਜ ਤੁਸੀਂ ਕੌਣ ਹੋ?",
      selectRole:
        "ਸ਼ੁਰੂ ਕਰਨ ਲਈ ਆਪਣੀ ਭੂਮਿਕਾ ਚੁਣੋ",
      patient: "ਮਰੀਜ਼",
      imPatient: "ਮੈਂ ਮਰੀਜ਼ ਹਾਂ",
      patientDescription:
        "ਆਪਣਾ ਸਿਹਤ ਇਤਿਹਾਸ ਦਰਜ ਕਰੋ ਅਤੇ ਆਪਣੇ ਮੈਡੀਕਲ ਰਿਕਾਰਡ ਪ੍ਰਬੰਧਿਤ ਕਰੋ।",
      healthcareProfessional:
        "ਸਿਹਤ ਸੇਵਾ ਪੇਸ਼ੇਵਰ",
      imDoctor: "ਮੈਂ ਡਾਕਟਰ ਹਾਂ",
      doctorDescription:
        "ਮਰੀਜ਼ਾਂ ਦੇ ਇਤਿਹਾਸ ਦੀ ਸਮੀਖਿਆ ਕਰੋ ਅਤੇ ਕਲੀਨਿਕਲ ਰਿਕਾਰਡ ਪ੍ਰਬੰਧਿਤ ਕਰੋ।",
      privacyNote:
        "ਤੁਹਾਡੀ ਸਿਹਤ ਜਾਣਕਾਰੀ ਨੂੰ ਨਿੱਜਤਾ ਅਤੇ ਸਹਿਮਤੀ ਨੂੰ ਧਿਆਨ ਵਿੱਚ ਰੱਖ ਕੇ ਸੰਭਾਲਿਆ ਜਾਂਦਾ ਹੈ।",
      back: "ਵਾਪਸ",
      profile: "ਪ੍ਰੋਫਾਈਲ",
      healthIntake: "ਸਿਹਤ ਜਾਣਕਾਰੀ",
      records: "ਰਿਕਾਰਡ",
      letsGetStarted: "ਆਓ ਸ਼ੁਰੂ ਕਰੀਏ",
      tellUsAboutYourself:
        "ਆਪਣੇ ਬਾਰੇ ਦੱਸੋ",
      basicDetailsDescription:
        "ਸਿਹਤ ਜਾਣਕਾਰੀ ਸ਼ੁਰੂ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਸਾਨੂੰ ਕੁਝ ਬੁਨਿਆਦੀ ਵੇਰਵਿਆਂ ਦੀ ਲੋੜ ਹੈ।",
      name: "ਨਾਮ",
      age: "ਉਮਰ",
      gender: "ਲਿੰਗ",
      phoneNumber: "ਫ਼ੋਨ ਨੰਬਰ",
      placeholders: {
        fullName: "ਆਪਣਾ ਪੂਰਾ ਨਾਮ ਦਰਜ ਕਰੋ",
        age: "ਤੁਹਾਡੀ ਉਮਰ",
        mobile: "10 ਅੰਕਾਂ ਦਾ ਮੋਬਾਈਲ ਨੰਬਰ",
        response: "ਆਪਣੇ ਸ਼ਬਦਾਂ ਵਿੱਚ ਦੱਸੋ...",
      },
      genderOptions: {
        select: "ਲਿੰਗ ਚੁਣੋ",
        male: "ਮਰਦ",
        female: "ਔਰਤ",
        other: "ਹੋਰ",
        preferNotToSay:
          "ਦੱਸਣਾ ਪਸੰਦ ਨਹੀਂ",
      },
      continueToHealthIntake:
        "ਸਿਹਤ ਜਾਣਕਾਰੀ ਵੱਲ ਜਾਓ",
      formSecurity:
        "ਤੁਹਾਡੀ ਜਾਣਕਾਰੀ ਸਿਰਫ਼ ਤੁਹਾਡੀ ਸਿਹਤ ਯਾਤਰਾ ਲਈ ਵਰਤੀ ਜਾਵੇਗੀ।",
      medxAiAssistant: "MedFlow AI ਸਹਾਇਕ",
      understandFeeling:
        "ਆਓ ਸਮਝੀਏ ਕਿ ਤੁਸੀਂ ਕਿਵੇਂ ਮਹਿਸੂਸ ਕਰ ਰਹੇ ਹੋ।",
      answerQuestionsDescription:
        "ਇੱਕ ਵਿਕਲਪ ਚੁਣ ਕੇ ਜਾਂ ਆਪਣਾ ਜਵਾਬ ਲਿਖ ਕੇ ਸਵਾਲਾਂ ਦੇ ਜਵਾਬ ਦਿਓ।",
      medxClinicalAssistant:
        "MedFlow ਕਲੀਨਿਕਲ ਸਹਾਇਕ",
      onlineAiPowered:
        "ਔਨਲਾਈਨ · AI-ਅਧਾਰਿਤ ਜਾਣਕਾਰੀ",
      connectionIssue: "ਕਨੈਕਸ਼ਨ ਸਮੱਸਿਆ",
      tryAgain: "ਦੁਬਾਰਾ ਕੋਸ਼ਿਸ਼ ਕਰੋ",
      continue: "ਜਾਰੀ ਰੱਖੋ",
      intake: {
        selectOption:
          "ਹੇਠਾਂ ਦਿੱਤੇ ਵਿਕਲਪਾਂ ਵਿੱਚੋਂ ਇੱਕ ਚੁਣੋ।",
        selectYesNo:
          "ਕਿਰਪਾ ਕਰਕੇ ਹਾਂ ਜਾਂ ਨਹੀਂ ਚੁਣੋ।",
        typeOrVoice:
          "ਆਪਣਾ ਜਵਾਬ ਲਿਖੋ ਜਾਂ ਆਵਾਜ਼ ਇਨਪੁੱਟ ਵਰਤੋ।",
      },
      voice: {
        stopListening: "ਸੁਣਨਾ ਬੰਦ ਕਰੋ",
        input: "ਆਵਾਜ਼ ਇਨਪੁੱਟ",
      },
      listening:
        "ਸੁਣ ਰਿਹਾ ਹੈ... ਹੁਣ ਬੋਲੋ",
      intakeFooter:
        "ਤੁਹਾਡੇ ਜਵਾਬ ਨਿੱਜੀ ਹਨ ਅਤੇ ਸਿਹਤ ਸੇਵਾ ਪੇਸ਼ੇਵਰ ਦੁਆਰਾ ਸਮੀਖਿਆ ਕੀਤੇ ਜਾਣਗੇ।",
      historyReady:
        "ਤੁਹਾਡਾ ਸਿਹਤ ਇਤਿਹਾਸ ਤਿਆਰ ਹੈ।",
      historyReadyDescription:
        "MedFlow ਨੇ ਸਿਹਤ ਸੇਵਾ ਪੇਸ਼ੇਵਰ ਦੀ ਸਮੀਖਿਆ ਲਈ ਤੁਹਾਡੀ ਜਾਣਕਾਰੀ ਨੂੰ ਵਿਵਸਥਿਤ ਕੀਤਾ ਹੈ।",
      healthIntakeSummary:
        "ਸਿਹਤ ਜਾਣਕਾਰੀ ਦਾ ਸਾਰ",
      patientHistoryNotice:
        "ਇਹ ਮਰੀਜ਼ ਦੁਆਰਾ ਦਿੱਤਾ ਗਿਆ ਇਤਿਹਾਸ ਹੈ ਅਤੇ ਮੈਡੀਕਲ ਨਿਦਾਨ ਨਹੀਂ ਹੈ। ਲਾਇਸੰਸਸ਼ੁਦਾ ਸਿਹਤ ਸੇਵਾ ਪੇਸ਼ੇਵਰ ਨਾਲ ਸਲਾਹ ਕਰੋ।",
      continueToMedicalRecords:
        "ਮੈਡੀਕਲ ਰਿਕਾਰਡਾਂ ਵੱਲ ਜਾਓ",
      patientPortal: "ਮਰੀਜ਼ ਪੋਰਟਲ",
      medicalRecords: "ਮੈਡੀਕਲ ਰਿਕਾਰਡ",
      medicalRecordsDescription:
        "ਤੁਹਾਡਾ ਸਿਹਤ ਇਤਿਹਾਸ ਸੁਰੱਖਿਅਤ ਤਰੀਕੇ ਨਾਲ ਇੱਕੋ ਥਾਂ ਤੇ ਵਿਵਸਥਿਤ ਹੈ।",
      uploadDocument: "ਦਸਤਾਵੇਜ਼ ਅਪਲੋਡ ਕਰੋ",
      recordsProtected:
        "ਤੁਹਾਡੇ ਮੈਡੀਕਲ ਰਿਕਾਰਡ ਸੁਰੱਖਿਅਤ ਹਨ",
      recordsProtectedDescription:
        "ਪ੍ਰਮਾਣਿਤ ਰਿਕਾਰਡ ਸਿਰਫ਼ ਪੜ੍ਹੇ ਜਾ ਸਕਦੇ ਹਨ ਅਤੇ ਬਦਲੇ ਨਹੀਂ ਜਾ ਸਕਦੇ।",
      searchRecords:
        "ਆਪਣੇ ਮੈਡੀਕਲ ਰਿਕਾਰਡ ਖੋਜੋ...",
      categories: {
        all: "ਸਾਰੇ ਦਸਤਾਵੇਜ਼",
        labReports: "ਲੈਬ ਰਿਪੋਰਟਾਂ",
        prescriptions: "ਪ੍ਰਿਸਕ੍ਰਿਪਸ਼ਨ",
        discharge: "ਡਿਸਚਾਰਜ ਸਾਰਾਂਸ਼",
        other: "ਹੋਰ ਦਸਤਾਵੇਜ਼",
      },
      documents: "ਦਸਤਾਵੇਜ਼",
      allYourRecords: "ਤੁਹਾਡੇ ਸਾਰੇ ਰਿਕਾਰਡ",
      readOnly: "ਸਿਰਫ਼ ਪੜ੍ਹਨ ਲਈ",
      pending: "ਬਕਾਇਆ",
      source: "ਸਰੋਤ",
      date: "ਤਾਰੀਖ",
      verified: "ਪ੍ਰਮਾਣਿਤ",
      pendingVerification:
        "ਤਸਦੀਕ ਬਕਾਇਆ",
      view: "ਵੇਖੋ",
      noRecordsFound:
        "ਕੋਈ ਰਿਕਾਰਡ ਨਹੀਂ ਮਿਲਿਆ",
      noRecordsDescription:
        "ਆਪਣੀ ਖੋਜ ਬਦਲੋ ਜਾਂ ਨਵਾਂ ਦਸਤਾਵੇਜ਼ ਅਪਲੋਡ ਕਰੋ।",
      medicalDocument: "ਮੈਡੀਕਲ ਦਸਤਾਵੇਜ਼",
      uploadRecord: "ਇੱਕ ਰਿਕਾਰਡ ਅਪਲੋਡ ਕਰੋ",
      uploadRecordDescription:
        "ਆਪਣੇ MedFlow ਸਿਹਤ ਇਤਿਹਾਸ ਵਿੱਚ ਪਿਛਲਾ ਮੈਡੀਕਲ ਦਸਤਾਵੇਜ਼ ਸ਼ਾਮਲ ਕਰੋ।",
      fileSelected:
        "ਫਾਈਲ ਚੁਣੀ ਗਈ · ਅਪਲੋਡ ਲਈ ਤਿਆਰ",
      chooseDocument: "ਇੱਕ ਦਸਤਾਵੇਜ਼ ਚੁਣੋ",
      acceptedFormats:
        "PDF, JPG ਜਾਂ PNG ਸਵੀਕਾਰਯੋਗ ਹਨ",
      uploadVerificationWarning:
        "ਅਪਲੋਡ ਕੀਤੇ ਦਸਤਾਵੇਜ਼ਾਂ ਨੂੰ ਪ੍ਰਮਾਣਿਤ ਵਜੋਂ ਦਰਜ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਤਸਦੀਕ ਦੀ ਲੋੜ ਹੋਵੇਗੀ।",
      errors: {
        enterName: "ਕਿਰਪਾ ਕਰਕੇ ਆਪਣਾ ਨਾਮ ਦਰਜ ਕਰੋ",
        enterAge: "ਕਿਰਪਾ ਕਰਕੇ ਆਪਣੀ ਉਮਰ ਦਰਜ ਕਰੋ",
        validAge: "ਕਿਰਪਾ ਕਰਕੇ ਸਹੀ ਉਮਰ ਦਰਜ ਕਰੋ",
        selectGender: "ਕਿਰਪਾ ਕਰਕੇ ਆਪਣਾ ਲਿੰਗ ਚੁਣੋ",
        enterPhone:
          "ਕਿਰਪਾ ਕਰਕੇ ਆਪਣਾ ਫ਼ੋਨ ਨੰਬਰ ਦਰਜ ਕਰੋ",
        validPhone:
          "ਸਹੀ 10 ਅੰਕਾਂ ਦਾ ਨੰਬਰ ਦਰਜ ਕਰੋ",
      },
      speechErrors: {
        convertFailed:
          "ਤੁਹਾਡੀ ਆਵਾਜ਼ ਨੂੰ ਟੈਕਸਟ ਵਿੱਚ ਬਦਲ ਨਹੀਂ ਸਕੇ। ਦੁਬਾਰਾ ਕੋਸ਼ਿਸ਼ ਕਰੋ।",
        permissionDenied:
          "ਮਾਈਕ੍ਰੋਫ਼ੋਨ ਦੀ ਇਜਾਜ਼ਤ ਨਹੀਂ ਮਿਲੀ।",
        noMicrophone:
          "ਕੋਈ ਮਾਈਕ੍ਰੋਫ਼ੋਨ ਨਹੀਂ ਮਿਲਿਆ।",
        unable:
          "ਮਾਈਕ੍ਰੋਫ਼ੋਨ ਤੱਕ ਪਹੁੰਚ ਨਹੀਂ ਹੋ ਸਕੀ।",
      },
      aiErrors: {
        timeout:
          "MedFlow ਜਵਾਬ ਦੇਣ ਵਿੱਚ ਜ਼ਿਆਦਾ ਸਮਾਂ ਲੈ ਰਿਹਾ ਹੈ। ਆਪਣਾ ਕਨੈਕਸ਼ਨ ਜਾਂਚੋ ਅਤੇ ਦੁਬਾਰਾ ਕੋਸ਼ਿਸ਼ ਕਰੋ।",
        connection:
          "MedFlow ਕਲੀਨਿਕਲ ਇਨਟੇਕ ਸਰਵਰ ਨਾਲ ਕਨੈਕਟ ਨਹੀਂ ਹੋ ਸਕਿਆ। ਦੁਬਾਰਾ ਕੋਸ਼ਿਸ਼ ਕਰੋ।",
      },
    },
  },

  // =====================================================
  // ASSAMESE
  // =====================================================

  as: {
    translation: {
      secure: "সুৰক্ষিত",
      aiHealthcare: "AI-চালিত স্বাস্থ্যসেৱা",
      yourHealth: "আপোনাৰ স্বাস্থ্য।",
      yourRecords: "আপোনাৰ ৰেকৰ্ড।",
      onePlace: "এটা ঠাইত।",
      description:
        "MedFlow-এ আপোনাৰ স্বাস্থ্যৰ ইতিহাস আৰু চিকিৎসা ৰেকৰ্ডক এটা সুৰক্ষিত আৰু বুদ্ধিমান প্লেটফৰ্মত একত্ৰিত কৰে।",
      patients: "ৰোগী",
      accuracy: "সঠিকতা",
      avgIntake: "গড় সময়",
      whoAreYouToday: "আজি আপুনি কোন?",
      selectRole:
        "আৰম্ভ কৰিবলৈ আপোনাৰ ভূমিকা বাছনি কৰক",
      patient: "ৰোগী",
      imPatient: "মই এজন ৰোগী",
      patientDescription:
        "আপোনাৰ স্বাস্থ্যৰ ইতিহাস ৰেকৰ্ড কৰক আৰু চিকিৎসা ৰেকৰ্ড পৰিচালনা কৰক।",
      healthcareProfessional:
        "স্বাস্থ্যসেৱা পেছাদাৰী",
      imDoctor: "মই এজন চিকিৎসক",
      doctorDescription:
        "ৰোগীৰ ইতিহাস পৰ্যালোচনা কৰক আৰু ক্লিনিকেল ৰেকৰ্ড পৰিচালনা কৰক।",
      privacyNote:
        "আপোনাৰ স্বাস্থ্যৰ তথ্য গোপনীয়তা আৰু সন্মতিৰ কথা বিবেচনা কৰি পৰিচালনা কৰা হয়।",
      back: "পিছলৈ",
      profile: "প্ৰফাইল",
      healthIntake: "স্বাস্থ্য তথ্য",
      records: "ৰেকৰ্ড",
      letsGetStarted: "আৰম্ভ কৰোঁ",
      tellUsAboutYourself:
        "আপোনাৰ বিষয়ে কওক",
      basicDetailsDescription:
        "স্বাস্থ্য তথ্য আৰম্ভ কৰাৰ আগতে আমাক কিছুমান মৌলিক তথ্যৰ প্ৰয়োজন।",
      name: "নাম",
      age: "বয়স",
      gender: "লিংগ",
      phoneNumber: "ফোন নম্বৰ",
      placeholders: {
        fullName: "আপোনাৰ সম্পূৰ্ণ নাম লিখক",
        age: "আপোনাৰ বয়স",
        mobile: "১০ সংখ্যাৰ মোবাইল নম্বৰ",
        response: "নিজৰ ভাষাত কওক...",
      },
      genderOptions: {
        select: "লিংগ বাছনি কৰক",
        male: "পুৰুষ",
        female: "মহিলা",
        other: "অন্যান্য",
        preferNotToSay:
          "ক'বলৈ ইচ্ছা নকৰোঁ",
      },
      continueToHealthIntake:
        "স্বাস্থ্য তথ্যলৈ যাওক",
      formSecurity:
        "আপোনাৰ তথ্য কেৱল আপোনাৰ স্বাস্থ্য যাত্ৰাৰ বাবে ব্যৱহাৰ কৰা হ'ব।",
      medxAiAssistant: "MedFlow AI সহায়ক",
      understandFeeling:
        "আপুনি কেনে অনুভৱ কৰিছে সেয়া বুজি লওঁ আহক।",
      answerQuestionsDescription:
        "এটা বিকল্প বাছনি কৰি বা আপোনাৰ উত্তৰ টাইপ কৰি প্ৰশ্নসমূহৰ উত্তৰ দিয়ক।",
      medxClinicalAssistant:
        "MedFlow ক্লিনিকেল সহায়ক",
      onlineAiPowered:
        "অনলাইন · AI-চালিত তথ্য",
      connectionIssue: "সংযোগৰ সমস্যা",
      tryAgain: "পুনৰ চেষ্টা কৰক",
      continue: "আগবাঢ়ক",
      intake: {
        selectOption:
          "তলৰ বিকল্পসমূহৰ পৰা এটা বাছনি কৰক।",
        selectYesNo:
          "অনুগ্ৰহ কৰি হয় বা নহয় বাছনি কৰক।",
        typeOrVoice:
          "আপোনাৰ উত্তৰ টাইপ কৰক বা ভইচ ইনপুট ব্যৱহাৰ কৰক।",
      },
      voice: {
        stopListening: "শুনা বন্ধ কৰক",
        input: "ভইচ ইনপুট",
      },
      listening:
        "শুনি আছোঁ... এতিয়া কওক",
      intakeFooter:
        "আপোনাৰ উত্তৰসমূহ ব্যক্তিগত আৰু স্বাস্থ্যসেৱা পেছাদাৰীয়ে পৰ্যালোচনা কৰিব।",
      historyReady:
        "আপোনাৰ স্বাস্থ্য ইতিহাস প্ৰস্তুত।",
      historyReadyDescription:
        "স্বাস্থ্যসেৱা পেছাদাৰীৰ পৰ্যালোচনাৰ বাবে MedFlow-এ আপোনাৰ তথ্য সংগঠিত কৰিছে।",
      healthIntakeSummary:
        "স্বাস্থ্য তথ্যৰ সাৰাংশ",
      patientHistoryNotice:
        "এইটো ৰোগীয়ে দিয়া স্বাস্থ্য ইতিহাস আৰু ই কোনো চিকিৎসা নিৰ্ণয় নহয়। অনুজ্ঞাপ্ৰাপ্ত স্বাস্থ্যসেৱা পেছাদাৰীৰ পৰামৰ্শ লওক।",
      continueToMedicalRecords:
        "চিকিৎসা ৰেকৰ্ডলৈ যাওক",
      patientPortal: "ৰোগী প'ৰ্টেল",
      medicalRecords: "চিকিৎসা ৰেকৰ্ড",
      medicalRecordsDescription:
        "আপোনাৰ স্বাস্থ্য ইতিহাস সুৰক্ষিতভাৱে এটা ঠাইত সংগঠিত কৰা হৈছে।",
      uploadDocument: "নথি আপলোড কৰক",
      recordsProtected:
        "আপোনাৰ চিকিৎসা ৰেকৰ্ড সুৰক্ষিত",
      recordsProtectedDescription:
        "যাচাইকৃত ৰেকৰ্ড কেৱল পঢ়িব পাৰি আৰু সলনি কৰিব নোৱাৰি।",
      searchRecords:
        "আপোনাৰ চিকিৎসা ৰেকৰ্ড বিচাৰক...",
      categories: {
        all: "সকলো নথি",
        labReports: "লেব ৰিপ'ৰ্ট",
        prescriptions: "প্ৰেছক্ৰিপচন",
        discharge: "ডিছচাৰ্জ সাৰাংশ",
        other: "অন্যান্য নথি",
      },
      documents: "নথি",
      allYourRecords: "আপোনাৰ সকলো ৰেকৰ্ড",
      readOnly: "কেৱল পঢ়িবলৈ",
      pending: "অপেক্ষাৰত",
      source: "উৎস",
      date: "তাৰিখ",
      verified: "যাচাইকৃত",
      pendingVerification:
        "যাচাই অপেক্ষাৰত",
      view: "চাওক",
      noRecordsFound:
        "কোনো ৰেকৰ্ড পোৱা নগ'ল",
      noRecordsDescription:
        "আপোনাৰ সন্ধান সলনি কৰক বা নতুন নথি আপলোড কৰক।",
      medicalDocument: "চিকিৎসা নথি",
      uploadRecord: "এটা ৰেকৰ্ড আপলোড কৰক",
      uploadRecordDescription:
        "আপোনাৰ MedFlow স্বাস্থ্য ইতিহাসত এটা পূৰ্বৰ চিকিৎসা নথি যোগ কৰক।",
      fileSelected:
        "ফাইল নিৰ্বাচিত · আপলোডৰ বাবে প্ৰস্তুত",
      chooseDocument: "এটা নথি বাছনি কৰক",
      acceptedFormats:
        "PDF, JPG বা PNG গ্ৰহণযোগ্য",
      uploadVerificationWarning:
        "আপলোড কৰা নথিসমূহ যাচাইকৃত বুলি চিহ্নিত কৰাৰ আগতে পৰীক্ষাৰ প্ৰয়োজন হ'ব।",
      errors: {
        enterName: "অনুগ্ৰহ কৰি আপোনাৰ নাম দিয়ক",
        enterAge: "অনুগ্ৰহ কৰি আপোনাৰ বয়স দিয়ক",
        validAge: "অনুগ্ৰহ কৰি সঠিক বয়স দিয়ক",
        selectGender: "অনুগ্ৰহ কৰি আপোনাৰ লিংগ বাছনি কৰক",
        enterPhone:
          "অনুগ্ৰহ কৰি আপোনাৰ ফোন নম্বৰ দিয়ক",
        validPhone:
          "এটা সঠিক ১০ সংখ্যাৰ নম্বৰ দিয়ক",
      },
      speechErrors: {
        convertFailed:
          "আপোনাৰ কথাক টেক্সটলৈ ৰূপান্তৰ কৰিব পৰা নগ'ল। পুনৰ চেষ্টা কৰক।",
        permissionDenied:
          "মাইক্ৰ'ফোনৰ অনুমতি অস্বীকাৰ কৰা হৈছে।",
        noMicrophone:
          "কোনো মাইক্ৰ'ফোন পোৱা নগ'ল।",
        unable:
          "মাইক্ৰ'ফোনত প্ৰৱেশ কৰিব পৰা নগ'ল।",
      },
      aiErrors: {
        timeout:
          "MedFlow-এ উত্তৰ দিবলৈ অধিক সময় লৈছে। আপোনাৰ সংযোগ পৰীক্ষা কৰি পুনৰ চেষ্টা কৰক।",
        connection:
          "MedFlow ক্লিনিকেল ইনটেক ছাৰ্ভাৰৰ সৈতে সংযোগ কৰিব পৰা নগ'ল। পুনৰ চেষ্টা কৰক।",
      },
    },
  },

  // =====================================================
  // URDU
  // =====================================================

  ur: {
    translation: {
      secure: "محفوظ",
      aiHealthcare: "AI سے چلنے والی صحت کی خدمات",
      yourHealth: "آپ کی صحت۔",
      yourRecords: "آپ کے ریکارڈز۔",
      onePlace: "ایک جگہ۔",
      description:
        "MedFlow آپ کی صحت کی تاریخ اور طبی ریکارڈز کو ایک محفوظ اور ذہین پلیٹ فارم میں یکجا کرتا ہے۔",
      patients: "مریض",
      accuracy: "درستگی",
      avgIntake: "اوسط وقت",
      whoAreYouToday: "آج آپ کون ہیں؟",
      selectRole:
        "شروع کرنے کے لیے اپنا کردار منتخب کریں",
      patient: "مریض",
      imPatient: "میں مریض ہوں",
      patientDescription:
        "اپنی صحت کی تاریخ ریکارڈ کریں اور اپنے طبی ریکارڈز کا انتظام کریں۔",
      healthcareProfessional:
        "صحت کی خدمات کا ماہر",
      imDoctor: "میں ڈاکٹر ہوں",
      doctorDescription:
        "مریضوں کی تاریخ کا جائزہ لیں اور طبی ریکارڈز کا انتظام کریں۔",
      privacyNote:
        "آپ کی صحت کی معلومات کو رازداری اور رضامندی کو مدنظر رکھتے ہوئے سنبھالا جاتا ہے۔",
      back: "واپس",
      profile: "پروفائل",
      healthIntake: "صحت کی معلومات",
      records: "ریکارڈز",
      letsGetStarted: "آئیے شروع کریں",
      tellUsAboutYourself:
        "اپنے بارے میں بتائیں",
      basicDetailsDescription:
        "صحت کی معلومات شروع کرنے سے پہلے ہمیں صرف چند بنیادی تفصیلات درکار ہیں۔",
      name: "نام",
      age: "عمر",
      gender: "جنس",
      phoneNumber: "فون نمبر",
      placeholders: {
        fullName: "اپنا پورا نام درج کریں",
        age: "آپ کی عمر",
        mobile: "10 ہندسوں کا موبائل نمبر",
        response: "اپنے الفاظ میں بتائیں...",
      },
      genderOptions: {
        select: "جنس منتخب کریں",
        male: "مرد",
        female: "عورت",
        other: "دیگر",
        preferNotToSay:
          "بتانا پسند نہیں",
      },
      continueToHealthIntake:
        "صحت کی معلومات پر جائیں",
      formSecurity:
        "آپ کی معلومات صرف آپ کی صحت کے سفر کے لیے استعمال کی جائیں گی۔",
      medxAiAssistant: "MedFlow AI معاون",
      understandFeeling:
        "آئیے سمجھتے ہیں کہ آپ کیسا محسوس کر رہے ہیں۔",
      answerQuestionsDescription:
        "ایک آپشن منتخب کرکے یا اپنا جواب ٹائپ کرکے سوالات کے جواب دیں۔",
      medxClinicalAssistant:
        "MedFlow طبی معاون",
      onlineAiPowered:
        "آن لائن · AI سے چلنے والی معلومات",
      connectionIssue: "کنکشن کا مسئلہ",
      tryAgain: "دوبارہ کوشش کریں",
      continue: "جاری رکھیں",
      intake: {
        selectOption:
          "ذیل میں دیے گئے آپشنز میں سے ایک منتخب کریں۔",
        selectYesNo:
          "براہ کرم ہاں یا نہیں منتخب کریں۔",
        typeOrVoice:
          "اپنا جواب ٹائپ کریں یا آواز کا استعمال کریں۔",
      },
      voice: {
        stopListening: "سننا بند کریں",
        input: "آواز کا ان پٹ",
      },
      listening:
        "سن رہا ہے... اب بولیں",
      intakeFooter:
        "آپ کے جوابات نجی ہیں اور صحت کی خدمات کے ماہر ان کا جائزہ لیں گے۔",
      historyReady:
        "آپ کی صحت کی تاریخ تیار ہے۔",
      historyReadyDescription:
        "MedFlow نے صحت کے ماہر کے جائزے کے لیے آپ کی معلومات کو منظم کر دیا ہے۔",
      healthIntakeSummary:
        "صحت کی معلومات کا خلاصہ",
      patientHistoryNotice:
        "یہ مریض کی فراہم کردہ تاریخ ہے اور طبی تشخیص نہیں ہے۔ لائسنس یافتہ صحت کے ماہر سے مشورہ کریں۔",
      continueToMedicalRecords:
        "طبی ریکارڈز پر جائیں",
      patientPortal: "مریض پورٹل",
      medicalRecords: "طبی ریکارڈز",
      medicalRecordsDescription:
        "آپ کی صحت کی تاریخ محفوظ طریقے سے ایک جگہ منظم ہے۔",
      uploadDocument: "دستاویز اپ لوڈ کریں",
      recordsProtected:
        "آپ کے طبی ریکارڈ محفوظ ہیں",
      recordsProtectedDescription:
        "تصدیق شدہ ریکارڈ صرف پڑھنے کے لیے ہوتے ہیں اور ان میں تبدیلی نہیں کی جا سکتی۔",
      searchRecords:
        "اپنے طبی ریکارڈز تلاش کریں...",
      categories: {
        all: "تمام دستاویزات",
        labReports: "لیب رپورٹس",
        prescriptions: "نسخے",
        discharge: "ڈسچارج خلاصے",
        other: "دیگر دستاویزات",
      },
      documents: "دستاویزات",
      allYourRecords: "آپ کے تمام ریکارڈز",
      readOnly: "صرف پڑھنے کے لیے",
      pending: "زیر التوا",
      source: "ماخذ",
      date: "تاریخ",
      verified: "تصدیق شدہ",
      pendingVerification:
        "تصدیق زیر التوا",
      view: "دیکھیں",
      noRecordsFound:
        "کوئی ریکارڈ نہیں ملا",
      noRecordsDescription:
        "اپنی تلاش تبدیل کریں یا نئی دستاویز اپ لوڈ کریں۔",
      medicalDocument: "طبی دستاویز",
      uploadRecord: "ایک ریکارڈ اپ لوڈ کریں",
      uploadRecordDescription:
        "اپنی MedFlow صحت کی تاریخ میں پچھلی طبی دستاویز شامل کریں۔",
      fileSelected:
        "فائل منتخب · اپ لوڈ کے لیے تیار",
      chooseDocument: "ایک دستاویز منتخب کریں",
      acceptedFormats:
        "PDF، JPG یا PNG قابل قبول ہیں",
      uploadVerificationWarning:
        "اپ لوڈ کی گئی دستاویزات کو تصدیق شدہ قرار دینے سے پہلے تصدیق ضروری ہوگی۔",
      errors: {
        enterName: "براہ کرم اپنا نام درج کریں",
        enterAge: "براہ کرم اپنی عمر درج کریں",
        validAge: "براہ کرم درست عمر درج کریں",
        selectGender: "براہ کرم اپنی جنس منتخب کریں",
        enterPhone:
          "براہ کرم اپنا فون نمبر درج کریں",
        validPhone:
          "درست 10 ہندسوں کا نمبر درج کریں",
      },
      speechErrors: {
        convertFailed:
          "آپ کی آواز کو متن میں تبدیل نہیں کیا جا سکا۔ دوبارہ کوشش کریں۔",
        permissionDenied:
          "مائیکروفون کی اجازت مسترد کر دی گئی۔",
        noMicrophone:
          "کوئی مائیکروفون نہیں ملا۔",
        unable:
          "مائیکروفون تک رسائی نہیں ہو سکی۔",
      },
      aiErrors: {
        timeout:
          "MedFlow جواب دینے میں زیادہ وقت لے رہا ہے۔ اپنا کنکشن چیک کریں اور دوبارہ کوشش کریں۔",
        connection:
          "MedFlow کلینیکل انٹیک سرور سے منسلک نہیں ہو سکا۔ دوبارہ کوشش کریں۔",
      },
    },
  },

  // =====================================================
  // NEPALI
  // =====================================================

  ne: {
    translation: {
      secure: "सुरक्षित",
      aiHealthcare: "AI-संचालित स्वास्थ्य सेवा",
      yourHealth: "तपाईंको स्वास्थ्य।",
      yourRecords: "तपाईंका रेकर्डहरू।",
      onePlace: "एउटै ठाउँमा।",
      description:
        "MedFlow ले तपाईंको स्वास्थ्य इतिहास र चिकित्सा रेकर्डहरूलाई सुरक्षित र बुद्धिमान प्लेटफर्ममा एकसाथ ल्याउँछ।",
      patients: "बिरामीहरू",
      accuracy: "शुद्धता",
      avgIntake: "औसत समय",
      whoAreYouToday: "आज तपाईं को हुनुहुन्छ?",
      selectRole:
        "सुरु गर्न आफ्नो भूमिका चयन गर्नुहोस्",
      patient: "बिरामी",
      imPatient: "म बिरामी हुँ",
      patientDescription:
        "आफ्नो स्वास्थ्य इतिहास रेकर्ड गर्नुहोस् र चिकित्सा रेकर्डहरू व्यवस्थापन गर्नुहोस्।",
      healthcareProfessional:
        "स्वास्थ्य सेवा पेशेवर",
      imDoctor: "म डाक्टर हुँ",
      doctorDescription:
        "बिरामीको इतिहास समीक्षा गर्नुहोस् र क्लिनिकल रेकर्डहरू व्यवस्थापन गर्नुहोस्।",
      privacyNote:
        "तपाईंको स्वास्थ्य जानकारी गोपनीयता र सहमतिको ध्यानमा राखेर व्यवस्थापन गरिन्छ।",
      back: "पछाडि",
      profile: "प्रोफाइल",
      healthIntake: "स्वास्थ्य जानकारी",
      records: "रेकर्डहरू",
      letsGetStarted: "सुरु गरौं",
      tellUsAboutYourself:
        "आफ्नो बारेमा बताउनुहोस्",
      basicDetailsDescription:
        "स्वास्थ्य जानकारी सुरु गर्नु अघि हामीलाई केही आधारभूत विवरण मात्र चाहिन्छ।",
      name: "नाम",
      age: "उमेर",
      gender: "लिङ्ग",
      phoneNumber: "फोन नम्बर",
      placeholders: {
        fullName: "आफ्नो पूरा नाम लेख्नुहोस्",
        age: "तपाईंको उमेर",
        mobile: "१० अंकको मोबाइल नम्बर",
        response: "आफ्नै शब्दमा भन्नुहोस्...",
      },
      genderOptions: {
        select: "लिङ्ग चयन गर्नुहोस्",
        male: "पुरुष",
        female: "महिला",
        other: "अन्य",
        preferNotToSay:
          "भन्न चाहन्न",
      },
      continueToHealthIntake:
        "स्वास्थ्य जानकारीमा जानुहोस्",
      formSecurity:
        "तपाईंको जानकारी तपाईंको स्वास्थ्य यात्राका लागि मात्र प्रयोग गरिनेछ।",
      medxAiAssistant: "MedFlow AI सहायक",
      understandFeeling:
        "तपाईं कस्तो महसुस गरिरहनुभएको छ बुझौं।",
      answerQuestionsDescription:
        "विकल्प चयन गरेर वा आफ्नो उत्तर टाइप गरेर प्रश्नहरूको उत्तर दिनुहोस्।",
      medxClinicalAssistant:
        "MedFlow क्लिनिकल सहायक",
      onlineAiPowered:
        "अनलाइन · AI-संचालित जानकारी",
      connectionIssue: "जडान समस्या",
      tryAgain: "फेरि प्रयास गर्नुहोस्",
      continue: "जारी राख्नुहोस्",
      intake: {
        selectOption:
          "तलका विकल्पहरूमध्ये एउटा चयन गर्नुहोस्।",
        selectYesNo:
          "कृपया हो वा होइन चयन गर्नुहोस्।",
        typeOrVoice:
          "आफ्नो उत्तर टाइप गर्नुहोस् वा आवाज इनपुट प्रयोग गर्नुहोस्।",
      },
      voice: {
        stopListening: "सुन्न बन्द गर्नुहोस्",
        input: "आवाज इनपुट",
      },
      listening:
        "सुनिरहेको छ... अहिले बोल्नुहोस्",
      intakeFooter:
        "तपाईंका उत्तरहरू निजी छन् र स्वास्थ्य सेवा पेशेवरद्वारा समीक्षा गरिनेछ।",
      historyReady:
        "तपाईंको स्वास्थ्य इतिहास तयार छ।",
      historyReadyDescription:
        "स्वास्थ्य सेवा पेशेवरको समीक्षाका लागि MedFlow ले तपाईंको जानकारी व्यवस्थित गरेको छ।",
      healthIntakeSummary:
        "स्वास्थ्य जानकारी सारांश",
      patientHistoryNotice:
        "यो बिरामीले दिएको इतिहास हो र चिकित्सा निदान होइन। लाइसेन्स प्राप्त स्वास्थ्य सेवा पेशेवरसँग परामर्श गर्नुहोस्।",
      continueToMedicalRecords:
        "चिकित्सा रेकर्डमा जानुहोस्",
      patientPortal: "बिरामी पोर्टल",
      medicalRecords: "चिकित्सा रेकर्ड",
      medicalRecordsDescription:
        "तपाईंको स्वास्थ्य इतिहास सुरक्षित रूपमा एउटै ठाउँमा व्यवस्थित गरिएको छ।",
      uploadDocument: "कागजात अपलोड गर्नुहोस्",
      recordsProtected:
        "तपाईंका चिकित्सा रेकर्डहरू सुरक्षित छन्",
      recordsProtectedDescription:
        "प्रमाणित रेकर्डहरू पढ्न मात्र मिल्छ र परिवर्तन गर्न सकिँदैन।",
      searchRecords:
        "आफ्ना चिकित्सा रेकर्डहरू खोज्नुहोस्...",
      categories: {
        all: "सबै कागजातहरू",
        labReports: "ल्याब रिपोर्टहरू",
        prescriptions: "प्रिस्क्रिप्सनहरू",
        discharge: "डिस्चार्ज सारांशहरू",
        other: "अन्य कागजातहरू",
      },
      documents: "कागजातहरू",
      allYourRecords: "तपाईंका सबै रेकर्डहरू",
      readOnly: "पढ्न मात्र",
      pending: "पेन्डिङ",
      source: "स्रोत",
      date: "मिति",
      verified: "प्रमाणित",
      pendingVerification:
        "प्रमाणीकरण पेन्डिङ",
      view: "हेर्नुहोस्",
      noRecordsFound:
        "कुनै रेकर्ड भेटिएन",
      noRecordsDescription:
        "आफ्नो खोज परिवर्तन गर्नुहोस् वा नयाँ कागजात अपलोड गर्नुहोस्।",
      medicalDocument: "चिकित्सा कागजात",
      uploadRecord: "रेकर्ड अपलोड गर्नुहोस्",
      uploadRecordDescription:
        "आफ्नो MedFlow स्वास्थ्य इतिहासमा अघिल्लो चिकित्सा कागजात थप्नुहोस्।",
      fileSelected:
        "फाइल चयन गरियो · अपलोड गर्न तयार",
      chooseDocument: "कागजात चयन गर्नुहोस्",
      acceptedFormats:
        "PDF, JPG वा PNG स्वीकार्य छन्",
      uploadVerificationWarning:
        "अपलोड गरिएका कागजातहरू प्रमाणित भनेर चिन्ह लगाउनु अघि प्रमाणीकरण आवश्यक हुनेछ।",
      errors: {
        enterName: "कृपया आफ्नो नाम लेख्नुहोस्",
        enterAge: "कृपया आफ्नो उमेर लेख्नुहोस्",
        validAge: "कृपया मान्य उमेर लेख्नुहोस्",
        selectGender: "कृपया आफ्नो लिङ्ग चयन गर्नुहोस्",
        enterPhone:
          "कृपया आफ्नो फोन नम्बर लेख्नुहोस्",
        validPhone:
          "मान्य १० अंकको नम्बर लेख्नुहोस्",
      },
      speechErrors: {
        convertFailed:
          "तपाईंको आवाजलाई पाठमा परिवर्तन गर्न सकिएन। फेरि प्रयास गर्नुहोस्।",
        permissionDenied:
          "माइक्रोफोन अनुमति अस्वीकार गरियो।",
        noMicrophone:
          "माइक्रोफोन भेटिएन।",
        unable:
          "माइक्रोफोन पहुँच गर्न सकिएन।",
      },
      aiErrors: {
        timeout:
          "MedFlow ले प्रतिक्रिया दिन धेरै समय लिइरहेको छ। आफ्नो जडान जाँच गर्नुहोस् र फेरि प्रयास गर्नुहोस्।",
        connection:
          "MedFlow क्लिनिकल इनटेक सर्भरसँग जडान हुन सकेन। फेरि प्रयास गर्नुहोस्।",
      },
    },
  },

  // =====================================================
  // KONKANI
  // =====================================================

  kok: {
    translation: {
      secure: "सुरक्षित",
      aiHealthcare: "AI-आधारीत आरोग्य सेवा",
      yourHealth: "तुमचें आरोग्य.",
      yourRecords: "तुमचे रेकॉर्ड.",
      onePlace: "एकाच जाग्यार.",
      description:
        "MedFlow तुमचो आरोग्य इतिहास आनी वैजकी रेकॉर्ड एक सुरक्षित आनी हुशार प्लॅटफॉर्माचेर एकठांय हाडटा.",
      patients: "रुग्ण",
      accuracy: "अचूकता",
      avgIntake: "सरासरी वेळ",
      whoAreYouToday: "आयज तुमी कोण?",
      selectRole:
        "सुरू करपाक तुमची भूमिका निवडात",
      patient: "रुग्ण",
      imPatient: "हांव रुग्ण आसां",
      patientDescription:
        "तुमचो आरोग्य इतिहास नोंद करात आनी तुमचे वैजकी रेकॉर्ड सांबाळात.",
      healthcareProfessional:
        "आरोग्य सेवा व्यावसायिक",
      imDoctor: "हांव डॉक्टर आसां",
      doctorDescription:
        "रुग्णांचो इतिहास पळोवचो आनी क्लिनिकल रेकॉर्ड सांबाळचो.",
      privacyNote:
        "तुमची आरोग्य माहिती गुप्तताय आनी संमती लक्षांत दवरून सांबाळली जाता.",
      back: "फाटीं",
      profile: "प्रोफायल",
      healthIntake: "आरोग्य माहिती",
      records: "रेकॉर्ड",
      letsGetStarted: "सुरू करया",
      tellUsAboutYourself:
        "तुमचे विशीं सांगात",
      basicDetailsDescription:
        "आरोग्य माहिती सुरू करपाच्या पयलीं आमकां कांय मूळ माहिती जाय.",
      name: "नांव",
      age: "वय",
      gender: "लिंग",
      phoneNumber: "फोन नंबर",
      placeholders: {
        fullName: "तुमचें पुराय नांव घालात",
        age: "तुमचें वय",
        mobile: "10 अंकांचो मोबायल नंबर",
        response: "तुमच्या उतरांनी सांगात...",
      },
      genderOptions: {
        select: "लिंग निवडात",
        male: "दादलो",
        female: "बायल",
        other: "हेर",
        preferNotToSay:
          "सांगपाक नाका",
      },
      continueToHealthIntake:
        "आरोग्य माहिती कडेन वचात",
      formSecurity:
        "तुमची माहिती फकत तुमच्या आरोग्य प्रवासाखातीर वापरली वतली.",
      medxAiAssistant: "MedFlow AI सहाय्यक",
      understandFeeling:
        "तुमकां कितें जाणोवता तें समजून घेया.",
      answerQuestionsDescription:
        "एक पर्याय निवडून वा तुमचें जाप टायप करून प्रस्नांची जाप दियात.",
      medxClinicalAssistant:
        "MedFlow क्लिनिकल सहाय्यक",
      onlineAiPowered:
        "ऑनलायन · AI-आधारीत माहिती",
      connectionIssue: "कनेक्शन समस्या",
      tryAgain: "परत प्रयत्न करात",
      continue: "फुडें वचात",
      intake: {
        selectOption:
          "सकयल दिल्ल्या पर्यायांतलो एक निवडात.",
        selectYesNo:
          "कृपा करून हय वा ना निवडात.",
        typeOrVoice:
          "तुमचें जाप टायप करात वा आवाज वापरात.",
      },
      voice: {
        stopListening: "आयकप बंद करात",
        input: "आवाज इनपुट",
      },
      listening:
        "आयकता... आतां उलयात",
      intakeFooter:
        "तुमची जाप खाजगी आसा आनी आरोग्य सेवा व्यावसायिक ती पळोवतलो.",
      historyReady:
        "तुमचो आरोग्य इतिहास तयार आसा.",
      historyReadyDescription:
        "आरोग्य सेवा व्यावसायिकाच्या तपासणी खातीर MedFlow तुमची माहिती नीट लायली आसा.",
      healthIntakeSummary:
        "आरोग्य माहिती सारांश",
      patientHistoryNotice:
        "हो रुग्णान दिल्लो इतिहास आसा आनी वैजकी निदान न्हय. परवानाधारक आरोग्य व्यावसायिकाचो सल्लो घेवचो.",
      continueToMedicalRecords:
        "वैजकी रेकॉर्डांक वचात",
      patientPortal: "रुग्ण पोर्टल",
      medicalRecords: "वैजकी रेकॉर्ड",
      medicalRecordsDescription:
        "तुमचो आरोग्य इतिहास सुरक्षित रितीन एकाच जाग्यार लायलो आसा.",
      uploadDocument: "दस्तावेज अपलोड करात",
      recordsProtected:
        "तुमचे वैजकी रेकॉर्ड सुरक्षित आसात",
      recordsProtectedDescription:
        "तपासलेले रेकॉर्ड फकत वाचपाक मेळटात आनी बदलपाक येना.",
      searchRecords:
        "तुमचे वैजकी रेकॉर्ड सोदात...",
      categories: {
        all: "सगळे दस्तावेज",
        labReports: "लॅब रिपोर्ट",
        prescriptions: "प्रिस्क्रिप्शन",
        discharge: "डिस्चार्ज सारांश",
        other: "हेर दस्तावेज",
      },
      documents: "दस्तावेज",
      allYourRecords: "तुमचे सगळे रेकॉर्ड",
      readOnly: "फकत वाचपाक",
      pending: "प्रलंबित",
      source: "स्रोत",
      date: "तारीख",
      verified: "तपासलेले",
      pendingVerification:
        "तपासणी प्रलंबित",
      view: "पळोवचें",
      noRecordsFound:
        "रेकॉर्ड मेळना",
      noRecordsDescription:
        "तुमची सोद बदलात वा नवो दस्तावेज अपलोड करात.",
      medicalDocument: "वैजकी दस्तावेज",
      uploadRecord: "रेकॉर्ड अपलोड करात",
      uploadRecordDescription:
        "तुमच्या MedFlow आरोग्य इतिहासांत पयलींचो वैजकी दस्तावेज जोडात.",
      fileSelected:
        "फायल निवडल्या · अपलोड करपाक तयार",
      chooseDocument: "दस्तावेज निवडात",
      acceptedFormats:
        "PDF, JPG वा PNG मान्य आसात",
      uploadVerificationWarning:
        "अपलोड केल्ल्या दस्तावेजांची तपासणी जाल्या उपरांत तांकां तपासलेले म्हणपाक मेळटा.",
      errors: {
        enterName: "तुमचें नांव घालात",
        enterAge: "तुमचें वय घालात",
        validAge: "योग्य वय घालात",
        selectGender: "तुमचें लिंग निवडात",
        enterPhone: "तुमचो फोन नंबर घालात",
        validPhone:
          "योग्य 10 अंकांचो नंबर घालात",
      },
      speechErrors: {
        convertFailed:
          "तुमचो आवाज मजकुरांत बदलपाक जमलो ना. परत प्रयत्न करात.",
        permissionDenied:
          "मायक्रोफोनाची परवानगी नाकारली.",
        noMicrophone:
          "मायक्रोफोन मेळना.",
        unable:
          "मायक्रोफोन वापरपाक जमेना.",
      },
      aiErrors: {
        timeout:
          "MedFlow जाप दिवपाक चड वेळ घेता. तुमचें कनेक्शन तपासून परत प्रयत्न करात.",
        connection:
          "MedFlow क्लिनिकल इनटेक सर्व्हराक जोडू शकलें ना. परत प्रयत्न करात.",
      },
    },
  },

  // =====================================================
  // KASHMIRI
  // =====================================================

  ks: {
    translation: {
      secure: "محفوظ",
      aiHealthcare: "AI-چلاون وال صحت خدمت",
      yourHealth: "تُہند صحت۔",
      yourRecords: "تُہند ریکارڈ۔",
      onePlace: "اکھ جاے۔",
      description:
        "MedFlow تُہند صحت تاریخ تہ طبی ریکارڈ اکھ محفوظ تہ ذہین پلیٹ فارمَس منز جمع کران۔",
      patients: "مریض",
      accuracy: "درستی",
      avgIntake: "اوسط وقت",
      whoAreYouToday: "اَز تُہۍ کَس چھِو؟",
      selectRole:
        "شروع کرنہ خاطر پننہ کردار منتخب کریو",
      patient: "مریض",
      imPatient: "بہ چھُس مریض",
      patientDescription:
        "پنُن صحت تاریخ ریکارڈ کریو تہ طبی ریکارڈ سنبھالِو۔",
      healthcareProfessional:
        "صحت خدمت ماہر",
      imDoctor: "بہ چھُس ڈاکٹر",
      doctorDescription:
        "مریضن ہند تاریخ جائزہ کریو تہ طبی ریکارڈ سنبھالِو۔",
      privacyNote:
        "تُہند صحت معلومات رازداری تہ رضامندی خیال منز تھاونہ آسن۔",
      back: "واپس",
      profile: "پروفائل",
      healthIntake: "صحت معلومات",
      records: "ریکارڈ",
      letsGetStarted: "شروع کریو",
      tellUsAboutYourself:
        "پنن بارے منز وُچھِو",
      basicDetailsDescription:
        "صحت معلومات شروع کرنہ پَہلۍ اسہِ کینٛہ بنیادی تفصیل ضرورت چھِ۔",
      name: "ناو",
      age: "عمر",
      gender: "جنس",
      phoneNumber: "فون نمبر",
      placeholders: {
        fullName: "پنُن پورا ناو درج کریو",
        age: "تُہند عمر",
        mobile: "10 ہندسہ موبائل نمبر",
        response: "پننہ لفظن منز وُچھِو...",
      },
      genderOptions: {
        select: "جنس منتخب کریو",
        male: "مرد",
        female: "زن",
        other: "باقی",
        preferNotToSay:
          "بتاونہ پسند نَہ",
      },
      continueToHealthIntake:
        "صحت معلومات طرف وُچھِو",
      formSecurity:
        "تُہند معلومات صرف صحت سفر خاطر استعمال کرنہ آسن۔",
      medxAiAssistant: "MedFlow AI مددگار",
      understandFeeling:
        "تُہۍ کِتھ پٲٹھۍ محسوس کران چھِو، وُچھِو۔",
      answerQuestionsDescription:
        "اکھ آپشن منتخب کریو یا پنُن جواب ٹائپ کریو۔",
      medxClinicalAssistant:
        "MedFlow طبی مددگار",
      onlineAiPowered:
        "آن لائن · AI بنیاد معلومات",
      connectionIssue: "رابطہ مسئلہ",
      tryAgain: "دوبارہ کوشش کریو",
      continue: "جاری تھاو",
      intake: {
        selectOption:
          "کَتھ آپشنن منز اکھ منتخب کریو۔",
        selectYesNo:
          "براہ کرم ہاں یا نہ منتخب کریو۔",
        typeOrVoice:
          "پنُن جواب ٹائپ کریو یا آواز استعمال کریو۔",
      },
      voice: {
        stopListening: "سنن بند کریو",
        input: "آواز ان پٹ",
      },
      listening:
        "سنن چھُ... وُچھِو",
      intakeFooter:
        "تُہند جواب نجی چھِ تہ صحت ماہر سُہ جائزہ گژھان۔",
      historyReady:
        "تُہند صحت تاریخ تیار چھِ۔",
      historyReadyDescription:
        "MedFlow نِ صحت ماہر جائزہ خاطر تُہند معلومات ترتیب دِی۔",
      healthIntakeSummary:
        "صحت معلومات خلاصہ",
      patientHistoryNotice:
        "یہ مریض طرفہ دِیوم تاریخ چھِ، طبی تشخیص نہٕ۔ لائسنس یافتہ صحت ماہر سان مشورہ کریو۔",
      continueToMedicalRecords:
        "طبی ریکارڈ طرف وُچھِو",
      patientPortal: "مریض پورٹل",
      medicalRecords: "طبی ریکارڈ",
      medicalRecordsDescription:
        "تُہند صحت تاریخ محفوظ طریقہ سان اکھ جاے منز ترتیب دِیوم چھِ۔",
      uploadDocument: "دستاویز اپلوڈ کریو",
      recordsProtected:
        "تُہند طبی ریکارڈ محفوظ چھِ",
      recordsProtectedDescription:
        "تصدیق شدہ ریکارڈ صرف پڑھِتھ ہیکیو تہ بدلِتھ نَہ ہیکیو۔",
      searchRecords:
        "پنن طبی ریکارڈ تلاش کریو...",
      categories: {
        all: "سارے دستاویز",
        labReports: "لیب رپورٹ",
        prescriptions: "نسخہ",
        discharge: "ڈسچارج خلاصہ",
        other: "باقی دستاویز",
      },
      documents: "دستاویز",
      allYourRecords: "تُہند سارے ریکارڈ",
      readOnly: "صرف پڑھنے خاطر",
      pending: "زیر التوا",
      source: "ذریعہ",
      date: "تاریخ",
      verified: "تصدیق شدہ",
      pendingVerification:
        "تصدیق زیر التوا",
      view: "ÙˆÙÚ†Ú¾ÙÙˆ",
      noRecordsFound:
        "ریکارڈ نہٕ مِل",
      noRecordsDescription:
        "تلاش بدلِو یا نیا دستاویز اپلوڈ کریو۔",
      medicalDocument: "طبی دستاویز",
      uploadRecord: "اکھ ریکارڈ اپلوڈ کریو",
      uploadRecordDescription:
        "MedFlow صحت تاریخ منز پچھلا طبی دستاویز شامل کریو۔",
      fileSelected:
        "فائل منتخب · اپلوڈ خاطر تیار",
      chooseDocument: "دستاویز منتخب کریو",
      acceptedFormats:
        "PDF، JPG یا PNG قبول چھِ",
      uploadVerificationWarning:
        "اپلوڈ کرنہ آمت دستاویز تصدیق کرنہ پَہلۍ جانچ ضرورت چھِ۔",
      errors: {
        enterName: "مہربانی کرتھ پنُن ناو درج کریو",
        enterAge: "پنُن عمر درج کریو",
        validAge: "درست عمر درج کریو",
        selectGender: "پنُن جنس منتخب کریو",
        enterPhone:
          "پنُن فون نمبر درج کریو",
        validPhone:
          "درست 10 ہندسہ نمبر درج کریو",
      },
      speechErrors: {
        convertFailed:
          "تُہند آواز متن منز تبدیل نہٕ گژھ۔ دوبارہ کوشش کریو۔",
        permissionDenied:
          "مائکروفون اجازت رد گژھ۔",
        noMicrophone:
          "مائکروفون نہٕ مِل۔",
        unable:
          "مائکروفون تک رسائی نہٕ گژھ۔",
      },
      aiErrors: {
        timeout:
          "MedFlow جواب دِنہِ خاطر زیادہ وقت چھِ گژھان۔ کنکشن چیک کریو تہ دوبارہ کوشش کریو۔",
        connection:
          "MedFlow کلینیکل انٹیک سرور سان رابطہ نہٕ کرِتھ۔ دوبارہ کوشش کریو۔",
      },
    },
  },

  // =====================================================
  // SINDHI
  // =====================================================

  sd: {
    translation: {
      secure: "محفوظ",
      aiHealthcare: "AI تي هلندڙ صحت خدمتون",
      yourHealth: "توهان جي صحت.",
      yourRecords: "توهان جا رڪارڊ.",
      onePlace: "هڪ جاءِ تي.",
      description:
        "MedFlow توهان جي صحت جي تاريخ ۽ طبي رڪارڊ کي هڪ محفوظ ۽ ذهين پليٽ فارم تي گڏ ڪري ٿو.",
      patients: "مريض",
      accuracy: "درستگي",
      avgIntake: "اوسط وقت",
      whoAreYouToday: "اڄ توهان ڪير آهيو؟",
      selectRole:
        "شروع ڪرڻ لاءِ پنهنجو ڪردار چونڊيو",
      patient: "مريض",
      imPatient: "مان مريض آهيان",
      patientDescription:
        "پنهنجي صحت جي تاريخ رڪارڊ ڪريو ۽ طبي رڪارڊ سنڀاليو.",
      healthcareProfessional:
        "صحت جي خدمت جو ماهر",
      imDoctor: "مان ڊاڪٽر آهيان",
      doctorDescription:
        "مريضن جي تاريخ جو جائزو وٺو ۽ طبي رڪارڊ سنڀاليو.",
      privacyNote:
        "توهان جي صحت جي معلومات کي رازداري ۽ رضامندي کي نظر ۾ رکندي سنڀاليو ويندو آهي.",
      back: "واپس",
      profile: "پروفائل",
      healthIntake: "صحت جي معلومات",
      records: "رڪارڊ",
      letsGetStarted: "اچو شروع ڪريون",
      tellUsAboutYourself:
        "پنهنجي باري ۾ ٻڌايو",
      basicDetailsDescription:
        "صحت جي معلومات شروع ڪرڻ کان اڳ اسان کي ڪجهه بنيادي تفصيل گهرجن.",
      name: "نالو",
      age: "عمر",
      gender: "جنس",
      phoneNumber: "فون نمبر",
      placeholders: {
        fullName: "پنهنجو پورو نالو داخل ڪريو",
        age: "توهان جي عمر",
        mobile: "10 انگن وارو موبائل نمبر",
        response: "پنهنجن لفظن ۾ ٻڌايو...",
      },
      genderOptions: {
        select: "جنس چونڊيو",
        male: "مرد",
        female: "عورت",
        other: "Ù»ÙŠÙˆ",
        preferNotToSay:
          "ٻڌائڻ پسند نه آهي",
      },
      continueToHealthIntake:
        "صحت جي معلومات ڏانهن وڃو",
      formSecurity:
        "توهان جي معلومات صرف توهان جي صحت جي سفر لاءِ استعمال ڪئي ويندي.",
      medxAiAssistant: "MedFlow AI مددگار",
      understandFeeling:
        "اچو سمجهون ته توهان ڪيئن محسوس ڪري رهيا آهيو.",
      answerQuestionsDescription:
        "هڪ آپشن چونڊي يا پنهنجو جواب لکي سوالن جا جواب ڏيو.",
      medxClinicalAssistant:
        "MedFlow طبي مددگار",
      onlineAiPowered:
        "آن لائن · AI تي هلندڙ معلومات",
      connectionIssue: "رابطي جو مسئلو",
      tryAgain: "ٻيهر ڪوشش ڪريو",
      continue: "جاري رکو",
      intake: {
        selectOption:
          "هيٺ ڏنل آپشنن مان هڪ چونڊيو.",
        selectYesNo:
          "مهرباني ڪري ها يا نه چونڊيو.",
        typeOrVoice:
          "پنهنجو جواب لکو يا آواز استعمال ڪريو.",
      },
      voice: {
        stopListening: "ٻڌڻ بند ڪريو",
        input: "آواز ان پٽ",
      },
      listening:
        "ٻڌي رهيو آهي... هاڻي ڳالهايو",
      intakeFooter:
        "توهان جا جواب نجي آهن ۽ صحت جي ماهر طرفان جائزو ورتو ويندو.",
      historyReady:
        "توهان جي صحت جي تاريخ تيار آهي.",
      historyReadyDescription:
        "MedFlow صحت جي ماهر جي جائزي لاءِ توهان جي معلومات کي ترتيب ڏنو آهي.",
      healthIntakeSummary:
        "صحت جي معلومات جو خلاصو",
      patientHistoryNotice:
        "هي مريض طرفان ڏنل تاريخ آهي ۽ طبي تشخيص ناهي. لائسنس يافته صحت جي ماهر سان صلاح ڪريو.",
      continueToMedicalRecords:
        "طبي رڪارڊ ڏانهن وڃو",
      patientPortal: "مريض پورٽل",
      medicalRecords: "طبي رڪارڊ",
      medicalRecordsDescription:
        "توهان جي صحت جي تاريخ محفوظ طريقي سان هڪ جاءِ تي ترتيب ڏنل آهي.",
      uploadDocument: "دستاويز اپلوڊ ڪريو",
      recordsProtected:
        "توهان جا طبي رڪارڊ محفوظ آهن",
      recordsProtectedDescription:
        "تصديق ٿيل رڪارڊ صرف پڙهي سگهجن ٿا ۽ تبديل نٿا ڪري سگهجن.",
      searchRecords:
        "پنهنجا طبي رڪارڊ ڳوليو...",
      categories: {
        all: "سڀ دستاويز",
        labReports: "ليبارٽري رپورٽون",
        prescriptions: "نسخا",
        discharge: "ڊسچارج خلاصا",
        other: "ٻيا دستاويز",
      },
      documents: "دستاويز",
      allYourRecords: "توهان جا سڀ رڪارڊ",
      readOnly: "صرف پڙهڻ لاءِ",
      pending: "التوا ۾",
      source: "ذريعو",
      date: "تاريخ",
      verified: "تصديق ٿيل",
      pendingVerification:
        "تصديق التوا ۾",
      view: "ڏسو",
      noRecordsFound:
        "ڪو رڪارڊ نه مليو",
      noRecordsDescription:
        "پنهنجي ڳولا تبديل ڪريو يا نئون دستاويز اپلوڊ ڪريو.",
      medicalDocument: "طبي دستاويز",
      uploadRecord: "هڪ رڪارڊ اپلوڊ ڪريو",
      uploadRecordDescription:
        "پنهنجي MedFlow صحت جي تاريخ ۾ اڳوڻو طبي دستاويز شامل ڪريو.",
      fileSelected:
        "فائل چونڊيل · اپلوڊ لاءِ تيار",
      chooseDocument: "هڪ دستاويز چونڊيو",
      acceptedFormats:
        "PDF، JPG يا PNG قبول آهن",
      uploadVerificationWarning:
        "اپلوڊ ٿيل دستاويزن کي تصديق ٿيل نشان ڏيڻ کان اڳ تصديق ضروري هوندي.",
      errors: {
        enterName: "مهرباني ڪري پنهنجو نالو داخل ڪريو",
        enterAge: "مهرباني ڪري پنهنجي عمر داخل ڪريو",
        validAge: "مهرباني ڪري صحيح عمر داخل ڪريو",
        selectGender: "مهرباني ڪري پنهنجي جنس چونڊيو",
        enterPhone:
          "مهرباني ڪري پنهنجو فون نمبر داخل ڪريو",
        validPhone:
          "صحيح 10 انگن وارو نمبر داخل ڪريو",
      },
      speechErrors: {
        convertFailed:
          "توهان جي آواز کي متن ۾ تبديل نه ڪري سگهيا. ٻيهر ڪوشش ڪريو.",
        permissionDenied:
          "مائڪروفون جي اجازت رد ڪئي وئي.",
        noMicrophone:
          "ڪو مائڪروفون نه مليو.",
        unable:
          "مائڪروفون تائين رسائي نه ٿي سگهي.",
      },
      aiErrors: {
        timeout:
          "MedFlow جواب ڏيڻ ۾ وڌيڪ وقت وٺي رهيو آهي. پنهنجو ڪنيڪشن چيڪ ڪريو ۽ ٻيهر ڪوشش ڪريو.",
        connection:
          "MedFlow ڪلينڪل انٽيڪ سرور سان ڳنڍجي نه سگهيو. ٻيهر ڪوشش ڪريو.",
      },
    },
  },

  // =====================================================
  // SANSKRIT
  // =====================================================

  sa: {
    translation: {
      secure: "सुरक्षितम्",
      aiHealthcare: "AI-आधारित स्वास्थ्यसेवा",
      yourHealth: "भवतः स्वास्थ्यं।",
      yourRecords: "भवतः अभिलेखाः।",
      onePlace: "एकस्मिन् स्थाने।",
      description:
        "MedFlow भवतः स्वास्थ्येतिहासं चिकित्सकीय-अभिलेखांश्च सुरक्षित-बुद्धिमति-मञ्चे एकत्र आनयति।",
      patients: "रोगिणः",
      accuracy: "सटीकता",
      avgIntake: "औसतसमयः",
      whoAreYouToday: "अद्य भवान् कः?",
      selectRole:
        "आरम्भाय स्वभूमिकां चिनुत",
      patient: "रोगी",
      imPatient: "अहं रोगी अस्मि",
      patientDescription:
        "स्वास्थ्येतिहासं लिखन्तु तथा चिकित्सकीय-अभिलेखान् प्रबन्धयन्तु।",
      healthcareProfessional:
        "स्वास्थ्यसेवा-विशेषज्ञः",
      imDoctor: "अहं चिकित्सकः अस्मि",
      doctorDescription:
        "रोगिणां इतिहासं परीक्ष्य चिकित्सकीय-अभिलेखान् प्रबन्धयन्तु।",
      privacyNote:
        "भवतः स्वास्थ्यसूचना गोपनीयतां सम्मतिं च विचार्य रक्ष्यते।",
      back: "पृष्ठतः",
      profile: "प्रोफाइल्",
      healthIntake: "स्वास्थ्यसूचना",
      records: "अभिलेखाः",
      letsGetStarted: "आरभामहे",
      tellUsAboutYourself:
        "आत्मनः विषये कथयतु",
      basicDetailsDescription:
        "स्वास्थ्यसूचनां आरभ्यतुं पूर्वं केवलं कतिपयाः मूलविवरणाः आवश्यकाः।",
      name: "नाम",
      age: "वयः",
      gender: "लिङ्गम्",
      phoneNumber: "दूरभाष-सङ्ख्या",
      placeholders: {
        fullName: "पूर्णनाम लिखन्तु",
        age: "भवतः वयः",
        mobile: "दशाङ्कीयः मोबाइल्-सङ्ख्या",
        response: "स्वशब्दैः कथयतु...",
      },
      genderOptions: {
        select: "लिङ्गं चिनुत",
        male: "पुरुषः",
        female: "स्त्री",
        other: "अन्यत्",
        preferNotToSay:
          "वक्तुं नेच्छामि",
      },
      continueToHealthIntake:
        "स्वास्थ्यसूचनां प्रति गच्छतु",
      formSecurity:
        "भवतः सूचना केवलं भवतः स्वास्थ्ययात्रायै उपयुज्यते।",
      medxAiAssistant: "MedFlow AI सहायकः",
      understandFeeling:
        "भवान् कथं अनुभूयते इति अवगच्छामः।",
      answerQuestionsDescription:
        "विकल्पं चिनुत अथवा उत्तरं लिखित्वा प्रश्नानाम् उत्तरं ददातु।",
      medxClinicalAssistant:
        "MedFlow चिकित्सकीय सहायकः",
      onlineAiPowered:
        "ऑनलाइन · AI-आधारित सूचना",
      connectionIssue: "सम्पर्कदोषः",
      tryAgain: "पुनः प्रयतताम्",
      continue: "अग्रे गच्छतु",
      intake: {
        selectOption:
          "अधः दत्तेषु विकल्पेषु एकं चिनुत।",
        selectYesNo:
          "कृपया आम् अथवा न इति चिनुत।",
        typeOrVoice:
          "उत्तरं लिखन्तु अथवा स्वर-प्रवेशं प्रयुञ्जीत।",
      },
      voice: {
        stopListening: "श्रवणं स्थगयतु",
        input: "स्वर-प्रवेशः",
      },
      listening:
        "श्रूयते... अधुना वदतु",
      intakeFooter:
        "भवतः उत्तराणि गोपनीयानि सन्ति तथा स्वास्थ्यसेवा-विशेषज्ञेन परीक्ष्यन्ते।",
      historyReady:
        "भवतः स्वास्थ्येतिहासः सिद्धः अस्ति।",
      historyReadyDescription:
        "स्वास्थ्यसेवा-विशेषज्ञस्य परीक्षणाय MedFlow भवतः सूचनां व्यवस्थितवान्।",
      healthIntakeSummary:
        "स्वास्थ्यसूचनासारांशः",
      patientHistoryNotice:
        "एषः रोगिणा प्रदत्तः इतिहासः अस्ति, चिकित्सानिदानं न। अनुज्ञाप्राप्तं स्वास्थ्यसेवा-विशेषज्ञं परामृशन्तु।",
      continueToMedicalRecords:
        "चिकित्सकीय-अभिलेखान् प्रति गच्छतु",
      patientPortal: "रोगी-पोर्टल्",
      medicalRecords: "चिकित्सकीय-अभिलेखाः",
      medicalRecordsDescription:
        "भवतः स्वास्थ्येतिहासः सुरक्षिततया एकस्मिन् स्थाने व्यवस्थितः अस्ति।",
      uploadDocument: "दस्तावेजम् उपारोपयतु",
      recordsProtected:
        "भवतः चिकित्सकीय-अभिलेखाः सुरक्षिताः सन्ति",
      recordsProtectedDescription:
        "सत्यापिताः अभिलेखाः केवलं पठितुं शक्यन्ते, परिवर्तयितुं न शक्यन्ते।",
      searchRecords:
        "चिकित्सकीय-अभिलेखान् अन्विष्यताम्...",
      categories: {
        all: "सर्वाणि दस्तावेजानि",
        labReports: "प्रयोगशाला-प्रतिवेदनानि",
        prescriptions: "औषध-पत्राणि",
        discharge: "निर्गमन-सारांशाः",
        other: "अन्ये दस्तावेजाः",
      },
      documents: "दस्तावेजाः",
      allYourRecords: "भवतः सर्वे अभिलेखाः",
      readOnly: "केवलं पठनीयम्",
      pending: "प्रतीक्ष्यमाणम्",
      source: "स्रोतः",
      date: "दिनाङ्कः",
      verified: "सत्यापितम्",
      pendingVerification:
        "सत्यापनं प्रतीक्ष्यमाणम्",
      view: "पश्यतु",
      noRecordsFound:
        "अभिलेखाः न प्राप्ताः",
      noRecordsDescription:
        "अन्वेषणं परिवर्तयतु अथवा नवीनं दस्तावेजम् उपारोपयतु।",
      medicalDocument: "चिकित्सकीय-दस्तावेजम्",
      uploadRecord: "अभिलेखम् उपारोपयतु",
      uploadRecordDescription:
        "MedFlow स्वास्थ्येतिहासे पूर्वं विद्यमानं चिकित्सकीय-दस्तावेजं योजयतु।",
      fileSelected:
        "सञ्चिका चयनिता · उपारोपणाय सिद्धा",
      chooseDocument: "दस्तावेजं चिनुत",
      acceptedFormats:
        "PDF, JPG अथवा PNG ग्राह्यम्",
      uploadVerificationWarning:
        "उपारोपित-दस्तावेजानां सत्यापनं कृत्वा एव तानि सत्यापितानि इति चिह्नितानि भविष्यन्ति।",
      errors: {
        enterName: "कृपया नाम लिखन्तु",
        enterAge: "कृपया वयः लिखन्तु",
        validAge: "कृपया उचितं वयः लिखन्तु",
        selectGender: "कृपया लिङ्गं चिनुत",
        enterPhone:
          "कृपया दूरभाष-सङ्ख्यां लिखन्तु",
        validPhone:
          "दशाङ्कीयां सम्यक् सङ्ख्यां लिखन्तु",
      },
      speechErrors: {
        convertFailed:
          "स्वरं पाठे परिवर्तयितुं न शक्यम्। पुनः प्रयतताम्।",
        permissionDenied:
          "सूक्ष्मध्वनि-यन्त्रस्य अनुमतिः निषिद्धा।",
        noMicrophone:
          "सूक्ष्मध्वनि-यन्त्रं न प्राप्तम्।",
        unable:
          "सूक्ष्मध्वनि-यन्त्रं प्राप्तुं न शक्यम्।",
      },
      aiErrors: {
        timeout:
          "MedFlow उत्तरं दातुं अधिकं समयं गृह्णाति। सम्पर्कं परीक्ष्य पुनः प्रयतताम्।",
        connection:
          "MedFlow चिकित्सकीय-इन्टेक् सर्वरेण सह संयोजितुं न शक्नोति। पुनः प्रयतताम्।",
      },
    },
  },

  // =====================================================
  // SANTALI
  // =====================================================

  sat: {
    translation: {
      secure: "á±µá±·á±Ÿá±¨á±šá±¥á±Ÿá±¹",
      aiHealthcare: "AI á±«á±Ÿá±¨á±Ÿá±­ á±¥á±Ÿá±¹á±¢á±Ÿá±¹á±­ á±¥á±®á±µá±Ÿ",
      yourHealth: "á±Ÿá±¢á±Ÿá±œ á±¥á±Ÿá±¹á±¢á±Ÿá±¹á±­á±Ÿá±¹",
      yourRecords: "á±Ÿá±¢á±Ÿá±œ á±¨á±®á± á±šá±¨á±°",
      onePlace: "á±¢á±¤á±« á±¡á±Ÿá±­á±œá±Ÿ á±¨á±®",
      description:
        "MedFlow ᱟᱢᱟᱜ ᱥᱟᱹᱢᱟᱹᱭ ᱤᱛᱤᱦᱟᱹᱥ ᱟᱨ ᱢᱮᱰᱤᱠᱟᱞ ᱨᱮᱠᱚᱨᱰ ᱠᱚ ᱢᱤᱫ ᱵᱷᱟᱨᱚᱥᱟᱹ ᱟᱨ ᱵᱩᱫᱷᱤᱢᱟᱱ ᱯᱞᱮᱴᱯᱷᱚᱨᱢ ᱨᱮ ᱢᱤᱫ ᱡᱟᱭᱜᱟ ᱨᱮ ᱟᱹᱜᱩᱭᱟᱹ।",
      patients: "á±¯á±Ÿá±¹á±­á±¤á±±á±´",
      accuracy: "á±¥á±šá±žá±µá±·",
      avgIntake: "á±¥á±Ÿá±¨á±Ÿá±¥á±šá±¨á±¤ á±šá± á±›á±š",
      whoAreYouToday: "á±±á±¤á±­á±Ÿá±¹ á±«á±¤á±± á±Ÿá±¢ á±šá± á±šá±­?",
      selectRole:
        "á±®á±¦á±šá±µ á± á±Ÿá±›á±® á±Ÿá±¢á±Ÿá±œ á±µá±·á±©á±¢á±¤á± á±Ÿ á±µá±Ÿá±ªá±·á±±á±Ÿá±¹",
      patient: "á±¯á±Ÿá±¹á±­á±¤á±±á±´",
      imPatient: "á±¤á±§ á±¢á±¤á±« á±¯á±Ÿá±¹á±­á±¤á±±á±´ á± á±Ÿá±±á±Ÿ",
      patientDescription:
        "á±Ÿá±¢á±Ÿá±œ á±¥á±Ÿá±¹á±¢á±Ÿá±¹á±­ á±¤á±›á±¤á±¦á±Ÿá±¹á±¥ á±¨á±®á± á±šá±¨á±° á±¢á±® á±Ÿá±¨ á±¢á±®á±°á±¤á± á±Ÿá±ž á±¨á±®á± á±šá±¨á±° á± á±š á±¥á±Ÿá±¢á±µá±Ÿá±žá±Ÿá±¹",
      healthcareProfessional:
        "á±¥á±Ÿá±¹á±¢á±Ÿá±¹á±­ á±¥á±®á±µá±Ÿ á±¯á±·á±šá±žá±šá±žá±¤",
      imDoctor: "á±¤á±§ á±¢á±¤á±« á±°á±Ÿá± á±´á±šá±¨ á± á±Ÿá±±á±Ÿ",
      doctorDescription:
        "á±¯á±Ÿá±¹á±­á±¤á±±á±´ á±¤á±›á±¤á±¦á±Ÿá±¹á±¥ á±µá±Ÿá±¹á±ªá±·á±±á±Ÿá±¹ á±Ÿá±¨ á± á±žá±¤á±±á±¤á± á±Ÿá±ž á±¨á±®á± á±šá±¨á±° á±¥á±Ÿá±¢á±µá±Ÿá±žá±Ÿá±¹",
      privacyNote:
        "á±Ÿá±¢á±Ÿá±œ á±¥á±Ÿá±¹á±¢á±Ÿá±¹á±­ á±µá±Ÿá±¹á±¨á±›á±Ÿ á±µá±·á±Ÿá±¨á±šá±¥á±Ÿá±¹ á±Ÿá±¨ á±¥á±šá±¢á±¢á±šá±›á±¤ á±¥á±Ÿá±¦á±Ÿá±­ á±›á±® á±¥á±Ÿá±¢á±µá±Ÿá±žá±Ÿá±¹",
      back: "á±›á±Ÿá±­á±šá±¢",
      profile: "á±¯á±¨á±šá±¯á±·á±Ÿá±­á±¤á±ž",
      healthIntake: "á±¥á±Ÿá±¹á±¢á±Ÿá±¹á±­ á±µá±Ÿá±¹á±¨á±›á±Ÿ",
      records: "á±¨á±®á± á±šá±¨á±°",
      letsGetStarted: "á±®á±¦á±šá±µ á± á±Ÿá±›á±®",
      tellUsAboutYourself:
        "á±Ÿá±¢ á±µá±Ÿá±µá±šá±› á±¨á±® á± á±Ÿá±¹á±¦á±±á±¤ á±¢á±®",
      basicDetailsDescription:
        "á±¥á±Ÿá±¹á±¢á±Ÿá±¹á±­ á±µá±Ÿá±¹á±¨á±›á±Ÿ á±®á±¦á±šá±µ á±¢á±Ÿá±²á±Ÿá± á±›á±¤á±± á±¡á±Ÿá±¹á±›á±¤á±­á±Ÿá±¹ á±µá±Ÿá±¹á±¨á±›á±Ÿ á±«á±š á±¥á±Ÿá±¢á±Ÿá±±á±­á±Ÿ á±›á±® á±¥á±®á±« á±œá±Ÿá±±á±Ÿ",
      name: "á±§á±©á±›á±©á±¢",
      age: "á±©á±¢á±©á±¨",
      gender: "á±žá±¤á±",
      phoneNumber: "á±¯á±·á±³á±± á±±á±šá±¢á±µá±šá±¨",
      placeholders: {
        fullName: "á±Ÿá±¢á±Ÿá±œ á±¯á±©á±¨á±Ÿ á±§á±©á±›á±©á±¢ á±«á±šá±¦á±š",
        age: "á±Ÿá±¢á±Ÿá±œ á±©á±¢á±©á±¨",
        mobile: "10 á±®á±ž á±¢á±³á±µá±Ÿá±­á±ž á±±á±šá±¢á±µá±šá±¨",
        response: "á±Ÿá±¢á±Ÿá±œ á±¥á±Ÿá±µá±Ÿá±› á±›á±® á± á±Ÿá±¹á±¦á±±á±¤ á±¢á±®...",
      },
      genderOptions: {
        select: "á±žá±¤á± á±µá±Ÿá±ªá±·á±±á±Ÿá±¹",
        male: "á± á±šá±²á±Ÿ",
        female: "á± á±©á±²á±¤",
        other: "á±®á±´á±Ÿá±œ",
        preferNotToSay:
          "á±µá±Ÿá±¹á±²á±¤á±¡ á±µá±Ÿá± á± á±Ÿá±¹á±¦á±±á±¤ á±¢á±®",
      },
      continueToHealthIntake:
        "á±¥á±Ÿá±¹á±¢á±Ÿá±¹á±­ á±µá±Ÿá±¹á±¨á±›á±Ÿ á±¨á±® á±µá±šá±žá±šá±œ",
      formSecurity:
        "á±Ÿá±¢á±Ÿá±œ á±µá±Ÿá±¹á±¨á±›á±Ÿ á±«á±š á±¥á±Ÿá±¹á±¢á±Ÿá±¹á±­ á±¥á±®á±µá±Ÿ á± á±Ÿá±¹á±›á±® á± á±®á±ž á±µá±®á±£á±¦á±Ÿá±¨ á± á±Ÿá±›á±® á±¦á±šá±¸á±«á±šá±œá±¼á±Ÿ",
      medxAiAssistant: "MedFlow AI á±¥á±Ÿá±¦á±Ÿá±­á±¤",
      understandFeeling:
        "á±Ÿá±¢ á± á±Ÿá±¹á±¦á±±á±¤ á±¢á±® á± á±Ÿá±¹á±¦á±±á±¤ á±¢á±® á±µá±©á±¡á±·á±Ÿá±¹á±£ á±¢á±®",
      answerQuestionsDescription:
        "á±¢á±¤á±« á±µá±Ÿá±ªá±·á±±á±Ÿá±¹ á±µá±Ÿá±ªá±·á±±á±Ÿá±¹ á±¢á±® á±Ÿá±¨ á±¯á±¨á±¥á±± á± á±š á±¡á±Ÿá±¹á±µá±Ÿá±µ á±¢á±®",
      medxClinicalAssistant:
        "MedFlow á± á±žá±¤á±±á±¤á± á±Ÿá±ž á±¥á±Ÿá±¦á±Ÿá±­á±¤",
      onlineAiPowered:
        "ᱚᱱᱞᱟᱭᱤᱱ · AI ᱵᱟᱹᱨᱛᱟ",
      connectionIssue: "á±¥á±šá±¢á±¯á±šá±¨á±  á±¡á±šá±á±œá±Ÿá±¹á±œ",
      tryAgain: "á±«á±©á±µá±Ÿá±¨á±Ÿ á±ªá±®á±¥á±´á±Ÿ á±¢á±®",
      continue: "á±žá±Ÿá±¦á±Ÿá±£ á±¢á±®",
      intake: {
        selectOption:
          "á±±á±šá± á±Ÿ á±µá±Ÿá±ªá±·á±±á±Ÿá±¹ á±¨á±® á±¢á±¤á±« á±µá±Ÿá±ªá±·á±±á±Ÿá±¹ á±¢á±®",
        selectYesNo:
          "á±¦á±šá±­ á±Ÿá±¨ á±µá±Ÿá± á±¨á±® á±¢á±¤á±« á±µá±Ÿá±ªá±·á±±á±Ÿá±¹ á±¢á±®",
        typeOrVoice:
          "á±Ÿá±¢á±Ÿá±œ á±¡á±Ÿá±¹á±µá±Ÿá±µ á±´á±Ÿá±­á±¯ á±¢á±® á±µá±Ÿ á± á±Ÿá±¹á±›á±·á±Ÿ á±µá±®á±£á±¦á±Ÿá±¨ á±¢á±®",
      },
      voice: {
        stopListening: "á±Ÿá±¹á±¡á±šá±¢ á±µá±šá±±á±« á±¢á±®",
        input: "á± á±Ÿá±¹á±›á±·á±Ÿ á±¤á±±á±¯á±©á±´",
      },
      listening:
        "á±Ÿá±¹á±¡á±šá±¢... á±±á±¤á±› á±¨á±® á± á±Ÿá±¹á±›á±·á±Ÿ á±¢á±®",
      intakeFooter:
        "á±Ÿá±¢á±Ÿá±œ á±¡á±Ÿá±¹á±µá±Ÿá±µ á±œá±šá±¯á±šá±±á±¤á±­á±Ÿ á± á±Ÿá±±á±Ÿ á±Ÿá±¨ á±¥á±Ÿá±¹á±¢á±Ÿá±¹á±­ á±¥á±®á±µá±Ÿ á±¯á±·á±šá±žá±šá±žá±¤ á±«á±Ÿá±¨á±Ÿá±­ á±¨á±® á±¯á±Ÿá±¹á±¨á± á±Ÿá±¹á±­ á±¦á±šá±ªá±šá±œá±¼á±Ÿ",
      historyReady:
        "á±Ÿá±¢á±Ÿá±œ á±¥á±Ÿá±¹á±¢á±Ÿá±¹á±­ á±¤á±›á±¤á±¦á±Ÿá±¹á±¥ á±›á±®á±­á±Ÿá±¨ á± á±Ÿá±±á±Ÿ",
      historyReadyDescription:
        "á±¥á±Ÿá±¹á±¢á±Ÿá±¹á±­ á±¥á±®á±µá±Ÿ á±¯á±·á±šá±žá±šá±žá±¤ á±¯á±Ÿá±¹á±¨á± á±Ÿá±¹á±­ á± á±Ÿá±¹á±›á±® MedFlow á±Ÿá±¢á±Ÿá±œ á±µá±Ÿá±¹á±¨á±›á±Ÿ á±¥á±Ÿá±¢á±Ÿá±¹á±žá±Ÿá±¹á±£ á± á±Ÿá±«á±Ÿ",
      healthIntakeSummary:
        "á±¥á±Ÿá±¹á±¢á±Ÿá±¹á±­ á±µá±Ÿá±¹á±¨á±›á±Ÿ á±¥á±Ÿá±¨á±Ÿá±á±¥",
      patientHistoryNotice:
        "á±±á±šá±£á±Ÿ á±¯á±Ÿá±¹á±­á±¤á±±á±´ á±«á±Ÿá±¨á±Ÿá±­ á±µá±Ÿá±¹á±¨á±›á±Ÿ á± á±Ÿá±±á±Ÿ á±Ÿá±¨ á±¢á±®á±°á±¤á± á±Ÿá±ž á±°á±¤á±­á±Ÿá±œá±½á±±á±šá±¥á±¤á±¥ á±µá±Ÿá± á± á±Ÿá±±á±Ÿ",
      continueToMedicalRecords:
        "á±¢á±®á±°á±¤á± á±Ÿá±ž á±¨á±®á± á±šá±¨á±° á±¨á±® á±µá±šá±žá±šá±œ",
      patientPortal: "á±¯á±Ÿá±¹á±­á±¤á±±á±´ á±¯á±³á±¨á±´á±Ÿá±ž",
      medicalRecords: "á±¢á±®á±°á±¤á± á±Ÿá±ž á±¨á±®á± á±šá±¨á±°",
      medicalRecordsDescription:
        "á±Ÿá±¢á±Ÿá±œ á±¥á±Ÿá±¹á±¢á±Ÿá±¹á±­ á±¤á±›á±¤á±¦á±Ÿá±¹á±¥ á±µá±·á±Ÿá±¨á±šá±¥á±Ÿá±¹ á±›á±® á±¢á±¤á±« á±¡á±Ÿá±­á±œá±Ÿ á±¨á±® á±¥á±Ÿá±¢á±µá±Ÿá±žá±Ÿá±¹",
      uploadDocument: "á±°á±šá± á±©á±¢á±®á±±á±´ á±Ÿá±¯á±žá±³á±° á±¢á±®",
      recordsProtected:
        "á±Ÿá±¢á±Ÿá±œ á±¢á±®á±°á±¤á± á±Ÿá±ž á±¨á±®á± á±šá±¨á±° á±µá±Ÿá±ªá±Ÿá±£ á± á±Ÿá±±á±Ÿ",
      recordsProtectedDescription:
        "á±¯á±¨á±šá±¢á±Ÿá±±á±¤á±› á±¨á±®á± á±šá±¨á±° á± á±š á± á±®á±ž á±¯á±Ÿá±²á±¦á±Ÿá±£ á±¢á±® á±Ÿá±¨ á±µá±šá±«á±šá±ž á±µá±Ÿá± á± á±Ÿá±›á±® á±¥á±Ÿá±¢á±µá±Ÿá±žá±Ÿá±¹",
      searchRecords:
        "á±Ÿá±¢á±Ÿá±œ á±¢á±®á±°á±¤á± á±Ÿá±ž á±¨á±®á± á±šá±¨á±° á±¥á±šá±«á±· á±¢á±®...",
      categories: {
        all: "á±¡á±šá±›á±š á±°á±šá± á±©á±¢á±®á±±á±´",
        labReports: "á±žá±®á±µ á±¨á±¤á±¯á±šá±¨á±´",
        prescriptions: "á±¯á±¨á±¤á±¥á± á±¨á±¤á±¯á±¥á±šá±±",
        discharge: "á±°á±¤á±¥á±ªá±Ÿá±¨á±¡á±½ á±¥á±Ÿá±¨á±Ÿá±á±¥",
        other: "á±®á±´á±Ÿá±œ á±°á±šá± á±©á±¢á±®á±±á±´",
      },
      documents: "á±°á±šá± á±©á±¢á±®á±±á±´",
      allYourRecords: "á±Ÿá±¢á±Ÿá±œ á±¡á±šá±›á±š á±¨á±®á± á±šá±¨á±°",
      readOnly: "á±¯á±Ÿá±²á±¦á±Ÿá±£ á±¢á±®",
      pending: "á±¯á±®á±±á±°á±¤á±",
      source: "á±¥á±šá±¨á±¥",
      date: "á±¢á±Ÿá±¹á±¦á±¤á±›",
      verified: "á±¯á±¨á±šá±¢á±Ÿá±±á±¤á±›",
      pendingVerification:
        "á±¯á±¨á±šá±¢á±Ÿá±±á±¤á± á±šá±¨á±šá±± á±¯á±®á±±á±°á±¤á±",
      view: "á±§á±®á±ž á±¢á±®",
      noRecordsFound:
        "á±¡á±Ÿá±¦á±Ÿá±¸ á±¨á±®á± á±šá±¨á±° á±µá±Ÿá± á±§á±Ÿá±¢á±Ÿ",
      noRecordsDescription:
        "á±Ÿá±¢á±Ÿá±œ á±¥á±šá±«á±· á±µá±šá±«á±šá±ž á±¢á±® á±µá±Ÿ á±±á±Ÿá±£á±Ÿ á±°á±šá± á±©á±¢á±®á±±á±´ á±Ÿá±¯á±žá±³á±° á±¢á±®",
      medicalDocument: "á±¢á±®á±°á±¤á± á±Ÿá±ž á±°á±šá± á±©á±¢á±®á±±á±´",
      uploadRecord: "á±¢á±¤á±« á±¨á±®á± á±šá±¨á±° á±Ÿá±¯á±žá±³á±° á±¢á±®",
      uploadRecordDescription:
        "á±Ÿá±¢á±Ÿá±œ MedFlow á±¥á±Ÿá±¹á±¢á±Ÿá±¹á±­ á±¤á±›á±¤á±¦á±Ÿá±¹á±¥ á±¨á±® á±¢á±Ÿá±²á±Ÿá± á±¢á±®á±°á±¤á± á±Ÿá±ž á±°á±šá± á±©á±¢á±®á±±á±´ á±¥á±®á±žá±®á±« á±¢á±®",
      fileSelected:
        "ᱯᱷᱟᱭᱤᱞ ᱵᱟᱪᱷᱱᱟᱹ · ᱟᱯᱞᱳᱰ ᱠᱟᱛᱮ ᱛᱮᱭᱟᱨ",
      chooseDocument: "á±°á±šá± á±©á±¢á±®á±±á±´ á±µá±Ÿá±ªá±·á±±á±Ÿá±¹",
      acceptedFormats:
        "PDF, JPG á±µá±Ÿ á±¯á±·á±šá±¨á±¢á±®á±´ á±œá±šá±«á±Ÿá±¹ á± á±Ÿá±±á±Ÿ",
      uploadVerificationWarning:
        "á±Ÿá±¯á±žá±³á±° á± á±Ÿá±±á±Ÿ á±°á±šá± á±©á±¢á±®á±±á±´ á± á±š á±¯á±¨á±šá±¢á±Ÿá±±á±¤á±› á± á±Ÿá±›á±® á±ªá±¤á±¦á±±á±Ÿá±¹ á±¢á±Ÿá±²á±Ÿá± á±¡á±Ÿá±¹á±§á±ª á±¡á±Ÿá±¹á±›á±¤ á± á±Ÿá±±á±Ÿ",
      errors: {
        enterName: "á±¢á±Ÿá±¹á±¦á±¤á±±á±Ÿ á±›á±® á±Ÿá±¢á±Ÿá±œ á±§á±©á±›á±©á±¢ á±«á±šá±¦á±š",
        enterAge: "á±¢á±Ÿá±¹á±¦á±¤á±±á±Ÿ á±›á±® á±Ÿá±¢á±Ÿá±œ á±©á±¢á±©á±¨ á±«á±šá±¦á±š",
        validAge: "á±¢á±Ÿá±¹á±¦á±¤á±±á±Ÿ á±›á±® á±¥á±šá±žá±µá±· á±©á±¢á±©á±¨ á±«á±šá±¦á±š",
        selectGender: "á±¢á±Ÿá±¹á±¦á±¤á±±á±Ÿ á±›á±® á±žá±¤á± á±µá±Ÿá±ªá±·á±±á±Ÿá±¹",
        enterPhone:
          "á±¢á±Ÿá±¹á±¦á±¤á±±á±Ÿ á±›á±® á±¯á±·á±³á±± á±±á±šá±¢á±µá±šá±¨ á±«á±šá±¦á±š",
        validPhone:
          "á±¥á±šá±žá±µá±· 10 á±®á±ž á±±á±šá±¢á±µá±šá±¨ á±«á±šá±¦á±š",
      },
      speechErrors: {
        convertFailed:
          "á±Ÿá±¢á±Ÿá±œ á± á±Ÿá±¹á±›á±·á±Ÿ á±´á±®á± á±¥á±´ á±¨á±® á±µá±šá±«á±šá±ž á±µá±Ÿá± á± á±Ÿá±›á±® á±¦á±šá±ªá±šá±œá±¼á±Ÿ",
        permissionDenied:
          "á±¢á±Ÿá±­á± á±¨á±šá±¯á±·á±šá±± á±Ÿá±¹á±±á±©á±¢á±šá±›á±¤ á±µá±Ÿá± á±§á±Ÿá±¢á±Ÿ",
        noMicrophone:
          "á±¢á±Ÿá±­á± á±¨á±šá±¯á±·á±šá±± á±µá±Ÿá± á±§á±Ÿá±¢á±Ÿ",
        unable:
          "á±¢á±Ÿá±­á± á±¨á±šá±¯á±·á±šá±± á±¨á±® á±µá±šá±žá±šá±œ á±µá±Ÿá± á± á±Ÿá±›á±® á±¦á±šá±ªá±šá±œá±¼á±Ÿ",
      },
      aiErrors: {
        timeout:
          "MedFlow á±¡á±Ÿá±¹á±µá±Ÿá±µ á±®á±¢ á± á±Ÿá±›á±® á±Ÿá±«á±·á±¤á±  á±šá± á±›á±š á±œá±®á±±á±Ÿ",
        connection:
          "MedFlow á± á±žá±¤á±±á±¤á± á±Ÿá±ž á±¤á±±á±´á±®á±  á±¥á±Ÿá±¨á±µá±šá±¨ á±¨á±® á±µá±šá±žá±šá±œ á±µá±Ÿá± á± á±Ÿá±›á±® á±¦á±šá±ªá±šá±œá±¼á±Ÿ",
      },
    },
  },

  // =====================================================
  // MANIPURI
  // =====================================================

  mni: {
    translation: {
      secure: "ê¯†ê¯¤ê¯¡ê¯Šê¯•",
      aiHealthcare: "AI-ê¯„ê¯¨ê¯Ÿê¯…ê¯¥ ê¯Šê¯¥ê¯’ê¯ ê¯„ê¯¥ ê¯ê¯¥ê¯ê¯Œê¯¦ê¯Ÿê¯",
      yourHealth: "ê¯…ê¯ê¯¥ê¯›ê¯€ê¯¤ ê¯ê¯¥ê¯ê¯Œê¯¦ê¯Ÿê¯",
      yourRecords: "ê¯…ê¯ê¯¥ê¯›ê¯€ê¯¤ ê¯”ê¯¦ê¯€ê¯£ê¯”ê¯­ê¯—",
      onePlace: "ê¯‘ê¯ƒê¯¥ê¯ê¯¤ê¯—",
      description:
        "MedFlow ê¯…ê¯ê¯¥ê¯›ê¯€ê¯¤ ê¯ê¯¥ê¯ê¯Œê¯¦ê¯Ÿê¯ ê¯‘ê¯ƒê¯ê¯¨ê¯¡ ê¯ƒê¯¦ê¯—ê¯¤ê¯€ê¯¦ê¯œ ê¯”ê¯¦ê¯€ê¯£ê¯”ê¯­ê¯—ê¯ê¯¤ê¯¡ ê¯‘ê¯ƒê¯¥ ê¯†ê¯¤ê¯¡ê¯Šê¯• ê¯‘ê¯ƒê¯ê¯¨ê¯¡ ê¯„ê¯¨ê¯Ÿê¯…ê¯¥ ê¯ê¯¤ê¯¡ê¯–ê¯¤ê¯Ÿê¯• ê¯„ê¯­ê¯‚ê¯¦ê¯ ê¯ê¯£ê¯”ê¯ê¯—ê¯¥ ê¯†ê¯¦ê¯ ê¯…ê¯•ê¯¥",
      patients: "ê¯„ê¯¦ê¯ê¯¦ê¯Ÿê¯ ",
      accuracy: "ê¯†ê¯¨ê¯ê¯…ê¯•",
      avgIntake: "ê¯‘ê¯ƒê¯¨ê¯›ê¯€ê¯¤ ê¯ƒê¯‡ê¯",
      whoAreYouToday: "ê¯…ê¯¨ê¯ƒê¯¤ê¯ ê¯‡ê¯¥ ê¯…ê¯ê¯¥ê¯› ê¯€ê¯…ê¯¥?",
      selectRole:
        "ê¯ê¯§ê¯–ê¯¤ê¯›ê¯€ê¯¤ ê¯ƒê¯ˆê¯¥ê¯—ê¯¥ ê¯…ê¯ê¯¥ê¯›ê¯€ê¯¤ ê¯ƒê¯ê¯¤ê¯¡ ê¯ˆê¯Ÿê¯•ê¯¤ê¯Œê¯¨",
      patient: "ê¯„ê¯¦ê¯ê¯¦ê¯Ÿê¯ ",
      imPatient: "ê¯‘ê¯© ê¯„ê¯¦ê¯ê¯¦ê¯Ÿê¯  ê¯‘ê¯ƒê¯…ê¯¤",
      patientDescription:
        "ê¯…ê¯ê¯¥ê¯›ê¯€ê¯¤ ê¯ê¯¥ê¯ê¯Œê¯¦ê¯Ÿê¯ ê¯ê¯‡ê¯¤ê¯ê¯¥ê¯ ê¯”ê¯¦ê¯€ê¯£ê¯”ê¯­ê¯— ê¯‡ê¯§ê¯•ê¯¤ê¯Œê¯¨ ê¯‘ê¯ƒê¯ê¯¨ê¯¡ ê¯ƒê¯¦ê¯—ê¯¤ê¯€ê¯¦ê¯œ ê¯”ê¯¦ê¯€ê¯£ê¯”ê¯­ê¯—ê¯ê¯¤ê¯¡ ê¯ê¯¥ê¯ê¯…ê¯•ê¯¤ê¯Œê¯¨",
      healthcareProfessional:
        "ê¯ê¯¥ê¯ê¯Œê¯¦ê¯Ÿê¯ ê¯„ê¯­ê¯”ê¯£ê¯ê¯¦ê¯ê¯…ê¯¦ê¯œ",
      imDoctor: "ê¯‘ê¯© ê¯—ê¯£ê¯›ê¯‡ê¯”ê¯…ê¯¤",
      doctorDescription:
        "ê¯„ê¯¦ê¯ê¯¦ê¯Ÿê¯ ê¯€ê¯¤ ê¯ê¯‡ê¯¤ê¯ê¯¥ê¯ ê¯ˆê¯Ÿê¯•ê¯¤ê¯Œê¯¨ ê¯‘ê¯ƒê¯ê¯¨ê¯¡ ê¯€ê¯­ê¯‚ê¯¤ê¯…ê¯¤ê¯€ê¯¦ê¯œ ê¯”ê¯¦ê¯€ê¯£ê¯”ê¯­ê¯— ê¯ê¯¥ê¯ê¯…ê¯•ê¯¤ê¯Œê¯¨",
      privacyNote:
        "ê¯…ê¯ê¯¥ê¯›ê¯€ê¯¤ ê¯ê¯¥ê¯ê¯Œê¯¦ê¯Ÿê¯ ê¯ê¯…ê¯ê¯£ê¯”ê¯ƒê¯¦ê¯ê¯Ÿ ê¯„ê¯­ê¯”ê¯¥ê¯ê¯•ê¯¦ê¯ê¯¤ ê¯‘ê¯ƒê¯ê¯¨ê¯¡ ê¯ê¯ê¯ƒê¯‡ê¯¤ ê¯ˆê¯Ÿê¯—ê¯¨ê¯…ê¯¥ ê¯ê¯¥ê¯ê¯…ê¯•ê¯¤ê¯Œê¯¨",
      back: "ê¯ê¯¥ê¯Ÿê¯…ê¯¥",
      profile: "ê¯„ê¯­ê¯”ê¯£ê¯ê¯¥ê¯ê¯œ",
      healthIntake: "ê¯ê¯¥ê¯ê¯Œê¯¦ê¯Ÿê¯ ê¯ê¯…ê¯ê¯£ê¯”ê¯ƒê¯¦ê¯ê¯Ÿ",
      records: "ê¯”ê¯¦ê¯€ê¯£ê¯”ê¯­ê¯—",
      letsGetStarted: "ê¯ê¯§ê¯–ê¯¤ê¯€ê¯„ê¯¥",
      tellUsAboutYourself:
        "ê¯…ê¯ê¯¥ê¯›ê¯€ê¯¤ ê¯ƒê¯”ê¯ê¯—ê¯¥ ê¯ê¯¥ê¯ê¯•ê¯¤ê¯Œê¯¨",
      basicDetailsDescription:
        "ê¯ê¯¥ê¯ê¯Œê¯¦ê¯Ÿê¯ ê¯ê¯…ê¯ê¯£ê¯”ê¯ƒê¯¦ê¯ê¯Ÿ ê¯ê¯§ê¯–ê¯¤ê¯›ê¯‚ê¯¤ ê¯„ê¯­ê¯”ê¯¤ê¯‡ê¯¤ ê¯€ê¯…ê¯¥ ê¯ƒê¯”ê¯¨ê¯‘ê¯£ê¯ê¯•ê¯¥ ê¯ê¯…ê¯ê¯£ê¯”ê¯ƒê¯¦ê¯ê¯Ÿ ê¯‘ê¯ƒê¯ê¯¨ê¯¡ ê¯ƒê¯ê¯¤ê¯¡ ê¯„ê¯¤ê¯•ê¯¤ê¯Œê¯¨",
      name: "ê¯ƒê¯¤ê¯¡",
      age: "ê¯†ê¯ê¯¤",
      gender: "ê¯ƒê¯ê¯¤ê¯¡",
      phoneNumber: "ê¯ê¯£ê¯… ê¯…ê¯ê¯•ê¯”",
      placeholders: {
        fullName: "ê¯…ê¯ê¯¥ê¯›ê¯€ê¯¤ ê¯„ê¯¨ê¯”ê¯¥ ê¯ƒê¯¤ê¯¡ ê¯ê¯Ÿê¯„ê¯¨ê¯  ê¯‡ê¯§ê¯•ê¯¤ê¯Œê¯¨",
        age: "ê¯…ê¯ê¯¥ê¯›ê¯€ê¯¤ ê¯†ê¯ê¯¤",
        mobile: "10 ê¯—ê¯¤ê¯–ê¯¤ê¯  ê¯ƒê¯£ê¯•ê¯¥ê¯ê¯œ ê¯…ê¯ê¯•ê¯”",
        response: "ê¯…ê¯ê¯¥ê¯›ê¯€ê¯¤ ê¯‹ê¯¥ê¯ê¯ªê¯—ê¯¥ ê¯ê¯¥ê¯ê¯•ê¯¤ê¯Œê¯¨...",
      },
      genderOptions: {
        select: "ê¯ƒê¯ê¯¤ê¯¡ ê¯ˆê¯Ÿê¯•ê¯¤ê¯Œê¯¨",
        male: "ê¯…ê¯¨ê¯„ê¯¥",
        female: "ê¯…ê¯¨ê¯„ê¯¤",
        other: "ê¯‘ê¯‡ê¯£ê¯žê¯„",
        preferNotToSay:
          "ê¯ê¯¥ê¯ê¯•ê¯¥ ê¯†ê¯¥ê¯…ê¯•ê¯¥ ê¯‚ê¯©ê¯‡ê¯¦",
      },
      continueToHealthIntake:
        "ê¯ê¯¥ê¯ê¯Œê¯¦ê¯Ÿê¯ ê¯ê¯…ê¯ê¯£ê¯”ê¯ƒê¯¦ê¯ê¯Ÿê¯—ê¯¥ ê¯†ê¯ ê¯‚ê¯¨",
      formSecurity:
        "ê¯…ê¯ê¯¥ê¯›ê¯€ê¯¤ ê¯ê¯…ê¯ê¯£ê¯”ê¯ƒê¯¦ê¯ê¯Ÿ ê¯…ê¯ê¯¥ê¯›ê¯€ê¯¤ ê¯ê¯¥ê¯ê¯Œê¯¦ê¯Ÿê¯ ê¯„ê¯¥ê¯¡ê¯Šê¯£ê¯›ê¯„ê¯¥ ê¯„ê¯¨ê¯Ÿê¯…ê¯¥ ê¯Œê¯¨ê¯–ê¯¤ê¯Ÿê¯•ê¯¥ ê¯‡ê¯§ê¯•ê¯¥ ê¯‚ê¯©ê¯•ê¯¥",
      medxAiAssistant: "MedFlow AI ê¯ê¯ê¯¥ê¯ê¯•ê¯¥",
      understandFeeling:
        "ê¯…ê¯ê¯¥ê¯› ê¯€ê¯ê¯…ê¯¥ ê¯…ê¯£ê¯¡ê¯–ê¯”ê¯¤ ê¯ê¯¥ê¯ê¯•ê¯¥ ê¯ˆê¯Ÿê¯…ê¯•ê¯¥ ê¯‡ê¯§ê¯ê¯¤",
      answerQuestionsDescription:
        "ê¯‘ê¯ƒê¯ê¯¨ê¯¡ ê¯‘ê¯£ê¯„ê¯ê¯Ÿ ê¯ˆê¯Ÿê¯•ê¯¤ê¯Œê¯¨ ê¯…ê¯ ê¯”ê¯’ê¯¥ ê¯…ê¯ê¯¥ê¯›ê¯€ê¯¤ ê¯”ê¯¦ê¯ê¯„ê¯£ê¯Ÿê¯ ê¯‡ê¯¥ê¯ê¯ž ê¯‡ê¯§ê¯•ê¯¤ê¯Œê¯¨",
      medxClinicalAssistant:
        "MedFlow ê¯€ê¯­ê¯‚ê¯¤ê¯…ê¯¤ê¯€ê¯¦ê¯œ ê¯ê¯ê¯¥ê¯ê¯•ê¯¥",
      onlineAiPowered:
        "ꯑꯣꯅꯂꯥꯏꯅ · AI-ꯄꯨꯟꯅꯥ",
      connectionIssue: "ê¯€ê¯Ÿê¯…ê¯¦ê¯›ê¯ê¯Ÿ ê¯ê¯¤ê¯”ê¯¥ê¯ê¯¤",
      tryAgain: "ê¯‘ê¯ƒê¯¨ê¯› ê¯†ê¯¤ê¯¡ê¯Šê¯•ê¯¤ê¯Œê¯¨",
      continue: "ê¯ƒê¯ˆê¯¥ ê¯†ê¯ ê¯‚ê¯¨",
      intake: {
        selectOption:
          "ê¯ˆê¯¥ê¯…ê¯¥ ê¯‘ê¯£ê¯„ê¯ê¯Ÿê¯ê¯¤ê¯¡ê¯—ê¯’ê¯¤ ê¯‘ê¯ƒê¯¥ ê¯ˆê¯Ÿê¯•ê¯¤ê¯Œê¯¨",
        selectYesNo:
          "ê¯ê¯¥ê¯ ê¯…ê¯ ê¯”ê¯’ê¯¥ ê¯…ê¯¥ê¯ê¯¥ê¯ ê¯ˆê¯Ÿê¯•ê¯¤ê¯Œê¯¨",
        typeOrVoice:
          "ê¯…ê¯ê¯¥ê¯›ê¯€ê¯¤ ê¯”ê¯¦ê¯ê¯„ê¯£ê¯Ÿê¯ ê¯‡ê¯¥ê¯ê¯ž ê¯‡ê¯§ê¯•ê¯¤ê¯Œê¯¨ ê¯…ê¯ ê¯”ê¯’ê¯¥ ê¯šê¯£ê¯ê¯ ê¯ê¯Ÿê¯„ê¯¨ê¯  ê¯Œê¯¨ê¯–ê¯¤ê¯Ÿê¯•ê¯¤ê¯Œê¯¨",
      },
      voice: {
        stopListening: "ê¯ê¯¥ê¯Ÿê¯…ê¯¥ ê¯‡ê¯¥ê¯•ê¯¥ ê¯‚ê¯©ê¯‡ê¯¦",
        input: "ê¯šê¯£ê¯ê¯ ê¯ê¯Ÿê¯„ê¯¨ê¯ ",
      },
      listening:
        "ê¯‡ê¯¥ê¯•ê¯¥... ê¯ê¯§ê¯–ê¯¤ê¯› ê¯‹ê¯¥ê¯ê¯ª ê¯ê¯¥ê¯ê¯•ê¯¤ê¯Œê¯¨",
      intakeFooter:
        "ê¯…ê¯ê¯¥ê¯›ê¯€ê¯¤ ê¯”ê¯¦ê¯ê¯„ê¯£ê¯Ÿê¯ê¯ê¯¤ê¯¡ ê¯„ê¯­ê¯”ê¯¥ê¯ê¯šê¯¦ê¯  ê¯‘ê¯ƒê¯ê¯¨ê¯¡ ê¯ê¯¥ê¯ê¯Œê¯¦ê¯Ÿê¯ ê¯„ê¯­ê¯”ê¯£ê¯ê¯¦ê¯ê¯…ê¯¦ê¯œê¯…ê¯¥ ê¯ˆê¯Ÿê¯•ê¯¤ê¯Œê¯¦",
      historyReady:
        "ê¯…ê¯ê¯¥ê¯›ê¯€ê¯¤ ê¯ê¯¥ê¯ê¯Œê¯¦ê¯Ÿê¯ ê¯ê¯‡ê¯¤ê¯ê¯¥ê¯ ê¯ê¯¤ê¯–ê¯¤ê¯Ÿê¯…ê¯•ê¯¥ ê¯‡ê¯¥ê¯ê¯”ê¯¤",
      historyReadyDescription:
        "MedFlow ê¯…ê¯ê¯¥ê¯›ê¯€ê¯¤ ê¯ê¯…ê¯ê¯£ê¯”ê¯ƒê¯¦ê¯ê¯Ÿ ê¯ê¯¥ê¯ê¯Œê¯¦ê¯Ÿê¯ ê¯„ê¯­ê¯”ê¯£ê¯ê¯¦ê¯ê¯…ê¯¦ê¯œê¯€ê¯¤ ê¯ˆê¯Ÿê¯•ê¯¥ ê¯„ê¯¥ê¯¡ê¯Šê¯£ê¯›ê¯„ê¯¥ ê¯‡ê¯§ê¯•ê¯¤ê¯Œê¯¦",
      healthIntakeSummary:
        "ê¯ê¯¥ê¯ê¯Œê¯¦ê¯Ÿê¯ ê¯ê¯…ê¯ê¯£ê¯”ê¯ƒê¯¦ê¯ê¯Ÿ ê¯ê¯¥ê¯”ê¯¥ê¯¡ê¯",
      patientHistoryNotice:
        "ê¯ƒê¯ê¯¤ ê¯„ê¯¦ê¯ê¯¦ê¯Ÿê¯ ê¯…ê¯¥ ê¯„ê¯¤ê¯”ê¯¤ê¯•ê¯¥ ê¯ê¯‡ê¯¤ê¯ê¯¥ê¯ê¯…ê¯¤ ê¯‘ê¯ƒê¯ê¯¨ê¯¡ ê¯ƒê¯¦ê¯—ê¯¤ê¯€ê¯¦ê¯œ ê¯—ê¯¥ê¯ê¯’ê¯…ê¯£ê¯ê¯¤ê¯ ê¯…ê¯ ê¯‡ê¯¦",
      continueToMedicalRecords:
        "ê¯ƒê¯¦ê¯—ê¯¤ê¯€ê¯¦ê¯œ ê¯”ê¯¦ê¯€ê¯£ê¯”ê¯­ê¯—ê¯ê¯¤ê¯¡ê¯—ê¯¥ ê¯†ê¯ ê¯‚ê¯¨",
      patientPortal: "ê¯„ê¯¦ê¯ê¯¦ê¯Ÿê¯  ê¯„ê¯£ê¯”ê¯‡ê¯¦ê¯œ",
      medicalRecords: "ê¯ƒê¯¦ê¯—ê¯¤ê¯€ê¯¦ê¯œ ê¯”ê¯¦ê¯€ê¯£ê¯”ê¯­ê¯—",
      medicalRecordsDescription:
        "ê¯…ê¯ê¯¥ê¯›ê¯€ê¯¤ ê¯ê¯¥ê¯ê¯Œê¯¦ê¯Ÿê¯ ê¯ê¯‡ê¯¤ê¯ê¯¥ê¯ ê¯†ê¯¤ê¯¡ê¯Šê¯•ê¯¥ ê¯‘ê¯ƒê¯¥ê¯—ê¯¥ ê¯ê¯¥ê¯ê¯…ê¯•ê¯¥ ê¯‡ê¯§ê¯•ê¯¤ê¯Œê¯¦",
      uploadDocument: "ê¯—ê¯£ê¯€ê¯¨ê¯ƒê¯¦ê¯Ÿê¯  ê¯‘ê¯„ê¯‚ê¯£ê¯— ê¯‡ê¯§ê¯•ê¯¤ê¯Œê¯¨",
      recordsProtected:
        "ê¯…ê¯ê¯¥ê¯›ê¯€ê¯¤ ê¯ƒê¯¦ê¯—ê¯¤ê¯€ê¯¦ê¯œ ê¯”ê¯¦ê¯€ê¯£ê¯”ê¯­ê¯—ê¯ê¯¤ê¯¡ ê¯†ê¯¤ê¯¡ê¯Šê¯•ê¯¥",
      recordsProtectedDescription:
        "ê¯šê¯¦ê¯”ê¯¤ê¯ê¯¥ê¯ê¯— ê¯”ê¯¦ê¯€ê¯£ê¯”ê¯­ê¯—ê¯ê¯¤ê¯¡ ê¯‘ê¯—ê¯¨ ê¯„ê¯¥ê¯”ê¯¥ê¯•ê¯¥ ê¯‰ê¯ê¯ƒê¯¤ ê¯‘ê¯ƒê¯ê¯¨ê¯¡ ê¯‘ê¯ƒê¯¨ê¯› ê¯…ê¯¥ê¯¡ê¯•ê¯¥ ê¯Œê¯¥ê¯”ê¯£ê¯",
      searchRecords:
        "ê¯…ê¯ê¯¥ê¯›ê¯€ê¯¤ ê¯ƒê¯¦ê¯—ê¯¤ê¯€ê¯¦ê¯œ ê¯”ê¯¦ê¯€ê¯£ê¯”ê¯­ê¯— ê¯Šê¯¤ê¯•ê¯¤ê¯Œê¯¨...",
      categories: {
        all: "ê¯„ê¯¨ê¯Ÿê¯…ê¯¥ ê¯—ê¯£ê¯€ê¯¨ê¯ƒê¯¦ê¯Ÿê¯ ",
        labReports: "ê¯‚ê¯¦ê¯• ê¯”ê¯¤ê¯„ê¯£ê¯”ê¯‡",
        prescriptions: "ê¯„ê¯­ê¯”ê¯¤ê¯ê¯­ê¯€ê¯­ê¯”ê¯¤ê¯„ê¯ê¯Ÿ",
        discharge: "ê¯—ê¯¤ê¯ê¯†ê¯¥ê¯”ê¯– ê¯ê¯¥ê¯”ê¯¥ê¯¡ê¯",
        other: "ê¯‘ê¯‡ê¯£ê¯žê¯„ ê¯—ê¯£ê¯€ê¯¨ê¯ƒê¯¦ê¯Ÿê¯ ",
      },
      documents: "ê¯—ê¯£ê¯€ê¯¨ê¯ƒê¯¦ê¯Ÿê¯ ",
      allYourRecords: "ê¯…ê¯ê¯¥ê¯›ê¯€ê¯¤ ê¯„ê¯¨ê¯Ÿê¯…ê¯¥ ê¯”ê¯¦ê¯€ê¯£ê¯”ê¯­ê¯—",
      readOnly: "ê¯„ê¯¥ê¯”ê¯¥ê¯•ê¯¥ ê¯ˆê¯›",
      pending: "ê¯„ê¯¦ê¯Ÿê¯—ê¯¤ê¯¡",
      source: "ê¯ê¯£ê¯”ê¯",
      date: "ê¯†ê¯©ê¯”ê¯¥ê¯›",
      verified: "ê¯šê¯¦ê¯”ê¯¤ê¯ê¯¥ê¯",
      pendingVerification:
        "ê¯šê¯¦ê¯”ê¯¤ê¯ê¯¤ê¯€ê¯¦ê¯ê¯Ÿ ê¯„ê¯¦ê¯Ÿê¯—ê¯¤ê¯¡",
      view: "ê¯Œê¯¦ê¯¡ê¯•ê¯¤ê¯Œê¯¨",
      noRecordsFound:
        "ê¯”ê¯¦ê¯€ê¯£ê¯”ê¯­ê¯— ê¯ê¯ªê¯—ê¯¦",
      noRecordsDescription:
        "ê¯…ê¯ê¯¥ê¯›ê¯€ê¯¤ ê¯ê¯”ê¯† ê¯‘ê¯—ê¯¨ ê¯ê¯£ê¯œê¯‚ê¯¨ ê¯…ê¯ ê¯”ê¯’ê¯¥ ê¯…ê¯§ê¯–ê¯¤ê¯œ ê¯—ê¯£ê¯€ê¯¨ê¯ƒê¯¦ê¯Ÿê¯  ê¯‘ê¯„ê¯‚ê¯£ê¯— ê¯‡ê¯§ê¯•ê¯¤ê¯Œê¯¨",
      medicalDocument: "ê¯ƒê¯¦ê¯—ê¯¤ê¯€ê¯¦ê¯œ ê¯—ê¯£ê¯€ê¯¨ê¯ƒê¯¦ê¯Ÿê¯ ",
      uploadRecord: "ê¯”ê¯¦ê¯€ê¯£ê¯”ê¯­ê¯— ê¯‘ê¯ƒê¯¥ ê¯‘ê¯„ê¯‚ê¯£ê¯— ê¯‡ê¯§ê¯•ê¯¤ê¯Œê¯¨",
      uploadRecordDescription:
        "ê¯…ê¯ê¯¥ê¯›ê¯€ê¯¤ MedFlow ê¯ê¯¥ê¯ê¯Œê¯¦ê¯Ÿê¯ ê¯ê¯‡ê¯¤ê¯ê¯¥ê¯ê¯—ê¯¥ ê¯ƒê¯ƒê¯¥ê¯¡ê¯—ê¯¥ ê¯‚ê¯©ê¯”ê¯¤ê¯•ê¯¥ ê¯ƒê¯¦ê¯—ê¯¤ê¯€ê¯¦ê¯œ ê¯—ê¯£ê¯€ê¯¨ê¯ƒê¯¦ê¯Ÿê¯  ê¯‘ê¯ƒê¯¥ ê¯ê¯¥ê¯„ê¯†ê¯¤ê¯œê¯‚ê¯¨",
      fileSelected:
        "ꯐꯥꯏꯜ ꯈꯟꯕꯤꯌꯦ · ꯑꯄꯂꯣꯗ ꯇꯧꯕꯥ ꯌꯥꯔꯦ",
      chooseDocument: "ê¯—ê¯£ê¯€ê¯¨ê¯ƒê¯¦ê¯Ÿê¯  ê¯ˆê¯Ÿê¯•ê¯¤ê¯Œê¯¨",
      acceptedFormats:
        "PDF, JPG ê¯…ê¯ ê¯”ê¯’ê¯¥ PNG ê¯Œê¯¥ê¯”ê¯¦",
      uploadVerificationWarning:
        "ê¯‘ê¯„ê¯‚ê¯£ê¯— ê¯‡ê¯§ê¯”ê¯•ê¯¥ ê¯—ê¯£ê¯€ê¯¨ê¯ƒê¯¦ê¯Ÿê¯  ê¯šê¯¦ê¯”ê¯¤ê¯ê¯¥ê¯ ê¯‡ê¯§ê¯•ê¯¥ ê¯ƒê¯ƒê¯¥ê¯¡ê¯—ê¯¥ ê¯†ê¯¦ê¯›ê¯ê¯¤ê¯Ÿê¯•ê¯¥ ê¯ƒê¯Šê¯§ ê¯‡ê¯¥ê¯",
      errors: {
        enterName: "ê¯…ê¯ê¯¥ê¯›ê¯€ê¯¤ ê¯ƒê¯¤ê¯¡ ê¯ê¯Ÿê¯„ê¯¨ê¯  ê¯‡ê¯§ê¯•ê¯¤ê¯Œê¯¨",
        enterAge: "ê¯…ê¯ê¯¥ê¯›ê¯€ê¯¤ ê¯†ê¯ê¯¤ ê¯ê¯Ÿê¯„ê¯¨ê¯  ê¯‡ê¯§ê¯•ê¯¤ê¯Œê¯¨",
        validAge: "ê¯ƒê¯†ê¯¥ê¯€ê¯¥ê¯Ÿê¯…ê¯¥ ê¯†ê¯ê¯¤ ê¯ê¯Ÿê¯„ê¯¨ê¯  ê¯‡ê¯§ê¯•ê¯¤ê¯Œê¯¨",
        selectGender: "ê¯…ê¯ê¯¥ê¯›ê¯€ê¯¤ ê¯ƒê¯ê¯¤ê¯¡ ê¯ˆê¯Ÿê¯•ê¯¤ê¯Œê¯¨",
        enterPhone:
          "ê¯…ê¯ê¯¥ê¯›ê¯€ê¯¤ ê¯ê¯£ê¯… ê¯…ê¯ê¯•ê¯” ê¯ê¯Ÿê¯„ê¯¨ê¯  ê¯‡ê¯§ê¯•ê¯¤ê¯Œê¯¨",
        validPhone:
          "ê¯ƒê¯†ê¯¥ê¯€ê¯¥ê¯Ÿê¯…ê¯¥ 10 ê¯—ê¯¤ê¯–ê¯¤ê¯  ê¯…ê¯ê¯•ê¯” ê¯ê¯Ÿê¯„ê¯¨ê¯  ê¯‡ê¯§ê¯•ê¯¤ê¯Œê¯¨",
      },
      speechErrors: {
        convertFailed:
          "ê¯…ê¯ê¯¥ê¯›ê¯€ê¯¤ ê¯‹ê¯¥ê¯ê¯ª ê¯‡ê¯¥ê¯ê¯žê¯‡ê¯¥ ê¯„ê¯¥ê¯”ê¯•ê¯¥ ê¯‰ê¯ê¯—ê¯¦",
        permissionDenied:
          "ê¯ƒê¯¥ê¯ê¯€ê¯­ê¯”ê¯£ê¯ê¯£ê¯…ê¯€ê¯¤ ê¯ƒê¯‡ê¯¦ê¯¡ ê¯‚ê¯©ê¯‡ê¯¦",
        noMicrophone:
          "ê¯ƒê¯¥ê¯ê¯€ê¯­ê¯”ê¯£ê¯ê¯£ê¯… ê¯ê¯ªê¯—ê¯¦",
        unable:
          "ê¯ƒê¯¥ê¯ê¯€ê¯­ê¯”ê¯£ê¯ê¯£ê¯… ê¯‘ê¯¦ê¯›ê¯ê¯¦ê¯ ê¯‡ê¯§ê¯•ê¯¥ ê¯‰ê¯ê¯—ê¯¦",
      },
      aiErrors: {
        timeout:
          "MedFlow ê¯…ê¯¥ê¯ê¯¥ê¯›ê¯€ê¯¤ ê¯”ê¯¦ê¯ê¯„ê¯£ê¯Ÿê¯ ê¯„ê¯¤ê¯•ê¯¥ ê¯ê¯¤ê¯—ê¯¤ ê¯ƒê¯‡ê¯ ê¯‚ê¯©",
        connection:
          "MedFlow ê¯€ê¯­ê¯‚ê¯¤ê¯…ê¯¤ê¯€ê¯¦ê¯œ ê¯ê¯Ÿê¯‡ê¯¦ê¯› ê¯ê¯”ê¯šê¯”ê¯—ê¯¥ ê¯€ê¯…ê¯¦ê¯›ê¯‡ ê¯‡ê¯§ê¯•ê¯¥ ê¯‰ê¯ê¯—ê¯¦",
      },
    },
  },

  // =====================================================
  // BODO
  // =====================================================

  brx: {
    translation: {
      secure: "रैखाथि",
      aiHealthcare: "AI-आधारि स्वास्थ सेवाआ",
      yourHealth: "नोंनि स्वास्थ।",
      yourRecords: "नोंनि रेकर्ड।",
      onePlace: "मोनसे जायगाय।",
      description:
        "MedFlow नोंनि स्वास्थ इतिहास आरो मेडिकल रेकर्डखौ मोनसे रैखाथि आरो बुद्दिमान प्लाटफर्मआव फुंफुं होयो।",
      patients: "रोगी",
      accuracy: "गोरोब",
      avgIntake: "गोजोन समय",
      whoAreYouToday: "दिनै नों सोर?",
      selectRole:
        "जागायनायनि थाखाय नोंनि भुमिका बासिख",
      patient: "रोगी",
      imPatient: "आं रोगी",
      patientDescription:
        "नोंनि स्वास्थ इतिहास रेकर्ड खालाम आरो मेडिकल रेकर्डखौ सायाव।",
      healthcareProfessional:
        "स्वास्थ सेवा पेशादार",
      imDoctor: "आं डाक्टर",
      doctorDescription:
        "रोगीनि इतिहास नाय आरो क्लिनिकल रेकर्ड सायाव।",
      privacyNote:
        "नोंनि स्वास्थ बिबरनखौ गोपोनियता आरो अनुमोदनखौ नायगोनांनायजों सायाव।",
      back: "उनथिं",
      profile: "प्रोफाइल",
      healthIntake: "स्वास्थ बिबरन",
      records: "रेकर्ड",
      letsGetStarted: "जागाय जाबाय",
      tellUsAboutYourself:
        "नोंनि सोमोन्दोआव बुं",
      basicDetailsDescription:
        "स्वास्थ बिबरन जागायनो हागौनि गोजोन मुल बिबरनखौ नोंनाव सानसे गोनां।",
      name: "मुं",
      age: "बयसो",
      gender: "लिं",
      phoneNumber: "फन नं",
      placeholders: {
        fullName: "नोंनि आबुं मुं लिर",
        age: "नोंनि बयसो",
        mobile: "10 डिजिट मोबायल नं",
        response: "नोंनि सोलोमायाव बुं...",
      },
      genderOptions: {
        select: "लिं बासिख",
        male: "हादोर",
        female: "हादोरि",
        other: "गुबुन",
        preferNotToSay:
          "बुंनो नाजानाय",
      },
      continueToHealthIntake:
        "स्वास्थ बिबरनआव थां",
      formSecurity:
        "नोंनि बिबरनखौ नोंनि स्वास्थ यात्रानि थाखाय खालि बाहायनाय जाबाय।",
      medxAiAssistant: "MedFlow AI सहायक",
      understandFeeling:
        "नों मा बाइदि अनुभब खालामो बेखौ बुजि।",
      answerQuestionsDescription:
        "मोनसे विकल्प बासिख आरो नोथाय निबाब हो।",
      medxClinicalAssistant:
        "MedFlow क्लिनिकल सहायक",
      onlineAiPowered:
        "अनलाइन · AI-आधारि बिबरन",
      connectionIssue: "जोगाजोग समस्या",
      tryAgain: "फिन नाजा",
      continue: "सोलाय",
      intake: {
        selectOption:
          "गाहायनि विकल्पफोरनि गेजेराव मोनसे बासिख।",
        selectYesNo:
          "अननानै हो आरो नङा बासिख।",
        typeOrVoice:
          "नोंनि निबाब लिर आरो आवाज इनपुट बाहाय।",
      },
      voice: {
        stopListening: "खोनाय थां",
        input: "आवाज इनपुट",
      },
      listening:
        "खोनाय जाबाय... दानि बुं",
      intakeFooter:
        "नोंनि निबाबफोर गोपोनिय आरो स्वास्थ सेवा पेशादारनि नायखांनाय जाबाय।",
      historyReady:
        "नोंनि स्वास्थ इतिहास फोरमाय।",
      historyReadyDescription:
        "स्वास्थ सेवा पेशादारनि नायखांनायनि थाखाय MedFlow नोंनि बिबरनखौ साजायबाय।",
      healthIntakeSummary:
        "स्वास्थ बिबरनि सारांश",
      patientHistoryNotice:
        "बेयो रोगीनि होनाय इतिहास, मेडिकल डायग्नोसिस नङा। लाइसेन्स होनाय स्वास्थ पेशादारजों सानाय।",
      continueToMedicalRecords:
        "मेडिकल रेकर्डआव थां",
      patientPortal: "रोगी पोर्टल",
      medicalRecords: "मेडिकल रेकर्ड",
      medicalRecordsDescription:
        "नोंनि स्वास्थ इतिहासखौ रैखाथि जों मोनसे जायगाय साजायबाय।",
      uploadDocument: "डाकुमेन्ट अपलोड खालाम",
      recordsProtected:
        "नोंनि मेडिकल रेकर्ड रैखाथि",
      recordsProtectedDescription:
        "प्रमाणित रेकर्डखौ खालि फरायनो हायो आरो सोलायनो हाया।",
      searchRecords:
        "नोंनि मेडिकल रेकर्ड सान...",
      categories: {
        all: "गासै डाकुमेन्ट",
        labReports: "लैब रिपोर्ट",
        prescriptions: "प्रिस्क्रिप्सन",
        discharge: "डिसचार्ज सारांश",
        other: "गुबुन डाकुमेन्ट",
      },
      documents: "डाकुमेन्ट",
      allYourRecords: "नोंनि गासै रेकर्ड",
      readOnly: "फरायनो खालि",
      pending: "अपेक्षा",
      source: "स्रोत",
      date: "समा",
      verified: "प्रमाणित",
      pendingVerification:
        "प्रमाणीकरण अपेक्षा",
      view: "नाय",
      noRecordsFound:
        "जेबो रेकर्ड मोनाखै",
      noRecordsDescription:
        "नोंनि सर्च सोलाय आरो नावा डाकुमेन्ट अपलोड खालाम।",
      medicalDocument: "मेडिकल डाकुमेन्ट",
      uploadRecord: "रेकर्ड अपलोड खालाम",
      uploadRecordDescription:
        "नोंनि MedFlow स्वास्थ इतिहासआव गोजोन मेडिकल डाकुमेन्ट हो।",
      fileSelected:
        "फाइल बासिख · अपलोडनि थाखाय फोरमाय",
      chooseDocument: "डाकुमेन्ट बासिख",
      acceptedFormats:
        "PDF, JPG एबा PNG लुबै",
      uploadVerificationWarning:
        "अपलोड खालामनाय डाकुमेन्टखौ प्रमाणित खालामनो हागौनि सिगां नायखांनो नांगोन।",
      errors: {
        enterName: "अननानै नोंनि मुं लिर",
        enterAge: "अननानै नोंनि बयसो लिर",
        validAge: "अननानै गोरोब बयसो लिर",
        selectGender: "अननानै नोंनि लिं बासिख",
        enterPhone:
          "अननानै नोंनि फोन नं लिर",
        validPhone:
          "गोरोब 10 डिजिट नं लिर",
      },
      speechErrors: {
        convertFailed:
          "नोंनि आवाजखौ टेक्स्टआव सोलायनो हायाखै। फिन नाजा।",
        permissionDenied:
          "माइक्रोफोननि अनुमति नायखांजायाखै।",
        noMicrophone:
          "माइक्रोफोन मोनाखै।",
        unable:
          "माइक्रोफोनआव थांनो हायाखै।",
      },
      aiErrors: {
        timeout:
          "MedFlow निबाब होनो गोबां सम लायो। नोंनि जोगाजोग नाय आरो फिन नाजा।",
        connection:
          "MedFlow क्लिनिकल इनटेक सर्वारजों जोगाजोग खालामनो हायाखै। फिन नाजा।",
      },
    },
  },

  // =====================================================
  // MAITHILI
  // =====================================================

  mai: {
    translation: {
      secure: "सुरक्षित",
      aiHealthcare: "AI आधारित स्वास्थ्य सेवा",
      yourHealth: "अहाँक स्वास्थ्य।",
      yourRecords: "अहाँक रिकॉर्ड।",
      onePlace: "एक्के ठाम।",
      description:
        "MedFlow अहाँक स्वास्थ्य इतिहास आ मेडिकल रिकॉर्ड केँ एक सुरक्षित आ बुद्धिमान प्लेटफॉर्म पर एक ठाम अनैत अछि।",
      patients: "मरीज",
      accuracy: "सटीकता",
      avgIntake: "औसत समय",
      whoAreYouToday: "आइ अहाँ के छी?",
      selectRole:
        "शुरू करबाक लेल अपन भूमिका चुनू",
      patient: "मरीज",
      imPatient: "हम मरीज छी",
      patientDescription:
        "अपन स्वास्थ्य इतिहास रिकॉर्ड करू आ मेडिकल रिकॉर्ड व्यवस्थित करू।",
      healthcareProfessional:
        "स्वास्थ्य सेवा पेशेवर",
      imDoctor: "हम डॉक्टर छी",
      doctorDescription:
        "मरीजक इतिहासक समीक्षा करू आ क्लिनिकल रिकॉर्ड व्यवस्थित करू।",
      privacyNote:
        "अहाँक स्वास्थ्य जानकारी केँ गोपनीयता आ सहमतिके ध्यानमे राखि संभालल जाइत अछि।",
      back: "पाछाँ",
      profile: "प्रोफाइल",
      healthIntake: "स्वास्थ्य जानकारी",
      records: "रिकॉर्ड",
      letsGetStarted: "शुरू करी",
      tellUsAboutYourself:
        "अपन बारेमे बताउ",
      basicDetailsDescription:
        "स्वास्थ्य जानकारी शुरू करबाक पहिने हमरा सभकेँ किछु मूल जानकारी चाही।",
      name: "नाम",
      age: "उम्र",
      gender: "लिंग",
      phoneNumber: "फोन नंबर",
      placeholders: {
        fullName: "अपन पूरा नाम लिखू",
        age: "अहाँक उम्र",
        mobile: "10 अंकक मोबाइल नंबर",
        response: "अपन शब्दमे बताउ...",
      },
      genderOptions: {
        select: "लिंग चुनू",
        male: "पुरुष",
        female: "महिला",
        other: "अन्य",
        preferNotToSay:
          "कहय नहि चाहैत छी",
      },
      continueToHealthIntake:
        "स्वास्थ्य जानकारी पर जाउ",
      formSecurity:
        "अहाँक जानकारी केवल अहाँक स्वास्थ्य यात्रा लेल उपयोग होयत।",
      medxAiAssistant: "MedFlow AI सहायक",
      understandFeeling:
        "अहाँ केना महसूस करैत छी से बुझी।",
      answerQuestionsDescription:
        "एक विकल्प चुनि कए अथवा अपन उत्तर लिखि कए प्रश्नक उत्तर दिअ।",
      medxClinicalAssistant:
        "MedFlow क्लिनिकल सहायक",
      onlineAiPowered:
        "ऑनलाइन · AI आधारित जानकारी",
      connectionIssue: "कनेक्शन समस्या",
      tryAgain: "फेर प्रयास करू",
      continue: "आगाँ बढ़ू",
      intake: {
        selectOption:
          "नीचाँ देल विकल्पमे सँ एकटा चुनू।",
        selectYesNo:
          "कृपया हँ अथवा नहि चुनू।",
        typeOrVoice:
          "अपन उत्तर लिखू अथवा आवाजक उपयोग करू।",
      },
      voice: {
        stopListening: "सुननाइ रोकू",
        input: "आवाज इनपुट",
      },
      listening:
        "सुनि रहल छी... आब बाजू",
      intakeFooter:
        "अहाँक उत्तर निजी अछि आ स्वास्थ्य सेवा पेशेवर द्वारा समीक्षा कएल जायत।",
      historyReady:
        "अहाँक स्वास्थ्य इतिहास तैयार अछि।",
      historyReadyDescription:
        "स्वास्थ्य सेवा पेशेवरक समीक्षा लेल MedFlow अहाँक जानकारी व्यवस्थित कएने अछि।",
      healthIntakeSummary:
        "स्वास्थ्य जानकारी सारांश",
      patientHistoryNotice:
        "ई मरीज द्वारा देल गेल इतिहास अछि, मेडिकल निदान नहि। लाइसेंस प्राप्त स्वास्थ्य पेशेवरसँ सलाह लिअ।",
      continueToMedicalRecords:
        "मेडिकल रिकॉर्ड पर जाउ",
      patientPortal: "मरीज पोर्टल",
      medicalRecords: "मेडिकल रिकॉर्ड",
      medicalRecordsDescription:
        "अहाँक स्वास्थ्य इतिहास सुरक्षित रूपसँ एक्के ठाम व्यवस्थित अछि।",
      uploadDocument: "दस्तावेज अपलोड करू",
      recordsProtected:
        "अहाँक मेडिकल रिकॉर्ड सुरक्षित अछि",
      recordsProtectedDescription:
        "सत्यापित रिकॉर्ड केवल पढ़ल जा सकैत अछि आ बदलल नहि जा सकैत अछि।",
      searchRecords:
        "अपन मेडिकल रिकॉर्ड खोजू...",
      categories: {
        all: "सभ दस्तावेज",
        labReports: "लैब रिपोर्ट",
        prescriptions: "प्रिस्क्रिप्शन",
        discharge: "डिस्चार्ज सारांश",
        other: "अन्य दस्तावेज",
      },
      documents: "दस्तावेज",
      allYourRecords: "अहाँक सभ रिकॉर्ड",
      readOnly: "केवल पढ़बाक लेल",
      pending: "लंबित",
      source: "स्रोत",
      date: "तारीख",
      verified: "सत्यापित",
      pendingVerification:
        "सत्यापन लंबित",
      view: "देखू",
      noRecordsFound:
        "कोनो रिकॉर्ड नहि भेटल",
      noRecordsDescription:
        "अपन खोज बदलू अथवा नव दस्तावेज अपलोड करू।",
      medicalDocument: "मेडिकल दस्तावेज",
      uploadRecord: "एकटा रिकॉर्ड अपलोड करू",
      uploadRecordDescription:
        "अपन MedFlow स्वास्थ्य इतिहासमे पुरान मेडिकल दस्तावेज जोड़ू।",
      fileSelected:
        "फाइल चुनल गेल · अपलोड लेल तैयार",
      chooseDocument: "दस्तावेज चुनू",
      acceptedFormats:
        "PDF, JPG अथवा PNG स्वीकार्य अछि",
      uploadVerificationWarning:
        "अपलोड कएल दस्तावेज केँ सत्यापित चिन्हित करबाक पहिने सत्यापन जरूरी होयत।",
      errors: {
        enterName: "कृपया अपन नाम लिखू",
        enterAge: "कृपया अपन उम्र लिखू",
        validAge: "कृपया सही उम्र लिखू",
        selectGender: "कृपया अपन लिंग चुनू",
        enterPhone:
          "कृपया अपन फोन नंबर लिखू",
        validPhone:
          "सही 10 अंकक नंबर लिखू",
      },
      speechErrors: {
        convertFailed:
          "अहाँक आवाज केँ टेक्स्टमे बदलल नहि जा सकल। फेर प्रयास करू।",
        permissionDenied:
          "माइक्रोफोनक अनुमति अस्वीकार कएल गेल।",
        noMicrophone:
          "कोनो माइक्रोफोन नहि भेटल।",
        unable:
          "माइक्रोफोन तक पहुँच नहि भ' सकल।",
      },
      aiErrors: {
        timeout:
          "MedFlow जवाब देबामे बेसी समय ल' रहल अछि। अपन कनेक्शन जाँचि कए फेर प्रयास करू।",
        connection:
          "MedFlow क्लिनिकल इनटेक सर्वर सँ कनेक्ट नहि भ' सकल। फेर प्रयास करू।",
      },
    },
  },

  // =====================================================
  // DOGRI
  // =====================================================

  doi: {
    translation: {
      secure: "सुरक्षित",
      aiHealthcare: "AI आधारत सेहत सेवा",
      yourHealth: "तुआढ़ी सेहत।",
      yourRecords: "तुआढ़े रिकार्ड।",
      onePlace: "इक थाहर।",
      description:
        "MedFlow तुआढ़े सेहत इतिहास ते मेडिकल रिकार्डें गी इक सुरक्षित ते समझदार प्लेटफॉर्म पर इकट्ठा करदा ऐ।",
      patients: "मरीज",
      accuracy: "सटीकता",
      avgIntake: "औसत समां",
      whoAreYouToday: "अज्ज तुस कुन ओ?",
      selectRole:
        "शुरू करने आस्तै अपनी भूमिका चुनो",
      patient: "मरीज",
      imPatient: "में मरीज आं",
      patientDescription:
        "अपना सेहत इतिहास दर्ज करो ते मेडिकल रिकार्ड संभालो।",
      healthcareProfessional:
        "सेहत सेवा पेशेवर",
      imDoctor: "में डॉक्टर आं",
      doctorDescription:
        "मरीजें दे इतिहास दी समीक्षा करो ते क्लिनिकल रिकार्ड संभालो।",
      privacyNote:
        "तुआढ़ी सेहत जानकारी गुप्तता ते सहमति गी ध्यान च रखदे होई संभाली जंदी ऐ।",
      back: "पिच्छे",
      profile: "प्रोफाइल",
      healthIntake: "सेहत जानकारी",
      records: "रिकार्ड",
      letsGetStarted: "शुरू करचै",
      tellUsAboutYourself:
        "अपने बारे च दस्सो",
      basicDetailsDescription:
        "सेहत जानकारी शुरू करने शा पैह्ले सानूं कुछ बुनियादी जानकारी चाहीदी ऐ।",
      name: "नांऽ",
      age: "उम्र",
      gender: "लिंग",
      phoneNumber: "फोन नंबर",
      placeholders: {
        fullName: "अपना पूरा नांऽ लिखो",
        age: "तुआढ़ी उम्र",
        mobile: "10 अंकें दा मोबाइल नंबर",
        response: "अपने शब्दें च दस्सो...",
      },
      genderOptions: {
        select: "लिंग चुनो",
        male: "मर्द",
        female: "जनानी",
        other: "दूआ",
        preferNotToSay:
          "दस्सना पसंद नेई",
      },
      continueToHealthIntake:
        "सेहत जानकारी पर जाओ",
      formSecurity:
        "तुआढ़ी जानकारी सिर्फ तुआढ़ी सेहत यात्रा आस्तै बरती जाग।",
      medxAiAssistant: "MedFlow AI सहायक",
      understandFeeling:
        "आओ समझचै कि तुस केह् महसूस करा दे ओ।",
      answerQuestionsDescription:
        "इक विकल्प चुनियै जां अपना जवाब लिखियै सवालें दे जवाब देओ।",
      medxClinicalAssistant:
        "MedFlow क्लिनिकल सहायक",
      onlineAiPowered:
        "ऑनलाइन · AI आधारत जानकारी",
      connectionIssue: "कनेक्शन दी समस्या",
      tryAgain: "फ्ही कोशिश करो",
      continue: "अग्गे बढ़ो",
      intake: {
        selectOption:
          "हेठ दित्ते विकल्पें चा इक चुनो।",
        selectYesNo:
          "कृपा करियै हां जां नेई चुनो।",
        typeOrVoice:
          "अपना जवाब टाइप करो जां आवाज बरतो।",
      },
      voice: {
        stopListening: "सुनना बंद करो",
        input: "आवाज इनपुट",
      },
      listening:
        "सुन रा ऐ... हुन बोलो",
      intakeFooter:
        "तुआढ़े जवाब निजी न, ते सेहत सेवा पेशेवर उंदी समीक्षा करग।",
      historyReady:
        "तुआढ़ा सेहत इतिहास तैयार ऐ।",
      historyReadyDescription:
        "सेहत सेवा पेशेवर दी समीक्षा आस्तै MedFlow ने तुआढ़ी जानकारी व्यवस्थित करी ऐ।",
      healthIntakeSummary:
        "सेहत जानकारी सारांश",
      patientHistoryNotice:
        "एह् मरीज आसेआ दित्ता इतिहास ऐ ते मेडिकल निदान नेई। लाइसेंस प्राप्त सेहत पेशेवर कन्नै सलाह करो।",
      continueToMedicalRecords:
        "मेडिकल रिकार्डें पर जाओ",
      patientPortal: "मरीज पोर्टल",
      medicalRecords: "मेडिकल रिकार्ड",
      medicalRecordsDescription:
        "तुआढ़ा सेहत इतिहास सुरक्षित ढंगै कन्नै इक थाहर व्यवस्थित ऐ।",
      uploadDocument: "दस्तावेज अपलोड करो",
      recordsProtected:
        "तुआढ़े मेडिकल रिकार्ड सुरक्षित न",
      recordsProtectedDescription:
        "प्रमाणित रिकार्ड सिर्फ पढ़े जाई सकदे न ते बदले नेई जाई सकदे।",
      searchRecords:
        "अपने मेडिकल रिकार्ड खोजो...",
      categories: {
        all: "सारे दस्तावेज",
        labReports: "लैब रिपोर्ट",
        prescriptions: "प्रिस्क्रिप्शन",
        discharge: "डिस्चार्ज सारांश",
        other: "दूए दस्तावेज",
      },
      documents: "दस्तावेज",
      allYourRecords: "तुआढ़े सारे रिकार्ड",
      readOnly: "सिर्फ पढ़ने आस्तै",
      pending: "बाकी",
      source: "स्रोत",
      date: "तरीक",
      verified: "प्रमाणित",
      pendingVerification:
        "सत्यापन बाकी",
      view: "दिक्खो",
      noRecordsFound:
        "कोई रिकार्ड नेई लब्भा",
      noRecordsDescription:
        "अपनी खोज बदलो जां नमा दस्तावेज अपलोड करो।",
      medicalDocument: "मेडिकल दस्तावेज",
      uploadRecord: "इक रिकार्ड अपलोड करो",
      uploadRecordDescription:
        "अपने MedFlow सेहत इतिहास च पुराना मेडिकल दस्तावेज जोड़ो।",
      fileSelected:
        "फाइल चुनती गेई · अपलोड आस्तै तैयार",
      chooseDocument: "दस्तावेज चुनो",
      acceptedFormats:
        "PDF, JPG जां PNG मंजूर न",
      uploadVerificationWarning:
        "अपलोड किट्ठे दस्तावेजें दी प्रमाणिकता जांच होनी लोड़दी ऐ।",
      errors: {
        enterName: "कृपा करियै अपना नांऽ लिखो",
        enterAge: "कृपा करियै अपनी उम्र लिखो",
        validAge: "कृपा करियै सही उम्र लिखो",
        selectGender: "कृपा करियै अपना लिंग चुनो",
        enterPhone:
          "कृपा करियै अपना फोन नंबर लिखो",
        validPhone:
          "सही 10 अंकें दा नंबर लिखो",
      },
      speechErrors: {
        convertFailed:
          "तुआढ़ी आवाज गी टेक्स्ट च बदली नेई सकी। फ्ही कोशिश करो।",
        permissionDenied:
          "माइक्रोफोन दी इजाजत नेई मिली।",
        noMicrophone:
          "माइक्रोफोन नेई लब्भा।",
        unable:
          "माइक्रोफोन तक पहुंच नेई होई सकी।",
      },
      aiErrors: {
        timeout:
          "MedFlow जवाब देने च बड़ा समां ला रा ऐ। अपना कनेक्शन चेक करियै फ्ही कोशिश करो।",
        connection:
          "MedFlow क्लिनिकल इनटेक सर्वर कन्नै कनेक्ट नेई होई सकेआ। फ्ही कोशिश करो।",
      },
    },
  },

};

applyIntakeTranslations(resources);

// New platform labels live in the English fallback so every existing language
// remains usable while native translations are expanded incrementally.
resources.en.translation.platform = {
  welcome: "Welcome to MedFlow",
  chooseAccess: "How are you accessing MedFlow today?",
  patient: "Patient", staff: "Doctor / Staff", admin: "Admin",
  staffDemo: "Doctor / Staff demo", adminDemo: "Admin demo",
  prototypeRoleInfo: "Use a safe prototype workspace mapped to real MedFlow data.",
  continueDemo: "Continue with demo", carePath: "YOUR CARE PATH",
  availableToday: "AVAILABLE TODAY", doctors: "Doctors", hospitals: "Hospitals",
  patients: "Patients", patientCount: "patients", assessments: "Assessments", reports: "Reports", queue: "Queue", queues: "Queues",
  loadingDoctors: "Getting available doctors…", available: "Available", waiting: "Waiting",
  notStarted: "Not started", noDoctors: "No active doctors are currently available.",
  noDoctorsDetail: "Please try another hospital or check back shortly.", tokenConfirmed: "TOKEN CONFIRMED",
  scanQueue: "Scan to view safe queue status", cancelToken: "Cancel token", yourTurn: "YOUR TURN",
  pleaseProceed: "Please proceed for consultation.", goodMorning: "Good morning, {{name}}", clinicalQueue: "CLINICAL QUEUE",
  nowServing: "Now serving", completedToday: "Completed today", queueStatus: "Queue status",
  liveList: "LIVE LIST", waitingPatients: "Waiting patients", noWaitingPatients: "No patients are waiting.",
  noWaitingPatientsDetail: "The next patient will appear here when a token is created.", refresh: "Refresh",
  callNext: "Call next patient", patientCalled: "The next patient has been called.", currentPatient: "Current patient",
  startConsultation: "Start consultation", completeConsultation: "Mark completed", consultationStarted: "Consultation started.",
  consultationCompleted: "Consultation completed.", viewAssessment: "View assessment", patientAssessment: "PATIENT ASSESSMENT",
  assessment: "Assessment", clinicalHistory: "Clinical history", conditions: "Conditions", medications: "Medications",
  allergies: "Allergies", previousEpisodes: "Previous similar episodes", aiClinicalSummary: "AI clinical summary",
  noSummary: "No clinical summary is available.", physicianReviewOnly: "For clinician review; not a treatment recommendation.",
  loadingWorkspace: "Loading your workspace…", operations: "OPERATIONS", adminDashboard: "Administration dashboard",
  operationalOverview: "A privacy-conscious operational overview of MedFlow.", totalPatients: "Total patients", activeDoctors: "Active doctors",
  activeQueues: "Active queues", tokensToday: "Tokens today", completedConsultations: "Completed consultations",
  doctorManagement: "Doctor management", hospitalManagement: "Hospital management", queueManagement: "Queue management",
  patientOperations: "Patient operations", operationalReports: "Operational reports", reportsDescription: "Live operational counts based on MedFlow records.",
  active: "Active", inactive: "Inactive", activate: "Activate", deactivate: "Deactivate", doctorUpdated: "Doctor status updated.",
  activeToken: "Active token", noActiveToken: "No active token", notReported: "Not reported",
  prepareDemoQueues: "Prepare demo queues",
  staffLogin: "Doctor / Staff Login", adminLogin: "Admin Login", loginId: "Login ID",
  loadingQueueStatus: "Loading queue status…", queueUnavailable: "Queue status is unavailable.",
  safeQueueNotice: "This page only shows safe queue information.",
  readAloud: "Read aloud", stopReading: "Stop reading", selectAll: "Select all", deselectAll: "Deselect all",
  startingAssessment: "Starting assessment…", patientPortal: "PATIENT PORTAL", documentsDescription: "Review documents associated with your current assessment and their extracted information.",
  uploadDocument: "Upload document", medicalDocument: "Medical document", extractedInformation: "Extracted information",
  noDocuments: "No documents have been uploaded.", noDocumentsDetail: "You can add an optional PDF, JPG, or PNG during your clinical intake.",
  profileDescription: "Manage your profile details and accessibility preferences.", profileInformation: "Profile information", profileName: "Name", accessibility: "Accessibility", language: "Language",
  uploadedMedicalRecords: "Uploaded medical records", noDocumentsForAssessment: "No uploaded documents are linked to this assessment.", noDocumentFindings: "No extracted findings are available.",
  noDocumentsForAssessmentDetail: "No medical records were uploaded for this assessment.", analysed: "Analysed", noFindings: "No findings", findings: "Findings",
  additionalFindings: "{{count}} additional findings are available.",
  clinicalWorkspace: "CLINICAL WORKSPACE", doctorDashboardSubtitle: "Here is today’s clinical workspace.",
  doctorNavigation: "Doctor navigation", queueWorkspace: "Queue workspace", currentConsultation: "CURRENT CONSULTATION", nextInQueue: "NEXT IN QUEUE",
  openAssessment: "Open assessment", viewQueue: "View queue", assessmentAvailable: "Assessment available",
  authorizedPatients: "Patients in your current queue", authorizedPatientsDetail: "Only patients assigned to your current doctor queue are shown.",
  assessmentListDetail: "Assessments available through your current doctor queue are shown below.",
  doctorProfile: "Doctor profile", doctorName: "Doctor name", specialty: "Specialty", hospital: "Hospital", role: "Role", doctorStaff: "Doctor / Staff", profileSecurityNote: "Your clinical workspace is protected by your staff session.",
  inConsultation: "In consultation", tokenStatus: { waiting: "Waiting", called: "Called", in_consultation: "In consultation", completed: "Completed", cancelled: "Cancelled" },
  injurySurgery: "Previous injury / surgery", additionalRemarks: "Additional remarks", chiefComplaint: "Chief complaint", historyOfPresentingComplaint: "History of presenting complaint",
  severityDurationProgression: "Severity · duration · progression", documentFindings: "Relevant document findings", missingInformation: "Missing information",
  administration: "Administration", administrator: "Administrator", adminNavigation: "Administration navigation", systemOverview: "SYSTEM OVERVIEW", adminHeaderSubtitle: "Healthcare operations workspace", adminDashboardSubtitle: "Monitor hospitals, doctors, patient operations and queue activity.",
  searchAdmin: "Search this view", noResults: "No results found", adjustSearch: "Try a different search term.", connected: "Connected", currentToken: "Current token", lastActivity: "Last activity", hospitalStatus: "Hospital status", queueActivity: "Queue activity",
  adminProfile: "Admin profile", accountName: "Account name", sessionStatus: "Session status", assessmentDataUnavailable: "Assessment monitoring is not available yet", assessmentDataUnavailableDetail: "The current admin API does not return a system-wide assessment list. No records have been fabricated.",
  patientNavigation: "Patient navigation", patientDashboardSubtitle: "Let’s take care of your health today.", activeQueue: "ACTIVE QUEUE", noActiveQueue: "No active queue", noActiveQueueDetail: "Your queue details will appear here after you choose a doctor.", startNewAssessment: "Start a new assessment", startAssessment: "Start assessment", startAssessmentFriendlyDescription: "Tell us what you’re experiencing. We’ll guide you step by step.",
  recentAssessment: "RECENT ASSESSMENT", noRecentAssessment: "No recent assessment", noRecentAssessmentDetail: "Your completed assessments will appear here.", viewRecords: "View records", severity: "Severity", status: "Status", symptoms: "Symptoms", summaryReady: "Summary ready", inProgress: "In progress", doctor: "Doctor",
  openProfileMenu: "Open profile menu", patient: "Patient", findDoctor: "Find a doctor", aiGeneratedSummary: "AI-generated summary", readOnlyOriginalOutput: "Read-only — original AI output.",
  demoEnvironment: "Demo environment", demoDataControls: "Demo data controls", resetDemoData: "Reset demo data",
  resetAllDemoData: "Reset all demo data?", resetDemoDescription: "This will remove the previous demo assessment, queue token, uploaded documents, clinical summaries and physician review data.", resetting: "Resetting…", resetDemo: "Reset demo",
  physicianReview: "Physician review", physicianReviewedSummary: "Physician reviewed summary", finalized: "Finalized", underReview: "Under review", awaitingReview: "Awaiting review", loadingPhysicianReview: "Loading physician review…", physicianReviewInProgress: "A physician is reviewing this assessment. The reviewed summary will appear here after finalization.", awaitingPhysicianReview: "Awaiting physician review.",
  support: "Support", helpFaq: "Help & FAQ", helpDescription: "Find answers or get support with MedFlow.", searchCommonQuestions: "Search common questions", faqCategories: "FAQ categories", readAnswerAloud: "Read aloud: {{question}}", noQuestionsFound: "No questions found", noQuestionsDetail: "Try another search term or category.", contactSupport: "Contact support", demoSupportContacts: "Demo support contacts", important: "Important", medicalEmergencies: "Medical emergencies", emergencyGuidance: "For medical emergencies, contact your local emergency services or visit the nearest emergency department.",
  english: "English", hindi: "हिन्दी",
};

// Patient care-discovery labels are kept here (rather than in App.jsx) so the
// selection workflow can be localized without changing any queue behaviour.
resources.en.translation.patientFind = {
  eyebrow: "Care options", title: "Find a Doctor", description: "Based on the information provided, these departments and doctors may be relevant. This is not a diagnosis.",
  skip: "Skip for now", recommendedSpecialist: "Recommended Specialist", chooseDepartment: "Choose a department", chooseHospital: "Choose Hospital", selectHospital: "Select a hospital", chooseDepartmentLabel: "Choose Department", selectDepartment: "Select a department", chooseDoctor: "Choose Doctor", loadingDepartments: "Loading departments…", loadingDoctors: "Loading available doctors…", noDepartments: "No active departments are currently available at this hospital.", noDoctors: "No active doctors are currently available in this department.", chooseDepartmentDetail: "Choose a department to view doctors.", tryAnother: "Try another department or hospital.", liveDataDetail: "Doctor availability is shown from the selected hospital's live data.", specializationMissing: "Specialization not provided", available: "Available", queueUnavailable: "Queue unavailable", nowServing: "Now serving", queue: "Queue", patients: "patients", confirmToken: "Confirm Doctor & Get Token", reason: "Based on the information provided, this assessment may be appropriate for review by {{department}}. You can choose any available department below.", selectCare: "Choose a hospital and department to see available doctors.", doctorDiscovery: "Doctor discovery", step: "Step {{number}}",
};

resources.en.translation.patientFaq = {
  eyebrow: "Support", title: "Help & FAQ", description: "Find answers or get support with MedFlow.", search: "Search common questions", categoriesLabel: "FAQ categories", readAloud: "Read aloud", readAloudAria: "Read aloud: {{question}}", emptyTitle: "No questions found", emptyDetail: "Try another search term or category.", contactEyebrow: "Contact support", contactTitle: "Demo support contacts", demoSupport: "demo support", important: "Important", emergencyTitle: "Medical emergencies", emergencyDetail: "For medical emergencies, contact your local emergency services or visit the nearest emergency department.",
  categories: { general: "General", assessment: "Assessment", documents: "Documents", doctors: "Doctors & appointments", queue: "Queue & tokens", privacy: "Privacy & security", accessibility: "Accessibility" },
  items: [
    { id: "what-is-medflow", category: "general", question: "What is MedFlow?", answer: "MedFlow helps you organize information you choose to provide, complete a structured assessment, and find available care options." },
    { id: "how-medflow-works", category: "general", question: "How does MedFlow work?", answer: "You complete an assessment, can upload supporting documents, review a structured summary, and optionally choose an available doctor." },
    { id: "medflow-doctor", category: "general", question: "Is MedFlow a doctor?", answer: "No. MedFlow is a health-information and care-navigation tool; it does not replace a clinician." },
    { id: "medflow-diagnosis", category: "general", question: "Can MedFlow diagnose me?", answer: "No. The assessment and summary are informational and must not be treated as a diagnosis." },
    { id: "assessment-how", category: "assessment", question: "How does the clinical assessment work?", answer: "You select symptoms and answer structured questions. The information is organized for clinical review." },
    { id: "assessment-next", category: "assessment", question: "What happens after I complete an assessment?", answer: "You can review the summary, find an available doctor, and create a queue token when appropriate." },
    { id: "assessment-speaking", category: "assessment", question: "Can I use MedFlow without speaking?", answer: "Yes. Every assessment field can be completed with the keyboard; voice input is optional." },
    { id: "documents-upload", category: "documents", question: "Can I upload medical documents?", answer: "Yes. Supported PDFs and images can be uploaded during intake and stored securely with the assessment." },
    { id: "documents-protection", category: "documents", question: "How are my medical documents protected?", answer: "Original files are stored in a private bucket and clinicians access them only through an authorized MedFlow session." },
    { id: "doctor-assessment", category: "doctors", question: "How does the doctor see my assessment?", answer: "Only the doctor assigned to your authorized queue token can open that assessment in their workspace." },
    { id: "find-doctor", category: "doctors", question: "How does Find a Doctor work?", answer: "Select a hospital and department to see the active doctors returned from that hospital's live data." },
    { id: "queue-token", category: "queue", question: "What is the queue/token system?", answer: "A token represents your place in the selected doctor's queue and can be followed in the live queue view." },
    { id: "now-serving", category: "queue", question: "What does Now Serving mean?", answer: "It shows the token currently being called or seen in that doctor's queue." },
    { id: "public-information", category: "privacy", question: "Is my information shared publicly?", answer: "No. Medical information is limited to the authorized care workflow; public queue views use token information only." },
    { id: "voice-input", category: "accessibility", question: "How does voice input work?", answer: "When enabled, voice input helps capture an answer. You can confirm or retry the recognized text before it is saved." },
    { id: "microphone", category: "accessibility", question: "Why does MedFlow need microphone permission?", answer: "Microphone permission is requested only when you choose to use voice input." },
  ],
};

resources.en.translation.platform = {
  ...resources.en.translation.platform,
  patientsAhead: "Patients ahead",
  viewLiveQueue: "View full queue",
  logout: "Log out",
  accessibility: "Accessibility",
};

resources.gu.translation.patientFind = {
  eyebrow: "સારવારના વિકલ્પો", title: "ડૉક્ટર શોધો", description: "આપેલી માહિતીના આધારે આ વિભાગો અને ડૉક્ટરો યોગ્ય હોઈ શકે છે. આ નિદાન નથી.",
  skip: "હમણાં માટે છોડો", recommendedSpecialist: "ભલામણ કરેલ નિષ્ણાત", chooseDepartment: "વિભાગ પસંદ કરો", chooseHospital: "હોસ્પિટલ પસંદ કરો", selectHospital: "હોસ્પિટલ પસંદ કરો", chooseDepartmentLabel: "વિભાગ પસંદ કરો", selectDepartment: "વિભાગ પસંદ કરો", chooseDoctor: "ડૉક્ટર પસંદ કરો", loadingDepartments: "વિભાગો લોડ થઈ રહ્યા છે…", loadingDoctors: "ઉપલબ્ધ ડૉક્ટરો લોડ થઈ રહ્યા છે…", noDepartments: "આ હોસ્પિટલમાં હાલમાં કોઈ સક્રિય વિભાગ ઉપલબ્ધ નથી.", noDoctors: "આ વિભાગમાં હાલમાં કોઈ સક્રિય ડૉક્ટર ઉપલબ્ધ નથી.", chooseDepartmentDetail: "ડૉક્ટરો જોવા માટે વિભાગ પસંદ કરો.", tryAnother: "બીજો વિભાગ અથવા હોસ્પિટલ અજમાવો.", liveDataDetail: "ડૉક્ટરની ઉપલબ્ધતા પસંદ કરેલી હોસ્પિટલના લાઇવ ડેટામાંથી બતાવવામાં આવે છે.", specializationMissing: "વિશેષતા આપવામાં આવી નથી", available: "ઉપલબ્ધ", queueUnavailable: "કતાર ઉપલબ્ધ નથી", nowServing: "હવે સેવા આપવામાં આવે છે", queue: "કતાર", patients: "દર્દીઓ", confirmToken: "ડૉક્ટરની પુષ્ટિ કરો અને ટોકન લો", reason: "આપેલી માહિતીના આધારે આ મૂલ્યાંકન {{department}} દ્વારા સમીક્ષા માટે યોગ્ય હોઈ શકે છે. નીચે કોઈપણ ઉપલબ્ધ વિભાગ પસંદ કરી શકો છો.", selectCare: "ઉપલબ્ધ ડૉક્ટરો જોવા માટે હોસ્પિટલ અને વિભાગ પસંદ કરો.", doctorDiscovery: "ડૉક્ટર શોધ", step: "પગલું {{number}}",
};

resources.gu.translation.patientFaq = {
  eyebrow: "સહાય", title: "મદદ અને પ્રશ્નોત્તરી", description: "MedFlow વિશે જવાબો મેળવો અથવા સહાય મેળવો.", search: "સામાન્ય પ્રશ્નો શોધો", categoriesLabel: "પ્રશ્નોત્તરી શ્રેણીઓ", readAloud: "વાંચી સંભળાવો", readAloudAria: "વાંચી સંભળાવો: {{question}}", emptyTitle: "કોઈ પ્રશ્ન મળ્યો નથી", emptyDetail: "બીજો શોધ શબ્દ અથવા શ્રેણી અજમાવો.", contactEyebrow: "સહાયનો સંપર્ક", contactTitle: "ડેમો સહાય સંપર્કો", demoSupport: "ડેમો સહાય", important: "મહત્વપૂર્ણ", emergencyTitle: "તબીબી કટોકટી", emergencyDetail: "તબીબી કટોકટી માટે સ્થાનિક ઇમરજન્સી સેવાઓનો સંપર્ક કરો અથવા નજીકના ઇમરજન્સી વિભાગમાં જાઓ.",
  categories: { general: "સામાન્ય", assessment: "મૂલ્યાંકન", documents: "દસ્તાવેજો", doctors: "ડૉક્ટરો અને મુલાકાતો", queue: "કતાર અને ટોકન", privacy: "ગોપનીયતા અને સુરક્ષા", accessibility: "સુલભતા" },
  items: [
    { id: "what-is-medflow", category: "general", question: "MedFlow શું છે?", answer: "MedFlow તમને આપેલી માહિતી ગોઠવવામાં, રચનાત્મક મૂલ્યાંકન પૂર્ણ કરવામાં અને ઉપલબ્ધ સારવાર વિકલ્પો શોધવામાં મદદ કરે છે." },
    { id: "how-medflow-works", category: "general", question: "MedFlow કેવી રીતે કાર્ય કરે છે?", answer: "તમે મૂલ્યાંકન પૂર્ણ કરો છો, સહાયક દસ્તાવેજો અપલોડ કરી શકો છો, ગોઠવેલ સારાંશ જુઓ છો અને ઉપલબ્ધ ડૉક્ટર પસંદ કરી શકો છો." },
    { id: "medflow-doctor", category: "general", question: "શું MedFlow ડૉક્ટર છે?", answer: "ના. MedFlow આરોગ્ય માહિતી અને સારવાર માર્ગદર્શનનું સાધન છે; તે તબીબનું સ્થાન લેતું નથી." },
    { id: "medflow-diagnosis", category: "general", question: "શું MedFlow મારું નિદાન કરી શકે?", answer: "ના. મૂલ્યાંકન અને સારાંશ માત્ર માહિતી માટે છે અને તેને નિદાન માનવું જોઈએ નહીં." },
    { id: "assessment-how", category: "assessment", question: "ક્લિનિકલ મૂલ્યાંકન કેવી રીતે કાર્ય કરે છે?", answer: "તમે લક્ષણો પસંદ કરો છો અને ગોઠવેલા પ્રશ્નોના જવાબ આપો છો. માહિતી ક્લિનિકલ સમીક્ષા માટે ગોઠવાય છે." },
    { id: "assessment-next", category: "assessment", question: "મૂલ્યાંકન પૂર્ણ કર્યા પછી શું થાય છે?", answer: "તમે સારાંશ જોઈ શકો છો, ઉપલબ્ધ ડૉક્ટર શોધી શકો છો અને યોગ્ય હોય ત્યારે કતાર ટોકન બનાવી શકો છો." },
    { id: "assessment-speaking", category: "assessment", question: "શું હું બોલ્યા વિના MedFlow વાપરી શકું?", answer: "હા. દરેક મૂલ્યાંકન ક્ષેત્ર કીબોર્ડથી ભરી શકાય છે; અવાજ ઇનપુટ વૈકલ્પિક છે." },
    { id: "documents-upload", category: "documents", question: "શું હું તબીબી દસ્તાવેજો અપલોડ કરી શકું?", answer: "હા. આધારભૂત PDF અને છબીઓ ઇન્ટેક દરમિયાન અપલોડ કરી શકાય છે અને મૂલ્યાંકન સાથે સુરક્ષિત રીતે સંગ્રહિત થાય છે." },
    { id: "documents-protection", category: "documents", question: "મારા તબીબી દસ્તાવેજો કેવી રીતે સુરક્ષિત છે?", answer: "મૂળ ફાઇલો ખાનગી બકેટમાં સંગ્રહિત છે અને તબીબો તેને માત્ર અધિકૃત MedFlow સત્રથી જ જોઈ શકે છે." },
    { id: "doctor-assessment", category: "doctors", question: "ડૉક્ટર મારું મૂલ્યાંકન કેવી રીતે જુએ છે?", answer: "તમારા અધિકૃત કતાર ટોકન સાથે જોડાયેલા ડૉક્ટર જ પોતાના કાર્યસ્થળમાં તે મૂલ્યાંકન ખોલી શકે છે." },
    { id: "find-doctor", category: "doctors", question: "ડૉક્ટર શોધો કેવી રીતે કાર્ય કરે છે?", answer: "પસંદ કરેલી હોસ્પિટલના લાઇવ ડેટામાંથી સક્રિય ડૉક્ટરો જોવા માટે હોસ્પિટલ અને વિભાગ પસંદ કરો." },
    { id: "queue-token", category: "queue", question: "કતાર/ટોકન સિસ્ટમ શું છે?", answer: "ટોકન પસંદ કરેલા ડૉક્ટરની કતારમાં તમારું સ્થાન દર્શાવે છે અને લાઇવ કતાર દૃશ્યમાં જોઈ શકાય છે." },
    { id: "now-serving", category: "queue", question: "હવે સેવા આપવામાં આવે છે તેનો અર્થ શું?", answer: "તે ડૉક્ટરની કતારમાં હાલમાં બોલાવવામાં આવતા અથવા જોવામાં આવતા ટોકનને બતાવે છે." },
    { id: "public-information", category: "privacy", question: "શું મારી માહિતી જાહેરમાં વહેંચાય છે?", answer: "ના. તબીબી માહિતી અધિકૃત સારવાર કાર્યપ્રવાહ સુધી મર્યાદિત છે; જાહેર કતાર દૃશ્યોમાં ફક્ત ટોકન માહિતી જ વપરાય છે." },
    { id: "voice-input", category: "accessibility", question: "અવાજ ઇનપુટ કેવી રીતે કાર્ય કરે છે?", answer: "સક્રિય હોય ત્યારે અવાજ ઇનપુટ જવાબ નોંધવામાં મદદ કરે છે. સાચવતા પહેલાં તમે ઓળખાયેલ લખાણની પુષ્ટિ અથવા ફરી પ્રયાસ કરી શકો છો." },
    { id: "microphone", category: "accessibility", question: "MedFlow ને માઇક્રોફોન પરવાનગી શા માટે જોઈએ?", answer: "માઇક્રોફોન પરવાનગી ફક્ત ત્યારે માંગવામાં આવે છે જ્યારે તમે અવાજ ઇનપુટ વાપરવાનું પસંદ કરો." },
  ],
};

resources.hi.translation.patientFaq = {
  eyebrow: "सहायता", title: "सहायता और अक्सर पूछे जाने वाले प्रश्न", description: "MedFlow के बारे में उत्तर पाएँ या सहायता प्राप्त करें।", search: "सामान्य प्रश्न खोजें", categoriesLabel: "प्रश्न श्रेणियाँ", readAloud: "पढ़कर सुनाएँ", readAloudAria: "पढ़कर सुनाएँ: {{question}}", emptyTitle: "कोई प्रश्न नहीं मिला", emptyDetail: "कोई दूसरा खोज शब्द या श्रेणी आज़माएँ।", contactEyebrow: "सहायता से संपर्क", contactTitle: "डेमो सहायता संपर्क", demoSupport: "डेमो सहायता", important: "महत्वपूर्ण", emergencyTitle: "चिकित्सीय आपातस्थिति", emergencyDetail: "चिकित्सीय आपातस्थिति में अपनी स्थानीय आपातकालीन सेवा से संपर्क करें या निकटतम आपात विभाग जाएँ।",
  categories: { general: "सामान्य", assessment: "मूल्यांकन", documents: "दस्तावेज़", doctors: "डॉक्टर और अपॉइंटमेंट", queue: "कतार और टोकन", privacy: "गोपनीयता और सुरक्षा", accessibility: "सुलभता" },
  items: [
    { id: "what-is-medflow", category: "general", question: "MedFlow क्या है?", answer: "MedFlow आपकी चुनी हुई जानकारी व्यवस्थित करने, संरचित मूल्यांकन पूरा करने और उपलब्ध देखभाल विकल्प खोजने में मदद करता है।" },
    { id: "how-medflow-works", category: "general", question: "MedFlow कैसे काम करता है?", answer: "आप मूल्यांकन पूरा करते हैं, सहायक दस्तावेज़ अपलोड कर सकते हैं, संरचित सारांश देखते हैं और चाहें तो उपलब्ध डॉक्टर चुन सकते हैं।" },
    { id: "medflow-doctor", category: "general", question: "क्या MedFlow डॉक्टर है?", answer: "नहीं। MedFlow स्वास्थ्य-सूचना और देखभाल-नेविगेशन उपकरण है; यह चिकित्सक का विकल्प नहीं है।" },
    { id: "medflow-diagnosis", category: "general", question: "क्या MedFlow मेरा निदान कर सकता है?", answer: "नहीं। मूल्यांकन और सारांश केवल जानकारी के लिए हैं और इन्हें निदान नहीं माना जाना चाहिए।" },
    { id: "assessment-how", category: "assessment", question: "क्लिनिकल मूल्यांकन कैसे काम करता है?", answer: "आप लक्षण चुनते हैं और संरचित प्रश्नों के उत्तर देते हैं। जानकारी क्लिनिकल समीक्षा के लिए व्यवस्थित की जाती है।" },
    { id: "assessment-next", category: "assessment", question: "मूल्यांकन पूरा करने के बाद क्या होता है?", answer: "आप सारांश देख सकते हैं, उपलब्ध डॉक्टर खोज सकते हैं और उपयुक्त होने पर कतार टोकन बना सकते हैं।" },
    { id: "assessment-speaking", category: "assessment", question: "क्या मैं बिना बोले MedFlow इस्तेमाल कर सकता हूँ?", answer: "हाँ। मूल्यांकन का हर क्षेत्र कीबोर्ड से भरा जा सकता है; वॉइस इनपुट वैकल्पिक है।" },
    { id: "documents-upload", category: "documents", question: "क्या मैं चिकित्सीय दस्तावेज़ अपलोड कर सकता हूँ?", answer: "हाँ। समर्थित PDF और चित्र इंटेक के दौरान अपलोड किए जा सकते हैं और मूल्यांकन के साथ सुरक्षित रखे जाते हैं।" },
    { id: "documents-protection", category: "documents", question: "मेरे चिकित्सीय दस्तावेज़ कैसे सुरक्षित हैं?", answer: "मूल फ़ाइलें निजी बकेट में रखी जाती हैं और चिकित्सक उन्हें केवल अधिकृत MedFlow सत्र से देख सकते हैं।" },
    { id: "doctor-assessment", category: "doctors", question: "डॉक्टर मेरा मूल्यांकन कैसे देखता है?", answer: "केवल आपके अधिकृत कतार टोकन से जुड़े डॉक्टर ही अपने कार्यक्षेत्र में मूल्यांकन खोल सकते हैं।" },
    { id: "find-doctor", category: "doctors", question: "डॉक्टर खोजें कैसे काम करता है?", answer: "चुने गए अस्पताल के लाइव डेटा से सक्रिय डॉक्टर देखने के लिए अस्पताल और विभाग चुनें।" },
    { id: "queue-token", category: "queue", question: "कतार/टोकन प्रणाली क्या है?", answer: "टोकन चुने हुए डॉक्टर की कतार में आपका स्थान दर्शाता है और लाइव कतार दृश्य में देखा जा सकता है।" },
    { id: "now-serving", category: "queue", question: "अभी सेवा में का क्या अर्थ है?", answer: "यह उस डॉक्टर की कतार में वर्तमान में बुलाए या देखे जा रहे टोकन को दिखाता है।" },
    { id: "public-information", category: "privacy", question: "क्या मेरी जानकारी सार्वजनिक रूप से साझा होती है?", answer: "नहीं। चिकित्सीय जानकारी केवल अधिकृत देखभाल कार्यप्रवाह तक सीमित रहती है; सार्वजनिक कतार दृश्य केवल टोकन जानकारी का उपयोग करते हैं।" },
    { id: "voice-input", category: "accessibility", question: "वॉइस इनपुट कैसे काम करता है?", answer: "सक्रिय होने पर वॉइस इनपुट उत्तर दर्ज करने में मदद करता है। सहेजने से पहले आप पहचाने गए पाठ की पुष्टि कर सकते हैं या फिर से प्रयास कर सकते हैं।" },
    { id: "microphone", category: "accessibility", question: "MedFlow को माइक्रोफ़ोन की अनुमति क्यों चाहिए?", answer: "माइक्रोफ़ोन की अनुमति केवल तब माँगी जाती है जब आप वॉइस इनपुट चुनते हैं।" },
  ],
};

resources.bn.translation.patientFaq = {
  eyebrow: "সহায়তা", title: "সহায়তা ও সাধারণ প্রশ্ন", description: "MedFlow সম্পর্কে উত্তর পান বা সহায়তা নিন।", search: "সাধারণ প্রশ্ন খুঁজুন", categoriesLabel: "প্রশ্নের বিভাগ", readAloud: "পড়ে শোনান", readAloudAria: "পড়ে শোনান: {{question}}", emptyTitle: "কোনো প্রশ্ন পাওয়া যায়নি", emptyDetail: "অন্য অনুসন্ধান শব্দ বা বিভাগ চেষ্টা করুন।", contactEyebrow: "সহায়তায় যোগাযোগ", contactTitle: "ডেমো সহায়তা যোগাযোগ", demoSupport: "ডেমো সহায়তা", important: "গুরুত্বপূর্ণ", emergencyTitle: "চিকিৎসাগত জরুরি অবস্থা", emergencyDetail: "চিকিৎসাগত জরুরি অবস্থায় স্থানীয় জরুরি পরিষেবার সঙ্গে যোগাযোগ করুন বা নিকটতম জরুরি বিভাগে যান।",
  categories: { general: "সাধারণ", assessment: "মূল্যায়ন", documents: "নথি", doctors: "ডাক্তার ও অ্যাপয়েন্টমেন্ট", queue: "সারি ও টোকেন", privacy: "গোপনীয়তা ও নিরাপত্তা", accessibility: "অভিগম্যতা" },
  items: [
    { id: "what-is-medflow", category: "general", question: "MedFlow কী?", answer: "MedFlow আপনার দেওয়া তথ্য গুছিয়ে রাখতে, একটি কাঠামোবদ্ধ মূল্যায়ন সম্পূর্ণ করতে এবং উপলব্ধ সেবার বিকল্প খুঁজতে সাহায্য করে।" },
    { id: "how-medflow-works", category: "general", question: "MedFlow কীভাবে কাজ করে?", answer: "আপনি মূল্যায়ন সম্পূর্ণ করেন, সহায়ক নথি আপলোড করতে পারেন, কাঠামোবদ্ধ সারাংশ দেখেন এবং চাইলে উপলব্ধ ডাক্তার বেছে নিতে পারেন।" },
    { id: "medflow-doctor", category: "general", question: "MedFlow কি ডাক্তার?", answer: "না। MedFlow স্বাস্থ্যতথ্য ও সেবা-নির্দেশনার একটি উপকরণ; এটি চিকিৎসকের বিকল্প নয়।" },
    { id: "medflow-diagnosis", category: "general", question: "MedFlow কি আমার রোগ নির্ণয় করতে পারে?", answer: "না। মূল্যায়ন ও সারাংশ কেবল তথ্যের জন্য; এগুলিকে রোগ নির্ণয় হিসেবে ধরা যাবে না।" },
    { id: "assessment-how", category: "assessment", question: "ক্লিনিক্যাল মূল্যায়ন কীভাবে কাজ করে?", answer: "আপনি উপসর্গ বেছে নেন এবং কাঠামোবদ্ধ প্রশ্নের উত্তর দেন। তথ্য ক্লিনিক্যাল পর্যালোচনার জন্য সাজানো হয়।" },
    { id: "assessment-next", category: "assessment", question: "মূল্যায়ন শেষ হলে কী হয়?", answer: "আপনি সারাংশ দেখতে পারেন, উপলব্ধ ডাক্তার খুঁজতে পারেন এবং উপযুক্ত হলে সারির টোকেন তৈরি করতে পারেন।" },
    { id: "assessment-speaking", category: "assessment", question: "কথা না বলে কি MedFlow ব্যবহার করা যায়?", answer: "হ্যাঁ। প্রতিটি মূল্যায়ন ক্ষেত্র কিবোর্ড দিয়ে পূরণ করা যায়; ভয়েস ইনপুট ঐচ্ছিক।" },
    { id: "documents-upload", category: "documents", question: "আমি কি চিকিৎসা-নথি আপলোড করতে পারি?", answer: "হ্যাঁ। সমর্থিত PDF ও ছবি ইনটেকের সময় আপলোড করা যায় এবং মূল্যায়নের সঙ্গে নিরাপদে রাখা হয়।" },
    { id: "documents-protection", category: "documents", question: "আমার চিকিৎসা-নথি কীভাবে সুরক্ষিত থাকে?", answer: "মূল ফাইল ব্যক্তিগত বালতিতে রাখা হয় এবং চিকিৎসকেরা কেবল অনুমোদিত MedFlow সেশনের মাধ্যমে দেখতে পারেন।" },
    { id: "doctor-assessment", category: "doctors", question: "ডাক্তার কীভাবে আমার মূল্যায়ন দেখেন?", answer: "শুধু আপনার অনুমোদিত সারি টোকেনের সঙ্গে যুক্ত ডাক্তারই নিজের কর্মক্ষেত্রে মূল্যায়ন খুলতে পারেন।" },
    { id: "find-doctor", category: "doctors", question: "ডাক্তার খুঁজুন কীভাবে কাজ করে?", answer: "নির্বাচিত হাসপাতালের লাইভ ডেটা থেকে সক্রিয় ডাক্তার দেখতে হাসপাতাল ও বিভাগ বেছে নিন।" },
    { id: "queue-token", category: "queue", question: "সারি/টোকেন ব্যবস্থা কী?", answer: "টোকেন নির্বাচিত ডাক্তারের সারিতে আপনার স্থান বোঝায় এবং লাইভ সারি দৃশ্যে দেখা যায়।" },
    { id: "now-serving", category: "queue", question: "এখন সেবা চলছে বলতে কী বোঝায়?", answer: "এটি সেই ডাক্তারের সারিতে বর্তমানে ডাকা বা দেখা হচ্ছে এমন টোকন দেখায়।" },
    { id: "public-information", category: "privacy", question: "আমার তথ্য কি প্রকাশ্যে ভাগ করা হয়?", answer: "না। চিকিৎসা-তথ্য অনুমোদিত সেবা-প্রবাহের মধ্যেই সীমিত থাকে; প্রকাশ্য সারি দৃশ্যে শুধু টোকেন তথ্য ব্যবহৃত হয়।" },
    { id: "voice-input", category: "accessibility", question: "ভয়েস ইনপুট কীভাবে কাজ করে?", answer: "সক্রিয় থাকলে ভয়েস ইনপুট উত্তর ধরতে সাহায্য করে। সংরক্ষণের আগে আপনি স্বীকৃত লেখাটি নিশ্চিত করতে বা আবার চেষ্টা করতে পারেন।" },
    { id: "microphone", category: "accessibility", question: "MedFlow-এর মাইক্রোফোন অনুমতি কেন দরকার?", answer: "আপনি ভয়েস ইনপুট ব্যবহার করতে চাইলে তবেই মাইক্রোফোন অনুমতি চাওয়া হয়।" },
  ],
};

// The selector and Sarvam use these regional language identifiers.  The
// complete source dictionaries above remain the only place UI copy is stored.
export const MEDFLOW_LANGUAGES = [
  { code: "en-IN", base: "en", name: "English" },
  { code: "hi-IN", base: "hi", name: "Hindi" },
  { code: "bn-IN", base: "bn", name: "Bengali" },
  { code: "gu-IN", base: "gu", name: "Gujarati" },
  { code: "kn-IN", base: "kn", name: "Kannada" },
  { code: "ml-IN", base: "ml", name: "Malayalam" },
  { code: "mr-IN", base: "mr", name: "Marathi" },
  { code: "od-IN", base: "or", name: "Odia" },
  { code: "pa-IN", base: "pa", name: "Punjabi" },
  { code: "ta-IN", base: "ta", name: "Tamil" },
  { code: "te-IN", base: "te", name: "Telugu" },
  { code: "as-IN", base: "as", name: "Assamese" },
  { code: "ur-IN", base: "ur", name: "Urdu" },
  { code: "ne-IN", base: "ne", name: "Nepali" },
  { code: "kok-IN", base: "kok", name: "Konkani" },
  { code: "ks-IN", base: "ks", name: "Kashmiri" },
  { code: "sd-IN", base: "sd", name: "Sindhi" },
  { code: "sa-IN", base: "sa", name: "Sanskrit" },
  { code: "sat-IN", base: "sat", name: "Santali" },
  { code: "mni-IN", base: "mni", name: "Manipuri" },
  { code: "brx-IN", base: "brx", name: "Bodo" },
  { code: "mai-IN", base: "mai", name: "Maithili" },
  { code: "doi-IN", base: "doi", name: "Dogri" },
];

export const RTL_LANGUAGE_CODES = new Set(["ur-IN", "ks-IN", "sd-IN"]);

// Static portal copy for the high-traffic dashboard and queue workspace.  It
// deliberately contains only interface labels, never patient or clinical data.
const PORTAL_OVERRIDES = {
  hi: { goodMorning: "सुप्रभात, {{name}}", patientDashboardSubtitle: "आइए आज आपके स्वास्थ्य का ध्यान रखें।", activeQueue: "सक्रिय कतार", waiting: "प्रतीक्षा में", doctor: "डॉक्टर", hospital: "अस्पताल", patientsAhead: "आपके आगे मरीज", viewLiveQueue: "पूरी कतार देखें", startNewAssessment: "नया आकलन शुरू करें", startAssessmentFriendlyDescription: "बताइए आपको क्या परेशानी है। हम हर चरण में आपका मार्गदर्शन करेंगे।", startAssessment: "आकलन शुरू करें", recentAssessment: "हालिया आकलन", viewRecords: "रिकॉर्ड देखें", findDoctor: "डॉक्टर खोजें", logout: "लॉग आउट" },
  bn: { goodMorning: "শুভ সকাল, {{name}}", patientDashboardSubtitle: "আজ আপনার স্বাস্থ্যের যত্ন নেওয়া যাক।", activeQueue: "সক্রিয় সারি", waiting: "অপেক্ষমাণ", doctor: "ডাক্তার", hospital: "হাসপাতাল", patientsAhead: "আপনার আগে রোগী", viewLiveQueue: "সম্পূর্ণ সারি দেখুন", startNewAssessment: "নতুন মূল্যায়ন শুরু করুন", startAssessmentFriendlyDescription: "আপনার সমস্যা জানান। আমরা ধাপে ধাপে সাহায্য করব।", startAssessment: "মূল্যায়ন শুরু করুন", recentAssessment: "সাম্প্রতিক মূল্যায়ন", viewRecords: "রেকর্ড দেখুন", findDoctor: "ডাক্তার খুঁজুন", logout: "লগ আউট" },
  gu: { goodMorning: "સુપ્રભાત, {{name}}", patientDashboardSubtitle: "આજે તમારા સ્વાસ્થ્યની કાળજી લઈએ.", activeQueue: "સક્રિય કતાર", waiting: "રાહમાં", doctor: "ડૉક્ટર", hospital: "હોસ્પિટલ", patientsAhead: "તમારી આગળના દર્દીઓ", viewLiveQueue: "સંપૂર્ણ કતાર જુઓ", startNewAssessment: "નવું મૂલ્યાંકન શરૂ કરો", startAssessmentFriendlyDescription: "તમને શું તકલીફ છે તે જણાવો. અમે પગલું પગલું માર્ગદર્શન આપીશું.", startAssessment: "મૂલ્યાંકન શરૂ કરો", recentAssessment: "તાજેતરનું મૂલ્યાંકન", viewRecords: "રેકોર્ડ જુઓ", findDoctor: "ડૉક્ટર શોધો", logout: "લૉગ આઉટ", documentsDescription: "તમારા વર્તમાન મૂલ્યાંકન સાથે જોડાયેલા દસ્તાવેજો અને તેમની કાઢેલી માહિતી જુઓ.", noDocuments: "કોઈ દસ્તાવેજ અપલોડ કરવામાં આવ્યો નથી.", noDocumentsDetail: "તમે ક્લિનિકલ ઇન્ટેક દરમિયાન વૈકલ્પિક PDF, JPG અથવા PNG ઉમેરી શકો છો." },
  kn: { goodMorning: "ಶುಭೋದಯ, {{name}}", patientDashboardSubtitle: "ಇಂದು ನಿಮ್ಮ ಆರೋಗ್ಯದ ಕಾಳಜಿ ವಹಿಸೋಣ.", activeQueue: "ಸಕ್ರಿಯ ಸರದಿ", waiting: "ನಿರೀಕ್ಷೆಯಲ್ಲಿದೆ", doctor: "ವೈದ್ಯರು", hospital: "ಆಸ್ಪತ್ರೆ", patientsAhead: "ನಿಮ್ಮ ಮುಂದಿರುವ ರೋಗಿಗಳು", viewLiveQueue: "ಸಂಪೂರ್ಣ ಸರದಿ ನೋಡಿ", startNewAssessment: "ಹೊಸ ಮೌಲ್ಯಮಾಪನ ಪ್ರಾರಂಭಿಸಿ", startAssessmentFriendlyDescription: "ನಿಮ್ಮ ಸಮಸ್ಯೆಯನ್ನು ತಿಳಿಸಿ. ನಾವು ಹಂತ ಹಂತವಾಗಿ ಮಾರ್ಗದರ್ಶನ ಮಾಡುತ್ತೇವೆ.", startAssessment: "ಮೌಲ್ಯಮಾಪನ ಪ್ರಾರಂಭಿಸಿ", recentAssessment: "ಇತ್ತೀಚಿನ ಮೌಲ್ಯಮಾಪನ", viewRecords: "ದಾಖಲೆಗಳನ್ನು ನೋಡಿ", findDoctor: "ವೈದ್ಯರನ್ನು ಹುಡುಕಿ", logout: "ಲಾಗ್ ಔಟ್" },
  ml: { goodMorning: "സുപ്രഭാതം, {{name}}", patientDashboardSubtitle: "ഇന്ന് നിങ്ങളുടെ ആരോഗ്യത്തെ ശ്രദ്ധിക്കാം.", activeQueue: "സജീവ ക്യൂ", waiting: "കാത്തിരിക്കുന്നു", doctor: "ഡോക്ടർ", hospital: "ആശുപത്രി", patientsAhead: "നിങ്ങളുടെ മുന്നിലുള്ള രോഗികൾ", viewLiveQueue: "മുഴുവൻ ക്യൂ കാണുക", startNewAssessment: "പുതിയ വിലയിരുത്തൽ തുടങ്ങുക", startAssessmentFriendlyDescription: "നിങ്ങളുടെ ബുദ്ധിമുട്ട് പറയൂ. ഓരോ ഘട്ടത്തിലും ഞങ്ങൾ വഴികാട്ടും.", startAssessment: "വിലയിരുത്തൽ തുടങ്ങുക", recentAssessment: "സമീപകാല വിലയിരുത്തൽ", viewRecords: "രേഖകൾ കാണുക", findDoctor: "ഡോക്ടറെ കണ്ടെത്തുക", logout: "ലോഗ് ഔട്ട്" },
  mr: { goodMorning: "शुभ सकाळ, {{name}}", patientDashboard: "रुग्ण डॅशबोर्ड", medicalDocuments: "वैद्यकीय दस्तऐवज", helpFaq: "मदत आणि प्रश्नोत्तरे", accessibility: "सुलभता", patientDashboardSubtitle: "आज तुमच्या आरोग्याची काळजी घेऊया.", activeQueue: "सक्रिय रांग", waiting: "प्रतीक्षेत", doctor: "डॉक्टर", hospital: "रुग्णालय", patientsAhead: "तुमच्या पुढील रुग्ण", viewLiveQueue: "पूर्ण रांग पहा", startNewAssessment: "नवीन मूल्यांकन सुरू करा", startAssessmentFriendlyDescription: "तुम्हाला काय त्रास होत आहे ते सांगा. आम्ही टप्प्याटप्प्याने मार्गदर्शन करू.", startAssessment: "मूल्यांकन सुरू करा", recentAssessment: "अलीकडील मूल्यांकन", viewRecords: "नोंदी पहा", findDoctor: "डॉक्टर शोधा", logout: "लॉग आउट" },
  or: { goodMorning: "ସୁପ୍ରଭାତ, {{name}}", patientDashboardSubtitle: "ଆସନ୍ତୁ ଆଜି ଆପଣଙ୍କ ସ୍ୱାସ୍ଥ୍ୟର ଯତ୍ନ ନେବା।", activeQueue: "ସକ୍ରିୟ ଧାଡ଼ି", waiting: "ଅପେକ୍ଷାରତ", doctor: "ଡାକ୍ତର", hospital: "ହସ୍ପିଟାଲ", patientsAhead: "ଆପଣଙ୍କ ଆଗରେ ଥିବା ରୋଗୀ", viewLiveQueue: "ସମ୍ପୂର୍ଣ୍ଣ ଧାଡ଼ି ଦେଖନ୍ତୁ", startNewAssessment: "ନୂତନ ମୂଲ୍ୟାଙ୍କନ ଆରମ୍ଭ କରନ୍ତୁ", startAssessment: "ମୂଲ୍ୟାଙ୍କନ ଆରମ୍ଭ କରନ୍ତୁ", recentAssessment: "ସାମ୍ପ୍ରତିକ ମୂଲ୍ୟାଙ୍କନ", viewRecords: "ରେକର୍ଡ ଦେଖନ୍ତୁ", findDoctor: "ଡାକ୍ତର ଖୋଜନ୍ତୁ", logout: "ଲଗ୍ ଆଉଟ୍" },
  pa: { goodMorning: "ਸ਼ੁਭ ਸਵੇਰ, {{name}}", patientDashboardSubtitle: "ਆਓ ਅੱਜ ਤੁਹਾਡੀ ਸਿਹਤ ਦਾ ਧਿਆਨ ਰੱਖੀਏ।", activeQueue: "ਸਰਗਰਮ ਕਤਾਰ", waiting: "ਉਡੀਕ ਵਿੱਚ", doctor: "ਡਾਕਟਰ", hospital: "ਹਸਪਤਾਲ", patientsAhead: "ਤੁਹਾਡੇ ਅੱਗੇ ਮਰੀਜ਼", viewLiveQueue: "ਪੂਰੀ ਕਤਾਰ ਵੇਖੋ", startNewAssessment: "ਨਵਾਂ ਮੁਲਾਂਕਣ ਸ਼ੁਰੂ ਕਰੋ", startAssessment: "ਮੁਲਾਂਕਣ ਸ਼ੁਰੂ ਕਰੋ", recentAssessment: "ਹਾਲੀਆ ਮੁਲਾਂਕਣ", viewRecords: "ਰਿਕਾਰਡ ਵੇਖੋ", findDoctor: "ਡਾਕਟਰ ਲੱਭੋ", logout: "ਲਾਗ ਆਉਟ" },
  ta: { goodMorning: "காலை வணக்கம், {{name}}", patientDashboardSubtitle: "இன்று உங்கள் உடல்நலத்தை கவனிப்போம்.", activeQueue: "செயலில் உள்ள வரிசை", waiting: "காத்திருக்கிறது", doctor: "மருத்துவர்", hospital: "மருத்துவமனை", patientsAhead: "உங்களுக்கு முன்னால் உள்ள நோயாளிகள்", viewLiveQueue: "முழு வரிசையைப் பார்க்கவும்", startNewAssessment: "புதிய மதிப்பீட்டைத் தொடங்கவும்", startAssessmentFriendlyDescription: "உங்கள் பிரச்சினையைச் சொல்லுங்கள். ஒவ்வொரு கட்டத்திலும் நாங்கள் வழிகாட்டுவோம்.", startAssessment: "மதிப்பீட்டைத் தொடங்கவும்", recentAssessment: "சமீபத்திய மதிப்பீடு", viewRecords: "பதிவுகளைப் பார்க்கவும்", findDoctor: "மருத்துவரைக் கண்டறியவும்", logout: "வெளியேறு" },
  te: { goodMorning: "శుభోదయం, {{name}}", patientDashboardSubtitle: "ఈ రోజు మీ ఆరోగ్యాన్ని చూసుకుందాం.", activeQueue: "సక్రియ క్యూ", waiting: "వేచి ఉంది", doctor: "వైద్యుడు", hospital: "ఆసుపత్రి", patientsAhead: "మీ ముందు ఉన్న రోగులు", viewLiveQueue: "పూర్తి క్యూ చూడండి", startNewAssessment: "కొత్త మూల్యాంకనం ప్రారంభించండి", startAssessment: "మూల్యాంకనం ప్రారంభించండి", recentAssessment: "ఇటీవలి మూల్యాంకనం", viewRecords: "రికార్డులు చూడండి", findDoctor: "వైద్యుడిని కనుగొనండి", logout: "లాగ్ అవుట్" },
  as: { goodMorning: "সুপ্ৰভাত, {{name}}", patientDashboardSubtitle: "আজি আপোনাৰ স্বাস্থ্যৰ যত্ন লওঁ।", activeQueue: "সক্ৰিয় শাৰী", waiting: "অপেক্ষাত", doctor: "ডাক্তৰ", hospital: "হাসপাতাল", patientsAhead: "আপোনাৰ আগৰ ৰোগী", viewLiveQueue: "সম্পূৰ্ণ শাৰী চাওক", startNewAssessment: "নতুন মূল্যায়ন আৰম্ভ কৰক", startAssessment: "মূল্যায়ন আৰম্ভ কৰক", recentAssessment: "শেহতীয়া মূল্যায়ন", viewRecords: "ৰেকৰ্ড চাওক", findDoctor: "ডাক্তৰ বিচাৰক", logout: "লগ আউট" },
  ur: { goodMorning: "صبح بخیر، {{name}}", patientDashboardSubtitle: "آج آپ کی صحت کا خیال رکھتے ہیں۔", activeQueue: "فعال قطار", waiting: "انتظار میں", doctor: "ڈاکٹر", hospital: "ہسپتال", patientsAhead: "آپ سے آگے مریض", viewLiveQueue: "مکمل قطار دیکھیں", startNewAssessment: "نیا جائزہ شروع کریں", startAssessment: "جائزہ شروع کریں", recentAssessment: "حالیہ جائزہ", viewRecords: "ریکارڈ دیکھیں", findDoctor: "ڈاکٹر تلاش کریں", logout: "لاگ آؤٹ" },
  ne: { goodMorning: "शुभ प्रभात, {{name}}", patientDashboardSubtitle: "आज तपाईंको स्वास्थ्यको ख्याल गरौं।", activeQueue: "सक्रिय लाइन", waiting: "प्रतीक्षामा", doctor: "डाक्टर", hospital: "अस्पताल", patientsAhead: "तपाईं अगाडिका बिरामी", viewLiveQueue: "पूरा लाइन हेर्नुहोस्", startNewAssessment: "नयाँ मूल्याङ्कन सुरु गर्नुहोस्", startAssessment: "मूल्याङ्कन सुरु गर्नुहोस्", recentAssessment: "हालको मूल्याङ्कन", viewRecords: "रेकर्ड हेर्नुहोस्", findDoctor: "डाक्टर खोज्नुहोस्", logout: "लग आउट" },
  kok: { goodMorning: "सुप्रभात, {{name}}", patientDashboardSubtitle: "आयज तुमच्या आरोग्याची काळजी घेया.", activeQueue: "सक्रिय रांग", waiting: "प्रतीक्षेंत", doctor: "डॉक्टर", hospital: "इस्पितळ", patientsAhead: "तुमच्या मुखार आसपी रूग्ण", viewLiveQueue: "सगळी रांग पळोवची", startNewAssessment: "नवें मूल्यमापन सुरू करात", startAssessment: "मूल्यमापन सुरू करात", recentAssessment: "अलीकडचें मूल्यमापन", viewRecords: "नोंदी पळयात", findDoctor: "डॉक्टर सोदात", logout: "लॉग आऊट" },
  ks: { goodMorning: "صبح بخیر، {{name}}", patientDashboardSubtitle: "آج چھِو تُہند صحت سنٛد خیال تھاوان۔", activeQueue: "فعال قطار", waiting: "انتظار منٛز", doctor: "ڈاکٹر", hospital: "ہسپتال", patientsAhead: "تُہند برونٛہہ مریض", viewLiveQueue: "مکمل قطار وٕچھِو", startNewAssessment: "نَو جائزہ شروع کٔریو", startAssessment: "جائزہ شروع کٔریو", recentAssessment: "حالیہ جائزہ", viewRecords: "ریکارڈ وٕچھِو", findDoctor: "ڈاکٹر ژھانڈِو", logout: "لاگ آؤٹ" },
  sd: { goodMorning: "صبح بخير، {{name}}", patientDashboardSubtitle: "اڄ توهان جي صحت جو خيال رکون ٿا۔", activeQueue: "فعال قطار", waiting: "انتظار ۾", doctor: "ڊاڪٽر", hospital: "اسپتال", patientsAhead: "توهان کان اڳ مريض", viewLiveQueue: "مڪمل قطار ڏسو", startNewAssessment: "نئون جائزو شروع ڪريو", startAssessmentFriendlyDescription: "توهان کي جيڪا تڪليف آهي، اها ٻڌايو۔ اسين قدم بہ قدم رهنمائي ڪنداسين۔", startAssessment: "جائزو شروع ڪريو", recentAssessment: "تازو جائزو", viewRecords: "ريڪارڊ ڏسو", findDoctor: "ڊاڪٽر ڳوليو", logout: "لاگ آئوٽ" },
  sa: { goodMorning: "सुप्रभातम्, {{name}}", patientDashboardSubtitle: "अद्य भवतः स्वास्थ्यस्य परिचर्यां कुर्मः।", activeQueue: "सक्रिया पङ्क्तिः", waiting: "प्रतीक्षायाम्", doctor: "वैद्यः", hospital: "चिकित्सालयः", patientsAhead: "भवतः अग्रे रोगिणः", viewLiveQueue: "सम्पूर्णां पङ्क्तिं पश्यतु", startNewAssessment: "नूतनं मूल्याङ्कनम् आरभत", startAssessment: "मूल्याङ्कनम् आरभत", recentAssessment: "सद्यः मूल्याङ्कनम्", viewRecords: "अभिलेखान् पश्यतु", findDoctor: "वैद्यं अन्वेषयतु", logout: "निर्गच्छतु" },
  mai: { goodMorning: "सुप्रभात, {{name}}", patientDashboardSubtitle: "आइ अपने स्वास्थ्यक देखभाल करी।", activeQueue: "सक्रिय पाँति", waiting: "प्रतीक्षामे", doctor: "डॉक्टर", hospital: "अस्पताल", patientsAhead: "अहाँक आगाँ रोगी", viewLiveQueue: "पूरा पाँति देखू", startNewAssessment: "नव मूल्यांकन शुरू करू", startAssessment: "मूल्यांकन शुरू करू", recentAssessment: "हालक मूल्यांकन", viewRecords: "रिकॉर्ड देखू", findDoctor: "डॉक्टर खोजू", logout: "लॉग आउट" },
  doi: { goodMorning: "सुप्रभात, {{name}}", patientDashboardSubtitle: "अज्ज तुंदी सेहत दा ख्याल रखिए।", activeQueue: "सरगर्म कतार", waiting: "उडीक च", doctor: "डॉक्टर", hospital: "अस्पताल", patientsAhead: "तुंदे अग्गे मरीज", viewLiveQueue: "पूरी कतार दिक्खो", startNewAssessment: "नमा मूल्यांकन शुरू करो", startAssessment: "मूल्यांकन शुरू करो", recentAssessment: "हाल दा मूल्यांकन", viewRecords: "रिकॉर्ड दिक्खो", findDoctor: "डॉक्टर खोजो", logout: "लॉग आउट" },
  mni: { goodMorning: "ꯁꯨꯕ ꯅꯨꯡꯁꯤꯕꯥ, {{name}}", patientDashboardSubtitle: "ꯅꯨꯡꯁꯤꯕꯥ ꯅꯨꯡꯁꯤ ꯅꯍꯥꯛꯀꯤ ꯍꯦꯜꯊ ꯌꯦꯡꯁꯤꯟꯕꯤꯌꯨ।", activeQueue: "ꯁꯤꯟꯅ ꯂꯩꯕꯥ ꯀ꯭ꯌꯨ", waiting: "ꯉꯥꯏꯕꯥ", doctor: "ꯗꯣꯛꯇꯔ", hospital: "ꯍꯣꯁꯄꯤꯇꯦꯜ", patientsAhead: "ꯅꯍꯥꯛꯀꯤ ꯃꯃꯥꯡꯗ ꯂꯩꯕꯥ ꯃꯔꯤꯖ", viewLiveQueue: "ꯃꯄꯨꯡ ꯀ꯭ꯌꯨ ꯌꯦꯡꯕꯤꯌꯨ", startNewAssessment: "ꯑꯅꯧꯕꯥ ꯑꯦꯁꯦꯁꯃꯦꯟꯇ ꯍꯧꯗꯣꯛꯎ", startAssessment: "ꯑꯦꯁꯦꯁꯃꯦꯟꯇ ꯍꯧꯗꯣꯛꯎ", recentAssessment: "ꯅꯧꯔꯛꯀꯤ ꯑꯦꯁꯦꯁꯃꯦꯟꯇ", viewRecords: "ꯔꯦꯀꯣꯔꯗ ꯌꯦꯡꯕꯤꯌꯨ", findDoctor: "ꯗꯣꯛꯇꯔ ꯊꯤꯕꯤꯌꯨ", logout: "ꯂꯣꯒ ꯑꯥꯎꯠ" },
  brx: { goodMorning: "सुबुं, {{name}}", patientDashboardSubtitle: "दिनै नोंथांनि फिसानि जथुमानि ख्याल लाखो।", activeQueue: "सक्रिय सारि", waiting: "नेनाइआव", doctor: "डक्टर", hospital: "हस्पिटल", patientsAhead: "नोंथांनि सिगांआव थियानाय रुगिया", viewLiveQueue: "गासै सारि नाय", startNewAssessment: "गोदान मुल्यायन जागाय", startAssessment: "मुल्यायन जागाय", recentAssessment: "दानि मुल्यायन", viewRecords: "रेकर्ड नाय", findDoctor: "डक्टर नागिर", logout: "लग आउट" },
  sat: { goodMorning: "ᱥᱩᱯᱨᱚᱵᱷᱟᱛ, {{name}}", patientDashboardSubtitle: "ᱛᱮᱦᱮᱧ ᱟᱢᱟᱜ ᱥᱮᱦᱮᱫ ᱧᱮᱞ ᱡᱚᱛᱚᱱᱮᱢ।", activeQueue: "ᱥᱚᱠᱨᱤᱭ ᱛᱷᱟᱨ", waiting: "ᱛᱟᱹᱝᱜᱤ", doctor: "ᱰᱟᱠᱛᱚᱨ", hospital: "ᱦᱚᱥᱯᱤᱴᱟᱞ", patientsAhead: "ᱟᱢ ᱞᱟᱦᱟᱨᱮ ᱨᱩᱜᱤ", viewLiveQueue: "ᱯᱩᱨᱟᱹ ᱛᱷᱟᱨ ᱧᱮᱞ", startNewAssessment: "ᱱᱟᱣᱟ ᱢᱩᱞᱭᱟᱭᱚᱱ ᱮᱦᱚᱵ", startAssessment: "ᱢᱩᱞᱭᱟᱭᱚᱱ ᱮᱦᱚᱵ", recentAssessment: "ᱱᱤᱛᱚᱜ ᱢᱩᱞᱭᱟᱭᱚᱱ", viewRecords: "ᱨᱮᱠᱚᱨᱰ ᱧᱮᱞ", findDoctor: "ᱰᱟᱠᱛᱚᱨ ᱯᱟᱱᱛᱮ", logout: "ᱞᱚᱜ ᱟᱣᱴ" },
};

// New portal labels were introduced after the original language dictionaries.
// Give every supported language an identical key structure and let the native
// dictionaries above retain their translated values for the established UI.
for (const { code, base } of MEDFLOW_LANGUAGES) {
  const translation = resources[base].translation;
  const portal = PORTAL_OVERRIDES[base] || {};
  translation.platform = {
    ...resources.en.translation.platform,
    ...translation.platform,
    ...portal,
    // Reuse each language's established patient-facing terminology for the
    // newer portal keys instead of showing an English fallback.
    patient: translation.patient || resources.en.translation.platform.patient,
    patients: translation.patients || resources.en.translation.platform.patients,
    patientPortal: translation.patientPortal || resources.en.translation.platform.patientPortal,
    uploadDocument: translation.uploadDocument || resources.en.translation.platform.uploadDocument,
    medicalDocument: translation.medicalDocument || resources.en.translation.platform.medicalDocument,
    noDocuments: translation.noDocuments || resources.en.translation.platform.noDocuments,
    documents: translation.documents || resources.en.translation.platform.documents,
    profile: translation.profile || resources.en.translation.platform.profile,
    language: translation.language || resources.en.translation.platform.language,
    readAloud: translation.readAloud || resources.en.translation.platform.readAloud,
    patientDashboard: portal.patientDashboard || resources.en.translation.platform.patientDashboard || "Patient Dashboard",
    medicalDocuments: portal.medicalDocuments || resources.en.translation.platform.medicalDocuments || "Medical Documents",
  };
  translation.queue = {
    ...translation.queue,
    patientsAhead: portal.patientsAhead || translation.queue?.patientsAhead,
    viewLiveQueue: portal.viewLiveQueue || translation.queue?.viewLiveQueue,
  };
  translation.platform.tokenStatus = {
    ...translation.platform.tokenStatus,
    waiting: portal.waiting || translation.platform.tokenStatus.waiting,
  };
  translation.auth = {
    ...translation.auth,
    dashboard: portal.patientDashboard || translation.auth?.dashboard,
    medicalDocuments: portal.medicalDocuments || translation.auth?.medicalDocuments,
    profile: translation.profile || translation.auth?.profile,
    logout: portal.logout || translation.auth?.logout,
  };
  translation.accessibility = { ...translation.accessibility, settings: portal.accessibility || translation.accessibility?.settings };
  translation.patientFind = { ...resources.en.translation.patientFind, ...translation.patientFind };
  // Every portal language receives the complete FAQ shape. Individual language
  // dictionaries can override any item without changing the page component.
  translation.patientFaq = { ...resources.en.translation.patientFaq, ...translation.patientFaq };
  resources[code] = resources[base];
}

const LANGUAGE_STORAGE_KEY = "medflow-ui-language";
export { resources };

const getInitialLanguage = () => {
  if (typeof window === "undefined") return "en-IN";
  const saved = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
  return MEDFLOW_LANGUAGES.some(({ code }) => code === saved) ? saved : "en-IN";
};

const applyDocumentLanguage = (language) => {
  if (typeof document === "undefined") return;
  const selected = MEDFLOW_LANGUAGES.find(({ code }) => code === language)?.code || "en-IN";
  document.documentElement.lang = selected;
  document.documentElement.dir = RTL_LANGUAGE_CODES.has(selected) ? "rtl" : "ltr";
};

i18n
  .use(initReactI18next)
  .init({
    resources,

    lng: getInitialLanguage(),

    fallbackLng: "en",

    interpolation: {
      escapeValue: false,
    },

    react: {
      useSuspense: false,
    },
  });

i18n.on("languageChanged", (language) => {
  const selected = MEDFLOW_LANGUAGES.find(({ code }) => code === language)?.code || "en-IN";
  if (typeof window !== "undefined") window.localStorage.setItem(LANGUAGE_STORAGE_KEY, selected);
  applyDocumentLanguage(selected);
});

applyDocumentLanguage(i18n.language);

export default i18n;
