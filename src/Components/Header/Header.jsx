import profilepic from "./rework profilkép.jpg"

export function Header() {
	return (
		<header className="frappe ctp-frappe flex-auto bg-gradient-to-r from-ctp-green to-ctp-teal flex-row">
			<div className="flex flex-row place-content-evenly">
				<div className="flex items-stretch content-center">
					<h1 className="font-extrabold text-2xl justify-items-stretch content-center">Kemény Vince</h1>
				</div>
				<div className="flex items-stretch">
					<img alt="My Profile picture" src={profilepic} className="rounded-full mx-auto size-24"/>
				</div>
			</div>
			<div>
				<address className="flex flex-row justify-evenly">
					<div>
						<p className="font-bold">Email address</p>
						<a href="mailto:kemeny.vince@outlook.hu" id="email">kemeny.vince@outlook.hu</a>
					</div>
					<div>
						<p className="font-bold">Phone number</p>
						<a href="tel:+36303909201" id="tel">+36303909201</a>
					</div>
					<a className="font-semibold" href="https://github.com/KVince002" id="github">My GitHub page</a><br/>
					<a className="font-semibold" href="https://gitlab.com/Cincennes" id="gilab">My Gitlab page</a>
				</address>
			</div>
		</header>
	)
}
