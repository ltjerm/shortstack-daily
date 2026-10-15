"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
// One controller for scroll reveals, count-ups, nav state, the progress bar and pointer tilt.
export default function Motion() {
  const path = usePathname();
  useEffect(() => {
    const root = document.documentElement;
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const countUp = (el: HTMLElement) => {
      const to = Number(el.dataset.count); if (!to || reduce) return;
      const t0 = performance.now();
      const tick = (t: number) => { const p = Math.min(1, (t - t0) / 1200); el.textContent = String(Math.round(to * (1 - (1 - p) ** 3))); if (p < 1) requestAnimationFrame(tick); };
      el.textContent = "0"; requestAnimationFrame(tick);
    };
    const io = new IntersectionObserver(entries => entries.forEach(e => {
      if (!e.isIntersecting) return;
      e.target.classList.add("in"); io.unobserve(e.target);
      e.target.querySelectorAll<HTMLElement>("[data-count]").forEach(countUp);
    }), { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
    document.querySelectorAll("[data-reveal]").forEach(el => io.observe(el));

    let raf = 0;
    const onScroll = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(() => {
      const max = root.scrollHeight - innerHeight;
      root.style.setProperty("--scroll", String(max > 0 ? Math.min(1, scrollY / max) : 0));
      root.classList.toggle("scrolled", scrollY > 24);
    }); };
    onScroll(); addEventListener("scroll", onScroll, { passive: true });

    const tilts = reduce ? [] : [...document.querySelectorAll<HTMLElement>("[data-tilt]")];
    const move = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      const el = e.currentTarget as HTMLElement, r = el.getBoundingClientRect();
      el.style.setProperty("--ry", `${((e.clientX - r.left) / r.width - 0.5) * 7}deg`);
      el.style.setProperty("--rx", `${((e.clientY - r.top) / r.height - 0.5) * -5}deg`);
    };
    const leave = (e: PointerEvent) => { const el = e.currentTarget as HTMLElement; el.style.setProperty("--rx", "0deg"); el.style.setProperty("--ry", "0deg"); };
    tilts.forEach(el => { el.addEventListener("pointermove", move); el.addEventListener("pointerleave", leave); });

    return () => {
      io.disconnect(); removeEventListener("scroll", onScroll); cancelAnimationFrame(raf);
      tilts.forEach(el => { el.removeEventListener("pointermove", move); el.removeEventListener("pointerleave", leave); });
    };
  }, [path]);
  return null;
}
