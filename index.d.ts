import { PureComponent, CSSProperties } from 'react'

interface ReactMobileCodeInputProps {
  id?: string
  /**
   * default: 4
   * */
  length?: number
  value?: string
  /**
   * default: 'number'
   * */
  inputType?: 'text' | 'number'
  className?: string
  style?: CSSProperties
  onChange?(val: string): void
}
declare class ReactMobileCodeInput extends PureComponent<
  ReactMobileCodeInputProps,
  {}
> {
  static cls: (val?: string | undefined) => string
  get length(): number
  id: string
  genArr(): {
    value: string
  }[]
  render(): JSX.Element
}

export default ReactMobileCodeInput
