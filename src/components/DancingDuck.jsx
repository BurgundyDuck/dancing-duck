import { useState, useEffect } from 'react'
import duckSvg from '../assets/images/duck.svg'
import './DancingDuck.css'

function DancingDuck() {
  const [isPlaying, setIsPlaying] = useState(true)

  const toggleAnimation = () => {
    setIsPlaying(!isPlaying)
  }

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.code === 'Space') {
        event.preventDefault()
        toggleAnimation()
      }
    }

    window.addEventListener('keydown', handleKeyPress)

    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [isPlaying])

  return (
    <div className="dancing-duck-container">
      <div
        className={`duck ${isPlaying ? 'dancing' : 'paused'}`}
        onClick={toggleAnimation}
        role="button"
        tabIndex={0}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            toggleAnimation()
          }
        }}
        aria-label={isPlaying ? '애니메이션 정지' : '애니메이션 재생'}
      >
        <img src={duckSvg} alt="Dancing Duck" />
      </div>
      <button
        className="control-button"
        onClick={toggleAnimation}
        aria-pressed={isPlaying}
      >
        {isPlaying ? '⏸️ 정지' : '▶️ 재생'}
      </button>
      <p className="instruction-text">
        클릭하거나 스페이스바를 눌러 애니메이션을 제어하세요
      </p>
    </div>
  )
}

export default DancingDuck
