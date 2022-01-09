import '../../styles/App/Banner.css'

function Banner({ children }) {
	return <a href='/'><div className='banner'>{children}</div></a>
}

export default Banner