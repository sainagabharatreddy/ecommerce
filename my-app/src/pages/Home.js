import NavBar from "../features/navbar/NavBar";
import { ProductList } from "../features/productList/components/ProductList";

function Home() {
    return (
    <>
    <NavBar>
        <ProductList></ProductList>
    </NavBar>
    </>
      );
}

export default Home;