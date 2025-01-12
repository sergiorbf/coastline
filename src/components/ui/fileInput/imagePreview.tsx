'use client'

import { User } from "lucide-react";
import { useFileInput } from "./root";
import { useMemo } from "react";
import Image from "next/image";

export function FileInputImagePreview() {
  const { files } = useFileInput()

  const previewUrl = useMemo(() => {
    if (files.length === 0) {
      return null
    }

    return URL.createObjectURL(files[0])
  }, [files])

  if (previewUrl === null) {
    return (
      <div className="flex h-16 w-16 items-center justify-center rounded-full">
        <User className="w-8 h-8" />
      </div>
    )
  }
  else {
    return (
      <Image
        src={previewUrl}
        alt=""
        width={8}
        height={8}
        className="h-16 w-16 rounded-full object-cover" />
    )
  }


}