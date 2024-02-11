// This is a so-called article place and also the body of the page!
// This will use the content cards as well
import {ContentCard} from "./ContentCard/ContentCard";
import {type} from "@testing-library/user-event/dist/type";


export function Content() {
	// To make things easier, I used structs to display content's text

	class ContentBody {
		_name =""
		_type = ""
		_start = 0
		_end = 0
		_description = ""

		constructor(name, type, start, end, description) {
			this._name = name
			this._type = type
			this._start = start
			this._end = end
			this._description = description
		}

		getName = () => this._name
		getType = () => this._type
		getStart = () => this._start
		getEnd = () => this._end
		getDescription = () => this._description
	}

	const school0 = new ContentBody("Vajk-Sziget Elementary School", "school", 2009, 2017, "")

	const school1 = new ContentBody("BMSC Trefort Ágoston Bilingual Technical School Budapest", "school", 2017, 2022, "Graduation")

	const school2 = new ContentBody("BGSC Pestszentlőrinci Technical School", "school", 2022, 2023, "Software" +
		" development and testing certificate")


	const workplace0 = {
		type: ""
	}

	const workplace1 = {

	}

	const workplace2 = {

	}

	const cards = [school0, school1, school2, workplace0, workplace1, workplace2]

	return (
		<div className={"frappe"}>
			<ContentCard props={school0}/>
		</div>
	)
}
