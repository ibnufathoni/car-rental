import Layout from "../../components/layout";
import Hero from "./sections/Hero";
// import SearchSection from "./sections/SearchSection";
import Search from "./sections/Search";


export default function CartPage() {
    return (
        <Layout>
            <Hero />
            <Search />
            {/*<SearchSection />*/}
        </Layout>
    )
}
