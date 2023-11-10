var saidaSaldo = document.getElementById("saldo");
var saidaExtrato = document.getElementById("extato");
var valorHTML = document.getElementById("valor");


var poupanca = {
    saldo: 0,
    movimentacao: [],

    depositar: function() {
        this.saldo += Number(valorHTML.value);
        saidaSaldo.innerHTML = this.saldo; 
    },
    sacar: function() {
        
    },
    exibirExtrato: function() {
       
    }
    
}

import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Example />
    </QueryClientProvider>
  )
}

function Example() {
  const { isPending, error, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      fetch('https://api.github.com/repos/TanStack/query').then(
        (res) => res.json(),
      ),
  })

  if (isPending) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <strong>👀 {data.subscribers_count}</strong>{' '}
      <strong>✨ {data.stargazers_count}</strong>{' '}
      <strong>🍴 {data.forks_count}</strong>
    </div>
  )
}