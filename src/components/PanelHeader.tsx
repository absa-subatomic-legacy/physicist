import * as React from 'react';

class PanelHeader extends React.Component<any, any> {
  render() {
    return (
      <div
        className={
          'panel-header ' +
          (this.props.size !== undefined
            ? 'panel-header-' + this.props.size
            : '')
        }
      >
        {this.props.content}
      </div>
    );
  }
}

export default PanelHeader;
