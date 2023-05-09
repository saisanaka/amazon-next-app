import Head from "next/head";
import Banner from "./Banner";
import Header from "./Header";
import ProductFeed from "./ProductFeed";

export default function Home({products}) {

  return (
    <div className="bg-gray-100">
      <Head>
        Amazon pro
      </Head>
      <Header />
      <main className="max-w-screen-2xl mx-auto">
        {/* Banner */}
        <Banner />
        {/* Product feed */}
        <ProductFeed products={products} />
      </main>
    </div>
  )
}

export async function getServerSideProps(context){
  const products = await fetch('https://fakestoreapi.com/products/')
  .then(res=>res.json());
  return {
    props:{
      products
    }
  }
}
