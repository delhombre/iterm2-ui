const prompts = [
	"What is your project named? … my-app",
	"Would you like to use TypeScript with this project? … No / Yes",
	"Would you like to use ESLint with this project? … No / Yes",
	"Would you like to use `src/` directory with this project? … No / Yes",
	"Would you like to use experimental `app/` directory with this project? … No / Yes",
	"What import alias would you like configured? … @/*",
];

export default function App() {
	return (
		<main className="bg-amber-500/90 min-h-screen flex flex-col justify-center items-center">
			<aside className="bg-black text-white p-6 rounded-lg w-full max-w-lg">
				<div className="flex justify-between items-center">
					<div className="flex space-x-2 text-red-500">
						<div className="w-3 h-3 rounded-full bg-red-500" />
						<div className="w-3 h-3 rounded-full bg-yellow-500" />
						<div className="w-3 h-3 rounded-full bg-green-500" />
					</div>
					<p className="text-sm">bash</p>
				</div>
				<div className="mt-4 text-gray-400 space-y-2">
					<p className="text-green-400 flex items-center space-x-2">
						<ArrowRightIcon className="w-4 h-4" />
						<span>bun create next-app</span>
					</p>
					{prompts.map((p) => (
						<p key={p} className="flex items-center space-x-2 text-xs">
							<CheckIcon className="w-4 h-4" />
							<span>{p}</span>
						</p>
					))}
					<p className="text-sm">
						Creating a new Next.js app in /path/to/my-app.
					</p>
					<p className="text-green-400 flex items-center space-x-2">
						<ArrowRightIcon className="w-4 h-4" />
					</p>
				</div>
			</aside>
		</main>
	);
}

function ArrowRightIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M5 12h14" />
			<path d="m12 5 7 7-7 7" />
		</svg>
	);
}

function CheckIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M20 6 9 17l-5-5" />
		</svg>
	);
}
