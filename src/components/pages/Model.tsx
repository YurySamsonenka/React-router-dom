import React from 'react';
import { adidasArr } from './Adidas';
import { useParams } from 'react-router-dom';

const Model = () => {
	const params = useParams();

	const model = adidasArr.find(m => m.id === params.id);

	if (model) {
		return (
			<div style={{ textAlign: 'center' }}>
				<h2>{model.model}</h2>
				<div >{model.collection}</div>
				<div>{model.price}</div>
				<img src={model.picture} alt={model.model} />
			</div>
		);
	}
};

export default Model;
