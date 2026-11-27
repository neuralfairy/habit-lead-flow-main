import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const Terms = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <article className="container mx-auto max-w-4xl px-4 py-16">
          <h1 className="text-4xl font-bold mb-3">Terms of Service</h1>
          <p className="text-muted-foreground mb-10">Last updated: November 27, 2026</p>

          <div className="space-y-8 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">Using This Website</h2>
              <p>
                By using this website, you agree to use it lawfully and not to interfere with its operation,
                security, or availability. If you do not agree to these terms, please do not use the website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">Website Information</h2>
              <p>
                Website content is provided for general information and may change without notice. Contact us
                directly for current details about our services. Nothing on this website creates a service
                agreement; any services are subject to a separate written agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">Intellectual Property</h2>
              <p>
                Website content, branding, and design are owned by or licensed to their respective owners.
                You may not reproduce or distribute them without permission, except where applicable law
                allows.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">Disclaimer</h2>
              <p>
                To the extent permitted by law, this website is provided “as is” and “as available,” without
                warranties of uninterrupted availability or error-free content. These terms do not limit any
                rights that cannot be excluded under applicable law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">Changes and Contact</h2>
              <p>
                We may update these terms by posting a revised version on this page. For questions about these
                terms, contact us at sales@marketingasahabit.com.
              </p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
