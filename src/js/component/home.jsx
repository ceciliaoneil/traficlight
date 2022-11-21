import React, {useState} from "react";
import '../../styles/index.css';

//create your first component
const Home = () => {
	const [selected1, setSelected1] = useState("no-shadow");
	const [selected2, setSelected2] = useState("no-shadow");
	const [selected3, setSelected3] = useState("no-shadow");

	// Si es apretadop el color rojo
	function PrendeRojo() {
		if (selected1 === "no-shadow") {
			setSelected1("shadow")
			setSelected2("no-shadow")
			setSelected3("no-shadow")
		};
	};

	// Si es apretado el amarillo
	function PrendeAmarillo() {
		if (selected2 === "no-shadow") {
			setSelected1("no-shadow")
			setSelected2("shadow")
			setSelected3("no-shadow")
		};
		};

	// Si es apretado el verde
	function PrendeVerde() {
		if (selected3 === "no-shadow") {
			setSelected1("no-shadow")
			setSelected2("no-shadow")
			setSelected3("shadow")
		};
	};
	return (
		<div className="container w-25 bg-dark d-flex justify-content-center">
			<div>
				<div className={"m-3 caja rounded-circle bg-danger "+selected1} onClick={PrendeRojo}></div>
				<div className={"m-3 caja rounded-circle bg-warning "+selected2} onClick={PrendeAmarillo}></div>
				<div className={"m-3 caja rounded-circle bg-success "+selected3} onClick={PrendeVerde}></div>
			</div>
		</div>
		
	);
};

export default Home;
