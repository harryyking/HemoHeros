import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon, GithubIcon } from "lucide-react"
import { BackgroundBeams } from "./ui/backgorund-beams"

const footerLinks = [
  {
    title: "Product",
    links: [
      { name: "Features", href: "#" },
      { name: "Pricing", href: "#" },
      { name: "Tutorials", href: "#" },
      { name: "Releases", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Contact", href: "#" },
      { name: "Partners", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Blog", href: "#" },
      { name: "Newsletter", href: "#" },
      { name: "Events", href: "#" },
      { name: "Help Center", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Terms", href: "#" },
      { name: "Privacy", href: "#" },
      { name: "Cookies", href: "#" },
      { name: "Licenses", href: "#" },
    ],
  },
]

const socialLinks = [
  { icon: FacebookIcon, href: "#" },
  { icon: TwitterIcon, href: "#" },
  { icon: InstagramIcon, href: "#" },
  { icon: LinkedinIcon, href: "#" },
  { icon: GithubIcon, href: "#" },
]

export function Footer() {
  return (
    <footer className="relative py-20">
      <BackgroundBeams />
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="text-2xl font-bold mb-4 block">
              Logo
            </Link>
            <p className="text-gray-400 mb-4">
              Building the future, one pixel at a time. Join us on this exciting journey of innovation and creativity.
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              />
              <Button type="submit" variant="secondary">
                Subscribe
              </Button>
            </form>
          </div>
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h3 className="text-lg font-semibold mb-4">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© 2024 Your Company. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-gray-400 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <link.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

