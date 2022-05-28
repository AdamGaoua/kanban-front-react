import List from './List/List';
import './Lists.scss';
import { useSelector } from 'react-redux';

function Lists () {
    const lists = useSelector((state) => state.lists.lists);
    console.log(lists);
    return (
        <div className="lists">
        {lists.map((list) =>
        <List key={list.id} {...list}/>
        )}
        {/* <List />
        <List /> */}
        
        </div>
    )
}

export default Lists;