import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchShelf() {
    try{
        const response = yield axios.get('/api/shelf');
        console.log('should show self', response.data);
        yield put({ type: 'SET_SHELF', payload: response.data });
    } catch (error) {
        console.log('Shelf get request failed', error);
    }
}
function* createShelf() {
    try{
        yield axios.post('/api/shelf', action.payload);
        yield put({ type: 'SAGA_FETCH_SHELF' });
    } catch (error) {
        console.log('Shelf POST request failed', error);
    }
}
function* ShelfSaga() {
    yield takeLatest('SAGA_FETCH_SHELF', fetchShelf);
    yield takeLatest('SAGA_CREATE_SHELF', createShelf);
  }
  
export default ShelfSaga;