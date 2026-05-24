import { useState, useEffect } from "react";

import HoneycombLoader from "./components/HoneyComb";

import Dashboard from "./components/Dashboard";

import { DashboardLayout } from "./components/DashboardLayout";

import "./App.css";

export default function App() {
	const [phase, setPhase] = useState("honeycomb");

	const [loadedSections, setLoadedSections] = useState({});

	const [conversations, setConversations] = useState([]);

	const [
		selectedConversationId,
		setSelectedConversationId,
	] = useState(null);

	const [currentUser, setCurrentUser] = useState(null);

	const [dataReady, setDataReady] = useState(false);

	// Fetch all data in background while honeycomb shows

	useEffect(() => {
		Promise.all([
			fetch("https://dummyjson.com/users?limit=9").then(
				(r) => r.json(),
			),

			fetch("https://dummyjson.com/comments?limit=8").then(
				(r) => r.json(),
			),

			fetch("https://dummyjson.com/users/1").then((r) =>
				r.json(),
			),
		])

			.then(([usersData, commentsData, meData]) => {
				setCurrentUser({
					id: String(meData.id),

					name: `${meData.firstName} ${meData.lastName}`,

					avatar: meData.firstName[0] + meData.lastName[0],

					avatarColor: "bg-red-500",
				});

				const avatarColors = [
					"bg-blue-500",
					"bg-yellow-500",
					"bg-green-500",

					"bg-orange-500",
					"bg-yellow-400",
					"bg-orange-400",

					"bg-purple-500",
					"bg-gray-500",
					"bg-cyan-500",
				];

				const builtConversations = usersData.users.map(
					(user, i) => ({
						id: String(user.id),

						participant: {
							id: i === 0 ? "other" : String(user.id),

							name: `${user.firstName} ${user.lastName}`,

							avatar: user.firstName[0],

							avatarColor:
								avatarColors[i % avatarColors.length],

							email: user.email,

							phone: user.phone,
						},

						messages:
							i === 0
								? commentsData.comments.map((c, idx) => ({
										id: String(c.id),

										senderId:
											idx % 2 === 0
												? "other"
												: String(meData.id),

										content: c.body,

										timestamp: `${20 + idx}:0${idx}`,

										read: true,
									}))
								: [],

						lastMessage: {
							id: `last-${user.id}`,

							senderId: "other",

							content:
								commentsData.comments[i]?.body ||
								"Hey there!",

							timestamp: `${10 + i}:${i < 10 ? "0" + i : i}`,

							read: true,
						},

						unreadCount: 0,
					}),
				);

				setConversations(builtConversations);

				setSelectedConversationId(builtConversations[0].id);

				setDataReady(true);
			})

			.catch((err) => {
				console.error("API fetch failed:", err);

				setDataReady(true);
			});
	}, []);

	const handleHoneycombSelect = (id) => {
		setLoadedSections((prev) => ({ ...prev, [id]: true }));

		setTimeout(() => setPhase("dashboard"), 950);
	};

	if (phase === "honeycomb") {
		return (
			<div
				style={{
					height: "100vh",

					width: "100%",

					background:
						"linear-gradient(160deg, #020d1f 0%, #041535 40%, #062050 70%, #020d1f 100%)",

					overflow: "hidden",

					display: "flex",

					flexDirection: "column",
				}}>
				{/* Honeycomb loader */}

				<div style={{ flexShrink: 0 }}>
					<HoneycombLoader
						onSelect={handleHoneycombSelect}
					/>
				</div>

				{/* Real dashboard peeking from bottom */}

				<div
					style={{
						flex: 1,

						margin: "0 40px",

						borderRadius: "16px 16px 0 0",

						overflow: "hidden",

						boxShadow:
							"0 -8px 60px rgba(0,80,255,0.25), 0 0 0 1px rgba(255,255,255,0.08)",

						minHeight: 0,
					}}>
					<Dashboard loadedSections={loadedSections} />
				</div>
			</div>
		);
	}

	return (
		<DashboardLayout
			conversations={conversations}
			selectedConversationId={selectedConversationId}
			setSelectedConversationId={setSelectedConversationId}
			currentUser={currentUser}
			dataReady={dataReady}
		/>
	);
}
