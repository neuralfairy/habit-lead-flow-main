import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Shield, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const handleExternalLink = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded bg-gradient-primary"></div>
              <span className="font-bold text-lg">Marketingasahabit</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Streamline and score your leads for more efficient sales follow-ups with our comprehensive iLMS (Lead Management System).
            </p>
            <div className="flex space-x-4">
              <button 
                onClick={() => handleExternalLink('https://linkedin.com/company/marketingasahabit')}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin size={20} />
              </button>
              <button 
                onClick={() => handleExternalLink('https://twitter.com/marketingasahabit')}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter size={20} />
              </button>
            </div>
          </div>

          {/* Solutions */}
          <div className="space-y-4">
            <h3 className="font-semibold">Solutions</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={() => handleExternalLink('https://salescentri.com/platforms/lead-management/lead-generation')}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Lead Generation
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleExternalLink('https://salescentri.com/solutions/psa-suite')}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  PSA Suite
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleExternalLink('https://salescentri.com/platforms/contact-intelligence/ai-aggregator')}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  AI Aggregator
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleExternalLink('https://salescentri.com/solutions/use-case-navigator')}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Use Case Navigator
                </button>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="font-semibold">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={() => handleExternalLink('https://salescentri.com/docs/user-guide')}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  User Guide
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleExternalLink('https://salescentri.com/docs/api-reference')}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  API Reference
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleExternalLink('https://salescentri.com/contact/support-request')}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Support Request
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleExternalLink('https://salescentri.com/contact/support-request/live-chat')}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Live Chat
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin size={16} className="text-muted-foreground" />
                <span className="text-muted-foreground">San Diego, CA</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-muted-foreground" />
                <button 
                  onClick={() => handleExternalLink('https://salescentri.com/contact/sales-inquiry')}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  sales@marketingasahabit.com
                </button>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-muted-foreground" />
                <span className="text-muted-foreground">+1 (858) 555-0123</span>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="py-6 border-t">
          <div className="flex flex-wrap items-center justify-center gap-8">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Shield size={16} />
              <span>SOC 2 Certified</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Shield size={16} />
              <span>GDPR Compliant</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Shield size={16} />
              <span>ISO 27001</span>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground">
          <div className="flex flex-wrap items-center gap-4 mb-4 md:mb-0">
            <span>© 2024 Marketingasahabit Solutions. All rights reserved.</span>
            <Link to="/privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <button 
              onClick={() => handleExternalLink('https://salescentri.com/trust/security-privacy')}
              className="hover:text-primary transition-colors"
            >
              Security
            </button>
          </div>
          
          {/* Strategic Backlink */}
          <div className="text-center">
            <button 
              onClick={() => handleExternalLink('https://salescentri.com?utm_source=MarketingAsAhaBit.com&utm_medium=footer&utm_campaign=partner_network')}
              className="hover:text-primary transition-colors"
            >
              Powered by Sales Intelligence Platform
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;