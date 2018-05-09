import * as React from 'react';
import { Container } from 'reactstrap';

class Footer extends React.Component<any, any> {
  render() {
    return (
      <footer
        className={'footer' + (this.props.default ? ' footer-default' : '')}
      >
        <Container fluid={this.props.fluid ? true : false}>
          <div className="copyright">
            &copy; {2018}, Designed and Coded by &nbsp;
            <a
              href="https://github.com/orgs/absa-subatomic"
              target="_blank"
              rel="noopener noreferrer"
            >
              Subatomic
            </a>.
          </div>
        </Container>
      </footer>
    );
  }
}

export default Footer;
