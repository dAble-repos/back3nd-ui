import Link from "next/link";
import Image from "next/image";
import logoImg from "../../../../public/images/Back3nd_darkandcolour.png";

const Header = () => {
  return (
    <header className="bg-white shadow py-2 w-full h-16">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo and company name */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src={logoImg}
              alt="Logo - Back3nd"
              width={100}
              height={100}
              className="w-auto"
            />
          </Link>
        </div>

        {/* Navigation links */}
        <nav className="hidden lg:flex items-center space-x-8 text-gray-500">
          <Link href="/products">Products</Link>
          <Link href="/solutions">Solutions</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/more">More</Link>
          <Link
            href="/dashboard"
            className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded"
          >
            Button
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button className="lg:hidden focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 p-2">
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
