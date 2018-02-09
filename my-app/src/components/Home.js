import React, { Component } from 'react';
import firebase from 'firebase';
import { Link } from 'react-router'

class HomePage extends Component {
  constructor(props) {
      super(props);
       this.state = {
          items: {
  //            id1: {
  //                date: 'October 3',
  //                store: 'Tims',
  //                price: '$5',
  //                description: 'blahhh',
  //                category: 'Entertainment'
  //            }
          }
    }
  }

  render() {

    return (
      <div>
        <h1>Home Page</h1>


        { Object.keys(this.state.items).map((id) => {
          let anItem = this.state.items[id];
            return <div key={ id }>
                {anItem.february.sessions}
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
