import { motion, useInView } from "framer-motion";
import { Search } from "lucide-react";
import { useMemo, useRef, useState } from "react";
import { plantingCatalog } from "@/data/plantingCatalog";

const PlantingCatalogSection = () => {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });
  const [activeFilter, setActiveFilter] = useState("all");
  const [query, setQuery] = useState("");

  const filteredCategories = useMemo(() => {
    return plantingCatalog
      .filter((category) => activeFilter === "all" || category.id === activeFilter)
      .map((category) => ({
        ...category,
        filteredItems: category.items.filter((item) => item.toLowerCase().includes(query.toLowerCase())),
      }))
      .filter((category) => category.filteredItems.length > 0);
  }, [activeFilter, query]);

  return (
    <section id="planting-directory" ref={ref} className="relative px-6 py-32 md:px-16 md:py-40">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-label mb-4 text-primary">Second Season Planting</p>
          <h2 className="text-display text-foreground text-4xl md:text-5xl">
            A filterable view of what’s planted across <span className="text-gradient-primary">Kigutu Farm</span>
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Browse the farm’s planting mix by crop family, production system, or cultivar to see the diversity of the organic food forest and market garden.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-12 rounded-[2rem] border border-glass-border bg-glass p-5 backdrop-blur-xl"
        >
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => setActiveFilter("all")}
                className={`rounded-full border px-4 py-2 text-sm transition-all ${
                  activeFilter === "all"
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-glass-border bg-glass text-muted-foreground hover:border-primary/40 hover:text-foreground"
                }`}
              >
                All categories
              </button>
              {plantingCatalog.map((category) => (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => setActiveFilter(category.id)}
                  className={`rounded-full border px-4 py-2 text-sm transition-all ${
                    activeFilter === category.id
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-glass-border bg-glass text-muted-foreground hover:border-primary/40 hover:text-foreground"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>

            <label className="flex w-full items-center gap-3 rounded-full border border-glass-border bg-background/40 px-4 py-3 text-sm text-muted-foreground lg:max-w-sm">
              <Search className="h-4 w-4" />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search crops, trees, or varieties"
                className="w-full bg-transparent text-foreground outline-none placeholder:text-muted-foreground"
              />
            </label>
          </div>
        </motion.div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {filteredCategories.map((category, index) => (
            <motion.article
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.08 * index }}
              className="overflow-hidden rounded-[2rem] border border-glass-border bg-glass backdrop-blur-xl"
            >
              <div className="relative h-56 overflow-hidden">
                <img src={category.image} alt={category.label} className="h-full w-full object-cover" loading="lazy" decoding="async" sizes="(max-width: 768px) 50vw, 25vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6">
                  <div>
                    <p className="text-label text-primary">Planting group</p>
                    <h3 className="font-display text-2xl text-foreground">{category.label}</h3>
                  </div>
                  <span className="rounded-full border border-glass-border bg-background/60 px-4 py-2 text-xs text-foreground backdrop-blur-md">
                    {category.filteredItems.length} items
                  </span>
                </div>
              </div>

              <div className="p-6">
                <p className="text-sm leading-relaxed text-muted-foreground">{category.description}</p>
                <div className="mt-5 flex max-h-[20rem] flex-wrap gap-2 overflow-auto pr-2">
                  {category.filteredItems.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-glass-border bg-background/50 px-3 py-2 text-xs text-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {filteredCategories.length === 0 && (
          <div className="mt-10 rounded-[2rem] border border-glass-border bg-glass p-8 text-center text-muted-foreground backdrop-blur-xl">
            No crops match that filter yet — try another category or search term.
          </div>
        )}
      </div>
    </section>
  );
};

export default PlantingCatalogSection;
