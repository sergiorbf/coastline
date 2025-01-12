'use client'

import { ChangeEvent, ComponentProps, JSX } from "react"
import { useFileInput } from "./root"

export type ControlProps = ComponentProps<'input'>

export function FileInputControl({ multiple = false, ...props }: ControlProps): JSX.Element {
  const { id, onFilesSelected } = useFileInput()

  function handleFilesSelected(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files?.length) {
      return
    }

    const files = Array.from(event.target.files)

    onFilesSelected(files, multiple)
  }

  return (
    <input
      type="file"
      className="sr-only"
      id={id}
      {...props}
      multiple={multiple}
      onChange={handleFilesSelected} />
  )
}