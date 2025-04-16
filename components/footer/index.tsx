import Link from "next/link";

const Footer = () => {
  return (
    <footer className=" text-white py-12 md:pt-16 ">
      <div className=" px-4 md:px-6">
        <div className="grid grid-cols-1  max-[1024px]:grid-cols-2 max-[512px]:grid-cols-1 max-[520px]:*:text-cneter lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-2 relative inline-block">
              Shadcn UI Pro
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-white transform translate-y-1"></span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mt-4">
              Shadcn UI Pro is Powerful Next.JS boilerplate build with
              shadcn/ui.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed mt-2">
              Introducing the ultimate Next.JS boilerplate, your gateway to
              building a game-changing SaaS, an AI-powered marvel, or any web
              app you can dream of. Get ready to turbocharge your online success
              and start making those dollars flow in.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Products</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="hover:underline text-sm text-gray-300 hover:text-white"
                >
                  Project Management
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:underline text-sm text-gray-300 hover:text-white"
                >
                  Multi-tenancy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:underline text-sm text-gray-300 hover:text-white"
                >
                  Scalability
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:underline text-sm text-gray-300 hover:text-white"
                >
                  Customization
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:underline text-sm text-gray-300 hover:text-white"
                >
                  Integration
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:underline text-sm text-gray-300 hover:text-white"
                >
                  Mobile accessibility
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:underline text-sm text-gray-300 hover:text-white"
                >
                  Analytics and reporting
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Features</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="hover:underline text-sm text-gray-300 hover:text-white"
                >
                  User management
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:underline text-sm text-gray-300 hover:text-white"
                >
                  Workflow automation
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:underline text-sm text-gray-300 hover:text-white"
                >
                  API access
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:underline text-sm text-gray-300 hover:text-white"
                >
                  Data visualization
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:underline text-sm text-gray-300 hover:text-white"
                >
                  Version control
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:underline text-sm text-gray-300 hover:text-white"
                >
                  Upgrades
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:underline text-sm text-gray-300 hover:text-white"
                >
                  Billing and invoicing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Explore</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="hover:underline text-sm text-gray-300 hover:text-white"
                >
                  Docs
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:underline text-sm text-gray-300 hover:text-white"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:underline text-sm text-gray-300 hover:text-white"
                >
                  Integrations
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:underline text-sm text-gray-300 hover:text-white"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:underline text-sm text-gray-300 hover:text-white"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Your Company Name. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
