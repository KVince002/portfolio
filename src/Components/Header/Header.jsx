import {ExampleLoaderComponent} from "../../dev/palette";
import profilepic from "./rework profilkép.jpg"

export function Header() {
	return (
		<>
			<div>
			<h1>
				Kemény Vince
			</h1>
			</div>
			<div>
			<img alt="My Profile picture" src={profilepic}/>
			</div>
			<did>
				<div>
					<address>
						Email address<br/>
						<a href="mailto:kemeny.vince@outlook.hu" id="email">kemeny.vince@outlook.hu</a><br/>
						Phone number<br/>
						<a href="tel:+36303909201" id="tel">+36303909201</a><br/>
						<a href="https://github.com/KVince002" id="github">My GitHub page</a><br/>
						<a href="https://gitlab.com/Cincennes" id="gilab">My Gitlab page</a>
					</address>
				</div>
			</did>
		</>
	)
}
