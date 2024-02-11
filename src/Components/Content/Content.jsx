// This is a so-called article place and also the body of the page!
// This will use the content cards as well
import {ContentCard} from "./ContentCard/ContentCard";

export function Content() {
	// To make things easier, I used structs to display content's text
	const school0 = {
		type: "school",
		name: "Vajk-Sziget Elementary School",
		startDate: 2009,
		endDate: 2017,
		description: "",
	}

	return (
		<>
		<ContentCard source={school0}/>
		</>
	)
}
