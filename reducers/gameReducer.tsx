import { Reducer } from 'react'

export const LEVEL_MAX_ENERGY = 1500

export interface PointDisplay {
  x: number
  y: number
  id: number
  value: number
}

export interface GameState {
  points: number
  pointsPerTap: number
  pointDisplays: PointDisplay[]
  currentEnergy: number
  currentTapValue: number
}

export type GameAction =
  | { type: 'TAP'; payload: { x: number; y: number } }
  | { type: 'INCREMENT_POINTS' }
  | { type: 'DECREASE_TAP_VALUE' }
  | { type: 'INCREASE_ENERGY' }
  | { type: 'REMOVE_POINT_DISPLAY'; payload: number }

export const initialState: GameState = {
  points: 324293,
  pointsPerTap: 2,
  pointDisplays: [],
  currentEnergy: 1498,
  currentTapValue: 0,
}

export const gameReducer: Reducer<GameState, GameAction> = (state, action) => {
  switch (action.type) {
    case 'TAP':
      return {
        ...state,
        pointDisplays: [
          ...state.pointDisplays,
          { x: action.payload.x, y: action.payload.y, id: Date.now(), value: state.pointsPerTap },
        ],
        currentTapValue: state.currentTapValue + state.pointsPerTap,
      }
    case 'INCREMENT_POINTS':
      return {
        ...state,
        points: state.points + 1,
        currentEnergy: Math.max(state.currentEnergy - 1, 0),
      }
    case 'DECREASE_TAP_VALUE':
      return {
        ...state,
        currentTapValue: Math.max(state.currentTapValue - 1, 0),
      }
    case 'INCREASE_ENERGY':
      return {
        ...state,
        currentEnergy: Math.min(state.currentEnergy + 1, LEVEL_MAX_ENERGY),
      }
    case 'REMOVE_POINT_DISPLAY':
      return {
        ...state,
        pointDisplays: state.pointDisplays.filter(pd => pd.id !== action.payload),
      }
    default:
      return state
  }
}