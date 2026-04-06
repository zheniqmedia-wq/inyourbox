import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { 
  Mail, Phone, MapPin, CheckCircle2, Users, DollarSign, 
  Target, Shield, Map, RefreshCw, Printer, Clock, 
  Home, Utensils, Heart, ShoppingBag, Briefcase, Send,
  Wrench, Star, Check, Menu, X
} from 'lucide-react';

export default function App() {
  const [state, handleSubmit] = useForm('mpqokvrv');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Navigation */}
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                <rect width="40" height="40" rx="10" fill="#F35F2C"/>
                <path d="M10 14C10 12.8954 10.8954 12 12 12H28C29.1046 12 30 12.8954 30 14V26C30 27.1046 29.1046 28 28 28H12C10.8954 28 10 27.1046 10 26V14Z" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10 14L20 21L30 14" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <div className="font-black text-2xl tracking-tight text-[#1e2235] leading-none">
                IN YOUR BOX<br/><span className="text-[#f35f2c]">MEDIA</span>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-8 font-medium text-sm text-slate-600">
              <a href="#how-it-works" className="hover:text-[#f35f2c] transition-colors">How & Why It Works</a>
              <a href="#who-we-serve" className="hover:text-[#f35f2c] transition-colors">Who We Serve</a>
              <a href="#claim-spot" className="hover:text-[#f35f2c] transition-colors">Claim Your Spot</a>
            </div>

            {/* Contact & CTA */}
            <div className="hidden md:flex items-center gap-6">
              <a href="tel:+13126460309" className="flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-[#f35f2c] transition-colors">
                <Phone className="w-4 h-4 text-[#f35f2c]" />
                (312) 646-0309
              </a>
              <a href="#claim-spot" className="bg-[#f35f2c] hover:bg-[#e04f1f] text-white px-6 py-2.5 rounded-full font-semibold text-sm transition-colors shadow-sm">
                Claim Your Spot
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-slate-700 hover:text-[#f35f2c] transition-colors"
              >
                {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 px-4 pt-2 pb-6 shadow-lg absolute w-full">
            <div className="flex flex-col space-y-4">
              <a href="#how-it-works" onClick={() => setIsMobileMenuOpen(false)} className="font-medium text-slate-700 hover:text-[#f35f2c] py-2">How & Why It Works</a>
              <a href="#who-we-serve" onClick={() => setIsMobileMenuOpen(false)} className="font-medium text-slate-700 hover:text-[#f35f2c] py-2">Who We Serve</a>
              <a href="#claim-spot" onClick={() => setIsMobileMenuOpen(false)} className="font-medium text-slate-700 hover:text-[#f35f2c] py-2">Claim Your Spot</a>
              <div className="h-px bg-slate-100 my-2"></div>
              <a href="tel:+13126460309" className="flex items-center gap-2 text-sm font-semibold text-slate-700 py-2 hover:text-[#f35f2c] transition-colors">
                <Phone className="w-4 h-4 text-[#f35f2c]" />
                (312) 646-0309
              </a>
              <a href="#claim-spot" onClick={() => setIsMobileMenuOpen(false)} className="bg-[#f35f2c] text-white text-center px-6 py-3 rounded-xl font-bold transition-colors shadow-sm w-full mt-2">
                Claim Your Spot
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="bg-slate-50 pt-16 pb-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="max-w-2xl mx-auto text-center lg:text-left lg:mx-0">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-8">
                <div className="w-2 h-2 rounded-full bg-[#f35f2c]"></div>
                <span className="text-xs font-semibold text-slate-600 uppercase tracking-wider">Chicago & Chicagoland's Community Postcard Marketing Company</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-black text-[#1e2235] leading-[1.1] mb-6 tracking-tight">
                Putting Your<br/>
                Business In<br/>
                Front of the<br/>
                Right Doors —<br/>
                <span className="text-[#f35f2c]">Literally.</span>
              </h1>
              
              <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Share one large, bold 9x12 inch oversized postcard with 12 to 20 non-competing local businesses. We mail it to thousands of homes across Chicago and the surrounding suburbs via USPS EDDM. No mailing list needed.
              </p>
              
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10">
                <a href="#claim-spot" className="bg-[#f35f2c] hover:bg-[#e04f1f] text-white px-8 py-3.5 rounded-full font-semibold text-base transition-colors shadow-md">
                  Claim Your Spot
                </a>
                <a href="#how-it-works" className="bg-white hover:bg-slate-50 text-[#1e2235] border-2 border-[#1e2235] px-8 py-3.5 rounded-full font-semibold text-base transition-colors">
                  See How It Works
                </a>
              </div>

              <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm font-medium text-slate-600">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-[#f35f2c]" />
                  12 to 20 Businesses Per Card
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-[#f35f2c]" />
                  One Business Per Category
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl relative z-10 border-8 border-white bg-white">
                <img 
                  src="/image (5).jpg" 
                  alt="Mailbox with postcard" 
                  className="w-full h-[500px] object-cover"
                />
                
                {/* Floating Badge */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-lg flex items-center gap-4 border border-slate-100">
                  <div className="bg-orange-100 p-3 rounded-full">
                    <CheckCircle2 className="w-6 h-6 text-[#f35f2c]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0.5">Shared Cost Model</p>
                    <p className="text-lg font-bold text-[#1e2235]">Premium EDDM, Affordable Price</p>
                  </div>
                </div>
              </div>
              {/* Decorative background blob */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-orange-100 to-blue-50 rounded-full blur-3xl -z-10 opacity-70"></div>
            </div>
          </div>
        </div>

        {/* Slanted Divider */}
        <div className="absolute -bottom-[1px] left-0 w-full overflow-hidden leading-[0]">
          <svg className="relative block w-full h-[40px] md:h-[6vw]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M1200 0L0 120H1200V0z" fill="#1e2235"></path>
          </svg>
        </div>
      </section>

      {/* How & Why It Works Section (Merged) */}
      <section id="how-it-works" className="py-24 bg-[#1e2235] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#f35f2c] font-bold text-sm uppercase tracking-wider mb-3">The Process & Advantage</p>
              <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">How & Why It Works</h2>
              <p className="text-lg text-slate-300 mb-12">
                We've revolutionized direct mail by making it affordable, exclusive, and highly targeted. Here is how we get you in front of local homeowners.
              </p>
              
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-700">
                <img 
                  src="/printing.png" 
                  alt="Commercial printing press" 
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>

            <div className="space-y-10">
              {[
                { num: "1", title: "We Build the Card (High Visibility)", desc: "We design a large, bold 9x12 inch shared postcard featuring 12 to 20 non-competing local businesses. It stands out and gets kept as a local directory." },
                { num: "2", title: "You Claim Your Spot (Built-In Exclusivity)", desc: "Each business gets their own dedicated ad spot. Only one business per category per card. Zero direct competition. If you're the roofer, you're the ONLY roofer." },
                { num: "3", title: "We Handle Print & Mail (Guaranteed Reach)", desc: "We use USPS EDDM to target specific neighborhoods, zip codes, and carrier routes across Chicagoland. No mailing list needed." },
                { num: "4", title: "Your Business Shows Up (Repeated Exposure)", desc: "Thousands of homeowners receive the card directly in their mailbox. They hold onto it, meaning your ad is already on their fridge when they need you." }
              ].map((step, i) => (
                <div key={i} className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#f35f2c] text-white flex items-center justify-center font-black text-xl shadow-lg">
                    {step.num}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                    <p className="text-slate-300 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Shared Cost Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-[#f35f2c] font-bold text-sm uppercase tracking-wider mb-3">Claim Your Spot</p>
            <h2 className="text-4xl md:text-5xl font-black text-[#1e2235] mb-6 tracking-tight">Shared Cost. Maximum Impact.</h2>
            <p className="text-lg text-slate-600">
              Our shared postcard model means you get all the benefits of a premium EDDM campaign for a fraction of the cost. Join other local businesses on our next drop.
            </p>
          </div>

          <div className="max-w-2xl mx-auto bg-white rounded-3xl border-2 border-[#f35f2c] p-10 md:p-12 shadow-2xl text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-[#f35f2c]"></div>
            <h3 className="text-3xl font-black text-[#1e2235] mb-2">The Local Business Spot</h3>
            <p className="text-slate-500 mb-8">Starting at an affordable shared rate — contact us for your custom quote.</p>
            
            <div className="space-y-4 text-left max-w-md mx-auto mb-10">
              {[
                "Dedicated ad space on the card",
                "Professional design included",
                "EDDM delivery to targeted routes",
                "No mailing list needed",
                "One business per category guarantee",
                "Reaches thousands of local homes"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="bg-orange-100 rounded-full p-1 flex-shrink-0">
                    <Check className="w-4 h-4 text-[#f35f2c]" strokeWidth={3} />
                  </div>
                  <span className="text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <a href="#claim-spot" className="inline-block bg-[#f35f2c] hover:bg-[#e04f1f] text-white px-10 py-4 rounded-full font-bold text-lg transition-colors shadow-lg w-full sm:w-auto">
              Reserve Your Spot Now
            </a>
          </div>
        </div>
      </section>

      {/* Why Homeowners Respond */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-[#f35f2c] font-bold text-sm uppercase tracking-wider mb-3">High Engagement</p>
            <h2 className="text-4xl md:text-5xl font-black text-[#1e2235] mb-6 tracking-tight">Why Homeowners Actually Respond</h2>
            <p className="text-lg text-slate-600">
              Shared postcards feel like a local business spotlight — a trusted, useful resource featuring vetted local services. Instead of feeling like junk mail, homeowners keep them on the counter or fridge as a reference for services they actually need.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: CheckCircle2, title: "Feels Like a Local Resource, Not Junk Mail", desc: "A trusted, vetted spotlight of community services rather than a solo flyer." },
              { icon: Clock, title: "Kept for Weeks or Months", desc: "Because it functions as a local directory, it stays on the counter or fridge." },
              { icon: MapPin, title: "Right-Place, Right-Time Advertising", desc: "When they finally need your service, your ad is already in their hands." }
            ].map((feature, i) => (
              <div key={i} className="bg-slate-50 rounded-3xl p-8 text-center border border-slate-100 shadow-sm">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-50 text-[#f35f2c] mb-6">
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-[#1e2235] mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section id="who-we-serve" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-[#f35f2c] font-bold text-sm uppercase tracking-wider mb-3">Our Partners</p>
            <h2 className="text-4xl md:text-5xl font-black text-[#1e2235] mb-6 tracking-tight">Who We Serve</h2>
            <p className="text-lg text-slate-600">
              Any business that relies on local Chicago area customers can benefit from our shared postcard model. Remember, only one business per category!
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Wrench, title: "Home Services", desc: "Plumbers, HVAC, Roofers, Landscapers, Electricians, Cleaners" },
              { icon: Utensils, title: "Restaurants & Food", desc: "Local Eateries, Pizza Delivery, Cafes, Bakeries, Catering" },
              { icon: Home, title: "Real Estate", desc: "Realtors, Property Managers, Mortgage Brokers, Appraisers" },
              { icon: Heart, title: "Wellness & Fitness", desc: "Gyms, Dentists, Chiropractors, Salons, Spas, Physical Therapy" },
              { icon: ShoppingBag, title: "Retail", desc: "Boutiques, Auto Shops, Pet Stores, Specialty Shops" },
              { icon: Briefcase, title: "Professional Services", desc: "Accountants, Lawyers, Insurance Agents, Tax Prep" }
            ].map((category, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-[#f35f2c] transition-colors flex gap-4 items-start shadow-sm hover:shadow-md">
                <div className="bg-orange-50 p-3 rounded-xl text-[#f35f2c] flex-shrink-0">
                  <category.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-[#1e2235] mb-1">{category.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{category.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="claim-spot" className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200">
            {/* Form Header */}
            <div className="bg-[#1e2235] p-10 text-center relative overflow-hidden">
              <Send className="absolute -right-6 -top-6 w-48 h-48 text-white opacity-5 rotate-12" />
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4 relative z-10">Claim Your Spot Today</h2>
              <p className="text-slate-300 relative z-10">Fill out the details below. Remember, we only allow one business per category per card!</p>
            </div>
            
            {/* Form Body */}
            <div className="p-10 md:p-12">
              {state.succeeded ? (
                <div className="text-center py-12">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-6">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1e2235] mb-2">Message Sent!</h3>
                  <p className="text-slate-600">Thanks for reaching out. We'll be in touch within 24 hours to confirm availability.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-2">Your Name *</label>
                      <input type="text" id="name" name="name" required placeholder="John Doe" className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#f35f2c] focus:border-[#f35f2c] outline-none transition-all bg-slate-50 focus:bg-white" />
                      <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-500 text-sm mt-1 block" />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-bold text-slate-700 mb-2">Phone Number *</label>
                      <input type="tel" id="phone" name="phone" required placeholder="(312) 646-0309" className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#f35f2c] focus:border-[#f35f2c] outline-none transition-all bg-slate-50 focus:bg-white" />
                      <ValidationError prefix="Phone" field="phone" errors={state.errors} className="text-red-500 text-sm mt-1 block" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-2">Email Address *</label>
                    <input type="email" id="email" name="email" required placeholder="john@example.com" className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#f35f2c] focus:border-[#f35f2c] outline-none transition-all bg-slate-50 focus:bg-white" />
                    <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-sm mt-1 block" />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-2">Your Message *</label>
                    <textarea id="message" name="message" required rows={4} placeholder="Tell us about your business and the areas you want to target..." className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#f35f2c] focus:border-[#f35f2c] outline-none transition-all bg-slate-50 focus:bg-white resize-none"></textarea>
                    <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-sm mt-1 block" />
                  </div>

                  <div className="pt-4">
                    <p className="text-sm text-slate-600 text-center mb-4 font-medium">We'll reach out within 24 hours to confirm availability in your category.</p>
                    <button type="submit" disabled={state.submitting} className="w-full bg-[#f35f2c] hover:bg-[#e04f1f] disabled:bg-slate-400 disabled:cursor-not-allowed text-white py-4 rounded-xl font-bold text-lg transition-colors shadow-md flex justify-center items-center gap-2">
                      {state.submitting ? 'Sending...' : 'Claim My Spot'}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1e2235] text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-[#f35f2c] p-2 rounded-lg">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div className="font-black text-xl tracking-tight leading-none">
                  IN YOUR BOX<br/><span className="text-[#f35f2c]">MEDIA</span>
                </div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Putting Your Business In Front of the Right Doors — Literally.
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                Our Mission: To make powerful, professional advertising accessible to every local business — delivered right to their community's doorstep.
              </p>
            </div>

            {/* Who We Serve */}
            <div>
              <h4 className="font-bold text-lg mb-6">Who We Serve</h4>
              <ul className="space-y-3 text-sm text-slate-400">
                <li><a href="#who-we-serve" className="hover:text-[#f35f2c] transition-colors">Landscapers</a></li>
                <li><a href="#who-we-serve" className="hover:text-[#f35f2c] transition-colors">Cleaners</a></li>
                <li><a href="#who-we-serve" className="hover:text-[#f35f2c] transition-colors">Roofers</a></li>
                <li><a href="#who-we-serve" className="hover:text-[#f35f2c] transition-colors">Realtors</a></li>
                <li><a href="#who-we-serve" className="hover:text-[#f35f2c] transition-colors">HVAC Companies</a></li>
                <li><a href="#who-we-serve" className="hover:text-[#f35f2c] transition-colors">Restaurants</a></li>
                <li><a href="#who-we-serve" className="hover:text-[#f35f2c] transition-colors">Other local service providers</a></li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-lg mb-6">Quick Links</h4>
              <ul className="space-y-3 text-sm text-slate-400">
                <li><a href="#how-it-works" className="hover:text-[#f35f2c] transition-colors">How It Works</a></li>
                <li><a href="#claim-spot" className="hover:text-[#f35f2c] transition-colors">Claim Your Spot</a></li>
                <li><a href="#claim-spot" className="hover:text-[#f35f2c] transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-bold text-lg mb-6">Contact Info</h4>
              <ul className="space-y-4 text-sm text-slate-400">
                <li className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#f35f2c] flex-shrink-0" />
                  <div>
                    <a href="tel:+13126460309" className="text-white font-medium hover:text-[#f35f2c] transition-colors">(312) 646-0309</a>
                    <p className="text-xs mt-1">Mon-Fri 9am-6pm CST</p>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#f35f2c] flex-shrink-0" />
                  <a href="mailto:eugene@inyourbox.media" className="hover:text-white transition-colors">eugene@inyourbox.media</a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#f35f2c] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white font-medium">Chicago, IL</p>
                    <p className="mt-1 leading-relaxed">Serving the Greater<br/>Chicagoland Area</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
            <p>© {new Date().getFullYear()} In Your Box Media. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
