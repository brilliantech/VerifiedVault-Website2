"use client"

import { Play } from "lucide-react"
import { useState } from "react"

interface VideoPreviewProps {
  title: string
  duration: string
  thumbnail?: string
}

export function VideoPreview({ title, duration }: VideoPreviewProps) {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div className="relative group cursor-pointer" onClick={() => setIsPlaying(true)}>
      <div className="relative aspect-video bg-gradient-to-br from-blue-900 to-indigo-900 rounded-xl overflow-hidden shadow-xl">
        {/* Thumbnail */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
              <Play className="w-10 h-10 text-white ml-1" />
            </div>
            <div className="text-white font-semibold text-lg mb-2">{title}</div>
            <div className="text-blue-200 text-sm">{duration}</div>
          </div>
        </div>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
      </div>
      
      {/* Video Modal */}
      {isPlaying && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4" onClick={() => setIsPlaying(false)}>
          <div className="relative w-full max-w-4xl aspect-video bg-gray-900 rounded-xl">
            <div className="absolute inset-0 flex items-center justify-center text-white">
              Video Player Placeholder
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
