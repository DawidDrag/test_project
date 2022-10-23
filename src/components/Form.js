import React from 'react'
import { ButtonSendContext } from './Context'

const Form = () => {
  return (
    <div className={'add__panel'}>
      <ButtonSendContext.Consumer>
        {(context) => {
          return (
            <form onSubmit={context}>
              <input
                type={'text'}
                placeholder={'Nazwa zadania'}
              />
              <input
                type={'text'}
                placeholder={'Imię i nazwisko'}
              />
              <input type={'submit'} />
            </form>
          )
        }}
      </ButtonSendContext.Consumer>
    </div>
  )
}

export default Form
