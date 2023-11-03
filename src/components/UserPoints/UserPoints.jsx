import { PointsWrapper } from './UserPoints.styled';

const UserPoints = ({ points }) => {
  return (
    <PointsWrapper>
      <span>{points}</span>
      <p>Points</p>
    </PointsWrapper>
  );
};

export default UserPoints;
