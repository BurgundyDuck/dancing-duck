import './styles/global.css'
import './App.css'
import DancingDuck from './components/DancingDuck'

function App() {
  return (
    <div className="app">
      <h1>Dancing Duck</h1>
      <p>오리 댄싱 애니메이션</p>
      <DancingDuck />
    </div>
  )
}

export default App
