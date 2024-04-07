/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import theme from '@/theme';

const clientsStyles = css`
  width: 90%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0;
  text-align: justify;
  color: ${theme.colors.white};

  & > div {
    margin: 100px 0;
  }
`;

const Clients = () => {
  return (
    <div css={clientsStyles}>
      <br/><br/>
      <div id="section-clients">
        <h3>Testimonials/Recommendations</h3><br/>
        <p>Testimonials or recommendations from colleagues, clients, or employers can provide valuable third-party perspectives on the developer's technical abilities, work ethic, and teamwork skills.</p>
      </div>
    </div>
  );
};

export default Clients;
