'use client'
import { useStore, ButtonType } from './Stord'

export const SwichResult = () => {
  const { activeButtonType, setActiveButtonType } = useStore()

  const handleClick = (type: ButtonType) => {
    setActiveButtonType(type)
  }

  return (
    <div className='flex gap-2'>
      <button 
        className={`btn btn-sm ${activeButtonType === 'request' ? 'btn-info' : 'btn-ghost'}`}
        onClick={() => handleClick('request')}
      >
        Request
      </button>
      <button 
        className={`btn btn-sm ${activeButtonType === 'response' ? 'btn-info' : 'btn-ghost'}`}
        onClick={() => handleClick('response')}
      >
        Response
      </button>
    </div>
  )
}