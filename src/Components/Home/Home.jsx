import React, { Component } from 'react';
import Navbar from '../navbar/Navbar';
import Topbar from '../navbar/Topbar';
import ChatIcon from '@material-ui/icons/QuestionAnswer';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  goToGroups = () => {
    console.log('run');
    this.props.history.push('/groups');
  };

  printGroups = () => {
    return this.props.currentUser.trackStock.map((ele) => {
      return (
        <div>
          <Link to={`/chat/${ele}`}>go to chat {ele}</Link>
        </div>
      );
    });
  };

  render() {
    //LOG OUT FUNCTION HANDLER
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
      <div>
        <Topbar />
        <h1
          style={{
            textAlign: 'center',
            color: '#0095ff',
            textShadow: '2px 2px #b5bbbd',
          }}
        >
          Welcome, {this.props.currentUser.displayName}
        </h1>
        <div>
          <h2>Groups</h2>
          <Link to="/">
            <p>Start a group</p>
          </Link>
        </div>
        <hr />
        <div>
          <ChatIcon />
          <button onClick={goToChat}>My chat</button>
          <button onClick={this.goToGroups}>My groups</button>
          <button onClick={goToReceipt}>Receipts</button>
          <button onClick={goToImage}>Images</button>
          {this.printGroups()}
        </div>
        <hr />
        <Navbar />
      </div>
    );
  }
}
