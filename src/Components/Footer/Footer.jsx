export function Footer() {
	return (
		<>
		<footer className="frappe">
			<div id="footetContent">
				<div>
					<p>This page is made by using</p>
					<div>
						{/*Todo: Dont forget to ACTUALLY use these!*/}
						<p>React - Redux - Redux Toolkit</p>
					</div>
					<div>
						<p>This page is using <a href="https://github.com/catppuccin">Catppuccin's frappe color
							palette</a>, with <a href="https://github.com/catppuccin/tailwindcss?tab=readme-ov-file">Catppuccin
							Tailwind </a> package as well.</p>
					</div>
				</div>
			</div>
		</footer>
		</>
	)
}
