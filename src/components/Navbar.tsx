const Navbar = () => {
	return (
		<div className='hero-container'>
			<div className='container'>
				<nav className='nav-container'>
					<div className='nav-icon-container'>
						<img src='temple-icon.svg' alt='temple-icon' />
					</div>
					<div className='nav-link-container'>
						<li>
							<a href='#'>News</a>
						</li>
						<li>
							<a href='#'>About</a>
						</li>
						<li>
							<a href='#'>Contact Us</a>
						</li>
					</div>
				</nav>
			</div>
		</div>
	);
};

export default Navbar;
