import React from 'react';
import './page.css';

const Page = () => {

	return (
		<div className="page-container">

			<div className="text-main-container">

				<div className="top-text-container">
					<h5>VÁSÁRLÁSRÓL ÉS KISZÁLLÍTÁSRÓL</h5>
					<h5>TERMÉKEK LISTÁJA</h5>
					<h5>SZOLGÁLTATÁSOK</h5>
					<h5>KAPCSOLAT</h5>
				</div>
			
				<div className="mid-bottom-container">
					<div className="mid-tex-container">
							<h5>ÁLTALÁNOS SZERZŐDÉSI FELTÉTELEK</h5>
							<h5>ADATKEZELÉSI NYILATKOZAT</h5>
							<h5>IMPRESSZUM</h5>
					</div>				

					<div className="bottom-text-container">
						<h2>MORELLA</h2>
					</div>
				</div>

			</div>			

		</div>

	);
}

export default Page;