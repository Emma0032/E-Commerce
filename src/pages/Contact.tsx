import { Mail, Phone, MapPin, MessageSquare } from "lucide-react";

export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-24">
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <h1 className="text-5xl font-bold tracking-tighter uppercase">Get in Touch</h1>
        <p className="text-gray-500">Have a question about sizing, shipping, or just want to say hello? Our team is here to help.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Contact Info */}
        <div className="space-y-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-gray-50 flex items-center justify-center">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest">Email Us</h4>
                <p className="text-sm text-gray-500 mt-1">support@vantage.com</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-gray-50 flex items-center justify-center">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest">Call Us</h4>
                <p className="text-sm text-gray-500 mt-1">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-gray-50 flex items-center justify-center">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest">Visit Us</h4>
                <p className="text-sm text-gray-500 mt-1">123 Minimalist Way, NY 10001</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-gray-50 flex items-center justify-center">
                <MessageSquare size={24} />
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest">Live Chat</h4>
                <p className="text-sm text-gray-500 mt-1">Available Mon-Fri, 9am-5pm EST</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 space-y-6">
            <h3 className="text-xl font-bold tracking-tighter uppercase">Customer Support Hours</h3>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Monday - Friday</span>
                <span className="font-medium">9:00 AM - 6:00 PM EST</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Saturday</span>
                <span className="font-medium">10:00 AM - 4:00 PM EST</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Sunday</span>
                <span className="font-medium">Closed</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white border border-gray-100 p-8 sm:p-12 shadow-sm space-y-8">
          <h2 className="text-2xl font-bold tracking-tighter uppercase">Send us a Message</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Full Name</label>
                <input type="text" className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-black" required />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Email Address</label>
                <input type="email" className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-black" required />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Subject</label>
              <select className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-black bg-white">
                <option>General Inquiry</option>
                <option>Order Status</option>
                <option>Returns & Exchanges</option>
                <option>Sizing Help</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Message</label>
              <textarea rows={6} className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-black resize-none" required></textarea>
            </div>
            <button className="w-full bg-black text-white text-xs font-bold uppercase tracking-widest py-4 hover:bg-gray-800 transition-colors">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
