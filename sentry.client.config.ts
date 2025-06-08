import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://4ffb5a1db89a7590f0889fa65630ac16@o4509459762642944.ingest.us.sentry.io/4509459774504960",
  integrations: [
    Sentry.replayIntegration(),
    Sentry.feedbackIntegration({
      colorScheme: "system",
    }),
  ],
  tracesSampleRate: 1,
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
  debug: false,
});