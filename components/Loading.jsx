import React from 'react'
import {Spinner} from '@chakra-ui/react'

const Loading = () => (
  <div className='w-screen h-screen flex flex-col items-center justify-center'>
    <Spinner
      thickness='4px'
      speed='0.65s'
      emptyColor='gray.200'
      color='blue.500'
      size='xl'
    />
    <span className='text-white pt-[15px] text-[18px] font-semibold'>Loading</span>
  </div>
)

export default Loading