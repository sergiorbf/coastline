'use client'

import { ComponentProps, createContext, useContext, useId, useState } from "react"

export type RootProps = ComponentProps<'div'>

type FileInputContextType = {
  id: string
  files: File[]
  onFilesSelected: (files: File[], multiple: boolean) => void
}

const fileInputContext = createContext({} as FileInputContextType)

export function FileInputRoot(props: RootProps) {
  const id = useId()
  const [files, setFiles] = useState<File[]>([])

  function onFilesSelected(files: File[], multiple: boolean) {
    if (multiple) {
      setFiles((state) => [...state, ...files])
    }
    else {
      setFiles(files)
    }
  }

  return (
    <fileInputContext.Provider value={{ id, files, onFilesSelected }}>
      <div {...props} />
    </fileInputContext.Provider>
  )
}

export const useFileInput = () => useContext(fileInputContext)