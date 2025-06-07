import React from "react"
import { Link } from "gatsby"
import Footer from "../components/footer"

const IndexPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <div className="text-blue-700">
                <span className="font-bold text-3xl">HIPTIFY</span>
                <span className="text-xs align-top ml-0.5">®</span>
              </div>
            </div>

            <nav className="hidden lg:flex items-center space-x-8">
              <Link to="/products" className="text-blue-700 hover:text-blue-800 font-semibold text-sm ">
                Products
              </Link>
              <Link to="/resources" className="text-blue-700 hover:text-blue-800 font-semibold text-sm">
                Resources
              </Link>
              <Link to="/community" className="text-blue-700 hover:text-blue-800 font-semibold text-sm">
                Our community
              </Link>
              <Link to="/partners" className="text-blue-700 hover:text-blue-800 font-semibold text-sm">
                Partners
              </Link>
              <Link to="/company" className="text-blue-700 hover:text-blue-800 font-semibold text-sm">
                Company
              </Link>
            </nav>


          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-6xl font-black mb-6 leading-tight tracking-tight text-white">
                Your Technology Edge
              </h1>
              <p className="text-xl mb-8 text-blue-100 leading-relaxed font-light">
                Empowering businesses with cutting-edge IT consulting, ticket brokering solutions,
                and comprehensive technical services. Transform your operations with our expert guidance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-orange-500 text-white px-8 py-3 rounded-lg font-bold hover:bg-orange-700 transition-colors tracking-wide">
                  EXPLORE OUR SOLUTIONS
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-900 transition-colors tracking-wide">
                  CONNECT WITH US
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white bg-opacity-10 p-8 rounded-2xl backdrop-blur-sm">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-400">2019</div>
                    <div className="text-sm text-blue-200">Established</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-400">15+</div>
                    <div className="text-sm text-blue-200">Followers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-400">2-10</div>
                    <div className="text-sm text-blue-200">Employees</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-400">7+</div>
                    <div className="text-sm text-blue-200">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-gray-900 mb-4 tracking-tight">
              Advanced <span className="text-orange-500">technology solutions</span> for every industry
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto font-light leading-relaxed">
              Specialized in ticket brokering for concerts and game shows, comprehensive IT consulting,
              and innovative technical solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="text-center p-8 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 tracking-wide">Ticket Brokering</h3>
              <p className="text-gray-700 font-light leading-relaxed">
                Expert ticket purchasing, pricing, and selling services for concerts and game shows
                with data-driven insights and strategic tools.
              </p>
            </div>

            {/* Service 2 */}
            <div className="text-center p-8 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 tracking-wide">IT Consulting</h3>
              <p className="text-gray-700 font-light leading-relaxed">
                Comprehensive IT consulting services including system optimization,
                digital transformation, and technology strategy development.
              </p>
            </div>

            {/* Service 3 */}
            <div className="text-center p-8 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-purple-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 tracking-wide">Technical Solutions</h3>
              <p className="text-gray-700 font-light leading-relaxed">
                Custom software development, system integration, project management,
                and business consulting tailored to your needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-black text-gray-900 mb-6 tracking-tight">
                Comprehensive Services Provided
              </h2>
              <p className="text-lg text-gray-700 mb-8 font-light leading-relaxed">
                Established in 2019, we focus on providing exceptional ticket brokering services
                for concerts and game shows in the US & Canada market, backed by years of experience
                in buying, selling, and strategic consulting.
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-700 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-bold text-gray-900 tracking-wide">Live Events & IT Consulting</h4>
                    <p className="text-gray-700 font-light">Expert guidance for event technology and IT infrastructure</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-700 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-bold text-gray-900 tracking-wide">Customer Service & Support</h4>
                    <p className="text-gray-700 font-light">Dedicated support for all your technical and business needs</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-700 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-bold text-gray-900 tracking-wide">Data Entry & Project Management</h4>
                    <p className="text-gray-700 font-light">Efficient data handling and comprehensive project oversight</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-700 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-bold text-gray-900 tracking-wide">Technical Support & Pricing Strategy</h4>
                    <p className="text-gray-700 font-light">Advanced technical solutions and strategic pricing models</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-black text-gray-900 mb-6 tracking-tight">Ready to Get Started?</h3>
              <p className="text-gray-700 mb-6 font-light leading-relaxed">
                Transform your business with our expert consulting and innovative solutions.
                Let's discuss how we can help you achieve your goals.
              </p>
              <button className="w-full bg-blue-700 text-white py-3 px-6 rounded-lg font-bold hover:bg-blue-700 transition-colors tracking-wide">
                Request Services
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default IndexPage

export const Head = () => (
  <>
    <title>HIPTIFY - IT Consulting & Ticket Brokering Solutions</title>
    <meta name="description" content="Expert IT consulting services and ticket brokering solutions for concerts and game shows. Transform your business with HIPTIFY's innovative technology solutions." />
  </>
)