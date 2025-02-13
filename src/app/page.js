import Category from "@/components/Category";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProductList from "@/components/ProductList"
import Head from "next/head";
export default function Home() {
	return (
		<>
			<Head>
				<meta
					name="description"
					content="WebStore eng yangi elektronika mahsulotlarini, shu jumladan quloqchinlar, smartfonlar va gadjetlarni taklif qiladi. Eng yaxshi brendlar, arzon narxlar va tez yetkazib berish bilan ajoyib mijozlarni qo'llab-quvvatlashni taqdim etamiz."
				/>
				<meta
					name="keywords"
					content="elektronika, quloqchinlar, smartfonlar, gadjetlar, mobil qurilmalar, texnika, audio uskunalar, elektronika do'koni, elektronika sotib olish, WebStore"
				/>
				<meta
					name="robots"
					content="index, follow"
				/>
				<meta
					name="author"
					content="WebStore"
				/>
				<meta
					property="og:title"
					content="WebStore – Eng Yangi Elektronika Do'koni"
				/>
				<meta
					property="og:description"
					content="WebStore-da eng yangi elektronika mahsulotlarini, shu jumladan quloqchinlar, smartfonlar va boshqa gadjetlarni sotib oling. Eng yaxshi brendlar va arzon narxlar."
				/>
				<meta
					property="og:image"
					content="/images/logo.jpg"
				/>
        <meta
					property="og:type"
					content="website"
				/>
				<meta
					property="og:url"
					content="https://www.thewebstore.uz"
				/>
				<meta charset="UTF-8" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				/>
				
			</Head>
			<div>
				<Header />
				<Category />
				<ProductList/>
				<ProductList/>
				<ProductList/>
				<ProductList/>
				<Footer />
			</div>
		</>
	);
}
