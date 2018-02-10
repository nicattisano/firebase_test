import React, { Component } from 'react';
import firebase from 'firebase';
import { Link } from 'react-router'

class HomePage extends Component {
  constructor(props) {
      super(props);
       this.state = {
          users: {
             user_id: {
                 feb_2018: {
                   sessions : 4,
                   page_views : 5
                 }
             },
             user_id_2: {
                 feb_2018: {
                   sessions : 6,
                   page_views : 7
                 }
             }
          }
    }
  }

  render() {

    return (
      <div>
        <h1>Home Page</h1>


        { Object.keys(this.state.users).map((id) => {
          let aUser = this.state.users[id];
            return <div key={ id }>
                {aUser.feb_2018.sessions}
              </div>
        })}


      </div>
      );
    }

    componentDidMount() {
        const component = this;

           this.firebaseRef = firebase.database().ref('items');
           this.firebaseRef.on('child_added', (dataSnapshot) => {
   //            console.log(dataSnapshot.key, dataSnapshot.val());
               const items = this.state.items;

               const id = dataSnapshot.key;
               items[id] = dataSnapshot.val();

               this.setState({ items:items });
           });

    }

}

export default HomePage;
