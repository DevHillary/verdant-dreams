import { Link } from "react-router-dom";
import { siteNavigation } from "@/lib/site-navigation";

const FooterSection = () => {
  return (
    <footer className="px-6 pb-10 pt-8 md:px-16 md:pb-14">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-glass-border bg-glass px-8 py-12 backdrop-blur-xl md:px-10">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <h2 className="font-display mb-4 text-2xl text-foreground">
              Kigutu Farm<span className="text-primary">.</span>
            </h2>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
              Growing food, training communities, and sustaining the future from the highlands of Burundi.
            </p>
          </div>

          <div>
            <p className="text-label mb-4 text-foreground">Navigate</p>
            <div className="flex flex-col gap-3">
              {siteNavigation.map((link) => (
                <Link key={link.label} to={link.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-label mb-4 text-foreground">Contact</p>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>Burundi, East Africa</p>
              <p>Organic food forest & regenerative farm</p>
              <Link to="/contact" className="inline-flex text-foreground transition-colors hover:text-primary">
                Visit contact page
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-glass-border pt-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© 2026 Kigutu Farm. All rights reserved.</p>
          <p>Crafted with a cinematic glass finish.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
