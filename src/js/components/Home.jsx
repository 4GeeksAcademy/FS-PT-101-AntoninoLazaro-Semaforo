import React from "react";
import { LuzSemaforo } from "./LuzSemaforo";

//create your first component
const Home = () => {
	return (
		<div className="d-flex flex-column align-items-center">
			<div className="trafictop">
			</div>
			<LuzSemaforo/>
		</div>
	);
};

export default Home;