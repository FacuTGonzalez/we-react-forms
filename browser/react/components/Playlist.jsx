import React from "react";
import axios from 'axios';
import Songs from "./Songs";

export default class Playlist extends React.Component {
	constructor(props){
		super(props)

	this.state = {
		selectedSong: "",
		songs : []	
	}
	}

	componentDidMount() {
		axios.get("/api/songs")
			.then(res => res.data)
			.then(songs => this.setState({songs}))
	}

	handleSelect = (e) => {
		let value = e.target.value;
		console.log(value);
		this.setState({selectedSong: value})
	}

	render(){
		
		const { playlist } = this.props;
		console.log(this.props);
		return (
		<div>
			<h3>{playlist.name}</h3>
			<Songs songs={playlist.songs} />
			{playlist.songs && !playlist.songs.length && (
				<small>No songs.</small>
			)}
			<hr />
			<div className="well">
				<form className="form-horizontal" noValidate name="songSelect">
					<fieldset>
						<legend>Add to Playlist</legend>
						<div className="form-group">
							<label
								htmlFor="song"
								className="col-xs-2 control-label"
							>
								Song
							</label>
							<div className="col-xs-10">
								<select className="form-control" name="song">
									{
										this.state.songs.map(song => {
											return <option key={song.id} value={song.id} onChange={() => this.handleSelect()} >{song.name}</option>
										})
									}
								</select>
							</div>
						</div>
						<div className="form-group">
							<div className="col-xs-10 col-xs-offset-2">
								<button
									type="submit"
									className="btn btn-success"
								>
									Add Song
								</button>
							</div>
						</div>
					</fieldset>
				</form>
			</div>
		</div>
	)};
}
