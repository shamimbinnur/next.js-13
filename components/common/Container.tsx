import React from "react"

interface ContainerProps {
  children: React.ReactNode
  direction?: 'row' | 'col'
  paddingY?: 4 | 8 | 10 | 12 | 16 | 20 | 24 | 32 | 40 | 48 | 56 | 64
  paddingX?: 4 | 8 | 10 | 12 | 16 | 20 | 24 | 32 | 40 | 48 | 56 | 64
}

const Container: React.FC<ContainerProps> = ({
  children,
  direction = 'col',
  paddingY = 10,
  paddingX = 10
}) => {

  return (
    <div
      style={{
        paddingTop: `${paddingY}px`,
        paddingBottom: `${paddingY}px`,
        paddingLeft: `${paddingX}px`,
        paddingRight: `${paddingX}px`
      }}
      className={`flex flex-${direction} p-10 max-w-7xl w-full mx-auto`}>
        {children}
    </div>
  )
}

export default Container