import { useQuiz } from '../contexts/QuizContext'

function FinishScreen() {
  const { points, maxPossiblePoints, highscore, dispatch } = useQuiz()

  const percentage = (points / maxPossiblePoints) * 100

  let emoji
  switch (true) {
    case percentage === 100:
      emoji = '🥇'
      break
    case percentage >= 80 && percentage < 100:
      emoji = '🎉'
      break
    case percentage >= 50 && percentage < 80:
      emoji = '😊'
      break
    case percentage >= 0 && percentage < 50:
      emoji = '☹️'
      break
    case percentage === 0:
      emoji = '🪦'
      break
    default:
  }

  return (
    <>
      <p className="result">
        {emoji} You scored <strong>{points}</strong> out of {maxPossiblePoints}{' '}
        ({Math.ceil(percentage)}%)
      </p>

      <p className="highscore">(Highscore: {highscore} points)</p>

      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: 'restart' })}
      >
        Restart quiz
      </button>
    </>
  )
}

export default FinishScreen
