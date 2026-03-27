"use client";

import { useEffect } from "react";
import Link from "next/link";

type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error("[App Error Boundary]", {
      message: error.message,
      digest: error.digest,
      stack: error.stack,
    });
  }, [error]);

  return (
    <main className="min-h-screen bg-background px-6 py-20 md:px-10">
      <div className="mx-auto max-w-2xl border border-border bg-card p-8">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Atolye Norte
        </p>
        <h1 className="mt-3 font-serif text-4xl text-primary">
          Bir hata oluştu
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          Sayfa yüklenirken beklenmeyen bir sorun oluştu. Lütfen yeniden
          deneyin.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={reset}
            className="rounded-sm border border-primary bg-primary px-5 py-2 text-xs uppercase tracking-[0.16em] text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Tekrar Dene
          </button>
          <Link
            href="/"
            className="rounded-sm border border-border px-5 py-2 text-xs uppercase tracking-[0.16em] text-foreground transition-colors hover:border-primary/50 hover:text-primary"
          >
            Ana Sayfa
          </Link>
        </div>
      </div>
    </main>
  );
}
