"use client";

import { Download } from "lucide-react";

export default function ResumeDownload() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "resume.pdf";
    link.click();
  };
  return (
    <button
      className="flex flex-row gap-2 text-zinc-200 hover:text-zinc-50 py-2 px-4"
      onClick={handleDownload}
    >
      Resume
      <Download />
    </button>
  );
}
