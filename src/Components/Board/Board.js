import React from 'react';

import boardShape from '../../helpers/props/boardShape';

class Board extends React.Component {
  static propTypes = {
    board: boardShape.boardShape,
  }

  render() {
    const { board } = this.props;

    return (
      <div className="card text-center">
        <div className="card-header"><h5>{board.name}</h5></div>
        <div className="card-body">
          <p className="card-title">{board.description}</p>
          <p className="card-text">
            <i className={board.faClassName}></i>
            <i className={board.faClassName}></i>
            <i className={board.faClassName}></i>
            <i className={board.faClassName}></i>
            <i className={board.faClassName}></i>
          </p>
          <button className="btn btn-secondary">View Board Details</button>
        </div>
        <div className="card-footer text-muted">2 days ago</div>
      </div>
    );
  }
}

export default Board;
