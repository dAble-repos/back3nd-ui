// import Image from "next/image";
// "use client";
import Link from "next/link";
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
    </main>
  );
};

export default Home;
