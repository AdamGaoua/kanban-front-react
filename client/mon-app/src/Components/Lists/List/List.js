import './List.scss';
import CardEl from './Card/Card';
import PropTypes from 'prop-types';
import {Button, Box} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function List ({name}){
    return (
        <div className="list">
       
        <header className="list-header">
            <h1 className="list-name">
                {name}
            </h1>
            <Box m={0.3}>

            <Button 
            
            className="list-button" 
            variant="contained"
            > + 
            </Button> 

            </Box>
            <Box m={0.3}>

            <Button 
            
            className="list-button" 
            variant="contained">
            <DeleteIcon 
            fontSize="small" 
            style={{fontSize:12}} /> 
            </Button>

            </Box>
        </header>
        < CardEl />        
        </div>
    )
}

List.propTypes = {
    name:PropTypes.string,

}

export default List;