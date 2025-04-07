import React from "react";
import { LuzSemaforo } from "./LuzSemaforo";

//create your first component
const Home = () => {
	return (
		<div className="container d-flex flex-column align-items-center">
			<div className="row col-lg-3 col-md-6 col-lg-12 trafictop">
			</div>
			<LuzSemaforo/>
		</div>
	);
};

export default Home;