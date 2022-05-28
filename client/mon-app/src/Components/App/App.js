import Header from '../Header/Header';
import Lists from '../Lists/Lists'
import './App.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLists } from '../../actions/listsActions';



function App() {

  const lists = useSelector((state)=> state.lists.lists);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLists());
  },[]);

  
  return (
    <div className="App">
      <Header />
      
    <Lists />
    </div>
  );
}

export default App;
