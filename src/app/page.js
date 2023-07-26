import image1 from "@/assets/nature1.jpg";
import PopularProducts from "@/components/HomePage/PopularProducts";
import Categories from "@/components/HomePage/categories";
// import image2 from "@/assets/nature2.avif";
import Image from 'next/image'
import { Suspense } from "react";

const HomePage =() => {
  return (
    <main>
      <h1>Home</h1>
      <Categories/>
      <Suspense fallback={<h1 className="text-center font-semibold text-2xl">Loading...</h1>}> <PopularProducts></PopularProducts> </Suspense>
    </main>
  )
}

export default  HomePage;