import React from 'react';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import useReduxStore from '../../hooks/useReduxStore';

function ShelfPage() {

  const dispatch = useDispatch();
  const store = useReduxStore();

  //console.log('store>>>>', store)

  useEffect(() => {
    dispatch({ type: 'SAGA_FETCH_SHELF' });
  }, []);

  return (
    <div className="container">
      <h2>Shelf</h2>
      <p>All of the available items can be seen here.</p>
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
