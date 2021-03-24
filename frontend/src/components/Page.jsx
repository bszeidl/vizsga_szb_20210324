import React from 'react';
import './page.css';

const Page = () => {

	return (
		<div className="page-container">

			<div className="text-main-container">

				<div className="top-text-container">
					<h3>VÁSÁRLÁSRÓL ÉS KISZÁLLÍTÁSRÓL</h3>
					<h3>TERMÉKEK LISTÁJA</h3>
					<h3>SZOLGÁLTATÁSOK</h3>
					<h3>KAPCSOLAT</h3>
				</div>
			
				<div className="mid-bottom-container">
					<div className="mid-tex-container">
							<h3>ÁLTALÁNOS SZERZŐDÉSI FELTÉTELEK</h3>
							<h3>ADATKEZELÉSI NYILATKOZAT</h3>
							<h3>IMPRESSZUM</h3>
					</div>				

					<div className="bottom-text-container">
						<h1>MORELLA</h1>
					</div>
				</div>

			</div>			

		</div>

	);
}

export default Page;