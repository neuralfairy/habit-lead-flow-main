import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const Privacy = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <article className="container mx-auto max-w-4xl px-4 py-16">
          <h1 className="text-4xl font-bold mb-3">Privacy Policy</h1>
          <p className="text-muted-foreground mb-10">Last updated: November 27, 2026</p>

          <div className="space-y-8 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">Information We Collect</h2>
              <p>
                We may collect information you provide when contacting us or requesting information about our
                services, such as your name, email address, company, and message. We may also collect basic
                technical and usage information when you browse this website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">How We Use Information</h2>
              <p>
                We use information to respond to inquiries, provide and improve our services, maintain the
                security of this website, and meet applicable legal requirements. We do not sell personal
                information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">Cookies and Analytics</h2>
              <p>
                This website may use cookies or similar technologies for site functionality and analytics.
                You can manage cookies through your browser settings. Disabling cookies may affect some
                website features.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">Sharing and Retention</h2>
              <p>
                We may share information with service providers that help operate the website or deliver our
                services, and when required by law. We retain information only for as long as needed for the
                purposes described in this policy or as required by law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">Your Choices and Questions</h2>
              <p>
                Depending on where you live, you may have rights to access, correct, or delete personal
                information. To ask a privacy question or make a request, contact us at
                {' '}sales@marketingasahabit.com.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">Policy Updates</h2>
              <p>
                We may update this policy from time to time. Any updates will be posted on this page with a
                revised “Last updated” date.
              </p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
