import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";

/* import "/src/assets/airbnb-logo.png";
import "/src/assets/photo-grid.png";
import "/src/assets/katie-zaferes.png";
import "/src/assets/star.png";
import "/src/assets/mountain-bike.png";
import "/src/assets/wedding-photography.png"; */

import "./styles/style.css";
import Footer from "./components/Footer";

export default function App() {
	const cards = data.map((item) => {
		return <Card key={item.id} {...item} />;
	});

	return (
		<>
			<div>
				<Navbar />
				<Hero />
				<section className="cards-list">{cards}</section>
			</div>
			{/* <Footer /> */}
		</>
	);
}
