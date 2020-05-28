import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CreateIcon from '@material-ui/icons/Create';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Button from '@material-ui/core/Button';
import Topbar from '../navbar/Topbar';
import NewTrip from './newTrip';
import './trip.css'

export default class Trip extends Component {
  render() {
    const goToChat = () => {
      this.props.history.push('/home/chat');
    };
    const goToImage = () => {
      this.props.history.push('/home/image');
    };
    const goToReceipt = () => {
      this.props.history.push('/home/receipt');
    };

    return (
      <div className="gradientHome">
      <div className="tripContainer" >
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          className="tripContainer-header"
        >
          <Typography variant="subtitle1" gutterBottom className="" style={{color: 'white', textAlign: 'center'}}>
            <h2>Welcome, {this.props.currentUser.displayName}, click New trip if you want to
            create a new trip with friends, or if you already have a group,
            click Join trip.</h2>
          </Typography>
        </Grid>
        <Grid
          container
          direction="column"
          justify="space-evenly"
          alignItems="center"
          className="tripContainer-btns"
        >
         <NewTrip  user={this.props.currentUser}/>
   
          <Button
            style ={{backgroundColor:'#2769a7', color: "white"}}
            variant="contained"
            color="default"
            size="small"
            // className={classes.button}
            startIcon={<AddCircleOutlineIcon />}
            // onClick={() => this.handleSubmit(this.state.imageUrl)}
          >
            Join trip
          </Button>
        </Grid>
        </div>
      </div>
    );
  }
}
