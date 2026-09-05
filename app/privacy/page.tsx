export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <article className="mx-auto max-w-3xl px-6 py-16">
        <p className="text-sm font-semibold text-gray-500">DialedIn</p>
        <h1 className="mt-4 text-4xl font-bold">Privacy Policy</h1>
        <p className="mt-3 text-sm text-gray-500">Effective September 3, 2026</p>

        <div className="mt-10 space-y-8 leading-7 text-gray-700">
          <section><h2 className="text-xl font-semibold text-gray-900">Information We Handle</h2><p className="mt-2">We handle account information, selected espresso equipment, grind settings, dose, roast, taste notes, shot history, and photos, audio, or video that you choose to submit for analysis. We also receive subscription status and transaction identifiers from RevenueCat and the applicable app store. DialedIn does not receive complete payment-card details.</p></section>
          <section><h2 className="text-xl font-semibold text-gray-900">How We Use Information</h2><p className="mt-2">We use this information to authenticate accounts, provide espresso analysis and recommendations, maintain history, enforce usage allowances, restore subscriptions, prevent abuse, operate the service, and troubleshoot failures.</p></section>
          <section><h2 className="text-xl font-semibold text-gray-900">Service Providers</h2><p className="mt-2">DialedIn uses Amazon Web Services, including Cognito, S3, DynamoDB, Bedrock, CloudFront, and CloudWatch. RevenueCat processes subscription status, while Apple or Google processes native payments.</p></section>
          <section><h2 className="text-xl font-semibold text-gray-900">Storage and Security</h2><p className="mt-2">User media is stored privately and accessed to provide requested features. DialedIn uses encrypted HTTPS connections, server-side token verification, and restricted cloud permissions. No internet service can guarantee absolute security.</p></section>
          <section><h2 className="text-xl font-semibold text-gray-900">Retention and Deletion</h2><p className="mt-2">Account data and shot history are retained while your account exists. You can select Account &gt; Delete account in the app. This removes your DialedIn account data and private media. Deleting a DialedIn account does not cancel an App Store or Google Play subscription, which must be managed through the applicable store.</p></section>
          <section><h2 className="text-xl font-semibold text-gray-900">Contact</h2><p className="mt-2">For privacy or deletion questions, contact <a className="underline" href="mailto:support@dialedin.me">support@dialedin.me</a>.</p></section>
        </div>
      </article>
    </main>
  );
}
