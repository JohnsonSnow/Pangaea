import React, { useState } from 'react';
import './App.css';
import { useQuery, gql } from '@apollo/client';
import Nav from './Nav';
import Cart from './Components/Cart';
import { CartProvider, useCart } from "react-use-cart";

const GET_PRODUCTS = (currency) => gql`
	{
		products {
			id
			image_url
			title
			price(currency: ${currency})
			product_options {
				title
				prefix
				suffix
				options {
					id
					value
				}
			}
		}
	}
`;

function App() {
	const { data, loading, error } = useQuery(GET_PRODUCTS('USD'));
	const [mode, setMode] = useState(false);
	const { addItem } = useCart();

	return (
		<div>
			<Nav />
			<div className="container">
				<div className="row" style={{ margin: '40px' }}>
					<div className="col-md-6">
						<h3>All Products</h3>
						<p>A 360<sup>o</sup> look at Lumin</p>
					</div>
					<div className="col-md-6" />
				</div>
			</div>
			<div style={{ backgroundColor: '#f8f9fa'}}>
				<div className="container">
					<div className="row">
						{data &&
							data.products &&
							data.products.map((d) => (
								<div className="col-md-4 col-sm-6 col-xm-6" style={{marginTop: '30px'}}>
									<div className="product-grid2">
										<div className="product-image2">
											<a href="#">
												<div
													style={{
														width: '100%',
														height: 250,
														background: `url(${d.image_url})`,
														backgroundSize: 'contain',
														backgroundPosition: 'center',
														backgroundRepeat: 'no-repeat',
														margin: '20px'
													}}
												/>
												{/* <img
									className="pic-1"
									src={d.image_url}
									alt="img"
									width="100px"
								/>
								<img
									className="pic-2"
									src={d.image_url}
									alt="img"
								/> */}
											</a>
											<ul className="social">
												<li>
													<a href="#" data-tip="Quick View">
														<i className="fa fa-eye" />
													</a>
												</li>
												<li>
													<a href="#" data-tip="Add to Wishlist">
														<i className="fa fa-shopping-bag" />
													</a>
												</li>
												<li>
													<a href="#" data-tip="Add to Cart">
														<i className="fa fa-shopping-cart" />
													</a>
												</li>
											</ul>
											<a className="add-to-cart" onClick={() => { setMode(true); addItem(d)}}>
												Add to cart
											</a>
										</div>
										<div className="product-content">
											<h3 className="title">
												<a href="#">{d.title}</a>
											</h3>
											<span className="price">$ {d.price}</span>
										</div>
									</div>
								</div>
							))}
					</div>
				</div>
			</div>
			<Cart mode={mode} setMode={setMode}/>
		</div>
	);
}

export default App;

{
	/* <div className="col-md-4 col-sm-6 col-xm-6">
					<div className="product-grid2">
						<div className="product-image2">
							<a href="#">
								<img
									className="pic-1"
									src="http://bestjquery.com/tutorial/product-grid/demo3/images/img-1.jpeg"
									alt="img"
								/>
								<img
									className="pic-2"
									src="http://bestjquery.com/tutorial/product-grid/demo3/images/img-2.jpeg"
									alt="img"
								/>
							</a>
							<ul className="social">
								<li>
									<a href="#" data-tip="Quick View">
										<i className="fa fa-eye" />
									</a>
								</li>
								<li>
									<a href="#" data-tip="Add to Wishlist">
										<i className="fa fa-shopping-bag" />
									</a>
								</li>
								<li>
									<a href="#" data-tip="Add to Cart">
										<i className="fa fa-shopping-cart" />
									</a>
								</li>
							</ul>
							<a className="add-to-cart" href="">
								Add to cart
							</a>
						</div>
						<div className="product-content">
							<h3 className="title">
								<a href="#">Women's Designer Top</a>
							</h3>
							<span className="price">$599.99</span>
						</div>
					</div>
				</div>
				<div className="col-md-4 col-sm-6 col-xm-6">
					<div className="product-grid2">
						<div className="product-image2">
							<a href="#">
								<img
									className="pic-1"
									src="http://bestjquery.com/tutorial/product-grid/demo3/images/img-3.jpeg"
									alt="img"
								/>
								<img
									className="pic-2"
									src="http://bestjquery.com/tutorial/product-grid/demo3/images/img-4.jpeg"
									alt="img"
								/>
							</a>
							<ul className="social">
								<li>
									<a href="#" data-tip="Quick View">
										<i className="fa fa-eye" />
									</a>
								</li>
								<li>
									<a href="#" data-tip="Add to Wishlist">
										<i className="fa fa-shopping-bag" />
									</a>
								</li>
								<li>
									<a href="#" data-tip="Add to Cart">
										<i className="fa fa-shopping-cart" />
									</a>
								</li>
							</ul>
							<a className="add-to-cart" href="">
								Add to cart
							</a>
						</div>
						<div className="product-content">
							<h3 className="title">
								<a href="#">Women's Yellow Top</a>
							</h3>
							<span className="price">$699.99</span>
						</div>
					</div>
				</div>
				<div className="col-md-4 col-sm-6 col-xm-6">
					<div className="product-grid2">
						<div className="product-image2">
							<a href="#">
								<img
									className="pic-1"
									src="http://bestjquery.com/tutorial/product-grid/demo3/images/img-5.jpeg"
									alt="img"
								/>
								<img
									className="pic-2"
									src="http://bestjquery.com/tutorial/product-grid/demo3/images/img-6.jpeg"
									alt="img"
								/>
							</a>
							<ul className="social">
								<li>
									<a href="#" data-tip="Quick View">
										<i className="fa fa-eye" />
									</a>
								</li>
								<li>
									<a href="#" data-tip="Add to Wishlist">
										<i className="fa fa-shopping-bag" />
									</a>
								</li>
								<li>
									<a href="#" data-tip="Add to Cart">
										<i className="fa fa-shopping-cart" />
									</a>
								</li>
							</ul>
							<a className="add-to-cart" href="">
								Add to cart
							</a>
						</div>
						<div className="product-content">
							<h3 className="title">
								<a href="#">Women's Designer Top</a>
							</h3>
							<span className="price">$599.99</span>
						</div>
					</div>
				</div>
				<div className="col-md-4 col-sm-6 col-xm-6">
					<div className="product-grid2">
						<div className="product-image2">
							<a href="#">
								<img
									className="pic-1"
									src="http://bestjquery.com/tutorial/product-grid/demo3/images/img-7.jpeg"
									alt="img"
								/>
								<img
									className="pic-2"
									src="http://bestjquery.com/tutorial/product-grid/demo3/images/img-8.jpeg"
									alt="img"
								/>
							</a>
							<ul className="social">
								<li>
									<a href="#" data-tip="Quick View">
										<i class="fa fa-eye" />
									</a>
								</li>
								<li>
									<a href="#" data-tip="Add to Wishlist">
										<i className="fa fa-shopping-bag" />
									</a>
								</li>
								<li>
									<a href="#" data-tip="Add to Cart">
										<i className="fa fa-shopping-cart" />
									</a>
								</li>
							</ul>
							<a className="add-to-cart" href="">
								Add to cart
							</a>
						</div>
						<div className="product-content">
							<h3 className="title">
								<a href="#">Women's Designer Top</a>
							</h3>
							<span className="price">$599.99</span>
						</div>
					</div>
				</div> */
}
  