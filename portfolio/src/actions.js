import { useDispatch } from "react-redux";

const PLAY_OR_PAUSE = 0;

export function ToPlay(play) {
    return {
      type: 'PLAY_OR_PAUSE',
      play,
    }
  }

  const defaultState = [
    {
      name: 'pause',
      views: 1,
    }
  ];

  function paused(state=defaultState, action) {
    return state;
  }