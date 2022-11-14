import React from "react";
import ContentOfCd from "../../components/Common/company-des/ContentOfCd";
import NavbarOfCd from "../../components/Common/company-des/NavbarOfCd";
import img from "../../images/Ractangle.jpg";
import Footer from "../../components/Common/company-des/Footer";

export default function CompanyDescription() {

	return (
		<div className="mt-3">
			<div>
				<header className=" header  z-[0]" >
					<img src={img} alt="" className="w-full h-[200px]" />
				</header>
				<div className="flex">
					<NavbarOfCd className="sidebar" />
					<ContentOfCd className="main" />
				</div>
			</div>
			<Footer className="footer" />
		</div>
	);
}
