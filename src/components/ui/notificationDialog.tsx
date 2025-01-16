"use client"

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import { useState } from "react"

interface NotificationDialogProps {
  title: string
  description: string
  values: {
    email: boolean
    sms: boolean
  }
  onChange: (updatedValues: { email: boolean; sms: boolean }) => void
}

export const NotificationDialog: React.FC<NotificationDialogProps> = ({ title, description, values, onChange }) => {
  const [localValues, setLocalValues] = useState(values)

  const handleEmailChange = (checked: boolean) => {
    const updatedValues = { ...localValues, email: checked }
    setLocalValues(updatedValues)
    onChange(updatedValues)
  }

  const handleSmsChange = (checked: boolean) => {
    const updatedValues = { ...localValues, sms: checked }
    setLocalValues(updatedValues)
    onChange(updatedValues)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="link"
          className="underline">
          Edit
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            {title}
          </DialogTitle>
          <DialogDescription>
            {description}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="flex justify-between items-center">
            <Label htmlFor="email"
              className="text-left">
              Email
            </Label>
            <Switch
              checked={localValues.email}
              onCheckedChange={handleEmailChange}
            />
          </div>
          <div className="flex justify-between items-center">
            <Label htmlFor="sms"
              className="text-left">
              SMS
            </Label>
            <Switch
              checked={localValues.sms}
              onCheckedChange={handleSmsChange}
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
