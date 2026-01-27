import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container-industrial section-spacing-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="font-bold text-xl mb-2">The Big Business Co</h3>
            <p className="text-primary-foreground/70 mb-4">From chaos to clarity.</p>
            <p className="text-primary-foreground/60 text-sm">
              Operating systems for trades and warehouses.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-primary-foreground/50">
              Navigation
            </h4>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                Home
              </Link>
              <Link to="/trades" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                Trades
              </Link>
              <Link to="/warehouses" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                Warehouses
              </Link>
              <Link to="/embedded-ops" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                Embedded Ops
              </Link>
              <Link to="/book" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                Book a walk-through
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-primary-foreground/50">
              Contact
            </h4>
            <div className="flex flex-col gap-2 text-sm">
              <a 
                href=" https://thebigbusinessco.com.au" 
                className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                 luke@thebigbusinessco.com.au
              </a>
              <span className="text-primary-foreground/60">Melbourne, VIC</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <p className="text-primary-foreground/50 text-sm">
            © {new Date().getFullYear()} The Big Business Co | Melbourne, Australia
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
