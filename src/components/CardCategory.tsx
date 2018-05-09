import * as React from 'react';

class CardCategory extends React.Component<any, any> {
  render() {
    return <h5 className="card-category">{this.props.children}</h5>;
  }
}

export default CardCategory;
