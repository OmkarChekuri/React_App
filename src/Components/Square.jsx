import React from 'react';
//toda:  print the button content after i click the button.
class Square extends React.Component {
    render() {
      return (
        <button className="square" onClick = {function()
        {console.log('clicked')}}>
          {this.props.value}
        </button>
      );
    }
  }


export default Square;