// components/Footer.jsx
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="py-8 px-4 md:px-16 border-t bg-gray-800/70 border-gray-200">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo Column */}
          <div className="mb-4 md:mb-0">
            <Link href="/" className="inline-block">
              <div className="w-32 h-10 relative">
                <Image
                  src="/logo.png"
                  alt="Logo"
                  layout="fill"
                  objectFit="contain"
                  className="dark:invert"
                />
              </div>
            </Link>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-lg font-medium mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-400 hover:text-gray-900">About us</Link></li>
              <li><Link href="/" className="text-gray-400 hover:text-gray-900">Careers</Link></li>
              <li><Link href="/" className="text-gray-400 hover:text-gray-900">Privacy policy</Link></li>
              <li><Link href="/" className="text-gray-400 hover:text-gray-900">Cookie policy</Link></li>
            </ul>
          </div>

          {/* Knowledge Center Column */}
          <div>
            <h3 className="text-lg font-medium mb-4">Knowledge center</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-400 hover:text-gray-900">Blog</Link></li>
              <li><Link href="/" className="text-gray-400 hover:text-gray-900">Help Center</Link></li>
              <li><Link href="/" className="text-gray-400 hover:text-gray-900">Service Status</Link></li>
              <li><Link href="/" className="text-gray-400 hover:text-gray-900">Experts</Link></li>
              <li><Link href="/" className="text-gray-400 hover:text-gray-900">Forum</Link></li>
              <li><Link href="/" className="text-gray-400 hover:text-gray-900">Stacker vs Airtable</Link></li>
            </ul>
          </div>

          {/* Solutions Column */}
          <div>
            <h3 className="text-lg font-medium mb-4">Solutions</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-400 hover:text-gray-900">Customer Portal</Link></li>
              <li><Link href="/" className="text-gray-400 hover:text-gray-900">Work Management</Link></li>
              <li><Link href="/" className="text-gray-400 hover:text-gray-900">Flexible CRM</Link></li>
              <li><Link href="/" className="text-gray-400 hover:text-gray-900">Process Tracker</Link></li>
            </ul>
          </div>

          {/* Templates Column */}
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;