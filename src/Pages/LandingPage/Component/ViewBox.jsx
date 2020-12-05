import React from 'react';
import styled from 'styled-components';

const ViewBox = () => {
  return (
    <Wrap>
      <Container>
        <img src="/images/universe.jpg" alt="우주" />
      </Container>
    </Wrap>
  );
};

export default ViewBox;

const Section = styled.section`
  position: relative;
  width: 100%;
`;

const Container = styled(Section)`
  height: 1024px;
`;

const Wrap = styled(Section)``;

const StyleContainer = styled(Section)`
  overflow: hidden;
`;
