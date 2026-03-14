import { FooterSection } from "../components/FooterSection";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col pt-32 lg:pt-40 bg-white">
      <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-[1000px] flex-grow pb-24">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-10 !text-[#2f1d3d] font-hind">
          Privacy Policy
        </h1>
        <div className="prose max-w-none !text-gray-800 text-[17px] leading-[1.8] space-y-8">
          <p className="text-lg !text-gray-600 mb-8">
            At team365 (Equipe52 Ltd t/a team365), we are committed to maintaining the trust and confidence of our visitors and clients. In this Privacy Policy, we provide detailed information on when and why we collect your personal information, how we use it, the limited conditions under which we may disclose it to others, and how we keep it secure.
          </p>

          <section>
            <h2 className="text-2xl md:text-3xl font-semibold !text-[#2f1d3d] mt-10 mb-5 pb-2 border-b border-gray-100">1. Collection of Personal Information</h2>
            <p className="!text-gray-800">
              Personal information means any information that may be used to identify you, such as your name, title, phone number, email address, or mailing address. We may collect your personal information when you contact us for business inquiries, use our services, or interact with our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-semibold !text-[#2f1d3d] mt-10 mb-5 pb-2 border-b border-gray-100">2. Use of Personal Information</h2>
            <p className="mb-4 !text-gray-800">
              We use the personal information you share with us to:
            </p>
            <ul className="list-disc pl-6 space-y-3 marker:text-[#8d4f92] !text-gray-800">
              <li>Provide you with the services you have requested, such as mailings, printing, and distribution.</li>
              <li>Respond to your inquiries and provide customer support.</li>
              <li>Send you important updates regarding our business, services, and operations.</li>
              <li>Ensure our records are accurate and up to date.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-semibold !text-[#2f1d3d] mt-10 mb-5 pb-2 border-b border-gray-100">3. Data Security and Confidentiality</h2>
            <p className="!text-gray-800">
              Team365 takes the security of your data seriously. We use industry-standard measures to protect personal information against unauthorized access, loss, or alteration. As a trusted partner for corporate communications, maintaining the confidentiality and integrity of printed and digital distribution data is our top priority.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-semibold !text-[#2f1d3d] mt-10 mb-5 pb-2 border-b border-gray-100">4. Sharing Your Information</h2>
            <p className="!text-gray-800">
              We do not sell, rent, or trade email lists with other companies and businesses for marketing purposes. We may share your personal information with carefully selected third-party service providers who help us deliver our services (e.g., postal carriers or logistics partners). These third parties are obligated to keep your information secure and use it only to provide the required services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-semibold !text-[#2f1d3d] mt-10 mb-5 pb-2 border-b border-gray-100">5. Access to Your Personal Information</h2>
            <p className="!text-gray-800">
              You are entitled to view, amend, or delete the personal information that we hold. Please email your request to our data protection officer at <a href="mailto:af@team365.co.uk" className="text-[#8d4f92] font-semibold hover:underline">af@team365.co.uk</a>, and we will respond to your request promptly in accordance with applicable data protection laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-semibold !text-[#2f1d3d] mt-10 mb-5 pb-2 border-b border-gray-100">6. Changes to This Privacy Policy</h2>
            <p className="!text-gray-800">
              We may occasionally update this Privacy Policy. Any changes will be posted on this page so that you are always aware of what information we collect, how we use it, and under what circumstances we disclose it. This policy was last updated in 2026.
            </p>
          </section>
        </div>
      </div>
      <FooterSection />
    </div>
  );
}
