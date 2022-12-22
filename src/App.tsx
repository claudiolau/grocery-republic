import './App.scss'
import { Card } from './components/card'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient()

export default function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <div className="App">
                <Card />

                <ReactQueryDevtools initialIsOpen={false} />
            </div>
        </QueryClientProvider>
    )
}
