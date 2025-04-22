import type React from "react"

const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
      <div className="w-8 h-8 bg-black rounded-md flex items-center justify-center mr-2">
        <span className="text-white font-bold text-xs">DB</span>
      </div>
      <span className="font-bold text-lg">DcruzBlog</span>
    </div>
  )
}

export default Logo