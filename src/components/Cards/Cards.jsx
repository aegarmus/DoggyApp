import React from 'react';
import { Grid, Card, CardMedia } from '@mui/material';
import 'animate.css';

import "./card.css"

export const Cards = ({ breedImage, breedName }) => {
	return (
		<Grid
			className="container-grid"
			container
			spacing={{ xs: 0.3, md: 0.3 }}
			columns={{ xs: 4, sm: 12, md: 12 }}
		>
			<h3>{breedName}</h3>
			{breedImage &&
				breedImage.map((urlImage, index) => (
					<Grid item xs={4} sm={4} md={3} key={index}>
						<Card className="card-media">
							<CardMedia
								className="animate__animated animate__zoomIn image"
								component="img"
								height="140"
								image={urlImage}
							/>
						</Card>
					</Grid>
				))}
		</Grid>
	);
};
