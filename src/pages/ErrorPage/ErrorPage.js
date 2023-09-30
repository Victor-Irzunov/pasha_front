import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemesContext } from "../../themes/themes";
import './ErrorPage.css'

const ErrorPage = props => {
	const { theme } = useContext(ThemesContext)



	return (
		<main className="error"
			style={{ color: theme.textColor }}>
			<section></section>
			<svg>
				<filter id="noise">
					<feTurbulence id="turbulence">
						<animate attributeName="baseFrequency" dur="50s" values="0.9 0.9;0.8 0.8;0.9 0.9;" repeatCount="indefinite"></animate>
					</feTurbulence>
					<feDisplacementMap in="SourceGraphic" scale="60"></feDisplacementMap>
				</filter>
			</svg>
			<div className="content-err">
				<h2>404</h2>
				<h3>Страница не найдена</h3>
				<p>вернутся на <span><Link to='/' className="a"> главную страницу</Link></span></p>
			</div>
		</main>
	)


}

export default ErrorPage