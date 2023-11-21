import React from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

function ThankyouPage({ setOpenLoginSignup, setLoadLogin }: any) {
	return (
		<>
			<Navbar
				setOpenLoginSignup={setOpenLoginSignup}
				setLoadLogin={setLoadLogin}
			/>
			<img
				style={{ margin: "auto" , height : "auto",width : "80%"}}
				src='https://miro.medium.com/v2/resize:fit:500/format:webp/1*fE3JkGyzhWXlXApVnShDtw.gif'
				alt='Thank You'
			/>
			<Footer />
		</>
	);
}
export default ThankyouPage;
