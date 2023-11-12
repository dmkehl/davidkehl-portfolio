"use client";
import { ArrowLeft, Menu } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

export const Navigation: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const [isIntersecting, setIntersecting] = useState(true);
  const [isMenuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting)
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <header ref={ref}>
      {/* Navbar for larger screens */}
      <div
        className={`hidden md:block fixed inset-x-0 top-0 z-50 backdrop-blur  duration-200 border-b  ${
          isIntersecting
            ? "bg-zinc-900/0 border-transparent"
            : "bg-zinc-900/500  border-zinc-800 "
        }`}
      >
        <div className="container flex flex-row-reverse items-center justify-between p-6 mx-auto">
          <div className="flex justify-between gap-8">
            <Link
              href="/about"
              className="duration-200 text-zinc-400 hover:text-zinc-100"
            >
              About
            </Link>
            <Link
              href="/experience"
              className="duration-200 text-zinc-400 hover:text-zinc-100"
            >
              Experience
            </Link>
            <Link
              href="/projects"
              className="duration-200 text-zinc-400 hover:text-zinc-100"
            >
              Projects
            </Link>
            {/* TODO: Uncomment this once blog is active */}
            {/* <Link
              href="/blog"
              className="duration-200 text-zinc-400 hover:text-zinc-100"
            >
              Blog
            </Link> */}
            <Link
              href="/contact"
              className="duration-200 text-zinc-400 hover:text-zinc-100"
            >
              Contact
            </Link>
          </div>

          <Link
            href="/"
            className="duration-200 text-zinc-300 hover:text-zinc-100"
          >
            <ArrowLeft className="w-6 h-6 " />
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="container flex items-center justify-between p-6 mx-auto z-50">
        <Link
          href="/"
          className="duration-200 text-zinc-300 hover:text-zinc-100 md:hidden z-50"
        >
          <ArrowLeft className="w-6 h-6" />
        </Link>
        {/* Hamburger Menu Icon */}
        <div
          className="md:hidden cursor-pointer z-50"
          onClick={() => setMenuOpen(!isMenuOpen)}
        >
          <Menu className="w-6 h-6 text-zinc-300" />
        </div>
      </div>
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 pt-16">
          <div className="md:hidden bg-zinc-900/500 p-4 absolute w-3/4 text-right right-0">
            <Link
              href="/about"
              className="block text-zinc-400 hover:text-zinc-100 text-2xl py-2"
            >
              About
            </Link>
            <Link
              href="/experience"
              className="block text-zinc-400 hover:text-zinc-100 text-2xl py-2"
            >
              Experience
            </Link>
            <Link
              href="/projects"
              className="block text-zinc-400 hover:text-zinc-100 text-2xl py-2"
            >
              Projects
            </Link>
            {/* TODO: Uncomment this once blog is active */}
            {/* <Link href="/blog" className="block text-zinc-400 hover:text-zinc-100 text-2xl py-2">
      Blog
    </Link> */}
            <Link
              href="/contact"
              className="block text-zinc-400 hover:text-zinc-100 text-2xl py-2"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
