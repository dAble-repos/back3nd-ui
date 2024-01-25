// import Image from "next/image";
// "use client";
import ContentContainer from "./components/templates/content_container";
import Header from "./components/templates/header";
import ProductsContainer from "./components/templates/products_container";

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center bg-primary-dark">
      <Header />
      {/* Content Container */}
      <ContentContainer />
      <ProductsContainer />
      <div className="bg-white w-2/3 rounded-xl text-black px-24 py-12 mt-12 space-y-8">
        <h1 className="text-2xl font-semibold text-left">Use Cases</h1>
        <p className="text-sm font-medium text-left">
          Harness the capabilities of our comprehensive Back3nd suite to address
          intricate challenges and elevate the functionality of your fintech app
          with blockchain technology. Tailor your user onboarding experience,
          enhance user engagement, or seamlessly integrate new features, all
          powered by our advanced Back3nd solutions.
        </p>
        <button className="bg-primary-dark text-white font-semibold py-4 px-4 rounded-lg shadow-md focus:outline-none hover:bg-primary-light w-48">
          Get Started
        </button>
      </div>
    </main>
  );
};

export default Home;
