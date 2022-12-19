import { useEffect, useState } from 'react'
import * as Progress from '@radix-ui/react-progress'

import { Container } from './style'

type Props = {
  label: string
  closeProgress: boolean
  progress: number
}

const ProgressDemo = ({ label, closeProgress, progress }: Props) => {
  return (
    <Container className='ProgressContainer' closeProgress={closeProgress}>
      <Progress.Root className="ProgressRoot" value={100}>
        <Progress.Indicator
          className="ProgressIndicator"
          style={{ transform: `translateX(-${100 - progress}%` }}
        />
        
        <div className="ProgressLabelContainer">
          { label }
        </div>
      </Progress.Root>

    </Container>
  )
}

export default ProgressDemo