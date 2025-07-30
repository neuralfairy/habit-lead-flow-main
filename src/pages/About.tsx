import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-center mb-8">About</h1>
          <p className="text-center text-muted-foreground">About page content coming soon...</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;