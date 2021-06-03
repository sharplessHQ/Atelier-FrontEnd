import React from 'react';
import ReactDOM from 'react-dom';

import RelatedPdt from './RelatedPdt.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          userId: 1,
          username: 'Kingsley'
        },
        {
          userId: 2,
          username: 'Huiqing'
        },
        {
          userId: 3,
          username: 'Simon'
        },
        {
          userId: 4,
          username: 'Andre'
        }
      ]
    }
  }


render() {
  return (
    <div>
      <p>Hello World</p>
      <RelatedPdt users={this.state.users}/>
    </div>
  )
}





}

ReactDOM.render(<App />, document.getElementById('app'));