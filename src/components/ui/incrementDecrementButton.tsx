'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"

export interface IncrementDecrementModel {
  initialMinValue: number
  initialMaxValue: number
}

export function IncrementDecrementButton(props: IncrementDecrementModel) {
  const [count, setCount] = useState(props.initialMinValue)
  const handleIncrement = () => {
    setCount(count + 1)
  }
  const handleDecrement = () => {
    setCount(count - 1)
  }
  return (
    <div className="flex items-center space-x-4">
      <Button variant="outline"
        className="px-4 py-2 text-sm font-medium"
        disabled={count <= props.initialMinValue}
        onClick={handleDecrement}>
        -
      </Button>
      <div className="text-lg font-medium">
        {count}
      </div>
      <Button variant="outline"
        className="px-4 py-2 text-sm font-medium"
        onClick={handleIncrement}
        value={props.initialMaxValue}
      >
        +
      </Button>
    </div>
  )
}