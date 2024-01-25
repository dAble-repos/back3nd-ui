import Link from "next/link";
import Image from "next/image";
import logoImg from "../../../../public/images/Back3nd_darkandcolour.png";

const Header = () => {
  return (
    <header className="bg-white shadow py-2 w-full h-12">
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
        <nav className="hidden lg:flex items-center space-between">
          <Link href="/products">Products</Link>
          <Link href="/solutions">Solutions</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/more">
            More
            <svg
              className="inline ml-2 w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 11.414l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
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
