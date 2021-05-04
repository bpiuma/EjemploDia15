import React, { useRef, useEffect } from "react";

export function Home() {
	let parrafo = useRef();

	useEffect(() => {
		console.log(parrafo);
		parrafo.current.innerText =
			"Este contenido fue cambiado mediante el useRef";
	}, []);

	let video = useRef();

	const cambiarSrcVideo = () => {
		video.current.src = "https://www.w3schools.com/html/mov_bbb.mp4";
	};

	const controlVideo = () => {
		if (video.current.paused) {
			video.current.play();
		} else if (!video.current.paused) {
			video.current.pause();
		}
	};

	return (
		<div>
			<p ref={parrafo}>Mi contenido</p>
			<audio
				src="https://assets.breatheco.de/apis/sound/files/mario/songs/castle.mp3"
				controls
			/>
			<video
				ref={video}
				src="https://www.w3schools.com/html/movie.mp4"
				controls
			/>
			<button onClick={cambiarSrcVideo}>Cambiar src de video</button>
			<button onClick={controlVideo}>Play/pause video</button>
		</div>
	);
}
