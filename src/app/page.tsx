// import Image from "next/image";
// "use client";
import ContentContainer from "./components/templates/content_container";
import Footer from "./components/templates/footer";
import Header from "./components/templates/header";
import ProductsContainer from "./components/templates/products_container";
import UseCaseContainer from "./components/templates/use_cases_container";

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center bg-primary-dark">
      <Header />
      {/* Content Container */}
      <ContentContainer />
      <ProductsContainer />
      <UseCaseContainer />
      <Footer />
    </main>
  );
};

export default Home;
