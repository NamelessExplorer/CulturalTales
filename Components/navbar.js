import React from 'react'
import Link from 'next/link'
import Image from 'next/dist/client/image'
import navbar from '../Styles/navbar.css'

const Navbar = () => {


	function ul(index) {
		console.log('click!' + index)
		
		var underlines = document.querySelectorAll(".underline");
	
		for (var i = 0; i < underlines.length; i++) {
			underlines[i].style.transform = 'translate3d(' + index * 100 + '%,0,0)';
		}
	}

	return (

		<div className='navbar row'>

			<div className='logo'>

				<Link className='homelink' href='/'>CT</Link>

			</div>

			<div className='flexbox'>

				<Link className="NavLink link" href='/'>Home</Link>
				<Link className="NavLink link" href='/about'>About</Link>
				<Link className="NavLink link" href='/blog'>Blog</Link>
				<Link className="NavLink link" href='/contact'>Contact</Link>

			</div>


		</div>

	)
}

export default Navbar;