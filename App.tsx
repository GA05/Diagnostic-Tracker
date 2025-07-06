
import React, { useState } from 'react';
import Header from './components/Header';
import TicketTable from './components/TicketTable';
import Dashboard from './components/Dashboard';
import { useTickets } from './hooks/useTickets';
import { View } from './types';

const App: React.FC = () => {
  const [view, setView] = useState<View>('tracker');
  const { tickets, addTicket, updateTicket, deleteTicket } = useTickets();

  return (
    <div className="min-h-screen bg-gray-950 font-sans">
      <Header currentView={view} setView={setView} />
      <main className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
        {view === 'tracker' ? (
          <TicketTable 
            tickets={tickets} 
            addTicket={addTicket}
            updateTicket={updateTicket} 
            deleteTicket={deleteTicket} 
          />
        ) : (
          <Dashboard tickets={tickets} />
        )}
      </main>
    </div>
  );
};

export default App;
