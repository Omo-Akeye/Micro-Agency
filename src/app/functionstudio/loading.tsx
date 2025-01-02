import React from 'react'

export default function loading() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-white">
    <div className="flex flex-col items-center gap-2">
      <div className="h-16 w-16 animate-spin rounded-full border-4 border-gray-200 border-t-blue-500"/>
      <h1 className="text-xl font-medium text-gray-700">Function Studio</h1>
    </div>
  </div>
  )
}
