"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

import { menuCategories, menuData } from "@/lib/menuData";
import { getMenuProductImage } from "@/lib/menuImageMap";
import { Navigation } from "@/components/navigation";

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts = useMemo(
    () => menuData.filter((item) => item.category === activeCategory),
    [activeCategory],
  );

  return (
    <>
      <Navigation />
      <section className="min-h-screen bg-background px-6 pb-16 pt-28 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <header className="mb-10 border-b border-border pb-8">
            <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
              Atolye Norte
            </p>
            <h1 className="mt-2 font-serif text-4xl text-primary md:text-5xl">
              Menü
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Zarif dokunuşlarla hazırlanmış imza lezzetleri keşfedin.
            </p>
          </header>

          <div className="mb-8">
            <h2 className="mb-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Kategoriler
            </h2>
            <div className="flex flex-wrap gap-2">
              {menuCategories.map((category) => {
                const isActive = category === activeCategory;

                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    className={`rounded-sm border px-4 py-2 text-sm transition-colors ${
                      isActive
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border bg-card text-foreground hover:border-primary/50 hover:text-primary"
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3"
            >
              {filteredProducts.map((product, index) => (
                <motion.article
                  key={product.id}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.35,
                    delay: index * 0.03,
                    ease: "easeOut",
                  }}
                  className="rounded-sm border border-border bg-card"
                >
                  <button
                    type="button"
                    onClick={() => setSelectedProduct(product)}
                    className="flex h-full w-full flex-col text-left"
                  >
                    <div className="relative aspect-16/10 w-full overflow-hidden border-b border-border">
                      <Image
                        src={getMenuProductImage(product)}
                        alt={product.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 hover:scale-[1.03]"
                      />
                    </div>

                    <div className="flex h-full flex-col gap-3 p-5">
                      <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                        {product.category}
                      </p>
                      <h3 className="font-serif text-2xl text-primary">
                        {product.name}
                      </h3>
                      <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                        {product.ingredients}
                      </p>
                      <span className="mt-auto text-xs uppercase tracking-[0.16em] text-primary">
                        Detay
                      </span>
                    </div>
                  </button>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <AnimatePresence>
        {selectedProduct ? (
          <>
            <motion.button
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
              className="fixed inset-0 z-40 bg-foreground/35"
              aria-label="Paneli kapat"
            />

            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.32, ease: "easeInOut" }}
              className="fixed right-0 top-0 z-50 flex h-dvh w-full max-w-xl flex-col overflow-hidden border-l border-border bg-card"
            >
              <div className="flex items-center justify-between border-b border-border px-6 py-5">
                <h3 className="font-serif text-3xl text-primary">
                  {selectedProduct.name}
                </h3>
                <button
                  type="button"
                  onClick={() => setSelectedProduct(null)}
                  className="rounded-sm border border-border p-2 text-muted-foreground transition-colors hover:text-primary"
                  aria-label="Kapat"
                >
                  <X className="size-4" />
                </button>
              </div>

              <div className="relative aspect-video w-full overflow-hidden border-b border-border">
                <Image
                  src={getMenuProductImage(selectedProduct)}
                  alt={selectedProduct.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover"
                />
              </div>

              <div className="flex flex-1 flex-col gap-6 overflow-y-auto px-6 py-6">
                <h4 className="mb-2 font-serif text-2xl text-foreground">
                  İçindekiler
                </h4>
                <p className="text-sm leading-7 text-foreground">
                  {selectedProduct.ingredients}
                </p>

                <div className="border-t border-border pt-5">
                  <p className="mb-1 text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                    Alerjen Bilgisi
                  </p>
                  <p className="text-xs leading-6 text-muted-foreground">
                    {selectedProduct.allergens}
                  </p>
                </div>
              </div>
            </motion.aside>
          </>
        ) : null}
      </AnimatePresence>
    </>
  );
}
