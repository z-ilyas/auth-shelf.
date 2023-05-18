import React from 'react';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';


function ShelfPage() {

  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'SAGA_FETCH_SHELF'});
}, []);

  const createShelf = () => {
    dispatch ({ 
      type: 'SAGA_CREATE_SHELF',
      payload: {
        description: description,
        image: image
      }
    })
  }

  return (
    <div className="container">
      <h2>Shelf</h2>
      <p>All of the available items can be seen here.</p>
      <input
        placeholder='description'
        type="text"
        value={description}
        required
        onChange={(event) => setDescription(event.target.value)}    
        />
        <input
        placeholder='image'
        type="text"
        value={image}
        required
        onChange={(event) => setImage(event.target.value)}    
        />
      <button onClick={createShelf}>Create Shelf</button>
    </div>
  );
}

export default ShelfPage;
