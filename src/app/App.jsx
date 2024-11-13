import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import "../css/style.css";

// Import pages

import ResizableLayout from "../components/ResizableLayout";
import MainLayout from "../components/main/Layout";
import Page404 from "../components/main/pages/Page404";
import Login from "../pages/Auth/Login";
import BetEntry from "../pages/Bet Entry";
import BetTrack from "../pages/Bet Track";
import Dashboard from "../pages/Dashboard";
import ExchangeRate from "../pages/ExchangeRate";
import PLRecord from "../pages/P&L Record";
import Performance from "../pages/Performance";
import Profile from "../pages/Profile";

function App() {
	const location = useLocation();

	useEffect(() => {
		document.querySelector("html").style.scrollBehavior = "auto";
		window.scroll({ top: 0 });
		document.querySelector("html").style.scrollBehavior = "";
	}, [location.pathname]); // triggered on route change

	return (
		<>
			<Routes>
				<Route exact path="/" element={<Login />} />
				<Route exact path="*" element={<Page404 />} />

				<Route path="/app/" element={<MainLayout />}>
					<Route index={true} element={<Dashboard />} />
					<Route path="profile" element={<Profile />} />
					<Route path="betentry" element={<BetEntry />} />
					<Route path="bettrack" element={<BetTrack />} />
					<Route path="plrecord" element={<PLRecord />} />
					<Route path="dd" element={<ResizableLayout />} />
					<Route path="setting" element={<Page404 />} />
					<Route path="performance" element={<Performance />} />

					<Route path="exchange_rates" element={<ExchangeRate />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
