import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import {Header} from "../Components/Header/Header";
import App from "../App";
import {ContentCard} from "../Components/Content/ContentCard/ContentCard";
import {Content} from "../Components/Content/Content";

const ComponentPreviews = () => {
	return (
		<Previews palette={<PaletteTree/>}>
			<ComponentPreview path="/Header">
				<Header/>
			</ComponentPreview>
			<ComponentPreview path="/App">
				<App/>
			</ComponentPreview>
			<ComponentPreview path="/ContentCard">
				<ContentCard/>
			</ComponentPreview>
			<ComponentPreview path="/Content">
				<Content/>
			</ComponentPreview>
		</Previews>
	)
}

export default ComponentPreviews
