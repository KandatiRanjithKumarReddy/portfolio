import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import type { IconType } from "react-icons";

export type Social = {
  name: string;
  href: string;
  icon: IconType;
  label: string;
};

export const socials: Social[] = [
  { name: "GitHub", href: "https://github.com/KandatiRanjithKumarReddy", icon: FaGithub, label: "GitHub profile" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/kandati-ranjith-kumar-reddy/", icon: FaLinkedin, label: "LinkedIn profile" },
  { name: "Email", href: "mailto:kandatiranjithkumarreddy@gmail.com", icon: HiOutlineMail, label: "Send email" },
  { name: "Phone", href: "tel:+917569377080", icon: HiOutlinePhone, label: "Call phone" },
];
