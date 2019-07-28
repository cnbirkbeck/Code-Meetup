import React from 'react';
import './style.css';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import teal from '@material-ui/core/colors/teal';
import Fab from '@material-ui/core/Fab';
// import NavigationIcon from '@material-ui/icons/Navigation';
import {Card, Col, Row, Container} from 'react-bootstrap';
import {EditEventBtn, DeleteBtn, AttendBtn} from '../btn';
import App from "../eventDetailModal";
import API from "../../utils/API";
import { PromiseProvider } from 'mongoose';
import Moment from "react-moment";

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

const UserEventCard = (props) => {
  const color = teal[500]
  const classes = useStyles();
  // const editHandler = (id) => {
    // props.editEvent(props.id)
    // props.deleteEvent(props.id)
    // props.attendEvent(props.id)
  // };
  // console.log("event card props");

  // console.log(props)
  const calendarStrings = {
    lastDay: '[Yesterday at] LT',
    sameDay: '[Today at] LT',
    nextDay: '[Tomorrow at] LT',
    lastWeek: '[last] dddd [at] LT',
    nextWeek: 'dddd [at] LT',
    sameElse: 'L'
  };
  //const dateToFormat = (props);

  return (
    <div>
          {/* <Card className="eventCard" border="dark" style={{ width: '18rem' }}> */}
        <Container>
          <Card className="eventCard" border="dark" style={{ width: '20rem', height: 'auto', marginTop: '3rem'}}>
      <Card.Header>Your Event</Card.Header>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
        {props.description}
        </Card.Text>
        <Card.Text>
                  <Moment 
                  style={{fontWeight: 'bold'}}
                  calendar={calendarStrings}>{props.date}</Moment>
                  <hr></hr>
                </Card.Text>
        
      
      <Row style={{marginLeft: '8rem'}}>
      <Fab
          variant="extended"
          size="small"
          color="secondary"
          aria-label="add"
          component={RouterLink}
          to={`/events/${props.id}/edit`}
          className={classes.margin}
        >
          Edit
        </Fab>
       <Fab
          variant="extended"
          size="small"
          color="secondary"
          aria-label="add"
          component={RouterLink}
          // to={`/events/${props.id}`}
          className={classes.margin}
          onClick={() => props.onDelete(props.id) }


        >
          Delete
        </Fab>



       {/* <Fab
          variant="extended"
          size="small"
          color="secondary"
          aria-label="add"
          component={RouterLink}
          to={`/events/${props.id}`}
          className={classes.margin}
        >
          {/* <NavigationIcon className={classes.extendedIcon} /> */}
          {/* Details
        </Fab> */} 

      </Row>
      

      {/* <App 
      @@ -39,6 +40,7 @@ const EventCard = (props) => {
                      id = {props.id} /> */}
      </Card.Body>
      </Card>
      </Container>
    </div>
  );
};
   


export default UserEventCard;