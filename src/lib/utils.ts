import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { profile } from "@/data/profile";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Directly downloads the resume file to the user's device without redirecting or opening Google Drive
 */
export async function downloadResumeFile(e?: React.MouseEvent) {
  if (e) {
    e.preventDefault();
  }
  const fileUrl = profile.resumeUrl || "/ranjith-k.pdf";
  const fileName = profile.resumeFileName || "ranjith-k.pdf";

  try {
    const response = await fetch(fileUrl, { cache: "no-store" });
    if (!response.ok) throw new Error("Network response was not ok");
    const blob = await response.blob();
    const blobUrl = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = blobUrl;
    link.download = fileName;
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => window.URL.revokeObjectURL(blobUrl), 1000);
  } catch {
    // Robust fallback to native anchor download
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileName;
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}

