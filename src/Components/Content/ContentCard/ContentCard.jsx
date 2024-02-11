export function ContentCard({props}) {
	const [index, name, type, start, end, description] = props
	return (
		<>
			<div id={index}>
				<h4>{name}</h4>
				<div>{start} - {end}</div>
				<div>{description}</div>
			</div>
		</>
	)
}
