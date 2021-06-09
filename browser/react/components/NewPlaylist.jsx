import React from "react";

export default function NewPlaylist(props) {
	return (
		<div className="well">
			<form className="form-horizontal" onSubmit={props.handleSubmit}>
				<fieldset>
					<legend>New Playlist</legend>
					<div className="form-group">
						<label className="col-xs-2 control-label">Name</label>
						<div className="col-xs-10">
							<input
								className="form-control"
								value={props.inputValue}
								name="playlistName"
								type="text"
								required
								onChange={props.handleChange}
							/>
						</div>
					</div>
					<div className="form-group">
						<div className="col-xs-10 col-xs-offset-2">
							<button
								type="submit"
								disabled={!props.valid}
								className="btn btn-success"
							>
								Create Playlist
							</button>
						</div>
					</div>
						{!props.valid && props.inputValue.length > 0 ? <div className="alert alert-warning">Please enter a valid name</div> : null}
				</fieldset>
			</form>
		</div>
	);
}
