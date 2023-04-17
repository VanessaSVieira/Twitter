import { FormEvent, KeyboardEvent, useState } from "react"
import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"
import './Status.css'
import { PaperPlaneRight } from "phosphor-react"

export function Status() {
  const [newAnswer, setNewAnswer] = useState('')
  const [answers, setAnswers] = useState([
    'Concordo...',
    'Olha, faz sentido!',
    'Parabéns pelo progresso.'
  ])

  function createNewAnswer(event: FormEvent) {
    event.preventDefault()
    setAnswers([newAnswer, ...answers])
    setNewAnswer('')
  }

  function handleHotKeySubmit(event: KeyboardEvent) {
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
      setAnswers([newAnswer, ...answers])
      setNewAnswer('')
    }
  }

    return (
        <main className="status">
        <Header title="Tweet" />

        <Tweet content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis, labore autem quidem minus dolorum aut repudiandae commodi dolore in eum ratione nesciunt modi dolorem ipsum repellat tenetur, voluptates iusto libero."  />

        <Separator />

        <form onSubmit={createNewAnswer} className="answer-tweet-form">
          <label htmlFor="tweet">
            <img src="https://github.com/VanessaSVieira.png" alt="Vanessa Vieira" />
            <textarea 
            id="tweet" 
            placeholder="Tweet your answer"
            value={newAnswer}
            onKeyDown={handleHotKeySubmit}
            onChange={(event) => {
              setNewAnswer(event.target.value)
            }}
            ></textarea>
          </label>

          <button type="submit">
            <PaperPlaneRight />
            <span>Answer</span>
            </button>
        </form>

      {answers.map(answer => {
        return <Tweet key={answer} content={answer} />
      })}

      </main>
    )
}