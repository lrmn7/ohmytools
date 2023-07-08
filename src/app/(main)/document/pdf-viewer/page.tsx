'use client'

import { Viewer, Worker } from '@react-pdf-viewer/core'
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'
import { IconFile } from '@tabler/icons-react'
import React from 'react'
import { useDropzone } from 'react-dropzone'
import toast from 'react-hot-toast'
import '@react-pdf-viewer/core/lib/styles/index.css'
import '@react-pdf-viewer/default-layout/lib/styles/index.css'

import { getExtension } from '@/lib/get-extension'

import Container from '@/components/container'
import Title from '@/components/title'

const PDFViewer = () => {
  const [mounted, setMounted] = React.useState(false)
  const [url, setUrl] = React.useState('')
  const onDrop = (files: File[]) => setUrl(URL.createObjectURL(files[0]))
  const defaultLayoutPluginInstance = defaultLayoutPlugin()

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': [],
    },
    onDropRejected: (files) => {
      files.forEach((file) => {
        toast.error(`${getExtension(file.file.name)} 格式不支援`)
      })
    },
  })

  React.useEffect(() => setMounted(true), [])

  return (
    <Container className='flex max-w-5xl flex-col items-center justify-center'>
      <Title title='PDF Viewer' />

      <div className='my-12 w-full'>
        <div
          {...getRootProps()}
          className='my-12 flex cursor-pointer flex-col items-center gap-2 rounded-lg border-2 border-dashed border-accent-4 px-4 py-6 transition-colors duration-300 hover:bg-accent-1'
        >
          <IconFile size={48} />
          <input {...getInputProps()} />
          <p>Drag and drop PDF here, or click to select a file</p>
        </div>

        {mounted && url && (
          <Worker workerUrl='https://unpkg.com/pdfjs-dist@3.5.141/build/pdf.worker.min.js'>
            <div className='my-20 h-[1000px]'>
              <Viewer
                fileUrl={url}
                theme={'dark'}
                plugins={[defaultLayoutPluginInstance]}
              />
            </div>
          </Worker>
        )}
      </div>
    </Container>
  )
}

export default PDFViewer
