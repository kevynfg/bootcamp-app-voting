import React from 'react';
//import FlipMove from 'react-flip-move';
import Candidate from './Candidate';
import Card from './Card';

export default function Candidates({
  candidates,
  previousVotes,
  previousPercentages,
}) {
  return (
    /* a função map também passa index
    uso o index +1 para passar a posição 1 invés de 0
    pela prop */
    <div>
      {candidates.map((candidate, index) => {
        const { id } = candidate;

        const previousVoteObject = previousVotes.find((item) => item.id === id);

        const previousVote = !!previousVoteObject
          ? previousVoteObject.votes
          : 0;

        const previousPercentageObject = previousPercentages.find(
          (item) => item.id === id
        );
        const previousPercentage = !!previousPercentageObject
          ? previousPercentageObject.percentage
          : 0;

        return (
          <Card key={id}>
            <Candidate
              previousVote={previousVote}
              previousPercentage={previousPercentage}
              candidate={candidate}
              position={index + 1}
            />
          </Card>
        );
      })}
      ;
    </div>
  );
}
