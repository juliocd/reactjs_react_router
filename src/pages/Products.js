import { NavLink } from "react-router-dom";

const Products = () => {
    return (
        <section>
            <h1>The products page</h1>
            <ul>
                <li>
                    <NavLink to='/products/1'>Books</NavLink>
                </li>
                <li>
                    <NavLink to='/products/2'>Cars</NavLink>
                </li>
                <li>
                    <NavLink to='/products/3'>Shoes</NavLink>
                </li>
            </ul>
        </section>
    )
}

export default Products;