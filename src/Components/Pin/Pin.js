import React from 'react';

import pinShape from '../../helpers/props/pinShape';

class Pin extends React.Component {
  static propTypes = {
    pin: pinShape.pinShape,
  }

  render() {
    const { pin } = this.props;

    return (
      <div className="card bg-dark text-white border-0">
        <img className="card-img" src={pin.imageUrl} alt={pin.title} />
        <div className="card-img-overlay">
          <h5 className="card-title">{pin.title}</h5>
        </div>
      </div>
    );
  }
}

export default Pin;
