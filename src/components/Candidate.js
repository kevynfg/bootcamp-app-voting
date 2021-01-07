import React from 'react';
import Info from './Info';
import Name from './Name';
import Percentage from './Percentage';
import Picture from './Picture';
import Popularity from './Popularity';
import Position from './Position';
import Votes from './Votes';
import css from './candidate.module.css';

export default function Candidate({
  previousPercentage,
  previousVote,
  candidate,
  position,
}) {
  const { id, name, votes, percentage, popularity } = candidate;
  return (
    <div className={css.flexRow}>
      <Position>{position}</Position>
      <Picture imageSource={`${id}.jpg`} />
      <Info>
        <Name>{name}</Name>
        <Votes value={votes} previous={previousVote} />
        <Percentage value={percentage} previous={previousPercentage}>
          {percentage}
        </Percentage>
        <Popularity value={popularity} />
      </Info>
    </div>
  );
}
