import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'
import { BaseIcon } from './components/Icon/Icon'
import { Input, InputWithExclamation } from './components/Input'

export function App() {
  const [count, setCount] = useState(0)
  const [inputValue, setInputValue] = useState('')
  const [emailValue, setEmailValue] = useState('')

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} class="logo" alt="Vite logo" />
        </a>
        <a href="https://preactjs.com" target="_blank">
          <img src={preactLogo} class="logo preact" alt="Preact logo" />
        </a>
      </div>
      <h1>Vite + Preact</h1>
      
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '24px', 
        maxWidth: '400px', 
        margin: '20px auto',
        padding: '0 20px'
      }}>
        <h2>Input Component Demo</h2>
        
        <InputWithExclamation
          label="Alert Input with Exclamation Icon"
          placeholder="Enter some text..."
          value={inputValue}
          onInput={(e: Event) => setInputValue((e.target as HTMLInputElement).value)}
          iconVariant="primary"
        />
        
        <Input
          label="Email Address"
          type="email"
          placeholder="example@domain.com"
          value={emailValue}
          onInput={(e: Event) => setEmailValue((e.target as HTMLInputElement).value)}
          required
        />
        
        <Input
          label="Warning Field"
          placeholder="This field has an error state"
          error={true}
          startIcon={true}
          iconVariant="primary"
          required
        />
        
        <Input
          label="Disabled Input"
          placeholder="This input is disabled"
          disabled={true}
          startIcon={true}
        />
        
        <div style={{ marginTop: '20px' }}>
          <p>Input values:</p>
          <ul>
            <li>Alert Input: {inputValue}</li>
            <li>Email: {emailValue}</li>
          </ul>
        </div>
      </div>
      
      <h2>Icon Demo</h2>
      <div class="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/app.tsx</code> and save to test HMR
        </p>
      </div>
      <p>
        Check out{' '}
        <a
          href="https://preactjs.com/guide/v10/getting-started#create-a-vite-powered-preact-app"
          target="_blank"
        >
          create-preact
        </a>
        , the official Preact + Vite starter
      </p>
      <p class="read-the-docs">
        Click on the Vite and Preact logos to learn more
      </p>
      <BaseIcon variant='primary' size='md' iconName='EmptyBattery'/>
    </>
  )
}
