import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { 
  FacebookIcon, 
  TwitterIcon, 
  InstagramIcon, 
  LinkedinIcon, 
  GithubIcon,
  SendIcon,
  MapPinIcon,
  MailIcon
} from "lucide-react"
import { BackgroundBeams } from "./ui/backgorund-beams"

const footerLinks = [
  {
    title: "Product",
    links: [
      { name: "Features", href: "/features" },
      { name: "Pricing", href: "/pricing" },
      { name: "Integrations", href: "/integrations" },
      { name: "Roadmap", href: "/roadmap" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Leadership", href: "/leadership" },
      { name: "Careers", href: "/careers" },
      { name: "Press", href: "/press" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Blog", href: "/blog" },
      { name: "Docs", href: "/docs" },
      { name: "Community", href: "/community" },
      { name: "Help Center", href: "/help" },
    ],
  },
]

const socialLinks = [
  { 
    icon: FacebookIcon, 
    href: "https://facebook.com", 
    color: "hover:text-blue-600" 
  },
  { 
    icon: TwitterIcon, 
    href: "https://twitter.com", 
    color: "hover:text-sky-500" 
  },
  { 
    icon: InstagramIcon, 
    href: "https://instagram.com", 
    color: "hover:text-pink-500" 
  },
  { 
    icon: LinkedinIcon, 
    href: "https://linkedin.com", 
    color: "hover:text-blue-700" 
  },
  { 
    icon: GithubIcon, 
    href: "https://github.com", 
    color: "hover:text-gray-100" 
  },
]

export function Footer() {
  return (
    <footer className="relative py-20 bg-black text-white overflow-hidden">
      <BackgroundBeams />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="text-3xl font-bold mb-4 block hover:text-green-500 transition-colors">
              Another Step
            </Link>
            <p className="text-gray-400 mb-6">
              Empowering innovation through cutting-edge technology and creative solutions.
            </p>
            
            {/* Newsletter Signup */}
            <div className="relative">
              <form className="flex flex-col sm:flex-row gap-2">
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:ring-2 focus:ring-green-500"
                />
                <Button 
                  type="submit" 
                  className="bg-green-500 hover:bg-green-600 text-white group"
                >
                  <SendIcon className="mr-2 group-hover:rotate-45 transition-transform" size={18} />
                  Subscribe
                </Button>
              </form>
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h3 className="text-lg font-semibold mb-4 pb-2">
                {column.title}
              </h3>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      className="text-gray-400 hover:text-green-500 hover:translate-x-1 transition-all inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}


        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} YourBrand. All rights reserved.
          </p>
          
          {/* Social Links */}
          <div className="flex space-x-4 mt-4 sm:mt-0">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className={`text-gray-400 ${link.color} transition-all transform hover:-translate-y-1 hover:scale-110`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <link.icon className="h-6 w-6" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}