import { call, put, takeEvery } from 'redux-saga/effects';
import { getCatsSuccess } from '../features/catState';

//worker saga
function* workGetCatsFetch() {
	const cats = yield call(() => fetch('https://api.thecatapi.com/v1/breeds'));
	//saves the result in a new const as JSON
	const catsFormatted = yield cats.json();
	//saves only the first 10 elements as we dont need more
	const catsFormattedShort = catsFormatted.slice(0, 10);

	//passes the formatted object as the payload
	yield put(getCatsSuccess(catsFormattedShort));
}

//watcher saga
function* catSaga() {
	yield takeEvery('cats/getCatsFetch', workGetCatsFetch);
}

export default catSaga;




