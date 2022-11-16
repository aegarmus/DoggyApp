import React from 'react';

import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { Grid } from '@mui/material';
import 'animate.css';

import "./breedSelector.css"


const animatedComponents = makeAnimated();

export const BreedSelector = ({
	selectedBreed,
	breeds,
	onChangeBreed,
	selectedSubBreed,
	subBreeds,
	onChangeSubBreed,
}) => {
	return (
		<Grid className="container-grid-select" xs={12} md={6} >
			<Select
				closeMenuOnSelect={false}
				components={animatedComponents}
				isMulti
				options={breeds}
				name="Select Breed"
				onChange={onChangeBreed}
				value={selectedBreed}
				placeholder="Select the breeds you looking for...."
				className='selectBar'
				
			/>
			{subBreeds && !!subBreeds.length && (
				<Select
					closeMenuOnSelect={false}
					components={animatedComponents}
					isMulti
					options={subBreeds}
					name="Select Sub Breeds"
					onChange={onChangeSubBreed}
					value={selectedSubBreed}
					placeholder="Select the sub-breeds you looking for...."
					className='selectBar animate__fadeInDown'
					
				/>
			)}
		</Grid>
	);
};
