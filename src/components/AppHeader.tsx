
import React, { FunctionComponent } from 'react'; // we need this to make JSX compile

interface AppHeaderProps {
  title: string
}

export const AppHeader: FunctionComponent<AppHeaderProps> = ({ title}) => {
  return (
    <div className="Column">
      {
        title.split(', ').map((word, index) => <h1 className="App-header" key={`${word}-${index}`}>{word}</h1>)
      }
    </div>
  )
}
