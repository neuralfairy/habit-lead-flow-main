import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const Privacy = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <article className="container mx-auto max-w-4xl px-4 py-16">
          <h1 className="text-4xl font-bold mb-3">Zero-Tolerance Anti-Spam Policy</h1>
          <p className="text-lg text-muted-foreground mb-10">
            <strong>Website:</strong> ProjectConsultantsUSA – Expert CRM Implementation
          </p>

          <div className="space-y-8 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">1. Zero-Tolerance Policy</h2>
              <p>
                Project Consultants USA enforces a strict zero-tolerance rule regarding spam and unsolicited outreach.
                Under no circumstances is any person, company, affiliate, marketing agency, third-party vendor, or
                other party permitted to market, promote, or distribute details about this website through unsolicited
                messages.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">2. Strictly Banned Activities</h2>
              <p className="mb-3">The following conduct is strictly prohibited:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Sending unsolicited commercial emails that contain links to or references to projectconsultantsusa.com.</li>
                <li>Promoting this website via unsolicited SMS, WhatsApp texts, social media direct messages, or any other digital messaging channels.</li>
                <li>Relying on purchased, scraped, harvested, or unauthorized mailing lists to advertise this website.</li>
                <li>Deploying automated systems or software to send out unsolicited promotional messages.</li>
                <li>Forging email headers, posing as Project Consultants USA, or falsely asserting any connection with this website.</li>
                <li>Directly or indirectly engaging outside parties to conduct unsolicited advertising campaigns on behalf of this website.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">3. Unauthorized Advertising</h2>
              <p>
                Project Consultants USA grants no authorization to any individual or organization to advertise its
                website via unsolicited communications. Anyone engaging in such unauthorized activities bears full
                responsibility for their actions and any resulting legal repercussions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">4. Severe Penalties and Legal Consequences</h2>
              <p className="mb-3">
                Any individual or entity determined to have violated this policy will face the toughest possible legal
                action and maximum penalties allowed under applicable statutes.
              </p>
              <p className="mb-3">Project Consultants USA reserves the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Pursue civil lawsuits and criminal charges wherever applicable under the law.</li>
                <li>Alert law enforcement and relevant regulatory authorities.</li>
                <li>Claim financial compensation for reputational harm, business losses, and other damages.</li>
                <li>Permanently end any business, contractual, or affiliate relationship with the offender.</li>
                <li>Report abusive practices to internet service providers, web hosts, domain registrars, and email service providers.</li>
              </ul>
              <p className="mt-3">No violation of this policy shall be knowingly tolerated.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">5. Reporting Unsolicited Messages</h2>
              <p>
                Should you receive any unsolicited message advertising or mentioning projectconsultantsusa.com, please
                report it using the official contact methods available on our website, preferably accompanied by the
                original message, full email headers, and relevant supporting evidence.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">6. Final Declaration</h2>
              <p>
                Project Consultants USA unequivocally condemns all types of spam and unsolicited marketing. Any person
                found responsible for such conduct will be pursued to the fullest extent permitted by applicable law.
              </p>
              <p className="mt-6 font-bold text-foreground">
                ZERO SPAM. ZERO TOLERANCE. NO EXCEPTIONS.
              </p>
              <p className="mt-6 font-semibold text-foreground">
                ProjectConsultantsUSA – Expert CRM Implementation
              </p>
              <p>Expert CRM implementation and sales process optimization services in Phoenix, Arizona.</p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
