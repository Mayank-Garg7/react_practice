// import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

const TodoCard = ({todo}) => {
  let navigate=useNavigate()
  const handleClick=(id)=>{
    navigate(`../singlecard/${id}`);
    ///localhost:5173/card/singlecard/1
    }
  return (
    <Card onClick={()=>handleClick(todo.id)} className='card' sx={{ maxWidth: 345 }}>
    <CardMedia
      component="img"
      alt="green iguana"
      height="140"
      image={todo.images[0]}
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
       {todo.title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {todo.description}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Share</Button>
      <Button size="small">Learn More</Button>
    </CardActions>
  </Card>
  )
}

export default TodoCard