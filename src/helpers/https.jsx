import axios from 'axios';

const BASE_URL = 'https://dog.ceo/api/';

export const getBreeds = async () => {
	const { data } = await axios.get(`${BASE_URL}breeds/list/all`);
	const breedNames = Object.keys(data.message);
	const response = breedNames.map((breed) => {
		return { value: breed, label: breed, subBreeds: data.message[breed] };
	});
	return response;
};

export const getDogImg = async (breeds) => {
	const imgUrls = breeds.map((breed) => `${BASE_URL}breed/${breed}/images`);

	const images = [];
	for (const url of imgUrls) {
		const { data } = await axios.get(url);
		images.push(...data.message);
	}

	return images;
};

export const getSubBreeds = async (selectedBreeds, selectedSubBreeds) => {
	const buildUrl = (selectedBreed, selectedSubBreeds) => {
		const subBreedsKeys = selectedSubBreeds.map((subBreed) => subBreed.value);
		const filteredSubBreeds = selectedBreed.subBreeds.filter((subBreed) => {
			return !!subBreedsKeys.includes(subBreed);
		});
		return filteredSubBreeds.flatMap(
			(subBreed) => `${BASE_URL}breed/${selectedBreed.value}/${subBreed}/images`
		);
	};

	const imgUrls = selectedBreeds.flatMap((selectedBreed) => {
		return buildUrl(selectedBreed, selectedSubBreeds);
	});

	const images = [];
	for (const url of imgUrls) {
		const { data } = await axios.get(url);
		images.push(...data.message);
	}

	return images;
};
