import React, { Component } from 'react';

class Comment extends React.PureComponent {
  constructor(props){
    super(props)
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleDelete(){
    this.props.delete(this.props.id);
  }

  render() {
    return (
      <div>
        <p>
          {
            <i
              className="fa fa-times text-danger mr-2"
              onClick={this.handleDelete}
            />
          }

          {this.props.text}
        </p>
      </div>
    );
  }
}

export default Comment;