import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import  store from './redux/store.jsx'; // adjust path if needed

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
      <Provider store={store}>
      <App />
        </Provider>
    </BrowserRouter>
,
)

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <BrowserRouter>
//       <Provider store={store}>
//       <App />
//         </Provider>
//     </BrowserRouter>
//   </StrictMode>,
// )
