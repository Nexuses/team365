import { FooterSection } from "../components/FooterSection";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col pt-32 lg:pt-40">
      <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-[1280px] flex-grow pb-16">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-[#2f1d3d] font-hind">
          Privacy Policy
        </h1>
        <div className="prose max-w-none text-[#555] text-[16px] leading-relaxed space-y-6">
          <p>
            At team365 (Equipe52 Ltd t/a team365), we are committed to maintaining the trust and confidence of our visitors and clients. In this Privacy Policy, we provide detailed information on when and why we collect your personal information, how we use it, the limited conditions under which we may disclose it to others, and how we keep it secure.
          </p>

          <h2 className="text-2xl font-semibold text-[#8d4f92] mt-8 mb-4">1. Collection of Personal Information</h2>
          <p>
            Personal information means any information that may be used to identify you, such as your name, title, phone number, email address, or mailing address. We may collect your personal information when you contact us for business inquiries, use our services, or interact with our website.
          </p>

          <h2 className="text-2xl font-semibold text-[#8d4f92] mt-8 mb-4">2. Use of Personal Information</h2>
          <p>
            We use the personal information you share with us to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide you with the services you have requested, such as mailings, printing, and distribution.</li>
            <li>Respond to your inquiries and provide customer support.</li>
            <li>Send you important updates regarding our business, services, and operations.</li>
            <li>Ensure our records are accurate and up to date.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-[#8d4f92] mt-8 mb-4">3. Data Security and Confidentiality</h2>
          <p>
            Team365 takes the security of your data seriously. We use industry-standard measures to protect personal information against unauthorized access, loss, or alteration. As a trusted partner for corporate communications, maintaining the confidentiality and integrity of printed and digital distribution data is our top priority.
          </p>

          <h2 className="text-2xl font-semibold text-[#8d4f92] mt-8 mb-4">4. Sharing Your Information</h2>
          <p>
            We do not sell, rent, or trade email lists with other companies and businesses for marketing purposes. We may share your personal information with carefully selected third-party service providers who help us deliver our services (e.g., postal carriers or logistics partners). These third parties are obligated to keep your information secure and use it only to provide the required services.
          </p>

          <h2 className="text-2xl font-semibold text-[#8d4f92] mt-8 mb-4">5. Access to Your Personal Information</h2>
          <p>
            You are entitled to view, amend, or delete the personal information that we hold. Please email your request to our data protection officer at <a href="mailto:af@team365.co.uk" className="text-[#8d4f92] hover:underline">af@team365.co.uk</a>, and we will respond to your request promptly in accordance with applicable data protection laws.
          </p>

          <h2 className="text-2xl font-semibold text-[#8d4f92] mt-8 mb-4">6. Changes to This Privacy Policy</h2>
          <p>
            We may occasionally update this Privacy Policy. Any changes will be posted on this page so that you are always aware of what information we collect, how we use it, and under what circumstances we disclose it. This policy was last updated in 2026.
          </p>
        </div>
      </div>
      <FooterSection />
    </div>
  );
}
