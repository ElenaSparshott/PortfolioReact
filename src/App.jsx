import { BrowerRouter } from 'react-router-dom';
import { NotFound } from './pages/NotFound';

function App() {
   return (
    <>
      <BrowerRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </BrowerRouter>
    </>
  )
}

export default App
