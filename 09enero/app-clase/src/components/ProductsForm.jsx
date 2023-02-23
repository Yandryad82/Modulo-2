import React, { useState } from 'react';
import { useEffect } from 'react';

// id, title, description, isCompleted

const ProductsForm = ({addDuties, dutieSelected, updateDutie}) => {
	
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [isCompleted, setIsCompleted] = useState('');

	useEffect(() => {
		if (dutieSelected !== null) {
		  setTitle(dutieSelected.title);
		  setDescription(dutieSelected.description);
		  setIsCompleted(dutieSelected.isCompleted);
		}else{
			reset();
		}

	  }, [dutieSelected]);

	const submit = (e) => {
		e.preventDefault();
		const dutie = {
			id: Date.now(),
			title: title,
			description: description,
			isCompleted: isCompleted
		};

		if(dutieSelected){
			updateDutie(dutie);
		}else{
			addDuties(dutie);
		}
		reset();
	}

	const reset = () => {
		setTitle('');
		setDescription('');
		setIsCompleted('');
	}
	
	return (
		<form onSubmit={submit}>
		  <div className="input-container">	
			  <label htmlFor="title" className='title'>Title</label>
				<input type="text" id="title" value={title} onChange={e => setTitle(e.target.value)}/>
			</div>	

			<div className="input-container">	
			  <label htmlFor="description" className='description'>Description</label>
				<textarea type="textarea" id="description" value={description} onChange={e => setDescription(e.target.value)}/>
			</div>	
			
			<div className="input-container">	
			  <label htmlFor="iscompletede" className='iscompletede'>Is Completed?</label>
				<input type="checkbox" id="iscompleted" checked={isCompleted} onChange={e => setIsCompleted(e.target.checked)}/>
			</div>
			<button>Submit</button>		
		</form>
	);
};

export default ProductsForm;