'use client'

import { Textarea } from '@tszhong0411/ui'
import React from 'react'

import Container from '@/components/container'
import Title from '@/components/title'

const WordCounter = () => {
  const [value, setValue] = React.useState('')
  const words = value.match(/\S+/g)?.length || 0
  const chars = value.length || 0
  const charsWithoutSpaces = value.replace(/ /g, '').length || 0
  const paragraphs =
    value.split('\n').filter((paragraph) => paragraph !== '').length || 0

  return (
    <Container className='flex max-w-5xl flex-col items-center justify-center'>
      <Title title='Word Counter' />

      <div className='my-12 grid w-full grid-cols-2 gap-2 sm:grid-cols-4'>
        <div className='h-24 w-full rounded-lg border border-accent-2 p-3'>
          <div className='text-2xl font-bold'>{words}</div>
          <div className='text-xs font-bold text-accent-6'>words</div>
        </div>
        <div className='h-24 w-full rounded-lg border border-accent-2 p-3'>
          <div className='text-2xl font-bold'>{chars}</div>
          <div className='text-xs font-bold text-accent-6'>characters</div>
        </div>
        <div className='h-24 w-full rounded-lg border border-accent-2 p-3'>
          <div className='text-2xl font-bold'>{charsWithoutSpaces}</div>
          <div className='text-xs font-bold text-accent-6'>
            characters without spaces
          </div>
        </div>
        <div className='h-24 w-full rounded-lg border border-accent-2 p-3'>
          <div className='text-2xl font-bold'>{paragraphs}</div>
          <div className='text-xs font-bold text-accent-6'>paragraphs</div>
        </div>
      </div>

      <Textarea
        placeholder='Type here ...'
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </Container>
  )
}

export default WordCounter
