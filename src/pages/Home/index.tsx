import { Box, Stack, Text } from '@chakra-ui/core'
import { useObserver } from 'mobx-react-lite'
import React from 'react'
import { useStore } from '../../hooks/useStore'
import { AddExerciseButton } from './AddExerciseButton'
import { ExerciseChoice } from './ExerciseChoice'
import { ExerciseTimeChoice } from './ExerciseTimeChoice'
import { RecoveryTimeChoice } from './RecoveryTimeChoice'
import { RoundBox } from './RoundBox'
import { RoundChoice } from './RoundChoice'
import { TimerActions } from './TimerActions'

export const Home: React.FC = () => {
  const store = useStore()

  return useObserver(() => (
    <Stack as='main' maxWidth='800px' mx='auto' p='4'>
      <Text fontSize='2em'>Create your timer</Text>
      <Box>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            store.addExercise()
          }}
        >
          <ExerciseChoice />
          <ExerciseTimeChoice />
          <RecoveryTimeChoice />
          <RoundChoice />
          <AddExerciseButton />
        </form>
        <Box mt='2'>
          {[...store.rounds.keys()].map((roundId) => (
            <RoundBox
              key={`round-${roundId}`}
              round={store.rounds.get(roundId)!}
            />
          ))}
        </Box>
        <TimerActions />
      </Box>
    </Stack>
  ))
}
