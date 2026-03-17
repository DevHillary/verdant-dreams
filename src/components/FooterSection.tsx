import { Link } from "react-router-dom";
import { siteNavigation } from "@/lib/site-navigation";

const FooterSection = () => {
  return (
    <footer className="px-6 pb-4 pt-3 md:px-16 md:pb-10">
      <div className="mx-auto max-w-7xl rounded-[1.75rem] border border-glass-border bg-glass px-4 py-6 backdrop-blur-xl md:px-8 md:py-9">
        <div className="grid gap-6 md:grid-cols-4">
          <div className="md:col-span-2">
            <h2 className="font-display mb-3 text-xl text-foreground md:text-2xl">
              Kigutu Farm<span className="text-primary">.</span>
            </h2>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
              Growing food, training communities, and caring for the land in Burundi.
            </p>
          </div>

          <div>
            <p className="text-label mb-3 text-foreground">Navigate</p>
            <div className="flex flex-col gap-2.5">
              {siteNavigation.map((link) => (
                <Link key={link.label} to={link.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-label mb-3 text-foreground">Contact</p>
            <div className="space-y-2.5 text-sm text-muted-foreground">
              <p>Burundi, East Africa</p>
              <p>Regenerative farm & food forest</p>
              <Link to="/contact" className="inline-flex text-foreground transition-colors hover:text-primary">
                Contact page
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-2 border-t border-glass-border pt-3 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between md:mt-8 md:gap-3 md:pt-4">
          <p>© 2026 Kigutu Farm. All rights reserved.</p>
          <p>Rooted in land, learning, and community.</p>
          <p>Developed by <a href="https://hillarychege.co.ke" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">Hillary Chege</a></p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
