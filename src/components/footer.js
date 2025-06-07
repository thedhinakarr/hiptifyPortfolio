import React from "react"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Logo and Social Icons */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-16">
          <div>
            <div className="mb-8">
              <span className="text-white font-bold text-xl">HIPTIFY</span>
              <span className="text-xs ml-0.5">®</span>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-blue-200 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-blue-200 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-blue-200 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 4.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"/>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-blue-200 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-blue-200 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.051 3.999c-2.346 0-2.634.01-3.553.052-.919.042-1.547.188-2.096.401-.568.221-1.051.517-1.532.998-.481.481-.777.964-.998 1.532-.213.549-.359 1.177-.401 2.096-.042.919-.052 1.207-.052 3.553s.01 2.634.052 3.553c.042.919.188 1.547.401 2.096.221.568.517 1.051.998 1.532.481.481.964.777 1.532.998.549.213 1.177.359 2.096.401.919.042 1.207.052 3.553.052s2.634-.01 3.553-.052c.919-.042 1.547-.188 2.096-.401.568-.221 1.051-.517 1.532-.998.481-.481.777-.964.998-1.532.213-.549.359-1.177.401-2.096.042-.919.052-1.207.052-3.553s-.01-2.634-.052-3.553c-.042-.919-.188-1.547-.401-2.096-.221-.568-.517-1.051-.998-1.532-.481-.481-.964-.777-1.532-.998-.549-.213-1.177-.359-2.096-.401-.919-.042-1.207-.052-3.553-.052zm0 1.441c2.305 0 2.577.009 3.485.05.841.038 1.298.178 1.602.295.403.157.69.344.992.646.302.302.489.589.646.992.117.304.257.761.295 1.602.041.908.05 1.18.05 3.485s-.009 2.577-.05 3.485c-.038.841-.178 1.298-.295 1.602-.157.403-.344.69-.646.992-.302.302-.589.489-.992.646-.304.117-.761.257-1.602.295-.908.041-1.18.05-3.485.05s-2.577-.009-3.485-.05c-.841-.038-1.298-.178-1.602-.295-.403-.157-.69-.344-.992-.646-.302-.302-.489-.589-.646-.992-.117-.304-.257-.761-.295-1.602-.041-.908-.05-1.18-.05-3.485s.009-2.577.05-3.485c.038-.841.178-1.298.295-1.602.157-.403.344-.69.646-.992.302-.302.589-.489.992-.646.304-.117.761-.257 1.602-.295.908-.041 1.18-.05 3.485-.05z"/>
                  <path d="M12.051 7.075c-2.753 0-4.985 2.231-4.985 4.985s2.232 4.985 4.985 4.985c2.753 0 4.985-2.231 4.985-4.985s-2.232-4.985-4.985-4.985zm0 8.221c-1.787 0-3.237-1.449-3.237-3.236s1.45-3.236 3.237-3.236c1.787 0 3.237 1.449 3.237 3.236s-1.45 3.236-3.237 3.236z"/>
                  <circle cx="17.338" cy="6.735" r="1.164"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Main Navigation Sections - Responsive Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-20 mb-16">
          {/* Services */}
          <div>
            <h4 className="font-bold text-white mb-6 text-sm uppercase tracking-wide">SERVICES</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/services/it-consulting" className="text-blue-200 hover:text-white transition-colors">IT Consulting</Link></li>
              <li><Link to="/services/ticket-brokering" className="text-blue-200 hover:text-white transition-colors">Ticket Brokering</Link></li>
              <li><Link to="/services/customer-service" className="text-blue-200 hover:text-white transition-colors">Customer Service</Link></li>
              <li><Link to="/services/technical-support" className="text-blue-200 hover:text-white transition-colors">Technical Support</Link></li>
              <li><Link to="/services/data-entry" className="text-blue-200 hover:text-white transition-colors">Data Entry</Link></li>
              <li><Link to="/services/project-management" className="text-blue-200 hover:text-white transition-colors">Project Management</Link></li>
              <li><Link to="/services/pricing-strategy" className="text-blue-200 hover:text-white transition-colors">Pricing Strategy</Link></li>
              <li><Link to="/services/software-testing" className="text-blue-200 hover:text-white transition-colors">Software Testing</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-white mb-6 text-sm uppercase tracking-wide">COMPANY</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/company/about" className="text-blue-200 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/company/team" className="text-blue-200 hover:text-white transition-colors">Our Team</Link></li>
              <li><Link to="/company/careers" className="text-blue-200 hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/company/insights" className="text-blue-200 hover:text-white transition-colors">Insights</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold text-white mb-6 text-sm uppercase tracking-wide">SUPPORT</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/support/contact" className="text-blue-200 hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link to="/support/help" className="text-blue-200 hover:text-white transition-colors">Help Center</Link></li>
              <li><Link to="/support/request-services" className="text-blue-200 hover:text-white transition-colors">Request Services</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold text-white mb-6 text-sm uppercase tracking-wide">RESOURCES</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/resources/blog" className="text-blue-200 hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/resources/case-studies" className="text-blue-200 hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link to="/resources/events" className="text-blue-200 hover:text-white transition-colors">Events</Link></li>
            </ul>
          </div>
        </div>

        {/* Contact Information */}
        <div className="border-t border-blue-800 pt-8 mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:space-x-8 space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <svg className="w-4 h-4 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="text-blue-200 text-sm">1 (844) 638-7864</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-4 h-4 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="mailto:sales@hiptify.com" className="text-blue-200 hover:text-white transition-colors text-sm">sales@hiptify.com</a>
            </div>
          </div>
        </div>

        {/* Bottom Links and Copyright */}
        <div className="border-t border-blue-800 pt-8">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center space-y-4 lg:space-y-0">
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
              <Link to="/accessibility" className="text-blue-200 hover:text-white transition-colors">Accessibility</Link>
              <Link to="/legal" className="text-blue-200 hover:text-white transition-colors">Legal</Link>
              <Link to="/cookie-policy" className="text-blue-200 hover:text-white transition-colors">Cookie Policy</Link>
              <Link to="/export" className="text-blue-200 hover:text-white transition-colors">Export approach</Link>
              <Link to="/trust-security" className="text-blue-200 hover:text-white transition-colors">Trust & Security</Link>
              <Link to="/privacy" className="text-blue-200 hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/california-notice" className="text-blue-200 hover:text-white transition-colors">California Collection Notice</Link>
              <Link to="/terms" className="text-blue-200 hover:text-white transition-colors">Terms of Use</Link>
              <Link to="/email-preferences" className="text-blue-200 hover:text-white transition-colors">Email Preferences</Link>
            </div>
            
            <div className="text-blue-200 text-sm">
              Copyright© 2025 HIPTIFY Solutions
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer