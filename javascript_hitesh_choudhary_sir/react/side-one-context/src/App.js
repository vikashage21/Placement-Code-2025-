import React, { Fragment } from 'react'
import Provider from './provider.js';
import Context from './context.js'

const Agents = () => {
  return <AgentOne />
}

const AgentOne = () => {
  return <AgentTwo />

}

const AgentTwo = () => {
  return <AgentBond />

}
const AgentBond = () => {
  return (
    <Context.Consumer>
      {
        (context) => (
          <Fragment>
            <h3>
              Agent information
            </h3>

            <p>
              mission name :{
                context.data.mname
              }
            </p>
            <h2>
              mission status:
              {
                context.data.accept
              }
              <button onClick={context.isMissionAccepted}>click on me</button>

            </h2>
          </Fragment>

        )
      }

    </Context.Consumer>

  )

}

function App() {
  return (
    <div>

      <h1>
        context api
      </h1>

      <Provider>
        <Agents />
      </Provider>

    </div>
  )
}

export default App
