import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import useReduxStore from '../../hooks/useReduxStore';


function ShelfPage() {

  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  const dispatch = useDispatch();
  const store = useReduxStore();

  //console.log('store>>>>', store)

  useEffect(() => {
    dispatch({ type: 'SAGA_FETCH_SHELF' });
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
      <table className="simpleTable">
        <thead>
          <tr>
            <th>Description</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {store.shelf.map((item, index) => (
            <tr key={item.id}>
              <td>{item.description}</td>
              <td><img src={item.image_url}></img></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ShelfPage;
