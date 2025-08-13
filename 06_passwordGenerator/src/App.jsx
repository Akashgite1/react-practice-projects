import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [speacialCharacterAllowed, setSpecialCharacterAllowed] = useState(false);
  const [password, setPassword] = useState('');

  //! use of ref hook use for getting reference of the input element
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) str += "0123456789"
    if (characterAllowed) str += "!@#$%^&*()_+[]{}|;:,.<>?/~`"

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);

  }, [length, numberAllowed, characterAllowed])

  const CopyPasswordToClipboard = useCallback(() => {
    // Select the password input field 
    passwordRef.current?.select();
    
    // only select the set of values in the password filed
    passwordRef.current?.setSelectionRange(0, 9); // For mobile devices

    // Copy the password to clipboard 
    window.navigator.clipboard.writeText(password)
  },
  [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, characterAllowed, passwordGenerator]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800 ">
        <h1 className=" text-center text-white">Password Generator </h1>
        <div className="bg-white flex shadow rounded-lg overflow-hidden mb-4 ">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly
            ref={passwordRef} // reference passed for reference hook
          />
          <button onClick={CopyPasswordToClipboard}
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 ">copy</button>
        </div>

        <div className="flex text-sm gap-x-1 text-gray-500">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={20}
              value={length}
              className='cursor-pointer'
              onChange={(e) => setLength(e.target.value)}
            />
            <label>Length: {length}</label>
          </div>

          <div className="flex items-center gap-x-2 my-4">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id='numberInput'
              onChange={() => setNumberAllowed((prev) => !prev)}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>

          <div className="flex items-center gap-x-2 mr-15px my-4">
            <input
              type="checkbox"
              defaultChecked={characterAllowed}
              id='CharacterInput'
              onChange={() => setCharacterAllowed((prev) => !prev)}
            />
            <label htmlFor="CharacterInput">Character</label>
          </div>

        </div>
      </div >
    </>
  )
}

export default App
