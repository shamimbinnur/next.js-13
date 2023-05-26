import React from "react"

interface ContainerProps {
  children: React.ReactNode
  direction?: 'row' | 'col'
}

const Container: React.FC<ContainerProps> = ({
  children,
  direction = 'col',
}) => {

  return (
    <div className={`flex flex-${direction} p-4 max-w-7xl w-full mx-auto`}>
      {children}
    </div>
  )
}

export default Container