import { BrowerRouter } from 'react-router-dom';

function App() {
   return (
    <>
      <BrowerRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" />
        </Routes>
      </BrowerRouter>
    </>
  )
}

export default App
