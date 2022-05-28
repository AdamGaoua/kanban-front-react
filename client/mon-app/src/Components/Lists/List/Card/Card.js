import './Card.scss';
import Tag from './Tag/Tag';
import { Card, CardContent, Typography, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete'
import  LocalOfferIcon from '@mui/icons-material/LocalOffer';
import ModeEditIcon from '@mui/icons-material/ModeEdit'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCards } from '../../../../actions/cardsActions';

function CardEl () {
    const cards = useSelector((state) => state.cards.cards);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getCards());
    },[]);

    console.log(cards);
    return (
        <div className="card">
        <Card className="card-container"
        style={{backgroundColor: "red"}}> 
                <CardContent className="card-content">
                    <Typography sx={{ mb: 1.5 }} className="card-title"> Revoir Sortable </Typography>                     
                </CardContent>
        <div>
            <div>
                <button className="card-button"
                onClick={()=>{console.log(`J'ajoute un tag à une carte`)}}>
                    <Box m={.2}>
                        <LocalOfferIcon fontSize="small" 
                        style={{fontSize:14}}  />
                    </Box>
            </button> 

                <button className="card-button"
                onClick={()=>{console.log('Je modifie une carte')}}>
                <Box m={.2}>
                
                <ModeEditIcon fontSize="small" 
                style={{fontSize:14}}  />
                
                </Box>
                </button>   

                <button className="card-button"
                onClick={()=>{console.log('Je supprime une carte')}}>
                    <Box m={.2}>
                
                <DeleteIcon fontSize="small" 
                style={{fontSize:14}} />
                
                    </Box>                         
                </button>
            </div>

            <Tag />
        </div>
        
            </Card>

        </div>
    )
}

export default CardEl;