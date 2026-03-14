const FooterSection = () => {
  return (
    <footer className="border-t border-glass-border py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <h3 className="font-display text-2xl text-foreground mb-4">
              Kigutu<span className="text-primary">.</span>
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
              Growing Food. Nourishing Communities. Sustaining the Future.
              Located in the highlands of Burundi, East Africa.
            </p>
          </div>
          <div>
            <p className="text-label text-foreground mb-4">Navigate</p>
            <div className="flex flex-col gap-3">
              {["About", "Sustainability", "Impact", "Gallery", "Contact"].map((link) => (
                <a key={link} href={`#${link.toLowerCase()}`} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {link}
                </a>
              ))}
            </div>
          </div>
          <div>
            <p className="text-label text-foreground mb-4">Connect</p>
            <div className="flex flex-col gap-3">
              {["Instagram", "Twitter", "LinkedIn", "YouTube"].map((link) => (
                <a key={link} href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-glass-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">© 2026 Kigutu Farm. All rights reserved.</p>
          <p className="text-xs text-muted-foreground">Burundi, East Africa</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
