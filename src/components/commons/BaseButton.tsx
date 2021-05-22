import { css } from '@emotion/react'
import { MouseEventHandler } from 'react'

type Props = {
  children: React.ReactChild
  onClick: MouseEventHandler<HTMLButtonElement>
}

const BaseButton: React.VFC<Props> = ({ children, onClick }) => {
  return (
    <button css={baseButtonStyle} onClick={onClick}>
      {children}
    </button>
  )
}

const baseButtonStyle = css({
  backgroundColor: 'turquoise',
})

export default BaseButton
