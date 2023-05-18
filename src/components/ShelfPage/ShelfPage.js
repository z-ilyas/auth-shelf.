import React from 'react';
import { useDispatch } from 'react-redux';
import React, { useEffect } from 'react';

function ShelfPage() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'SAGA_FETCH_SHELF'});
}, []);

  return (
    <div className="container">
      <h2>Shelf</h2>
      <p>All of the available items can be seen here.</p>
    </div>
  );
}

export default ShelfPage;
