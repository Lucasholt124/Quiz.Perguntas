import { useContext, useEffect } from 'react';
import { QuizContext } from './context/quiz';

import Welcome from './components/Welcome';
import Question from './components/Question';
import GamerOver from './components/GemeOver';
import PickCategory from './components/PickCategory';


import './App.css';

function App() {
  const [quizState, dispatch] = useContext(QuizContext);

  useEffect(() => {
    dispatch({type: "REORDER_QUESTIONS"})
  }, [])



  return (
    <div className='App'>
      <h1>Quiz de Programação</h1>
      {quizState.gameStage === "Start" && <Welcome />}
      {quizState.gameStage === "Category" && <PickCategory />}
      {quizState.gameStage === "Playing" && <Question />}
      {quizState.gameStage === "End" && <GamerOver />}
    </div>
  )

 
}

export default App
