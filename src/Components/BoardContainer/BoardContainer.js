import React from 'react';
import PropTypes from 'prop-types';

import Board from '../Board/Board';
import BoardForm from '../BoardFoarm/BoardForm';

import authData from '../../helpers/data/authData';
import boardsData from '../../helpers/data/boardsData';
import smashData from '../../helpers/data/smashData';

class BoardContainer extends React.Component {
  static propTypes = {
    setSingleBoard: PropTypes.func.isRequired,
  }

  state = {
    boards: [],
    formOpen: false,
    editBoard: {},
  }

  getBoards = () => {
    boardsData.getBoardsByUid(authData.getUid())
      .then((boards) => this.setState({ boards }))
      .catch((err) => console.error('get boards broke!!', err));
  };

  editABoard = (boardToEdit) => {
    this.setState({ formOpen: true, editBoard: boardToEdit });
  }

  updateBoard = (boardId, editedBoard) => {
    boardsData.updateBoard(boardId, editedBoard)
      .then(() => {
        this.getBoards();
        this.setState({ formOpen: false, editBoard: {} });
      })
      .catch((err) => console.error('Update Board Borked', err));
  }

  createBoard = (newBoard) => {
    boardsData.createBoard(newBoard)
      .then(() => {
        this.getBoards();
        this.setState({ formOpen: false });
      })
      .catch((err) => console.error('Create Board Broke', err));
  }

  componentDidMount() {
    this.getBoards();
  }

  deletBoard = (boardId) => {
    smashData.totallyRemoveBoard(boardId)
      .then(() => this.getBoards())
      .catch((err) => console.error(err));
  }

  render() {
    const { boards, formOpen, editBoard } = this.state;
    const { setSingleBoard } = this.props;

    const boardCard = boards.map((board) => <Board key={board.id} board={board} setSingleBoard={setSingleBoard} deleteBoard={this.deletBoard} editABoard={this.editABoard}/>);

    return (
      <div>
        <button className="btn btn-warning" onClick={() => { this.setState({ formOpen: !formOpen }); }}><i className="far fa-plus-square"></i></button>
        { formOpen ? <BoardForm createBoard={this.createBoard} boardThatIAmEditing={editBoard} updateBoard={this.updateBoard}/> : '' }
        <div className="card-columns">
          {boardCard}
        </div>
      </div>
    );
  }
}

export default BoardContainer;
