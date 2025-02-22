import { motion } from 'motion/react'
import './App.css'
import { Plus, X } from 'lucide-react'
import { useState } from 'react';

function App() {
  const [show, setShow] = useState(false);
  const [hideButton, setHideButton] = useState(false);
  const handleClick = () => {
    setShow(!show);
    setHideButton(!hideButton);
  };

  return (
    <>
      <div className="w-full h-screen flex flex-row items-center justify-center bg-[#fefefe]">
        <div className="max-lg:w-[80%] w-[50%] relative flex flex-col items-center justify-center">
          <motion.button 
            animate={{
              opacity: show ? 0 : 1,
              scale: show ? 2 : 1,
              transition: {
                duration: 0.5,
                type: "spring",
                bounce: 0.4,
              },
              display: show ? "none" : "flex",
            }}
            initial={{ opacity: 1, scale: 1 }}
            onClick={() => setShow(!show)}
            className="absolute z-10 bg-[#f0ece6] text-[#908c86] px-12 py-3 rounded-full cursor-pointer">
            <Plus size={35} />
          </motion.button>
          <motion.div 
            animate={{
              opacity: show ? 1 : 0,
              scale: show ? 1 : 0,
              transition:{
                duration: 0.5,
                type: "spring",
                bounce: 0.4
              }
            }}
            initial={{ opacity: 0, scale: 1 }}
            className="absolute z-0 w-full flex flex-col items-center justify-center gap-y-3">
            <motion.button 
              onClick={handleClick}
              className="bg-[#f0ece6] text-[#908c86] px-5 py-3 rounded-full cursor-pointer">
              <X strokeWidth={3} size={28} />
            </motion.button>
            <div className="max-lg:w-[96%] w-[50%] h-fit flex flex-col p-2 border-1 bg-[#fefefe] border-[#908c86] rounded-3xl gap-y-2">
              <div className="w-full flex flex-row items-center justify-start gap-x-3 rounded-3xl cursor-pointer hover:bg-[#f0ece6] hover-div p-2">
                <button className="bg-[#f0ece6] text-[#908c86] w-[2.5rem] h-[2.8rem] flex flex-row items-center justify-center rounded-xl cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="30" viewBox="0 0 48 48"><defs><mask id="ipSAlignTextBothOne0"><g fill="none" stroke-linejoin="round" stroke-width="4"><rect width="36" height="36" x="6" y="6" fill="#fff" stroke="#fff" rx="3"/><path stroke="#000" stroke-linecap="round" d="M34 24H14m20-9H14m20 18H14"/></g></mask></defs><path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSAlignTextBothOne0)"/></svg>
                </button>
                <div className="p-0 space-y-[-0.2rem]">
                  <p className="font-[600] text-lg">Task</p>
                  <p className="font-[100] text-md text-[#908c86]">Create a new task</p>
                </div>
              </div>
              <div className="w-full flex flex-row items-center justify-start gap-x-3 rounded-3xl cursor-pointer hover:bg-[#f0ece6] hover-div p-2">
                <button className="bg-[#f0ece6] text-[#908c86] w-[2.5rem] h-[2.8rem] flex flex-row items-center justify-center rounded-xl cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="28" viewBox="0 0 24 24"><path fill="currentColor" d="M12 22c1.1 0 2-.9 2-2h-4a2 2 0 0 0 2 2m6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-1.29 1.29c-.63.63-.19 1.71.7 1.71h13.17c.89 0 1.34-1.08.71-1.71z"/></svg>
                </button>
                <div className="p-0 space-y-[-0.2rem]">
                  <p className="font-[600] text-lg">Reminder</p>
                  <p className="font-[100] text-md text-[#908c86]">Create reminder with alerts</p>
                </div>
              </div>
              <div className="w-full flex flex-row items-center justify-start gap-x-3 rounded-3xl cursor-pointer hover:bg-[#f0ece6] hover-div p-2">
                <button className="bg-[#f0ece6] text-[#908c86] w-[2.5rem] h-[2.8rem] flex flex-row items-center justify-center rounded-xl cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="28" viewBox="0 0 512 512"><path fill="currentColor" d="M428 224H288a48 48 0 0 1-48-48V36a4 4 0 0 0-4-4h-92a64 64 0 0 0-64 64v320a64 64 0 0 0 64 64h224a64 64 0 0 0 64-64V228a4 4 0 0 0-4-4"/><path fill="currentColor" d="M419.22 188.59L275.41 44.78a2 2 0 0 0-3.41 1.41V176a16 16 0 0 0 16 16h129.81a2 2 0 0 0 1.41-3.41"/></svg>
                </button>
                <div className="p-0 space-y-[-0.2rem]">
                  <p className="font-[600] text-lg">Note</p>
                  <p className="font-[100] text-md text-[#908c86]">Capture ideas on the fly</p>
                </div>
              </div>
              <div className="w-full flex flex-row items-center justify-start gap-x-3 rounded-3xl cursor-pointer hover:bg-[#f0ece6] hover-div p-2">
                <button className="bg-[#f0ece6] text-[#908c86] w-[2.5rem] h-[2.8rem] flex flex-row items-center justify-center rounded-xl cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path fill="currentColor" d="M496 152a56 56 0 0 0-56-56H220.11a23.9 23.9 0 0 1-13.31-4L179 73.41A55.77 55.77 0 0 0 147.89 64H72a56 56 0 0 0-56 56v48a8 8 0 0 0 8 8h464a8 8 0 0 0 8-8ZM16 392a56 56 0 0 0 56 56h368a56 56 0 0 0 56-56V216a8 8 0 0 0-8-8H24a8 8 0 0 0-8 8Z"/></svg>
                </button>
                <div className="p-0 space-y-[-0.2rem]">
                  <p className="font-[600] text-lg">Project</p>
                  <p className="font-[100] text-md text-[#908c86]">Organize better with projects</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default App
