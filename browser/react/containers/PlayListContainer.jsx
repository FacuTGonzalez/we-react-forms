import React from "react";
import NewPlaylist from "../components/NewPlaylist";


export default class PlayListContainer extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			inputValue: "",
			validation: false,
		};
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange = (e) => {
		e.preventDefault();
		let input = e.target.value;
		if (input.length > 15 || input.length < 3) {
			this.setState({ inputValue: input, validation: false });
		} else {
            this.setState({ inputValue: input, validation: true });
        }
	};

	handleSubmit(evento) {
		evento.preventDefault();
		let playlistName = evento.target.playlistName.value;
		this.props.handleCreate(playlistName)
		this.props.history.push(`/playlist/${this.props.playlists.length + 1}`)
		this.setState({ inputValue: "" });
	}

	render() {
		console.log(this.props);
		return (
			<React.Fragment>
				<NewPlaylist
					inputValue={this.state.inputValue}
					valid={this.state.validation}
					handleSubmit={this.handleSubmit}
                    handleChange={this.handleChange}
				/>
			</React.Fragment>
		);
	}
}
