import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

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
  const fileUrl = "/Kandati_Ranjith_Kumar_Reddy_Resume.pdf";
  const fileName = "Kandati_Ranjith_Kumar_Reddy_Resume.pdf";

  try {
    const res = await fetch(fileUrl);
    if (!res.ok) throw new Error("Local fetch failed");
    const blob = await res.blob();
    const blobUrl = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = blobUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(blobUrl);
  } catch {
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}

