import React, { CSSProperties, PureComponent } from 'react'

export interface ReactMobileCodeInputProps {
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

export default class ReactMobileCodeInput extends PureComponent<
  ReactMobileCodeInputProps,
  {}
> {
  static cls = (val?: string) =>
    ['react-mobile-code-input', val].filter(Boolean).join('__')

  get length() {
    return this.props.length || 4
  }

  id = this.props.id || String(Math.random())

  genArr() {
    const { length } = this
    const value = this.props.value || ''
    let arr: { value: string }[] = []
    for (let i = 0; i < length; i++) {
      arr.push({ value: value[i] })
    }
    return arr
  }

  render() {
    return (
      <label
        htmlFor={this.id}
        className={[ReactMobileCodeInput.cls(), this.props.className]
          .filter(Boolean)
          .join(' ')}
        style={this.props.style}
      >
        {this.genArr().map((it, i) => (
          <div className={ReactMobileCodeInput.cls('char')} key={i}>
            {it.value}
          </div>
        ))}
        <input
          id={this.id}
          className={ReactMobileCodeInput.cls('input')}
          type={this.props.inputType || 'number'}
          value={this.props.value || ''}
          onChange={ev => {
            const { length } = this
            if (ev.target.value.length > length)
              ev.target.value = ev.target.value.slice(length)
            this.props.onChange?.(ev.target.value)
          }}
        />
      </label>
    )
  }
}
