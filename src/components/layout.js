import React from 'react';
import PropTypes from 'prop-types';
import { graphql, StaticQuery, Link } from 'gatsby';
import styled from '@emotion/styled';
import { ThemeProvider } from 'emotion-theming';
import theme from '../style/theme';
import "../style/index.css";

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <ThemeProvider theme={theme}>
        <Container>
          <NavigationRow>
            <Link to="/about">About</Link>
          </NavigationRow>
          {children}
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </Container>
      </ThemeProvider>
    )}
  />
);

const Container = styled.main`
  width: 100vw;
`;

const NavigationRow = styled.div`
  width: 100vw;
  height: 5vh;
  position: absolute;
`;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;