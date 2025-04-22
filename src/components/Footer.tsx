import type React from "react"
import { Link } from "react-router-dom"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import Logo from "./Logo"

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Logo />
            <p className="text-sm text-gray-400">
              Discover insightful articles on technology, lifestyle, business, and culture. Stay updated with the latest
              trends and expert opinions.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Twitter size={18} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-white mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/?category=technology" className="text-sm text-gray-400 hover:text-primary transition-colors">
                  Technology
                </Link>
              </li>
              <li>
                <Link to="/?category=lifestyle" className="text-sm text-gray-400 hover:text-primary transition-colors">
                  Lifestyle
                </Link>
              </li>
              <li>
                <Link to="/?category=business" className="text-sm text-gray-400 hover:text-primary transition-colors">
                  Business
                </Link>
              </li>
              <li>
                <Link to="/?category=culture" className="text-sm text-gray-400 hover:text-primary transition-colors">
                  Culture
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-white mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-gray-400 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-gray-400 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-gray-400 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-sm text-gray-400 hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-sm text-gray-400 hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-white mb-4">Subscribe</h3>
            <p className="text-sm text-gray-400 mb-4">Get the latest articles and resources sent to your inbox.</p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-3 py-2 text-sm bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-white"
                required
              />
              <button
                type="submit"
                className="w-full flex items-center justify-center px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-500 transition-colors"
              >
                <span className="mr-2">Subscribe</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-gray-500">© 2023 DcruzBlog. All rights reserved.</p>
          <p className="text-xs text-gray-500 mt-2 md:mt-0">Designed and built with care for content creators.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer