import React, { useState, useRef } from "react";
import styled from '@emotion/styled'
import Game from './Game';

const Wrapper = styled('div')`
  margin-top: 40px;
  position: absolute;
  left: 0px;
  overflow-y: hidden;
  width: 100%;
`;

const List = styled('div')`
  padding-left: 45px;
  padding-right: 45px;
  white-space: nowrap;
  overflow-y: hidden;
  width: fit-content;
`;

export interface Props {}

interface IGame {title: string, selected: boolean, ref: any}

export default (props: Props) => {
  const listRef = useRef(null);

  const [games, setGames]: [IGame[], any] = useState([
    {title: "Animal Crossing", selected: true, ref: useRef(null)},
    {title: "Zelda", selected: false, ref: useRef(null)},
    {title: "Mario Kart", selected: false, ref: useRef(null)},
    {title: "Pokemon", selected: false, ref: useRef(null)},
    {title: "Tetris", selected: false, ref: useRef(null)},
    {title: "Overcooked", selected: false, ref: useRef(null)},
    {title: "Devil May Cry", selected: false, ref: useRef(null)},
  ]);

  const select = (title: string) => {
    let selectedGame: IGame = null;

    let ga = games.map(g => {
      if (g.title === title) {
        selectedGame = g;
        return Object.assign({}, g, {selected: true})
      }
      return Object.assign({}, g, {selected: false})}
    );

    if(selectedGame.ref !== null) {
      console.log(selectedGame.ref.current.offsetLeft);
      // listRef.current.scrollLeft = selectedGame.ref.current.offsetLeft - 40;
    }

    setGames(ga);
  }

  console.log('rendered games list');

  return <Wrapper ref={listRef}>
    <List>
      {
        games.map(g => <Game forwardedRef={g.ref} key={g.title} selected={g.selected} title={g.title} onClick={select.bind(undefined, g.title)} />)
      }
    </List>
  </Wrapper>;
}