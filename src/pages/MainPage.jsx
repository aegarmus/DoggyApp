import React, { useEffect, useState } from 'react';

import { Grid } from '@mui/material';

import { Cards } from '../components/Cards/Cards';
import { BreedSelector } from '../components/Selectors/BreedSelector';
import { getBreeds, getDogImg, getSubBreeds } from '../helpers/https';

import "./mainPage.css"

export const DoggyList = () => {
	const [breeds, setBreeds] = useState([]);
	const [selected, setSelected] = useState([]);
	const [subBreeds, setSubBreeds] = useState([]);
	const [selectedSubBreed, setSelectedSubBreed] = useState([]);
	const [images, setImages] = useState([]);

	useEffect(() => {
		const updateBreeds = async () => {
			const fetchBreeds = await getBreeds();
			setBreeds(fetchBreeds);
		};
		updateBreeds();
	}, []);

	const buildSubBreedOptions = (subBreeds) => {
		return subBreeds.map((subBreed) => {
			return { value: subBreed, label: subBreed };
		});
	};

	useEffect(() => {
		const updateSubBreeds = async () => {
			const listSubBreeds = selected.flatMap((breed) => {
				return { label: breed.value, subBreeds: breed.subBreeds };
			});

			if (listSubBreeds.length) {
				const subBreedOptions = listSubBreeds.map((breed) => {
					const options = buildSubBreedOptions(breed.subBreeds);

					return {
						label: breed.label,
						options: options,
					};
				});
				setSubBreeds(subBreedOptions);
			} else {
				setSubBreeds([]);
				setImages([]);
			}
		};

		const updateImage = async () => {
			const breedNames = selected && selected.map((option) => option.value);
			getDogImg(breedNames).then((response) => setImages(response));
		};
		updateSubBreeds();
		updateImage();
	}, [selected]);

	const handleBreedSelect = (select) => {
		setSelected(select);
	};

	const handleSubBreedSelect = async (select) => {
		setSelectedSubBreed(select);
		const filteredBreeds = selected.filter((breed) => breed.subBreeds.length);
		getSubBreeds(filteredBreeds, select).then((response) =>
			setImages(response)
		);
	};

	return (
		<>
			<BreedSelector
				selected={selected}
				selectedSubBreed={selectedSubBreed}
				breeds={breeds}
				subBreeds={subBreeds}
				onChangeBreed={handleBreedSelect}
				onChangeSubBreed={handleSubBreedSelect}
			/>
			<hr></hr>

			<Grid>
				<Cards breedImage={images} />
			</Grid>
		</>
	);
};
