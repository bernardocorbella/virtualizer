import React from "react";
import styled from "styled-components";
import loremIpsum from "lorem-ipsum";
import { List } from "react-virtualized";

const Section = styled.section``;
const StyledItem = styled.li``;
const StyledAvatar = styled.div``;
const StyledContent = styled.div``;

const ROW_COUNT = 1000;

const LIST_HEIGHT = 600;
const ROW_HEIGHT = 50;
const ROW_WIDTH = 800;

const LIST = Array(ROW_COUNT)
  .fill()
  .map((val, idx) => {
    return {
      id: idx,
      name: "John Doe",
      image: "http://via.placeholder.com/40",
      text: loremIpsum({
        count: 1,
        units: "sentences",
        sentenceLowerBound: 4,
        sentenceUpperBound: 8
      })
    };
  });

const renderListItem = ({ index, key }) => {
  const item = LIST[index];

  return (
    <StyledItem key={key}>
      <StyledAvatar>
        <img src={item.image} alt={item.name} />
      </StyledAvatar>
      <StyledContent>
        <p>{item.name}</p>
        <p>{item.text}</p>
      </StyledContent>
    </StyledItem>
  );
};

const InfiniteList = () => {
  return (
    <Section>
      <List
        width={ROW_WIDTH}
        height={LIST_HEIGHT}
        rowHeight={ROW_HEIGHT}
        rowRenderer={renderListItem}
        rowCount={LIST.length}
      />
    </Section>
  );
};

export default InfiniteList;
