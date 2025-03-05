const config = {
  geminiApiKey: String(import.meta.env.VITE_GEMINI_API_KEY),
  backendURL: String(import.meta.env.VITE_BACKEND_URL),
  passRecoveryRedirectUrl: String(
    import.meta.env.VITE_PASS_RECOVERY_REDIRECT_URL
  ),
  emailVerifyRedirectUrl: String(
    import.meta.env.VITE_EMAIL_VERIFY_REDIRECT_URL
  ),
};

export default config;
