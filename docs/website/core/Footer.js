/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl (doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + 'docs/' + (language ? language + '/' : '') + doc;
  }

  pageUrl (doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? language + '/' : '') + doc;
  }

  render () {
    const currentYear = new Date().getFullYear();
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="66"
                height="58"
              />
            )}
          </a>
          <div>
            <h5>Docs</h5>
            <a href="/docs/start.html">
              Guides
            </a>
            <a href="/docs/apis.html">
              Reference
            </a>
          </div>
          {/* <div>
            <h5>Community</h5>
            <a
              href="https://stackoverflow.com/search?q=open+zeppelin/"
              target="_blank">
              Stack Overflow
            </a>
            <a href="https://slack.openzeppelin.org/" target="_blank">
              Chat on Slack
            </a>
          </div> */}
          <div>
            <h5>More</h5>
            <a href="https://openzeppelin.org">Main Site</a>
            <a href="https://github.com/openzeppelin">GitHub</a>
          </div>
        </section>

        <a
          href="https://openzeppelin.org"
          target="_blank"
          className="fbOpenSource">
          <img
            src={this.props.config.baseUrl + 'img/logo.svg'}
            alt="OpenZeppelin"
            width="170"
            height="45"
          />
        </a>
        <section className="copyright">
          Started and sponsored by <a href="https://zeppelin.solutions">Zeppelin</a>
        </section>
      </footer>
    );
  }
}

module.exports = Footer;
