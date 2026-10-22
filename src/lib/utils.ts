import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Directly downloads the resume file to the user's device without redirecting or opening Google Drive
 */
export function downloadResumeFile(e?: React.MouseEvent) {
  if (e) {
    e.preventDefault();
  }
  const fileUrl = "/Kandati_Ranjith_Kumar_Reddy_Resume.pdf";
  const fileName = "Kandati_Ranjith_Kumar_Reddy_Resume.pdf";

  const link = document.createElement("a");
  link.href = fileUrl;
  link.setAttribute("download", fileName);
  link.style.display = "none";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

