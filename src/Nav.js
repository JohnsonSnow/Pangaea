import './App.css';

function Nav() {
	return (
		<nav class="navbar navbar-expand-sm   navbar-light bg-light">
			<button
				class="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarTogglerDemo03"
				aria-controls="navbarTogglerDemo03"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span class="navbar-toggler-icon" />
			</button>

			<div class="collapse navbar-collapse" id="navbarTogglerDemo03">
				<ul class="navbar-nav mr-auto mt-2 mt-lg-0">
					<li class="nav-item PaddingR20">
						<a class="nav-link" href="#">
							LUMIN <span class="sr-only">(current)</span>
						</a>
					</li>

					<li class="nav-item">
						<a class="nav-link" href="#">
							Shop
						</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#">
							Learn
						</a>
					</li>
					{/* <li class="nav-item pull-right ">
						<a href="#" class="nav-link">
							Account
						</a>
					</li> */}
				</ul>
				<div class="social-part PaddingR20">
					<i class="fa fa-shopping-cart" aria-hidden="true" onClick={() => {}}/><sup>4</sup>
				</div>
			</div>
		</nav>
	);
}

export default Nav;
