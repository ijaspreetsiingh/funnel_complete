// PortfolioRouter.tsx (or main portfolio page)
import { useSearchParams } from 'react-router-dom';
import Theme1 from './App';
const theme = 2;

export default function PortfolioRouter() {
  const [searchParams] = useSearchParams();
  const theme = searchParams.get('theme');

  if (theme === '1') {
    return <Theme1 />;
  }
  if (theme === '2') {
    return <h1>hii theme 2</h1>;
  }

}
