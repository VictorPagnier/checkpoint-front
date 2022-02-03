import React from 'react';
import { useNavigate } from 'react-router-dom';
import GameDetails from './GameDetails';
import GameForm from '../components/GameForm';

function ModifyGame() {
  const navigate = useNavigate();

  const onBackTohome = () => {
    navigate('/');
  };
  return (
    <>
      <GameDetails />
      <GameForm buttonAction={onBackTohome} />
    </>
  );
}

export default ModifyGame;
