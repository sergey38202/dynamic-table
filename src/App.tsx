import Table from './components/Table';
import Header from './components/Header';
import { ProductProvider } from './Context/productContext';
import { TABLE_HEADERS } from './constants/tableHeaders';

import './App.css';

function App() {
  return (
    <ProductProvider>
      <div className="p-[25px]">
      <Header />
      <Table headers={TABLE_HEADERS} />
    </div>
    </ProductProvider>
  );
}

export default App;
